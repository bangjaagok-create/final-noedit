// netlify/functions/send-telegram.js

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Only POST" }) };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const message = body.message || "No message";

    // Ambil TELEGRAM_ALLOWED_CHATS → pisahkan dengan koma
    const chatIdsRaw = body.chatId || process.env.TELEGRAM_ALLOWED_CHATS;
    const chatIds = chatIdsRaw.split(",").map(id => id.trim());

    if (!process.env.TELEGRAM_BOT_TOKEN) {
      return { statusCode: 500, body: JSON.stringify({ error: "Missing TELEGRAM_BOT_TOKEN" }) };
    }

    if (chatIds.length === 0) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing chatId(s)" }) };
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

    return { statusCode: 200, body: JSON.stringify({ ok: true, results }) };

  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}
