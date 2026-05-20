import os
import json
import urllib.request


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта srochno-vykup.ru в Telegram бот @Vikypkvartir_bot"""

    cors = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors, "body": ""}

    raw_body = event.get("body") or "{}"
    # Двойной парсинг: тело может прийти как строка или уже dict
    try:
        if isinstance(raw_body, dict):
            body = raw_body
        elif isinstance(raw_body, str):
            parsed = json.loads(raw_body)
            # Иногда тело само является JSON-строкой внутри строки
            body = json.loads(parsed) if isinstance(parsed, str) else parsed
        else:
            body = {}
    except Exception:
        body = {}

    # Поля заявки
    phone     = body.get("phone", "-")
    tech_type = body.get("type", "-")
    city      = body.get("city", "-")
    model     = body.get("model", "")
    condition = body.get("condition", "")
    # Поля для юрлиц
    org_name  = body.get("orgName", "")
    contact   = body.get("contact", "")
    volume    = body.get("volume", "")
    # Мета
    variant   = body.get("variant", "fizlic")  # fizlic | org

    def line(label, val):
        return f"\n{label} {val}" if val and val not in ("-", "") else ""

    if variant == "org":
        text = (
            f"🏢 <b>ЗАЯВКА ОТ ЮРЛИЦА - srochno-vykup.ru</b>\n\n"
            f"🏛 <b>Организация:</b> {org_name or '-'}\n"
            f"👤 <b>Контакт:</b> {contact or '-'}\n"
            f"📞 <b>Телефон:</b> {phone}\n"
            f"📍 <b>Город:</b> {city}"
            + line("📦 <b>Объём:</b>", volume)
            + line("💻 <b>Техника:</b>", tech_type)
        )
    else:
        text = (
            f"💻 <b>НОВАЯ ЗАЯВКА - srochno-vykup.ru</b>\n\n"
            f"📞 <b>Телефон:</b> {phone}\n"
            f"🔧 <b>Техника:</b> {tech_type}\n"
            f"📍 <b>Город:</b> {city}"
            + line("📱 <b>Модель:</b>", model)
            + line("⚙️ <b>Состояние:</b>", condition)
        )

    token   = os.environ.get("TELEGRAM_BOT_TOKEN", "")
    chat_id = os.environ.get("TELEGRAM_CHAT_ID", "6508047732")

    if not token:
        # Токен не задан — возвращаем ok, чтобы форма не ломалась
        return {"statusCode": 200, "headers": cors, "body": json.dumps({"ok": True, "note": "no token"})}

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
    except Exception as e:
        ok = False

    return {
        "statusCode": 200,
        "headers": cors,
        "body": json.dumps({"ok": ok}),
    }