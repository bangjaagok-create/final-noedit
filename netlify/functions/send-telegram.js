// netlify/functions/send-telegram.js
export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Only POST" }) };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const message = body.message || "No message";
    const chatId = body.chatId || process.env.TELEGRAM_ALLOWED_CHATS;

    if (!process.env.TELEGRAM_BOT_TOKEN) {
      return { statusCode: 500, body: JSON.stringify({ error: "Missing TELEGRAM_BOT_TOKEN" }) };
    }
    if (!chatId) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing chatId" }) };
    }

    const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: body.parseMode || "HTML",
        disable_web_page_preview: true
      })
    });

    const data = await res.json();
    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}
