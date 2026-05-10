import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/91e8ab1f-16a6-4a0b-bdfb-9dbf57b7ed9c/files/1a5ff3ae-df0c-489f-8d7f-b8dddbe79457.jpg";
const DEAL_IMG = "https://cdn.poehali.dev/projects/91e8ab1f-16a6-4a0b-bdfb-9dbf57b7ed9c/files/f72505c9-ad19-4223-9d2b-ce1298be9410.jpg";
const CITY_IMG = "https://cdn.poehali.dev/projects/91e8ab1f-16a6-4a0b-bdfb-9dbf57b7ed9c/files/6080ddc8-b9d7-433d-a21d-8a927f920b8b.jpg";

// ── Navbar ────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Главная", href: "#home" },
    { label: "Услуги", href: "#services" },
    { label: "Калькулятор", href: "#calculator" },
    { label: "Кейсы", href: "#cases" },
    { label: "О нас", href: "#about" },
    { label: "Блог", href: "#blog" },
    { label: "FAQ", href: "#faq" },
    { label: "Контакты", href: "#contacts" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "var(--green-main)" }}>
            <span className="text-white font-montserrat font-black text-sm">СВ</span>
          </div>
          <div>
            <div className="font-montserrat font-black text-sm leading-tight" style={{ color: scrolled ? "var(--green-dark)" : "white" }}>
              СРОЧНЫЙ ВЫКУП
            </div>
            <div className="text-xs font-golos" style={{ color: scrolled ? "var(--text-muted)" : "rgba(255,255,255,0.7)" }}>
              srochno-vykup.ru
            </div>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-5">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link text-sm font-medium font-golos"
              style={{ color: scrolled ? "var(--text-dark)" : "white" }}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          {/* Бейдж Т-Банк */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border font-golos text-xs font-bold"
            style={{
              background: scrolled ? "#fff8e1" : "rgba(255,221,0,0.15)",
              borderColor: scrolled ? "#FFDD00" : "rgba(255,221,0,0.5)",
              color: scrolled ? "#1a1a1a" : "#FFDD00",
            }}>
            <span className="text-sm">🏦</span>
            Партнёр Т-Банк · Кэшбэк
          </div>
          <a href={`tel:+${PHONE}`} className="flex items-center gap-2 font-montserrat font-bold text-sm"
            style={{ color: scrolled ? "var(--green-dark)" : "white" }}>
            <Icon name="Phone" size={16} />
            {PHONE_DISPLAY}
          </a>
          <a href="#contacts" className="btn-green px-5 py-2 rounded-full text-sm font-montserrat font-bold text-white">
            Оценить объект
          </a>
        </div>

        <button className="lg:hidden p-2" style={{ color: scrolled ? "var(--text-dark)" : "white" }}
          onClick={() => setOpen(!open)}>
          <Icon name={open ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden mobile-menu bg-white shadow-xl border-t" style={{ borderColor: "var(--border)" }}>
          <div className="px-4 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href}
                className="py-3 px-3 rounded-lg font-golos font-medium hover:bg-green-50 transition-colors"
                style={{ color: "var(--text-dark)" }}
                onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href={`tel:+${PHONE}`}
              className="mt-2 flex items-center gap-2 py-3 px-3 font-montserrat font-bold"
              style={{ color: "var(--green-main)" }}>
              <Icon name="Phone" size={16} />{PHONE_DISPLAY}
            </a>
            <div className="flex items-center gap-2 mt-2 mb-1 px-3 py-2 rounded-xl"
              style={{ background: "#fff8e1", border: "1px solid #FFDD00" }}>
              <span>🏦</span>
              <span className="font-golos text-xs font-bold" style={{ color: "#1a1a1a" }}>Партнёр Т-Банк · Кэшбэк</span>
            </div>
            <div className="flex gap-2 mt-1">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-golos font-semibold text-sm text-white"
                style={{ background: "#25D366" }}>
                WhatsApp
              </a>
              <a href={TG_LINK} target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-golos font-semibold text-sm text-white"
                style={{ background: "#2AABEE" }}>
                Telegram
              </a>
            </div>
            <a href="#contacts" className="btn-green text-center text-white py-3 rounded-xl font-montserrat font-bold mt-1">
              Оценить объект
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

// ── HeroForm — мини-форма прямо в Hero ────────────────
function HeroForm() {
  const [service, setService] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setLoading(true);
    try {
      await fetch(LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "—", phone, obj: service || "не указана", comment: "", source: "Hero-форма" }),
      });
    } catch (err) { console.error(err); }
    setLoading(false);
    setSent(true);
  };

  if (sent) return (
    <div className="p-5 rounded-2xl text-center" style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.25)" }}>
      <div className="text-2xl mb-2">✅</div>
      <p className="font-montserrat font-bold text-white">Перезвоним за 10 минут!</p>
      <p className="text-sm text-white/70 font-golos mt-1">Или напишите нам прямо сейчас:</p>
      <div className="flex gap-2 mt-3">
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex-1 py-2.5 rounded-xl text-sm font-golos font-bold text-white text-center" style={{ background: "#25D366" }}>WhatsApp</a>
        <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="flex-1 py-2.5 rounded-xl text-sm font-golos font-bold text-white text-center" style={{ background: "#2AABEE" }}>Telegram</a>
      </div>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="p-5 rounded-2xl space-y-3"
      style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.25)" }}>
      <p className="font-montserrat font-bold text-white text-sm text-center">Получить бесплатную оценку прямо сейчас</p>
      <div className="grid grid-cols-2 gap-2">
        {SERVICES_LIST.map((s) => (
          <button key={s.label} type="button"
            onClick={() => setService(s.label)}
            className="text-left px-3 py-2 rounded-xl font-golos text-xs font-medium border transition-all leading-snug"
            style={{
              background: service === s.label ? "var(--gold)" : "rgba(255,255,255,0.1)",
              color: "white",
              borderColor: service === s.label ? "var(--gold)" : "rgba(255,255,255,0.3)",
            }}>
            {s.label}
          </button>
        ))}
      </div>
      <input type="tel" required placeholder="Ваш телефон *"
        value={phone} onChange={(e) => setPhone(e.target.value)}
        className="w-full px-4 py-3 rounded-xl font-golos text-sm focus:outline-none"
        style={{ background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.4)", color: "white" }} />
      <button type="submit" disabled={loading}
        className="btn-gold w-full py-3.5 rounded-xl font-montserrat font-bold text-white">
        {loading ? "Отправляем..." : "Перезвоните мне → Бесплатно"}
      </button>
      <p className="text-xs text-white/50 font-golos text-center">Нажимая, вы соглашаетесь с политикой конфиденциальности</p>
    </form>
  );
}

