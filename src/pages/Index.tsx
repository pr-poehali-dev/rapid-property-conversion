import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Icon from '@/components/ui/icon';

const PHOTO_TECH = 'https://cdn.poehali.dev/projects/91e8ab1f-16a6-4a0b-bdfb-9dbf57b7ed9c/files/1c6f006a-6fe0-43cd-9548-0124d8240c9c.jpg';
const PHOTO_EXPERT = 'https://cdn.poehali.dev/projects/91e8ab1f-16a6-4a0b-bdfb-9dbf57b7ed9c/files/e414faf9-f7d5-4283-98d5-2e85fa350939.jpg';

const WA_LINK = 'https://wa.me/79013456008?text=Хочу%20оценить%20технику';
const TG_LINK = 'https://t.me/richsmm1';

/* ─── Мини-форма заявки ─── */
function QuickForm() {
  const [form, setForm] = useState({ type: '', city: '', phone: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 700));
    setLoading(false);
    setSent(true);
  };

  if (sent) return (
    <div className="p-6 rounded-2xl text-center" style={{ background: '#F0FDF4', border: '1.5px solid #86EFAC' }}>
      <div className="text-3xl mb-2">✅</div>
      <p className="font-bold text-lg" style={{ color: '#16A34A' }}>Заявка принята!</p>
      <p className="text-sm mt-1" style={{ color: '#4ADE80' }}>Перезвоним за 15 минут</p>
    </div>
  );

  return (
    <form onSubmit={submit} className="flex flex-col gap-3">
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
      <select required value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}
        className="w-full px-4 py-3 rounded-lg text-sm border outline-none"
        style={{ borderColor: 'var(--border-dark)', color: form.type ? 'var(--navy)' : 'var(--text-muted)', background: '#fff' }}>
        <option value="">Тип техники</option>
        <option>Ноутбук</option>
        <option>ПК / Системный блок</option>
        <option>Смартфон / Планшет</option>
        <option>Монитор / ТВ</option>
        <option>Принтер / МФУ</option>
        <option>Другое</option>
      </select>
      <input required type="text" placeholder="Ваш город" value={form.city}
        onChange={e => setForm({ ...form, city: e.target.value })}
        className="w-full px-4 py-3 rounded-lg text-sm border outline-none"
        style={{ borderColor: 'var(--border-dark)', color: 'var(--navy)', background: '#fff' }} />
      <input required type="tel" placeholder="+7 (___) ___-__-__" value={form.phone}
        onChange={e => setForm({ ...form, phone: e.target.value })}
        className="w-full px-4 py-3 rounded-lg text-sm border outline-none"
        style={{ borderColor: 'var(--border-dark)', color: 'var(--navy)', background: '#fff' }} />
      <button type="submit" disabled={loading} className="btn-primary justify-center w-full py-3 text-base">
        {loading ? <Icon name="Loader2" size={18} className="animate-spin" /> : <><Icon name="Zap" size={16} />Узнать цену</>}
      </button>
      <p className="text-center text-xs" style={{ color: 'var(--text-muted)' }}>
        Или напишите нам: <a href={WA_LINK} className="font-semibold" style={{ color: 'var(--orange)' }}>WhatsApp</a>
        {' / '}<a href={TG_LINK} className="font-semibold" style={{ color: 'var(--orange)' }}>Telegram</a>
      </p>
    </form>
  );
}

const categories = [
  { emoji: '💻', title: 'Ноутбуки и ПК', desc: 'Любые бренды — Apple, ASUS, Lenovo, HP, Dell. Рабочие и после ремонта. Оценим по фото.' },
  { emoji: '📱', title: 'Смартфоны и планшеты', desc: 'iPhone, Samsung, Xiaomi и другие. Принимаем даже с разбитым экраном или не включающиеся.' },
  { emoji: '🖥️', title: 'Мониторы и телевизоры', desc: 'ЖК, LED-мониторы, смарт-телевизоры. Вывезем оптом при большом количестве.' },
  { emoji: '🖨️', title: 'Оргтехника', desc: 'Принтеры, МФУ, копиры, серверное оборудование. Выгодно для офисов при переезде.' },
];

