// netlify/functions/delete-telegram.js
export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Only POST" }) };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const chatId = body.chatId || process.env.TELEGRAM_ALLOWED_CHATS;
    const messageId = body.messageId || body.message_id; // terima dua format

    if (!process.env.TELEGRAM_BOT_TOKEN) {
      return { statusCode: 500, body: JSON.stringify({ error: "Missing TELEGRAM_BOT_TOKEN" }) };
    }
    if (!chatId || !messageId) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing chatId or messageId" }) };
    }

    const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/deleteMessage`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        message_id: Number(messageId)
      })
    });

    const data = await res.json();
    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}