// ── Hero ──────────────────────────────────────────────
function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden hero-pattern">
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Срочный выкуп квартир Москва" className="w-full h-full object-cover opacity-15" />
      </div>
      <div className="absolute inset-0 hero-pattern opacity-92" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 trust-badge">
            <span className="pulse-dot w-2.5 h-2.5 rounded-full inline-block" style={{ background: "var(--gold)" }} />
            <span className="text-sm font-golos font-semibold" style={{ color: "var(--gold)" }}>
              Москва · МО · Санкт-Петербург · Вся Россия
            </span>
          </div>

          <h1 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl leading-tight text-white mb-5">
            Срочный выкуп{" "}
            <span style={{ color: "#f5c842" }}>квартир</span>
            <br />деньги сегодня
          </h1>

          <p className="text-lg font-golos leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.82)" }}>
            Выкупаем квартиры, дома, коммерцию в Москве и СПб — за 24 часа.<br/>
            Кредиты для физ. и юр. лиц — работаем напрямую с руководством банков.
          </p>

          {/* Главные отличия */}
          <div className="p-4 rounded-2xl mb-5 space-y-2"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)" }}>
            {[
              "✅ Помогаем даже с плохой кредитной историей",
              "✅ Работаем напрямую с главами банков — лучшие ставки от 15%",
              "✅ Выкуп с любым обременением — ипотека, залог, арест",
              "✅ Каждый случай разбираем индивидуально",
            ].map((t) => (
              <p key={t} className="text-sm font-golos text-white/90 leading-snug">{t}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            {[
              { icon: "Clock", text: "Оценка за 2 часа" },
              { icon: "Banknote", text: "Деньги в день сделки" },
              { icon: "ShieldCheck", text: "Юридическая чистота" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
                  <Icon name={item.icon as "Clock"} size={14} className="text-white" />
                </div>
                <span className="text-white font-golos text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Статистика на мобилке */}
          <div className="grid grid-cols-2 gap-3 lg:hidden mb-6">
            {[
              { num: "1 200+", label: "объектов выкуплено" },
              { num: "98%", label: "довольных клиентов" },
            ].map((s) => (
              <div key={s.label} className="p-4 rounded-2xl text-center"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
                <div className="font-montserrat font-black text-2xl text-white">{s.num}</div>
                <div className="text-xs font-golos" style={{ color: "rgba(255,255,255,0.7)" }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={`tel:+${PHONE}`}
              className="flex items-center gap-2 px-6 py-3.5 rounded-full font-montserrat font-bold text-base border-2 border-white text-white hover:bg-white/10 transition-colors">
              <Icon name="Phone" size={18} />
              {PHONE_DISPLAY}
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full font-montserrat font-bold text-base text-white"
              style={{ background: "#25D366" }}>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Мини-форма на десктопе */}
        <div className="hidden lg:block">
          <HeroForm />
        </div>

        {/* Статистика на десктопе */}
        <div className="lg:hidden" />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#services" className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors">
          <span className="text-xs font-golos">Узнать больше</span>
          <Icon name="ChevronDown" size={20} />
        </a>
      </div>
    </section>
  );
}

// ── Services ──────────────────────────────────────────
function Services() {
  const services = [
    {
      icon: "Building2",
      title: "Срочный выкуп квартир",
      desc: "Выкупаем любые квартиры в Москве, МО и СПб. Дисконт 10–25% от рынка — зависит от объекта и срочности. Без скрытых условий.",
      tag: "Хит",
      tagColor: "var(--green-main)",
      geo: "Москва · МО · СПб",
    },
    {
      icon: "Lock",
      title: "Кредиты под залог недвижимости",
      desc: "Выдаём кредиты под залог квартиры или дома. Ставки 15–30% — работаем напрямую с руководством банков. Помогаем даже с плохой КИ.",
      tag: "Популярно",
      tagColor: "var(--gold)",
      geo: "Вся Россия",
    },
    {
      icon: "Briefcase",
      title: "Кредитование юр. лиц",
      desc: "Финансирование бизнеса под залог коммерческой и жилой недвижимости. Каждый случай — индивидуально. Решение за 1 день.",
      tag: "",
      tagColor: "",
      geo: "Вся Россия",
    },
    {
      icon: "User",
      title: "Кредитование физ. лиц",
      desc: "Кредиты для физических лиц под залог недвижимости. Ставки от 15%. Плохая КИ, серая зарплата — разберём вашу ситуацию.",
      tag: "",
      tagColor: "",
      geo: "Вся Россия",
    },
    {
      icon: "Home",
      title: "Выкуп домов и коммерции",
      desc: "Срочный выкуп домов, дач, таунхаусов, офисов и складов. Дисконт 10–25%, деньги в день сделки.",
      tag: "",
      tagColor: "",
      geo: "Москва · МО · СПб",
    },
    {
      icon: "AlertCircle",
      title: "Сложные ситуации",
      desc: "Ипотека, арест, залог, долги, плохая КИ, раздел имущества при разводе — помогаем там, где другие отказывают.",
      tag: "Важно",
      tagColor: "#c0392b",
      geo: "Вся Россия",
    },
  ];

  return (
    <section id="services" className="py-20" style={{ background: "var(--warm-cream)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="section-divider mx-auto mb-4" />
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl mb-4" style={{ color: "var(--text-dark)" }}>
            Наши услуги
          </h2>
          <p className="text-lg font-golos max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Работаем с любыми объектами и ситуациями — быстро и честно
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title}
              className="card-hover p-8 rounded-2xl bg-white relative cursor-pointer group"
              style={{ border: "1px solid var(--border)" }}>
              {s.tag && (
                <span className="absolute top-4 right-4 text-xs font-montserrat font-bold px-3 py-1 rounded-full text-white"
                  style={{ background: s.tagColor }}>
                  {s.tag}
                </span>
              )}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: "var(--green-light)" }}>
                <Icon name={s.icon as "Home"} size={26} style={{ color: "var(--green-main)" }} />
              </div>
              <h3 className="font-montserrat font-bold text-xl mb-3" style={{ color: "var(--text-dark)" }}>
                {s.title}
              </h3>
              <p className="font-golos leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                {s.desc}
              </p>
              <div className="flex items-center gap-1.5">
                <Icon name="MapPin" size={13} style={{ color: "var(--gold)" }} />
                <span className="text-xs font-golos font-semibold" style={{ color: "var(--gold)" }}>{s.geo}</span>
              </div>
              <div className="mt-4 flex items-center gap-1 font-golos font-semibold text-sm group-hover:gap-2 transition-all"
                style={{ color: "var(--green-main)" }}>
                Подробнее <Icon name="ArrowRight" size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Calculator ────────────────────────────────────────
function Calculator() {
  const [tab, setTab] = useState<"buyout" | "credit">("buyout");

  const [area, setArea] = useState(55);
  const [pricePerM, setPricePerM] = useState(180000);
  const [propType, setPropType] = useState<"flat" | "house" | "commercial">("flat");

  const [creditAmount, setCreditAmount] = useState(3000000);
  const [creditTerm, setCreditTerm] = useState(60);
  const [creditRate, setCreditRate] = useState(20);

  // Дисконт: квартира ~15%, дом ~20%, коммерция ~22% (реальный диапазон 10–25%)
  const discountPct = { flat: 15, house: 20, commercial: 22 }[propType];
  const discountMin = { flat: 10, house: 15, commercial: 18 }[propType];
  const discountMax = { flat: 20, house: 25, commercial: 25 }[propType];
  const marketPrice = area * pricePerM;
  const buyoutSum = Math.round(marketPrice * (1 - discountPct / 100));
  const buyoutMin = Math.round(marketPrice * (1 - discountMax / 100));
  const buyoutMax = Math.round(marketPrice * (1 - discountMin / 100));
  const buyoutPercent = 100 - discountPct;

  const monthlyRate = creditRate / 12 / 100;
  const creditMonthly = creditAmount > 0
    ? Math.round((creditAmount * monthlyRate * Math.pow(1 + monthlyRate, creditTerm)) / (Math.pow(1 + monthlyRate, creditTerm) - 1))
    : 0;
  const totalCredit = creditMonthly * creditTerm;
  const overpay = totalCredit - creditAmount;

  const fmt = (n: number) => n.toLocaleString("ru-RU") + " ₽";

  return (
    <section id="calculator" className="py-20" style={{ background: "var(--warm-bg)" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="section-divider mx-auto mb-4" />
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl mb-4" style={{ color: "var(--text-dark)" }}>
            Калькулятор
          </h2>
          <p className="text-lg font-golos" style={{ color: "var(--text-muted)" }}>
            Рассчитайте выкупную стоимость или ежемесячный платёж онлайн
          </p>
        </div>

        <div className="calc-card p-4 sm:p-8">
          <div className="flex gap-2 p-1 rounded-xl mb-8" style={{ background: "var(--green-light)" }}>
            {[
              { key: "buyout", label: "Выкуп объекта", icon: "Building2" },
              { key: "credit", label: "Кредитование", icon: "CreditCard" },
            ].map((t) => (
              <button key={t.key} onClick={() => setTab(t.key as "buyout" | "credit")}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-montserrat font-bold text-sm transition-all"
                style={{
                  background: tab === t.key ? "var(--green-main)" : "transparent",
                  color: tab === t.key ? "white" : "var(--green-dark)",
                }}>
                <Icon name={t.icon as "Building2"} size={18} />
                {t.label}
              </button>
            ))}
          </div>

          {tab === "buyout" ? (
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-7">
                <div>
                  <label className="font-golos font-semibold mb-3 block" style={{ color: "var(--text-dark)" }}>Тип объекта</label>
                  <div className="flex gap-2">
                    {[
                      { key: "flat", label: "Квартира" },
                      { key: "house", label: "Дом / дача" },
                      { key: "commercial", label: "Коммерция" },
                    ].map((c) => (
                      <button key={c.key} onClick={() => setPropType(c.key as "flat" | "house" | "commercial")}
                        className="flex-1 py-2.5 rounded-xl text-xs font-golos font-semibold border transition-all"
                        style={{
                          background: propType === c.key ? "var(--green-main)" : "white",
                          color: propType === c.key ? "white" : "var(--text-dark)",
                          borderColor: propType === c.key ? "var(--green-main)" : "var(--border)",
                        }}>
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="font-golos font-semibold" style={{ color: "var(--text-dark)" }}>Площадь</label>
                    <span className="font-montserrat font-bold text-lg" style={{ color: "var(--green-main)" }}>{area} м²</span>
                  </div>
                  <input type="range" min={20} max={500} step={5} value={area}
                    onChange={(e) => setArea(Number(e.target.value))} className="w-full" />
                  <div className="flex justify-between text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                    <span>20 м²</span><span>500 м²</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="font-golos font-semibold" style={{ color: "var(--text-dark)" }}>Цена за м² (рыночная)</label>
                    <span className="font-montserrat font-bold text-lg" style={{ color: "var(--green-main)" }}>{fmt(pricePerM)}</span>
                  </div>
                  <input type="range" min={60000} max={600000} step={5000} value={pricePerM}
                    onChange={(e) => setPricePerM(Number(e.target.value))} className="w-full" />
                  <div className="flex justify-between text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                    <span>60 000 ₽</span><span>600 000 ₽</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="rounded-2xl p-8 text-center relative overflow-hidden"
                  style={{ background: "linear-gradient(135deg, var(--green-dark) 0%, var(--green-mid) 100%)" }}>
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
                    style={{ background: "var(--gold)", transform: "translate(30%,-30%)" }} />
                  <p className="font-golos text-white/70 mb-1 text-sm">Рыночная стоимость</p>
                  <div className="font-montserrat font-black text-2xl text-white/60 mb-3">{fmt(marketPrice)}</div>
                  <p className="font-golos text-white/80 mb-1 text-sm">Мы предложим в диапазоне</p>
                  <div className="font-montserrat font-black text-3xl sm:text-4xl text-white mb-1">
                    {fmt(buyoutMin)} — {fmt(buyoutMax)}
                  </div>
                  <div className="font-montserrat font-black text-lg text-white/50 mb-3">
                    ориентир: {fmt(buyoutSum)}
                  </div>
                  <div className="inline-block px-4 py-1.5 rounded-full font-golos font-bold text-sm mb-5"
                    style={{ background: "rgba(255,255,255,0.15)", color: "#f5c842" }}>
                    дисконт {discountMin}–{discountMax}% от рынка
                  </div>
                  <div className="space-y-2 text-left mb-4">
                    {[
                      `Площадь: ${area} м²`,
                      `Рыночная цена м²: ${fmt(pricePerM)}`,
                      `Дисконт: ${discountMin}–${discountMax}% (зависит от объекта)`,
                    ].map((t) => (
                      <div key={t} className="flex items-center gap-2">
                        <Icon name="Check" size={14} className="text-green-300" />
                        <span className="text-sm font-golos text-white/80">{t}</span>
                      </div>
                    ))}
                  </div>
                  <button className="btn-gold w-full py-3.5 rounded-xl font-montserrat font-bold text-white">
                    Получить точную оценку
                  </button>
                  <p className="text-xs text-white/50 font-golos mt-3">
                    * Дисконт 10–25% зависит от состояния, района и срочности. Точная сумма — после бесплатного осмотра.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-7">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="font-golos font-semibold" style={{ color: "var(--text-dark)" }}>Сумма кредита</label>
                    <span className="font-montserrat font-bold text-lg" style={{ color: "var(--green-main)" }}>{fmt(creditAmount)}</span>
                  </div>
                  <input type="range" min={500000} max={50000000} step={500000} value={creditAmount}
                    onChange={(e) => setCreditAmount(Number(e.target.value))} className="w-full" />
                  <div className="flex justify-between text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                    <span>500 000 ₽</span><span>50 000 000 ₽</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="font-golos font-semibold" style={{ color: "var(--text-dark)" }}>Срок кредита</label>
                    <span className="font-montserrat font-bold text-lg" style={{ color: "var(--green-main)" }}>{creditTerm} мес.</span>
                  </div>
                  <input type="range" min={12} max={240} step={12} value={creditTerm}
                    onChange={(e) => setCreditTerm(Number(e.target.value))} className="w-full" />
                  <div className="flex justify-between text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                    <span>1 год</span><span>20 лет</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="font-golos font-semibold" style={{ color: "var(--text-dark)" }}>Процентная ставка</label>
                    <span className="font-montserrat font-bold text-lg" style={{ color: "var(--green-main)" }}>{creditRate}% годовых</span>
                  </div>
                  <input type="range" min={15} max={30} step={0.5} value={creditRate}
                    onChange={(e) => setCreditRate(Number(e.target.value))} className="w-full" />
                  <div className="flex justify-between text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                    <span>15% (мин.)</span><span>30% (макс.)</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="rounded-2xl p-8 relative overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #1a2d5c 0%, #2d4a8c 100%)" }}>
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
                    style={{ background: "var(--gold)", transform: "translate(30%,-30%)" }} />
                  <p className="font-golos text-white/80 mb-1 text-sm">Ежемесячный платёж</p>
                  <div className="font-montserrat font-black text-4xl sm:text-5xl text-white mb-5">{fmt(creditMonthly)}</div>
                  <div className="space-y-3 mb-6">
                    {[
                      { label: "Сумма кредита", val: fmt(creditAmount) },
                      { label: "Срок", val: `${creditTerm} мес. (${Math.round(creditTerm / 12)} лет)` },
                      { label: "Переплата", val: fmt(overpay) },
                      { label: "Итого выплат", val: fmt(totalCredit) },
                    ].map((r) => (
                      <div key={r.label} className="flex justify-between">
                        <span className="text-sm font-golos text-white/70">{r.label}</span>
                        <span className="text-sm font-golos font-bold text-white">{r.val}</span>
                      </div>
                    ))}
                  </div>
                  <button className="btn-gold w-full py-3.5 rounded-xl font-montserrat font-bold text-white">
                    Оформить заявку
                  </button>
                  <p className="text-xs text-white/50 font-golos mt-3">
                    * Ставка 15–30% подбирается индивидуально. Плохая КИ — не приговор, разберём вашу ситуацию.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ── Cases ─────────────────────────────────────────────
function Cases() {
  const cases = [
    {
      obj: "3-комн. квартира, Москва",
      type: "Срочный выкуп",
      problem: "Срочно нужны деньги на операцию, стандартная продажа заняла бы 3–4 месяца",
      result: "Выкупили за 11 200 000 ₽, деньги переведены в день подписания",
      time: "18 часов",
      icon: "Building2",
    },
    {
      obj: "Квартира под залогом, СПб",
      type: "Залоговый объект",
      problem: "Квартира в залоге у банка, просрочка 6 месяцев, угроза торгов",
      result: "Закрыли долг 2 400 000 ₽, клиент получил 850 000 ₽ на руки",
      time: "3 дня",
      icon: "Lock",
    },
    {
      obj: "ООО, офис 320 м², Москва",
      type: "Кредитование юр. лица",
      problem: "Бизнесу нужно 15 млн на пополнение оборотных средств, банки отказали",
      result: "Выдали кредит 15 000 000 ₽ под залог офиса по ставке 16% на 3 года",
      time: "1 день",
      icon: "Briefcase",
    },
    {
      obj: "Дом 180 м², Подмосковье",
      type: "Выкуп дома",
      problem: "Развод, нужно срочно разделить имущество и получить наличные",
      result: "Выкупили дом за 6 800 000 ₽ — 88% от рыночной оценки",
      time: "2 дня",
      icon: "Home",
    },
  ];

  return (
    <section id="cases" className="py-20" style={{ background: "var(--warm-cream)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="section-divider mx-auto mb-4" />
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl mb-4" style={{ color: "var(--text-dark)" }}>
            Реальные кейсы
          </h2>
          <p className="font-golos text-lg" style={{ color: "var(--text-muted)" }}>Истории клиентов, которым мы помогли</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {cases.map((c) => (
            <div key={c.obj} className="card-hover p-7 rounded-2xl bg-white" style={{ border: "1px solid var(--border)" }}>
              <div className="flex items-start gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--green-light)" }}>
                  <Icon name={c.icon as "Home"} size={26} style={{ color: "var(--green-main)" }} />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-lg" style={{ color: "var(--text-dark)" }}>{c.obj}</h3>
                  <span className="text-xs font-golos font-semibold px-3 py-1 rounded-full"
                    style={{ background: "var(--green-light)", color: "var(--green-main)" }}>
                    {c.type}
                  </span>
                </div>
              </div>
              <div className="space-y-3 mb-5">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "#fee2e2" }}>
                    <Icon name="X" size={12} style={{ color: "#ef4444" }} />
                  </div>
                  <p className="font-golos text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{c.problem}</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "var(--green-light)" }}>
                    <Icon name="Check" size={12} style={{ color: "var(--green-main)" }} />
                  </div>
                  <p className="font-golos text-sm font-semibold leading-relaxed" style={{ color: "var(--text-dark)" }}>{c.result}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                <Icon name="Clock" size={14} style={{ color: "var(--gold)" }} />
                <span className="font-golos text-sm font-bold" style={{ color: "var(--gold)" }}>Время решения: {c.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Reviews ───────────────────────────────────────────
function Reviews() {
  const reviews = [
    {
      name: "Андрей К.",
      city: "Москва, Бутово",
      text: "Продавал квартиру срочно — нужны были деньги на лечение мамы. Позвонил вечером, утром приехали, оценили, к обеду деньги уже были на карте. Честные ребята, без обмана.",
      service: "Срочный выкуп",
      rating: 5,
      sum: "6 400 000 ₽",
    },
    {
      name: "Елена М.",
      city: "Подмосковье, Химки",
      text: "Квартира была в ипотеке, платить уже не могла. Думала, банк заберёт на торги. Помогли выкупить, закрыли долг перед банком и ещё 320 тысяч мне осталось. Спасибо огромное!",
      service: "Ипотечная квартира",
      rating: 5,
      sum: "4 100 000 ₽",
    },
    {
      name: "Сергей В.",
      city: "Санкт-Петербург",
      text: "Брал кредит под залог квартиры для бизнеса. Банки отказывали из-за серой зарплаты. Здесь одобрили за день, ставка нормальная, без скрытых комиссий.",
      service: "Кредит физ. лицу",
      rating: 5,
      sum: "2 500 000 ₽",
    },
    {
      name: "ООО «Стройсервис»",
      city: "Москва",
      text: "Потребовалось срочное финансирование под залог офиса. Рассмотрели заявку за несколько часов, деньги получили на следующий день. Будем работать ещё.",
      service: "Кредит юр. лицу",
      rating: 5,
      sum: "12 000 000 ₽",
    },
  ];

  return (
    <section className="py-20" style={{ background: "var(--warm-bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="section-divider mx-auto mb-4" />
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl mb-3" style={{ color: "var(--text-dark)" }}>
            Отзывы клиентов
          </h2>
          <p className="font-golos text-lg" style={{ color: "var(--text-muted)" }}>
            127 сделок в 2025 году · Рейтинг 4.9 из 5
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white p-6 rounded-2xl card-hover flex flex-col"
              style={{ border: "1px solid var(--border)" }}>
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array(r.rating).fill(0).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="font-golos text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--text-muted)" }}>
                «{r.text}»
              </p>
              <div className="pt-3" style={{ borderTop: "1px solid var(--border)" }}>
                <div className="font-montserrat font-bold text-sm" style={{ color: "var(--text-dark)" }}>{r.name}</div>
                <div className="font-golos text-xs" style={{ color: "var(--text-muted)" }}>{r.city}</div>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-xs font-golos px-2 py-0.5 rounded-full"
                    style={{ background: "var(--green-light)", color: "var(--green-main)" }}>
                    {r.service}
                  </span>
                  <span className="text-xs font-montserrat font-bold" style={{ color: "var(--gold)" }}>{r.sum}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Логотипы доверия */}
        <div className="mt-10 p-6 rounded-2xl flex flex-wrap items-center justify-center gap-8"
          style={{ background: "white", border: "1px solid var(--border)" }}>
          {[
            { icon: "Shield", text: "Сделки через Росреестр" },
            { icon: "FileCheck", text: "Договор купли-продажи" },
            { icon: "Landmark", text: "Работаем с банками РФ" },
            { icon: "Award", text: "12 лет на рынке" },
          ].map((t) => (
            <div key={t.text} className="flex items-center gap-2">
              <Icon name={t.icon as "Shield"} size={20} style={{ color: "var(--green-main)" }} />
              <span className="font-golos text-sm font-semibold" style={{ color: "var(--text-dark)" }}>{t.text}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl font-golos text-xs font-bold"
            style={{ background: "#fff8e1", border: "1.5px solid #FFDD00", color: "#1a1a1a" }}>
            <span className="text-base">🏦</span>
            Партнёр Т-Банк · Кэшбэк
          </div>
        </div>
      </div>
    </section>
  );
}

// ── About ──────────────────────────────────────────────
function About() {
  const advantages = [
    { icon: "Award", title: "12 лет опыта", desc: "На рынке с 2012 года. Более 1200 закрытых сделок" },
    { icon: "Landmark", title: "Прямой доступ к банкам", desc: "Работаем с руководством банков — ставки ниже, чем напрямую" },
    { icon: "Shield", title: "Любая КИ", desc: "Плохая история, просрочки, серая зарплата — рассмотрим всё" },
    { icon: "Zap", title: "Деньги сегодня", desc: "От звонка до перевода денег — от 24 часов" },
  ];

  return (
    <section id="about" className="py-20" style={{ background: "var(--warm-bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-divider mb-6" />
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl mb-6" style={{ color: "var(--text-dark)" }}>О компании</h2>
            <p className="font-golos text-lg leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
              Мы — команда с прямым доступом к руководству банков и крупных инвесторов.
              С 2012 года помогаем людям решать самые сложные имущественные вопросы:
              выкупаем квартиры, дома, коммерцию в Москве, МО и СПб.
            </p>
            <p className="font-golos leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
              Кредитуем физических и юридических лиц по всей России. Наши ставки
              ниже рынка, потому что мы договариваемся напрямую. Плохая кредитная история,
              серая зарплата, сложные документы — разбираем каждый случай индивидуально.
            </p>
            <div className="p-4 rounded-2xl mb-6" style={{ background: "var(--green-light)", border: "1px solid rgba(45,122,69,0.2)" }}>
              <p className="font-golos text-sm font-semibold" style={{ color: "var(--green-dark)" }}>
                💼 Важно: мы не агентство. У нас нет шаблонных отказов.
                Если вам отказали везде — позвоните нам. Найдём решение там, где другие говорят «нет».
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { num: "1 200+", label: "Сделок" },
                { num: "12 лет", label: "На рынке" },
                { num: "24 ч", label: "Быстрейший выкуп" },
                { num: "98%", label: "Довольных" },
              ].map((s) => (
                <div key={s.label} className="stat-card p-4 rounded-xl"
                  style={{ background: "white", border: "1px solid var(--border)" }}>
                  <div className="font-montserrat font-black text-2xl" style={{ color: "var(--green-main)" }}>{s.num}</div>
                  <div className="font-golos text-sm" style={{ color: "var(--text-muted)" }}>{s.label}</div>
                </div>
              ))}
            </div>
            <a href="#contacts"
              className="btn-green inline-flex items-center gap-2 px-8 py-4 rounded-full font-montserrat font-bold text-white">
              Связаться с нами <Icon name="ArrowRight" size={18} />
            </a>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl overflow-hidden h-64 lg:h-72 relative">
              <img src={DEAL_IMG} alt="Сделка" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,92,46,0.5), transparent)" }} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {advantages.map((a) => (
                <div key={a.title} className="p-5 rounded-2xl bg-white card-hover"
                  style={{ border: "1px solid var(--border)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: "var(--green-light)" }}>
                    <Icon name={a.icon as "Award"} size={20} style={{ color: "var(--green-main)" }} />
                  </div>
                  <div className="font-montserrat font-bold text-sm mb-1" style={{ color: "var(--text-dark)" }}>{a.title}</div>
                  <div className="font-golos text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{a.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Blog ──────────────────────────────────────────────
function Blog() {
  const posts = [
    {
      tag: "Советы",
      title: "Как срочно продать квартиру и не потерять деньги в 2026 году",
      desc: "Пошаговый разбор: чем отличается срочный выкуп от стандартной продажи и как получить максимум.",
      date: "5 мая 2026",
      readTime: "5 мин",
    },
    {
      tag: "Рынок",
      title: "Рынок недвижимости Москвы: цены и прогнозы на 2026 год",
      desc: "Аналитика по районам, динамика цен, что ждёт вторичку и новостройки в ближайшие месяцы.",
      date: "28 апр 2026",
      readTime: "7 мин",
    },
    {
      tag: "Инструкция",
      title: "Залоговая квартира: как выйти без долгов и с деньгами на руках",
      desc: "Юридические тонкости — что делать, если банк угрожает торгами.",
      date: "20 апр 2026",
      readTime: "6 мин",
    },
  ];

  return (
    <section id="blog" className="py-20" style={{ background: "var(--warm-cream)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="section-divider mb-4" />
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl" style={{ color: "var(--text-dark)" }}>Блог</h2>
          </div>
          <a href="#blog" className="inline-flex items-center gap-2 font-golos font-semibold"
            style={{ color: "var(--green-main)" }}>
            Все статьи <Icon name="ArrowRight" size={16} />
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="card-hover bg-white rounded-2xl overflow-hidden cursor-pointer"
              style={{ border: "1px solid var(--border)" }}>
              <div className="h-48 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, var(--green-light) 0%, var(--warm-cream) 100%)" }}>
                <Icon name="FileText" size={48} style={{ color: "var(--green-main)", opacity: 0.4 }} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-montserrat font-bold px-3 py-1 rounded-full"
                    style={{ background: "var(--green-light)", color: "var(--green-main)" }}>
                    {p.tag}
                  </span>
                  <span className="text-xs font-golos" style={{ color: "var(--text-muted)" }}>{p.readTime} чтения</span>
                </div>
                <h3 className="font-montserrat font-bold text-base mb-3 leading-snug" style={{ color: "var(--text-dark)" }}>
                  {p.title}
                </h3>
                <p className="font-golos text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>{p.desc}</p>
                <span className="text-xs font-golos" style={{ color: "var(--text-muted)" }}>{p.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "За сколько времени вы выкупаете квартиру?",
      a: "Стандартный срок — 24–72 часа с момента первого звонка. Рекорд — 18 часов. Сроки зависят от готовности документов и сложности объекта.",
    },
    {
      q: "Сколько вы предложите за мою квартиру?",
      a: "Честно: наш дисконт составляет 10–25% от рыночной стоимости. Например, квартира за 20 млн ₽ — мы предложим от 15 до 18 млн. Точная сумма зависит от объекта, состояния, района и срочности. Оценка бесплатная.",
    },
    {
      q: "Дадите кредит с плохой кредитной историей?",
      a: "Да. Мы работаем напрямую с руководством банков и частными инвесторами — поэтому рассматриваем заявки, которые банки отклоняют по стандартным каналам. Плохая КИ, просрочки, серая зарплата — звоните, разберём индивидуально.",
    },
    {
      q: "Работаете ли вы без залога?",
      a: "Рассматриваем разные форматы — позвоните и расскажите вашу ситуацию. Для кредитования под залог недвижимости ставки от 15%. Для других форматов — обсуждаем индивидуально.",
    },
    {
      q: "Работаете ли вы с ипотечными и залоговыми квартирами?",
      a: "Да. Полностью закрываем ипотеку перед банком. Остаток суммы — вам на руки. Работаем с арестами, залогами МФО, любыми обременениями.",
    },
    {
      q: "Какие ставки по кредитованию?",
      a: "Ставки от 15% до 30% годовых — зависит от суммы, срока, объекта залога и вашей ситуации. Мы работаем напрямую с руководством банков, поэтому предлагаем условия лучше, чем по стандартной заявке.",
    },
    {
      q: "В каких городах вы работаете?",
      a: "Срочный выкуп квартир и недвижимости — Москва, Московская область и Санкт-Петербург. Кредитование под залог недвижимости — по всей России.",
    },
    {
      q: "Вы работаете с юридическими лицами?",
      a: "Да. Кредитуем юридические лица под залог коммерческой и жилой недвижимости по всей России. Также выкупаем коммерческие объекты. Решение — за 1 рабочий день.",
    },
    {
      q: "Что нужно из документов для выкупа?",
      a: "Паспорт и выписка из ЕГРН — этого достаточно для первичной оценки. Если квартира в ипотеке — понадобится справка об остатке долга. Помогаем собрать все документы.",
    },
  ];

  return (
    <section id="faq" className="py-20" style={{ background: "var(--warm-bg)" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="section-divider mx-auto mb-4" />
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl mb-4" style={{ color: "var(--text-dark)" }}>
            Частые вопросы
          </h2>
          <p className="font-golos text-lg" style={{ color: "var(--text-muted)" }}>Ответы на самые популярные вопросы</p>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
              <button
                className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-green-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}>
                <span className="font-golos font-semibold leading-snug" style={{ color: "var(--text-dark)" }}>{f.q}</span>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all"
                  style={{
                    background: open === i ? "var(--green-main)" : "var(--green-light)",
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}>
                  <Icon name="ChevronDown" size={16} style={{ color: open === i ? "white" : "var(--green-main)" }} />
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-6">
                  <p className="font-golos leading-relaxed" style={{ color: "var(--text-muted)" }}>{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const LEAD_URL = "https://functions.poehali.dev/6a37cbfd-6240-4d83-bcd0-ed23b3616438";
const PHONE = "79684862622";
const WA_LINK = `https://wa.me/${PHONE}`;
const TG_LINK = "https://t.me/creditdevil";
const PHONE_DISPLAY = "+7 (968) 486-26-22";

// ── ExitPopup ─────────────────────────────────────────
function ExitPopup() {
  const [show, setShow] = useState(false);
  const [sent, setSent] = useState(false);
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Показываем через 20 сек или при попытке уйти
    const timer = setTimeout(() => setShow(true), 20000);
    const onLeave = (e: MouseEvent) => { if (e.clientY < 10) setShow(true); };
    document.addEventListener("mouseleave", onLeave);
    return () => { clearTimeout(timer); document.removeEventListener("mouseleave", onLeave); };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || !service) return;
    setLoading(true);
    try {
      await fetch(LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "—", phone, obj: service, comment: "", source: "попап" }),
      });
    } catch (err) { console.error(err); }
    setLoading(false);
    setSent(true);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) setShow(false); }}>
      <div className="bg-white rounded-3xl p-7 w-full max-w-md shadow-2xl relative animate-fade-in">
        <button onClick={() => setShow(false)}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
          style={{ color: "var(--text-muted)" }}>
          <Icon name="X" size={18} />
        </button>

        {sent ? (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: "var(--green-light)" }}>
              <Icon name="CheckCircle" size={32} style={{ color: "var(--green-main)" }} />
            </div>
            <h3 className="font-montserrat font-black text-xl mb-2" style={{ color: "var(--text-dark)" }}>
              Перезвоним вам!
            </h3>
            <p className="font-golos text-sm mb-5" style={{ color: "var(--text-muted)" }}>
              Обычно мы перезваниваем за 10 минут
            </p>
            <a href={TG_LINK} target="_blank" rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl font-montserrat font-bold text-base text-white"
              style={{ background: "#2AABEE" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.857l-2.965-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.983.702z"/>
              </svg>
              Написать в Telegram прямо сейчас
            </a>
          </div>
        ) : (
          <>
            <div className="text-center mb-5">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-montserrat font-black text-xl mb-1" style={{ color: "var(--text-dark)" }}>
                Бесплатная консультация
              </h3>
              <p className="font-golos text-sm" style={{ color: "var(--text-muted)" }}>
                Оставьте номер — перезвоним за 10 минут
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                {SERVICES_LIST.map((s) => (
                  <button key={s.label} type="button"
                    onClick={() => setService(s.label)}
                    className="text-left px-3 py-2 rounded-xl font-golos text-xs font-medium border transition-all"
                    style={{
                      background: service === s.label ? "var(--green-main)" : "var(--warm-bg)",
                      color: service === s.label ? "white" : "var(--text-dark)",
                      borderColor: service === s.label ? "var(--green-main)" : "var(--border)",
                    }}>
                    {s.label}
                  </button>
                ))}
              </div>
              <input type="tel" required placeholder="Ваш телефон *"
                value={phone} onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl font-golos text-sm focus:outline-none"
                style={{ background: "var(--warm-bg)", border: "1.5px solid var(--border)", color: "var(--text-dark)" }} />
              <button type="submit" disabled={loading || !service}
                className="btn-green w-full py-3.5 rounded-xl font-montserrat font-bold text-white disabled:opacity-50">
                {loading ? "Отправляем..." : "Перезвоните мне →"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

// ── StickyBar ─────────────────────────────────────────
function StickyBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
      style={{ background: "var(--green-dark)", boxShadow: "0 -4px 20px rgba(0,0,0,0.2)" }}>
      <div className="flex gap-2 p-3 max-w-sm mx-auto">
        <a href={`tel:+${PHONE}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-montserrat font-bold text-sm text-white border-2 border-white/30">
          <Icon name="Phone" size={16} />
          Позвонить
        </a>
        <a href="#contacts"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-montserrat font-bold text-sm text-white"
          style={{ background: "var(--gold)" }}>
          Оставить заявку
        </a>
      </div>
    </div>
  );
}

// ── FloatingButtons ───────────────────────────────────
function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
      <a href={TG_LINK} target="_blank" rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110"
        style={{ background: "#2AABEE" }}
        title="Написать в Telegram">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.857l-2.965-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.983.702z"/>
        </svg>
      </a>
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110"
        style={{ background: "#25D366" }}
        title="Написать в WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}

const SERVICES_LIST = [
  { label: "🏠 Срочный выкуп квартиры", emoji: "🏠" },
  { label: "🏡 Выкуп дома / дачи / коммерции", emoji: "🏡" },
  { label: "💳 Кредитование физ. лица", emoji: "💳" },
  { label: "🏢 Кредитование юр. лица", emoji: "🏢" },
  { label: "🔒 Квартира в залоге / ипотека", emoji: "🔒" },
  { label: "💬 Консультация", emoji: "💬" },
];

// ── Contacts ──────────────────────────────────────────
function Contacts() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", comment: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          obj: form.service,
          comment: form.comment,
          source: "форма на сайте",
        }),
      });
    } catch (err) { console.error(err); }
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contacts" className="py-20" style={{ background: "var(--warm-cream)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="section-divider mx-auto mb-4" />
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl mb-3" style={{ color: "var(--text-dark)" }}>
            Оставьте заявку
          </h2>
          <p className="font-golos text-lg" style={{ color: "var(--text-muted)" }}>
            Перезвоним в течение <strong>10 минут</strong> и бесплатно проконсультируем
          </p>
        </div>

        {/* Urgency strip */}
        <div className="max-w-3xl mx-auto mb-8 px-6 py-4 rounded-2xl flex flex-wrap items-center justify-center gap-6 text-sm font-golos font-semibold"
          style={{ background: "linear-gradient(135deg, var(--green-dark), var(--green-mid))", color: "white" }}>
          {["✅ Оценка бесплатно", "⚡ Ответ за 10 минут", "💰 Деньги в день сделки"].map(t => (
            <span key={t}>{t}</span>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div>
            {sent ? (
              <div className="p-10 rounded-3xl text-center"
                style={{ background: "linear-gradient(135deg, var(--green-dark), var(--green-mid))" }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: "rgba(255,255,255,0.2)" }}>
                  <Icon name="CheckCircle" size={40} className="text-white" />
                </div>
                <h3 className="font-montserrat font-black text-2xl text-white mb-3">Заявка принята!</h3>
                <p className="font-golos text-white/80 mb-6">Наш эксперт перезвонит вам в течение 10 минут.<br/>Или напишите прямо сейчас — ответим быстрее!</p>
                <a href={TG_LINK} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl font-montserrat font-bold text-base text-white"
                  style={{ background: "#2AABEE" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.857l-2.965-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.983.702z"/>
                  </svg>
                  Написать в Telegram
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl space-y-5"
                style={{ border: "2px solid var(--green-light)", boxShadow: "0 8px 40px rgba(26,92,46,0.1)" }}>
                <div className="text-center mb-2">
                  <span className="font-montserrat font-black text-lg" style={{ color: "var(--green-dark)" }}>
                    Получить бесплатную консультацию
                  </span>
                </div>

                {/* Выбор услуги — сетка 2×3 */}
                <div>
                  <label className="block font-golos font-semibold text-sm mb-2" style={{ color: "var(--text-dark)" }}>
                    Что вас интересует? *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {SERVICES_LIST.map((s) => (
                      <button key={s.label} type="button"
                        onClick={() => setForm({ ...form, service: s.label })}
                        className="text-left px-3 py-2.5 rounded-xl font-golos text-xs font-medium transition-all border leading-snug"
                        style={{
                          background: form.service === s.label ? "var(--green-main)" : "var(--warm-bg)",
                          color: form.service === s.label ? "white" : "var(--text-dark)",
                          borderColor: form.service === s.label ? "var(--green-main)" : "var(--border)",
                        }}>
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <input type="text" required placeholder="Ваше имя *"
                      value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl font-golos text-sm focus:outline-none"
                      style={{ background: "var(--warm-bg)", border: "1.5px solid var(--border)", color: "var(--text-dark)" }} />
                  </div>
                  <div>
                    <input type="tel" required placeholder="Телефон *"
                      value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl font-golos text-sm focus:outline-none"
                      style={{ background: "var(--warm-bg)", border: "1.5px solid var(--border)", color: "var(--text-dark)" }} />
                  </div>
                </div>

                <button type="submit" disabled={loading || !form.service}
                  className="btn-green w-full py-4 rounded-xl font-montserrat font-bold text-lg text-white disabled:opacity-50">
                  {loading ? "Отправляем..." : "Получить бесплатную консультацию →"}
                </button>
                <p className="text-xs font-golos text-center" style={{ color: "var(--text-muted)" }}>
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="relative rounded-3xl overflow-hidden h-56">
              <img src={CITY_IMG} alt="Москва" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-end p-6"
                style={{ background: "linear-gradient(to top, rgba(26,92,46,0.7), transparent)" }}>
                <div>
                  <p className="font-montserrat font-bold text-white">Работаем 24/7 по всей России</p>
                  <p className="font-golos text-white/80 text-sm">Москва · МО · Санкт-Петербург · Все регионы</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: "Phone", label: "Телефон (звонок)", val: PHONE_DISPLAY, link: `tel:+${PHONE}` },
                { icon: "MessageCircle", label: "WhatsApp", val: PHONE_DISPLAY, link: WA_LINK },
                { icon: "Send", label: "Telegram", val: "@creditdevil", link: TG_LINK },
              ].map((c) => (
                <a key={c.label} href={c.link}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white card-hover group"
                  style={{ border: "1px solid var(--border)" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: "var(--green-light)" }}>
                    <Icon name={c.icon as "Phone"} size={22} style={{ color: "var(--green-main)" }} />
                  </div>
                  <div>
                    <div className="font-golos text-xs" style={{ color: "var(--text-muted)" }}>{c.label}</div>
                    <div className="font-golos font-semibold" style={{ color: "var(--text-dark)" }}>{c.val}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: "var(--green-dark)", color: "white" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.15)" }}>
                <span className="text-white font-montserrat font-black text-sm">СВ</span>
              </div>
              <div>
                <div className="font-montserrat font-black text-sm">СРОЧНЫЙ ВЫКУП</div>
                <div className="text-xs opacity-60">srochno-vykup.ru</div>
              </div>
            </div>
            <p className="font-golos text-sm leading-relaxed opacity-70">
              Срочный выкуп квартир и недвижимости. Кредитование физ. и юр. лиц. Честно и быстро.
            </p>
          </div>

          {[
            {
              title: "Услуги",
              links: ["Срочный выкуп квартир", "Квартиры под залог", "Кредитование юр. лиц", "Кредитование физ. лиц", "Выкуп домов"],
            },
            {
              title: "Регионы",
              links: ["Москва", "Московская область", "Санкт-Петербург", "Вся Россия (кредиты)"],
            },
            {
              title: "Контакты",
              links: [PHONE_DISPLAY, "@creditdevil (Telegram)", "WhatsApp: " + PHONE_DISPLAY, "Работаем 24/7"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-montserrat font-bold text-sm mb-4 opacity-90">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="font-golos text-sm opacity-60 hover:opacity-100 transition-opacity">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
          <p className="font-golos text-xs opacity-50">© 2026 srochno-vykup.ru · Все права защищены</p>
          <div className="flex gap-4">
            <a href="#" className="font-golos text-xs opacity-50 hover:opacity-80 transition-opacity">Политика конфиденциальности</a>
            <a href="#" className="font-golos text-xs opacity-50 hover:opacity-80 transition-opacity">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Page ──────────────────────────────────────────────
export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Calculator />
      <Cases />
      <Reviews />
      <About />
      <Blog />
      <FAQ />
      <Contacts />
      <Footer />
      <FloatingButtons />
      <StickyBar />
      <ExitPopup />
    </div>
  );
}