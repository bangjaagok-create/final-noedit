// netlify/functions/send-telegram.js

export async function handler(event) {
  // Hanya izinkan POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Only POST" })
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const message = body.message || "No message";

    // Cek TOKEN dulu, biar jelas kalau lupa isi env
    if (!process.env.TELEGRAM_BOT_TOKEN) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Missing TELEGRAM_BOT_TOKEN" })
      };
    }

    // Ambil daftar chat:
    // - kalau body.chatId ada → pakai itu
    // - kalau tidak → pakai TELEGRAM_ALLOWED_CHATS dari env
    const chatIdsRaw = body.chatId || process.env.TELEGRAM_ALLOWED_CHATS;

    if (!chatIdsRaw) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Missing TELEGRAM_ALLOWED_CHATS" })
      };
    }

    // Pisah dengan koma → jadi array
    const chatIds = chatIdsRaw
      .split(",")
      .map(id => id.trim())
      .filter(Boolean); // buang string kosong

    if (chatIds.length === 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "No valid chatId(s) found" })
      };
    }

    const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    // Kirim ke semua chat ID sekaligus
    const results = await Promise.all(
      chatIds.map(chatId =>
        fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: body.parseMode || "HTML",
            disable_web_page_preview: true
          })
        }).then(r => r.json())
      )
    );

    // Ambil message_id kalau mau dipakai nanti
    const messageIds = results
      .map(r => r?.result?.message_id)
      .filter(id => typeof id === "number");

    return {
      statusCode: 200,
      body: JSON.stringify({
        ok: true,
        results,
        messageIds
      })
    };

  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
}
