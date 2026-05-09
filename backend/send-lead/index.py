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
    service = body.get("obj", "—")
    comment = body.get("comment", "")
    source = body.get("source", "форма")

    comment_line = f"\n💬 <b>Комментарий:</b> {comment}" if comment and comment != "—" else ""

    text = (
        f"🏠 <b>НОВАЯ ЗАЯВКА — srochno-vykup.ru</b>\n\n"
        f"🎯 <b>Услуга:</b> {service}\n\n"
        f"👤 <b>Имя:</b> {name}\n"
        f"📞 <b>Телефон:</b> {phone}"
        f"{comment_line}\n"
        f"📍 <b>Источник:</b> {source}"
    )

    token = os.environ.get("TELEGRAM_BOT_TOKEN", "")
    # Числовой chat_id: напиши /start боту, затем узнай id через @userinfobot
    chat_id = os.environ.get("TELEGRAM_CHAT_ID", "@richsmm1")

    if not token:
        return {"statusCode": 200, "headers": cors, "body": json.dumps({"ok": True})}

    try:
        url = f"https://api.telegram.org/bot{token}/sendMessage"
        payload = json.dumps({
            "chat_id": chat_id,
            "text": text,
            "parse_mode": "HTML",
        }).encode("utf-8")
        req = urllib.request.Request(url, data=payload, headers={"Content-Type": "application/json"})
        with urllib.request.urlopen(req, timeout=10) as resp:
            tg_resp = json.loads(resp.read())
        ok = tg_resp.get("ok", False)
    except Exception:
        ok = False

    return {
        "statusCode": 200,
        "headers": cors,
        "body": json.dumps({"ok": ok}),
    }