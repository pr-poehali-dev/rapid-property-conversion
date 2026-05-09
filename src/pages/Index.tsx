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
          <a href="tel:+74951234567" className="flex items-center gap-2 font-montserrat font-bold text-sm"
            style={{ color: scrolled ? "var(--green-dark)" : "white" }}>
            <Icon name="Phone" size={16} />
            +7 (495) 123-45-67
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
            <a href="tel:+74951234567"
              className="mt-2 flex items-center gap-2 py-3 px-3 font-montserrat font-bold"
              style={{ color: "var(--green-main)" }}>
              <Icon name="Phone" size={16} />+7 (495) 123-45-67
            </a>
            <a href="#contacts" className="btn-green text-center text-white py-3 rounded-xl font-montserrat font-bold mt-1">
              Оценить объект
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────
function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden hero-pattern">
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Недвижимость" className="w-full h-full object-cover opacity-15" />
      </div>
      <div className="absolute inset-0 hero-pattern opacity-92" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 trust-badge">
            <span className="pulse-dot w-2.5 h-2.5 rounded-full inline-block" style={{ background: "var(--gold)" }} />
            <span className="text-sm font-golos font-semibold" style={{ color: "var(--gold)" }}>
              Москва · МО · Санкт-Петербург · Вся Россия
            </span>
          </div>

          <h1 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl leading-tight text-white mb-6">
            Срочный выкуп{" "}
            <span style={{ color: "#f5c842" }}>квартир</span>
            <br />за 24 часа
          </h1>

          <p className="text-lg font-golos leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.82)" }}>
            Выкупаем квартиры, дома и коммерческую недвижимость. Деньги в день сделки.
            Кредитование под залог — физ. и юр. лица по всей России.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#calculator" className="btn-gold px-8 py-4 rounded-full font-montserrat font-bold text-lg text-white">
              Рассчитать выкуп
            </a>
            <a href="tel:+74951234567"
              className="flex items-center gap-2 px-8 py-4 rounded-full font-montserrat font-bold text-lg border-2 border-white text-white hover:bg-white/10 transition-colors">
              <Icon name="Phone" size={20} />
              Позвонить сейчас
            </a>
          </div>

          <div className="flex flex-wrap gap-6">
            {[
              { icon: "Clock", text: "Оценка за 2 часа" },
              { icon: "Banknote", text: "Деньги в день сделки" },
              { icon: "ShieldCheck", text: "Юридическая чистота" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
                  <Icon name={item.icon as "Clock"} size={16} className="text-white" />
                </div>
                <span className="text-white font-golos font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-2 gap-4">
          {[
            { num: "1 200+", label: "выкупленных объектов" },
            { num: "98%", label: "довольных клиентов" },
            { num: "24 ч", label: "среднее время сделки" },
            { num: "12 лет", label: "на рынке" },
          ].map((s) => (
            <div key={s.label} className="p-6 rounded-2xl text-center card-hover"
              style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)" }}>
              <div className="font-montserrat font-black text-3xl text-white mb-1">{s.num}</div>
              <div className="text-sm font-golos" style={{ color: "rgba(255,255,255,0.75)" }}>{s.label}</div>
            </div>
          ))}
        </div>
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
      desc: "Выкупаем квартиры в Москве, Московской области и Санкт-Петербурге. Оценка за 2 часа, деньги в день сделки.",
      tag: "Хит",
      tagColor: "var(--green-main)",
      geo: "Москва · МО · СПб",
    },
    {
      icon: "Lock",
      title: "Квартиры под залог",
      desc: "Выдаём кредиты под залог недвижимости. Работаем по всей России. Без подтверждения дохода.",
      tag: "Популярно",
      tagColor: "var(--gold)",
      geo: "Вся Россия",
    },
    {
      icon: "Briefcase",
      title: "Кредитование юр. лиц",
      desc: "Финансирование бизнеса под залог коммерческой и жилой недвижимости. Решение за 1 день.",
      tag: "",
      tagColor: "",
      geo: "Вся Россия",
    },
    {
      icon: "User",
      title: "Кредитование физ. лиц",
      desc: "Потребительские кредиты под залог квартиры или дома. Ставки от 12% годовых, срок до 20 лет.",
      tag: "",
      tagColor: "",
      geo: "Вся Россия",
    },
    {
      icon: "Home",
      title: "Выкуп домов и дач",
      desc: "Срочный выкуп загородной недвижимости — дома, коттеджи, таунхаусы, дачи.",
      tag: "",
      tagColor: "",
      geo: "Москва · МО",
    },
    {
      icon: "Store",
      title: "Коммерческая недвижимость",
      desc: "Выкупаем офисы, склады, торговые помещения. Быстрая оценка, сделка за 3 дня.",
      tag: "Новинка",
      tagColor: "#7c5ab8",
      geo: "Москва · МО · СПб",
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
  const [creditRate, setCreditRate] = useState(14);

  const typeCoeff = { flat: 0.88, house: 0.82, commercial: 0.78 }[propType];
  const marketPrice = area * pricePerM;
  const buyoutSum = Math.round(marketPrice * typeCoeff);
  const buyoutPercent = Math.round(typeCoeff * 100);

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
                  <p className="font-golos text-white/80 mb-1 text-sm">Мы предложим</p>
                  <div className="font-montserrat font-black text-4xl sm:text-5xl text-white mb-2">{fmt(buyoutSum)}</div>
                  <div className="inline-block px-4 py-1.5 rounded-full font-golos font-bold text-sm mb-6"
                    style={{ background: "rgba(255,255,255,0.15)", color: "#f5c842" }}>
                    {buyoutPercent}% от рыночной цены
                  </div>
                  <div className="space-y-2 text-left mb-6">
                    {[
                      `Площадь: ${area} м²`,
                      `Цена м²: ${fmt(pricePerM)}`,
                      `Коэффициент выкупа: ${buyoutPercent}%`,
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
                  <input type="range" min={8} max={30} step={0.5} value={creditRate}
                    onChange={(e) => setCreditRate(Number(e.target.value))} className="w-full" />
                  <div className="flex justify-between text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                    <span>8%</span><span>30%</span>
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

// ── About ──────────────────────────────────────────────
function About() {
  const advantages = [
    { icon: "Award", title: "12 лет опыта", desc: "На рынке недвижимости с 2012 года, более 1200 сделок" },
    { icon: "Users", title: "Команда экспертов", desc: "Юристы, оценщики, риэлторы с опытом от 7 лет" },
    { icon: "Shield", title: "Юридическая чистота", desc: "Все сделки через Росреестр, без рисков для продавца" },
    { icon: "Zap", title: "Скорость", desc: "От звонка до денег на счёте — от 24 часов" },
  ];

  return (
    <section id="about" className="py-20" style={{ background: "var(--warm-bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-divider mb-6" />
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl mb-6" style={{ color: "var(--text-dark)" }}>О компании</h2>
            <p className="font-golos text-lg leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
              Мы — профессиональная компания по срочному выкупу недвижимости. С 2012 года помогаем
              людям быстро и честно решать имущественные вопросы: выкупаем квартиры, дома,
              коммерческие объекты в Москве, МО и Санкт-Петербурге.
            </p>
            <p className="font-golos leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
              Кредитуем физических и юридических лиц под залог недвижимости по всей России.
              Работаем прозрачно — без скрытых комиссий и затянутых сроков.
            </p>
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
      q: "В каких городах вы работаете?",
      a: "Срочный выкуп квартир — Москва, вся Московская область и Санкт-Петербург. Кредитование под залог недвижимости — по всей России.",
    },
    {
      q: "Какой процент от рыночной стоимости вы платите?",
      a: "Как правило 80–92% от рыночной стоимости. Точный процент зависит от типа объекта, локации, состояния и срочности. Чем больше времени — тем выше цена.",
    },
    {
      q: "Работаете ли вы с ипотечными квартирами?",
      a: "Да. Мы полностью закрываем ипотеку перед банком, а разницу между выкупной ценой и остатком долга выплачиваем вам наличными или переводом.",
    },
    {
      q: "Что нужно из документов?",
      a: "Паспорт, выписка из ЕГРН (или свидетельство о собственности), технический паспорт. Если квартира в ипотеке — справка об остатке долга. Мы помогаем с оформлением.",
    },
    {
      q: "Вы работаете с юридическими лицами?",
      a: "Да, кредитуем юридические лица под залог коммерческой и жилой недвижимости по всей России. Сумма от 1 млн ₽, срок решения — 1 рабочий день.",
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

// ── Contacts ──────────────────────────────────────────
function Contacts() {
  const [form, setForm] = useState({ name: "", phone: "", obj: "", comment: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacts" className="py-20" style={{ background: "var(--warm-cream)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="section-divider mx-auto mb-4" />
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl mb-4" style={{ color: "var(--text-dark)" }}>
            Получить оценку объекта
          </h2>
          <p className="font-golos text-lg" style={{ color: "var(--text-muted)" }}>
            Оставьте заявку — перезвоним в течение 10 минут
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            {sent ? (
              <div className="p-10 rounded-3xl text-center"
                style={{ background: "linear-gradient(135deg, var(--green-dark), var(--green-mid))" }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: "rgba(255,255,255,0.2)" }}>
                  <Icon name="CheckCircle" size={40} className="text-white" />
                </div>
                <h3 className="font-montserrat font-black text-2xl text-white mb-3">Заявка принята!</h3>
                <p className="font-golos text-white/80">Наш эксперт перезвонит вам в течение 10 минут</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl space-y-5"
                style={{ border: "1px solid var(--border)" }}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-golos font-semibold text-sm mb-2" style={{ color: "var(--text-dark)" }}>Ваше имя *</label>
                    <input type="text" required placeholder="Иван Иванов"
                      value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl font-golos text-sm focus:outline-none"
                      style={{ background: "var(--warm-bg)", border: "1.5px solid var(--border)", color: "var(--text-dark)" }} />
                  </div>
                  <div>
                    <label className="block font-golos font-semibold text-sm mb-2" style={{ color: "var(--text-dark)" }}>Телефон *</label>
                    <input type="tel" required placeholder="+7 (___) ___-__-__"
                      value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl font-golos text-sm focus:outline-none"
                      style={{ background: "var(--warm-bg)", border: "1.5px solid var(--border)", color: "var(--text-dark)" }} />
                  </div>
                </div>
                <div>
                  <label className="block font-golos font-semibold text-sm mb-2" style={{ color: "var(--text-dark)" }}>Объект недвижимости</label>
                  <input type="text" placeholder="Квартира 2-комн., Москва, Нагорная"
                    value={form.obj} onChange={(e) => setForm({ ...form, obj: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl font-golos text-sm focus:outline-none"
                    style={{ background: "var(--warm-bg)", border: "1.5px solid var(--border)", color: "var(--text-dark)" }} />
                </div>
                <div>
                  <label className="block font-golos font-semibold text-sm mb-2" style={{ color: "var(--text-dark)" }}>Комментарий</label>
                  <textarea rows={3} placeholder="Опишите ситуацию: ипотека, залог, срочность..."
                    value={form.comment} onChange={(e) => setForm({ ...form, comment: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl font-golos text-sm focus:outline-none resize-none"
                    style={{ background: "var(--warm-bg)", border: "1.5px solid var(--border)", color: "var(--text-dark)" }} />
                </div>
                <button type="submit" className="btn-green w-full py-4 rounded-xl font-montserrat font-bold text-lg text-white">
                  Получить оценку объекта
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
                  <p className="font-montserrat font-bold text-white">Москва, Проспект Мира, 45</p>
                  <p className="font-golos text-white/80 text-sm">Пн-Вс: 08:00 – 22:00</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: "Phone", label: "Телефон", val: "+7 (495) 123-45-67", link: "tel:+74951234567" },
                { icon: "MessageCircle", label: "WhatsApp / Telegram", val: "+7 (916) 123-45-67", link: "#" },
                { icon: "Mail", label: "Email", val: "info@srochno-vykup.ru", link: "mailto:info@srochno-vykup.ru" },
                { icon: "MapPin", label: "Адрес", val: "Москва, пр. Мира, 45, офис 301", link: "#" },
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
              links: ["+7 (495) 123-45-67", "info@srochno-vykup.ru", "Москва, пр. Мира, 45", "Пн-Вс: 08:00–22:00"],
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
      <About />
      <Blog />
      <FAQ />
      <Contacts />
      <Footer />
    </div>
  );
}
