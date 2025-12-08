// netlify/functions/delete-telegram.js

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Only POST" }) };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const messageId = body.messageId || body.message_id;

    if (!process.env.TELEGRAM_BOT_TOKEN) {
      return { statusCode: 500, body: JSON.stringify({ error: "Missing TELEGRAM_BOT_TOKEN" }) };
    }

    if (!messageId) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing messageId" }) };
    }

    // Ambil semua chat ID (dipisah koma)
    const chatIdsRaw = process.env.TELEGRAM_ALLOWED_CHATS;
    const chatIds = chatIdsRaw.split(",").map(id => id.trim());

    const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/deleteMessage`;

    // Hapus pesan di semua chat ID
    const results = await Promise.all(
      chatIds.map(chatId =>
        fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            message_id: Number(messageId)
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
