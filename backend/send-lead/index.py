import os
import json
import urllib.request


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта в Telegram @richsmm1"""

    cors = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors, "body": ""}

    try:
        body = json.loads(event.get("body") or "{}")
    except Exception:
        return {"statusCode": 400, "headers": cors, "body": json.dumps({"error": "bad json"})}

    name = body.get("name", "—")
    phone = body.get("phone", "—")
    obj = body.get("obj", "—")
    comment = body.get("comment", "—")
    source = body.get("source", "форма")

    text = (
        f"🏠 <b>Новая заявка — srochno-vykup.ru</b>\n\n"
        f"👤 <b>Имя:</b> {name}\n"
        f"📞 <b>Телефон:</b> {phone}\n"
        f"🏢 <b>Объект:</b> {obj}\n"
        f"💬 <b>Комментарий:</b> {comment}\n"
        f"📍 <b>Источник:</b> {source}"
    )

    token = os.environ.get("TELEGRAM_BOT_TOKEN", "")
    chat_id = "@richsmm1"

    if not token:
        return {"statusCode": 200, "headers": cors, "body": json.dumps({"ok": True, "warn": "no token"})}

    url = f"https://api.telegram.org/bot{token}/sendMessage"
    payload = json.dumps({
        "chat_id": chat_id,
        "text": text,
        "parse_mode": "HTML",
    }).encode("utf-8")

    req = urllib.request.Request(url, data=payload, headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=10) as resp:
        tg_resp = json.loads(resp.read())

    return {
        "statusCode": 200,
        "headers": cors,
        "body": json.dumps({"ok": tg_resp.get("ok", False)}),
    }