const advantages = [
  { icon: 'ShieldCheck', title: 'Честная оценка', desc: 'Называем цену заранее и не занижаем её при встрече. Гарантируем честный выкуп.' },
  { icon: 'Truck', title: 'Быстрый выезд', desc: 'В Москве и МО — выезд оценщика в течение 2 часов в удобное для вас время.' },
  { icon: 'FileText', title: 'Официально', desc: 'Заключаем договор купли-продажи. Для юрлиц — акт приёма-передачи и помощь с ОС-4.' },
  { icon: 'Package', title: 'Удобно для регионов', desc: 'Понятная схема через СДЭК с наложенным платежом. Оценка по видеосвязи или фото.' },
];

export default function Index() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Header />

      {/* ══════════ HERO ══════════ */}
      <section id="home" style={{ background: 'var(--bg)' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-14 md:py-20">

            {/* Левая колонка — текст + буллиты + форма */}
            <div>
              <div className="badge badge-orange mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block" />
                Оценка за 5 минут · Выезд сегодня
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-[2.65rem] font-extrabold leading-tight mb-4"
                style={{ color: 'var(--navy)' }}>
                Скупка компьютерной<br />
                техники в Москве —<br />
                <span style={{ color: 'var(--orange)' }}>выкупим дорого</span> и<br />
                вывезем бесплатно
              </h1>

              <p className="text-base mb-6" style={{ color: 'var(--text-muted)', lineHeight: 1.75 }}>
                Принимаем ноутбуки, ПК, мониторы, телефоны.<br />
                Оплата сразу. Работаем с физлицами и организациями.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                {[
                  'Оценка за 5 минут по фото или видео',
                  'Бесплатный выезд по Москве — сегодня',
                  'Отправка из регионов через СДЭК',
                ].map(t => (
                  <div key={t} className="check-item">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: '#F0FDF4', border: '1.5px solid #86EFAC' }}>
                      <Icon name="Check" size={11} className="text-green-600" />
                    </div>
                    <span className="font-medium" style={{ color: 'var(--navy-mid)' }}>{t}</span>
                  </div>
                ))}
              </div>

              {/* Форма — мобильная версия */}
              <div className="lg:hidden">
                <div className="card p-6 mb-6">
                  <p className="font-bold text-base mb-4" style={{ color: 'var(--navy)' }}>Узнайте цену вашей техники</p>
                  <QuickForm />
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <Icon name="MessageCircle" size={16} />
                  Написать в WhatsApp
                </a>
                <a href="tel:+79013456008" className="btn-ghost">
                  <Icon name="Phone" size={15} />
                  +7 (901) 345-60-08
                </a>
              </div>
            </div>

            {/* Правая колонка — фото + форма desktop */}
            <div className="flex flex-col gap-5">
              {/* Фото */}
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img src={PHOTO_TECH} alt="Скупка техники" className="w-full h-full object-cover" />
                {/* Плашка поверх */}
                <div className="absolute top-4 left-4">
                  <div className="badge badge-green">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                    Принимаем любую технику
                  </div>
                </div>
              </div>

              {/* Форма — desktop */}
              <div className="card p-6 hidden lg:block">
                <p className="font-bold text-base mb-4" style={{ color: 'var(--navy)' }}>Узнайте цену вашей техники</p>
                <QuickForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ ПОЛОСКА ДОВЕРИЯ ══════════ */}
      <div style={{ background: 'var(--navy)', padding: '20px 0' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { num: '500+', label: 'клиентов' },
              { num: '5 мин', label: 'оценка' },
              { num: '2 часа', label: 'выезд в МСК' },
              { num: '0 ₽', label: 'вывоз в МСК' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-black" style={{ color: 'var(--orange)' }}>{s.num}</div>
                <div className="text-xs mt-0.5" style={{ color: '#94A3B8' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════ ГЕОГРАФИЯ ══════════ */}
      <section id="geo" className="section section-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl mb-2">Работаем по всей России</h2>
            <p style={{ color: 'var(--text-muted)' }}>Выберите подходящий вам формат</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            <div className="card p-7">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: '#F0FDF4', border: '1.5px solid #86EFAC' }}>
                <Icon name="MapPin" size={20} className="text-green-600" />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--navy)' }}>Москва и МО</h3>
              <p className="text-sm mb-4" style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Бесплатный выезд оценщика в течение <strong style={{ color: 'var(--navy)' }}>2 часов</strong>.
                Осмотр техники на месте. Оплата наличными или переводом — <strong style={{ color: 'var(--navy)' }}>сразу</strong>.
              </p>
              <a href="tel:+79013456008" className="btn-outline text-sm">
                <Icon name="Phone" size={14} />
                Вызвать оценщика
              </a>
            </div>
            <div className="card p-7">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: '#EFF6FF', border: '1.5px solid #BFDBFE' }}>
                <Icon name="Package" size={20} style={{ color: 'var(--blue)' }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--navy)' }}>Вся Россия</h3>
              <p className="text-sm mb-4" style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Оценка по <strong style={{ color: 'var(--navy)' }}>видеосвязи или фото</strong>.
                Вы отправляете технику СДЭК. Мы проверяем и переводим деньги —
                <strong style={{ color: 'var(--navy)' }}> в день получения</strong>.
              </p>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
                <Icon name="MessageCircle" size={14} />
                Оценить по фото
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ ЧТО ПРИНИМАЕМ ══════════ */}
      <section id="categories" className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl mb-2">Что мы выкупаем дорого</h2>
            <p style={{ color: 'var(--text-muted)' }}>Принимаем любую технику в любом состоянии</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map(c => (
              <div key={c.title} className="card p-6 flex flex-col">
                <div className="text-4xl mb-4">{c.emoji}</div>
                <h3 className="font-bold text-base mb-2" style={{ color: 'var(--navy)' }}>{c.title}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-muted)' }}>{c.desc}</p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  className="mt-4 text-sm font-semibold flex items-center gap-1" style={{ color: 'var(--orange)' }}>
                  Оценить эту технику <Icon name="ArrowRight" size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ КАК РАБОТАЕМ ══════════ */}
      <section id="how" className="section section-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl mb-2">3 шага до денег в кармане</h2>
            <p style={{ color: 'var(--text-muted)' }}>Просто и прозрачно</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-6">
              {[
                { n: '1', icon: 'Camera', title: 'Заявка + Фото или видео', desc: 'Заполните форму выше или пришлите фото в WhatsApp. Можно прямо сейчас — ответим в течение 5 минут.' },
                { n: '2', icon: 'Star', title: 'Оценка эксперта', desc: 'Наш специалист называет точную цену. Не соглашаетесь — никаких обязательств. Честно.' },
                { n: '3', icon: 'Banknote', title: 'Сделка и оплата', desc: 'Москва — приезжаем и платим сразу. Регионы — отправляете СДЭК, мы переводим деньги в день получения.' },
              ].map(s => (
                <div key={s.n} className="flex gap-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-black text-lg"
                    style={{ background: 'var(--orange)', color: '#fff', fontFamily: 'Inter, sans-serif' }}>
                    {s.n}
                  </div>
                  <div>
                    <div className="font-bold text-base mb-1" style={{ color: 'var(--navy)' }}>{s.title}</div>
                    <p className="text-sm" style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img src={PHOTO_EXPERT} alt="Оценка техники" className="w-full h-full object-cover" />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(30,41,59,0.6) 0%, transparent 60%)' }} />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="inline-flex items-center gap-2 bg-white rounded-lg px-4 py-2.5 shadow-lg">
                  <Icon name="ShieldCheck" size={16} style={{ color: 'var(--orange)' }} />
                  <span className="text-sm font-semibold" style={{ color: 'var(--navy)' }}>
                    Договор купли-продажи — всегда
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ ДЛЯ ОРГАНИЗАЦИЙ ══════════ */}
      <section id="business" className="section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="badge badge-orange mb-4">Для юридических лиц</div>
              <h2 className="text-2xl md:text-3xl mb-4">Помощь в списании техники для организаций</h2>
              <p className="text-base mb-6" style={{ color: 'var(--text-muted)', lineHeight: 1.75 }}>
                Поможем оформить документы для списания оргтехники с баланса по форме ОС-4.
                Заберём оборудование, освободим склад. Без лишних формальностей.
              </p>
              <div className="flex flex-col gap-3 mb-6">
                {[
                  'Шаблоны приказа и акта списания (ОС-4)',
                  'Акт приёма-передачи техники',
                  'Выезд в Москве — в течение 24 часов',
                  'Удаление данных с жёстких дисков по запросу',
                  'Регионы: удалённое оформление + отправка ТК',
                ].map(t => (
                  <div key={t} className="check-item">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: '#F0FDF4', border: '1.5px solid #86EFAC' }}>
                      <Icon name="Check" size={11} className="text-green-600" />
                    </div>
                    <span style={{ color: 'var(--navy-mid)' }}>{t}</span>
                  </div>
                ))}
              </div>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Icon name="Building2" size={16} />
                Оставить заявку для юрлица
              </a>
              <p className="text-xs mt-4" style={{ color: 'var(--text-muted)' }}>
                * Мы не утилизируем отходы, а занимаемся выкупом и помощью в списании. Для официальной утилизации обращайтесь к лицензированным операторам.
              </p>
            </div>
            <div className="card p-7 section-alt rounded-2xl border-none">
              <h3 className="font-bold text-lg mb-5" style={{ color: 'var(--navy)' }}>Написать нам напрямую</h3>
              <div className="flex flex-col gap-3">
                <a href="tel:+79013456008"
                  className="flex items-center gap-3 p-4 rounded-xl border bg-white"
                  style={{ borderColor: 'var(--border-color)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: 'var(--orange-bg)' }}>
                    <Icon name="Phone" size={18} style={{ color: 'var(--orange)' }} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: 'var(--navy)' }}>+7 (901) 345-60-08</div>
                    <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Пн–Вс, 9:00–21:00</div>
                  </div>
                </a>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border bg-white"
                  style={{ borderColor: 'var(--border-color)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: '#F0FDF4' }}>
                    <Icon name="MessageCircle" size={18} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: 'var(--navy)' }}>WhatsApp</div>
                    <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Быстрый ответ</div>
                  </div>
                </a>
                <a href={TG_LINK} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border bg-white"
                  style={{ borderColor: 'var(--border-color)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: '#EFF6FF' }}>
                    <Icon name="Send" size={18} style={{ color: 'var(--blue)' }} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: 'var(--navy)' }}>Telegram @richsmm1</div>
                    <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Пишите в любое время</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ ПОЧЕМУ МЫ ══════════ */}
      <section id="why" className="section section-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl mb-2">Почему нам доверяют</h2>
            <p style={{ color: 'var(--text-muted)' }}>4 причины работать именно с нами</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {advantages.map(a => (
              <div key={a.title} className="card p-6 bg-white">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'var(--orange-bg)' }}>
                  <Icon name={a.icon as 'ShieldCheck'} size={20} style={{ color: 'var(--orange)' }} />
                </div>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--navy)' }}>{a.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="section" id="contact">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl mb-3">Готовы оценить вашу технику?</h2>
          <p className="text-base mb-8" style={{ color: 'var(--text-muted)' }}>
            Пришлите фото в WhatsApp или позвоните — ответим за 5 минут.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Icon name="MessageCircle" size={16} />
              Написать в WhatsApp
            </a>
            <a href="tel:+79013456008" className="btn-outline">
              <Icon name="Phone" size={16} />
              +7 (901) 345-60-08
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
