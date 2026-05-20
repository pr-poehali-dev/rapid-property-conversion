import { useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Icon from '@/components/ui/icon';
import { StickyCtaBar, ExitIntentPopup, LiveActivityTicker, UrgencyBanner, ReviewsSection } from '@/components/ConversionWidgets';

/* ─── Фото ─── */
const IMG_SPECIALIST = 'https://cdn.poehali.dev/projects/91e8ab1f-16a6-4a0b-bdfb-9dbf57b7ed9c/files/87d54b10-4c92-4281-ad4a-865aeb28332d.jpg';
const IMG_STACK       = 'https://cdn.poehali.dev/projects/91e8ab1f-16a6-4a0b-bdfb-9dbf57b7ed9c/files/53041003-ad92-479c-ac61-a2798e1d77ba.jpg';
const IMG_CASH        = 'https://cdn.poehali.dev/projects/91e8ab1f-16a6-4a0b-bdfb-9dbf57b7ed9c/files/35b036f7-e51a-4b4b-9b65-c49c978ed82b.jpg';
const IMG_SDEK        = 'https://cdn.poehali.dev/projects/91e8ab1f-16a6-4a0b-bdfb-9dbf57b7ed9c/files/a6a1f271-a4b3-4006-a93c-6b34004fd094.jpg';
const IMG_HAPPY       = 'https://cdn.poehali.dev/projects/91e8ab1f-16a6-4a0b-bdfb-9dbf57b7ed9c/files/c1f82ee4-36f9-41f5-b073-9c31c041fd3a.jpg';

const WA   = 'https://wa.me/79013456008?text=Здравствуйте!%20Хочу%20оценить%20технику.';
const TG   = 'https://t.me/richsmm1';
const TEL  = 'tel:+79013456008';

/* ─── Форма заявки ─── */
function LeadForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState({ type: '', city: '', phone: '', comment: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://functions.poehali.dev/6a37cbfd-6240-4d83-bcd0-ed23b3616438", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, variant: 'fizlic' }),
      });
    } catch (_e) { /* silent */ }
    setLoading(false);
    setSent(true);
  };

  if (sent) return (
    <div className="text-center py-6">
      <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center"
        style={{ background: '#F0FDF4', border: '2px solid #86EFAC' }}>
        <Icon name="CheckCircle2" size={30} className="text-green-600" />
      </div>
      <p className="text-lg font-bold" style={{ color: 'var(--navy)' }}>Заявка принята!</p>
      <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
        Перезвоним в течение 15 минут
      </p>
    </div>
  );

  return (
    <form onSubmit={submit} className="flex flex-col gap-3">
      <input type="text" name="_hp" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className={`grid gap-3 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <select required value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}
          className="w-full px-4 py-3 rounded-xl text-sm border outline-none font-medium"
          style={{ borderColor: 'var(--border-dark)', color: form.type ? 'var(--navy)' : 'var(--text-muted)', background: '#fff' }}>
          <option value="">- Тип техники -</option>
          <option>Ноутбук</option>
          <option>ПК / Системный блок</option>
          <option>Смартфон / Планшет</option>
          <option>Монитор / Телевизор</option>
          <option>Принтер / МФУ</option>
          <option>Несколько позиций</option>
          <option>Другое</option>
        </select>
        <input required type="text" placeholder="Ваш город" value={form.city}
          onChange={e => setForm({ ...form, city: e.target.value })}
          className="w-full px-4 py-3 rounded-xl text-sm border outline-none"
          style={{ borderColor: 'var(--border-dark)', color: 'var(--navy)', background: '#fff' }} />
      </div>
      <input required type="tel" placeholder="+7 (___) ___-__-__" value={form.phone}
        onChange={e => setForm({ ...form, phone: e.target.value })}
        className="w-full px-4 py-3 rounded-xl text-sm border outline-none"
        style={{ borderColor: 'var(--border-dark)', color: 'var(--navy)', background: '#fff' }} />
      {!compact && (
        <input type="text" placeholder="Марка / модель (необязательно)" value={form.comment}
          onChange={e => setForm({ ...form, comment: e.target.value })}
          className="w-full px-4 py-3 rounded-xl text-sm border outline-none"
          style={{ borderColor: 'var(--border-dark)', color: 'var(--navy)', background: '#fff' }} />
      )}
      <button type="submit" disabled={loading} className="btn-primary justify-center w-full py-3.5 text-base rounded-xl">
        {loading
          ? <Icon name="Loader2" size={19} className="animate-spin" />
          : <><Icon name="Zap" size={17} />Узнать цену бесплатно</>}
      </button>
      <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
        Ответим за 15 минут -{'  '}
        <a href={TG} target="_blank" rel="noopener noreferrer" className="font-semibold" style={{ color: 'var(--orange)' }}>Telegram</a>
        {' / '}
        <a href={WA} target="_blank" rel="noopener noreferrer" className="font-semibold" style={{ color: 'var(--orange)' }}>WhatsApp</a>
      </p>
    </form>
  );
}

/* ─── Закрытие болей клиента ─── */
const PAINS_FIZLIC = [
  { q: '«Не занизят ли цену при встрече?»', a: 'Называем цену ДО встречи - по фото или видео. Встреча только для проверки и расчёта. Торг исключён.' },
  { q: '«А вдруг обманут и не заплатят?»', a: 'Работаем 12 лет. При каждой сделке можем оформить договор купли-продажи. Оплата сразу - наличными, картой, на р/с или криптой.' },
  { q: '«Далеко везти, неудобно»', a: 'Из Москвы - выезд к вам. Из регионов - отправьте СДЭК, Яндекс или Авито доставкой с наложенным платежом: получите деньги в ПВЗ.' },
  { q: '«Техника нерабочая, примете?»', a: 'Да. Нерабочую, в дефектах, без зарядки - всё принимаем. Цена зависит от состояния, но отказов нет.' },
  { q: '«Нужно ли куда-то ехать?»', a: 'Необязательно. Оценка по WhatsApp или видеозвонку. Отправка из любого города через СДЭК, Яндекс или Авито.' },
  { q: '«Долго ждать денег?»', a: 'Москва: оплата в момент передачи. Регионы: деньги придут в день, когда мы получим посылку.' },
];

const PAINS_YURLICO = [
  { q: '«Кто оформит документы?»', a: 'По запросу и необходимости - поможем подготовить нужные документы. Шаблоны приказа и акта ОС-4 предоставим, акт приёма-передачи оформим при каждом вывозе.' },
  { q: '«Нужна ли официальная утилизация?»', a: 'Зависит от ваших требований. Для внутреннего списания - наши документы достаточны. Для лицензированной утилизации - направим к партнёрам.' },
  { q: '«Много техники - как вывезти?»', a: 'Организуем вывоз в удобное время. В Москве и МО - договоримся о логистике, при необходимости привлечём грузоперевозчика. Для регионов - отправка любой транспортной компанией.' },
  { q: '«Данные на дисках не утекут?»', a: 'По запросу - полностью форматируем рабочие ПК и ноутбуки или физически уничтожаем нерабочие носители. Подтверждаем актом.' },
  { q: '«Это законно и официально?»', a: 'Да. Договор, акт приёма-передачи, оплата на счёт или наличными. Всё прозрачно.' },
];

const DELIVERY_METHODS = [
  { icon: 'MapPin', title: 'Приедете к нам', desc: 'Москва и МО. Адрес - по договорённости. Оплата сразу.' },
  { icon: 'Truck', title: 'Выедем к вам', desc: 'Москва и МО, выкуп от 30 000 ₽. Ниже - обсуждаем индивидуально.' },
  { icon: 'Package', title: 'СДЭК / Яндекс / Авито', desc: 'Из любого города. Наложенный платёж - деньги при получении.' },
  { icon: 'Video', title: 'Видеосвязь + доставка', desc: 'Не в России? Оценим онлайн, вы отправите курьером.' },
];

const ACCEPTS = [
  { emoji: '💻', cat: 'Ноутбуки', brands: 'Apple, ASUS, Lenovo, Dell, HP, MSI, Acer', note: 'Рабочие и нет, любой год' },
  { emoji: '🖥️', cat: 'ПК и комплектующие', brands: 'Системные блоки, видеокарты, процессоры, ОЗУ', note: 'Отдельно и в сборе' },
  { emoji: '📱', cat: 'Смартфоны', brands: 'iPhone, Samsung, Xiaomi, Huawei, OnePlus', note: 'С разбитым экраном тоже' },
  { emoji: '🖨️', cat: 'Оргтехника', brands: 'Принтеры HP, Canon, Xerox, МФУ, копиры', note: 'Для офисов и юрлиц' },
  { emoji: '📺', cat: 'Мониторы и ТВ', brands: 'LG, Samsung, Dell, BenQ, любые ЖК и LED', note: 'ЭЛТ тоже забираем' },
  { emoji: '🗄️', cat: 'Серверное', brands: 'Серверы, СХД, сетевое оборудование', note: 'Корпоративные парки' },
];

const WHY_US = [
  { icon: 'ShieldCheck', title: 'Цена не меняется', desc: 'Назвали цену - такую и заплатим. Без «уценок при осмотре».' },
  { icon: 'Clock', title: 'Быстро', desc: 'Ответ за 15 минут. Выезд в Москве от 2 часов. Деньги в день сделки.' },
  { icon: 'FileText', title: 'Документы', desc: 'Для юрлиц по запросу - акт ОС-4 и приёма-передачи. Физлицам - по желанию.' },
  { icon: 'Globe', title: 'Вся Россия', desc: 'Принимаем из любого города через СДЭК, Яндекс доставку, Авито.' },
  { icon: 'Recycle', title: 'Любое состояние', desc: 'Рабочее, сломанное, без документов, без зарядки - берём всё.' },
  { icon: 'Banknote', title: 'Любой способ оплаты', desc: 'Наличные, карта, расчётный счёт или крипта. Как удобно вам.' },
];

export default function Index() {
  const formRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <UrgencyBanner />
      <Header />

      {/* ══ HERO ══ */}
      <section id="home" style={{ background: 'linear-gradient(160deg, #FFFFFF 60%, #FFF7ED 100%)' }}>
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Текст */}
            <div>
              <div className="badge badge-orange mb-5 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse inline-block" />
                Работаем по всей России · Ответ за 15 минут
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-5"
                style={{ color: 'var(--navy)', letterSpacing: '-0.02em' }}>
                Утилизация и<br />
                <span style={{ color: 'var(--orange)' }}>скупка техники</span><br />
                по всей России
              </h1>

              <p className="text-base md:text-lg mb-6" style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                Ноутбуки, ПК, смартфоны, оргтехника - оценим по фото и видео за 5 минут.
                Москва: выезд или самопривоз. Регионы: СДЭК / Яндекс / Авито доставка.
              </p>

              <div className="flex flex-col gap-2.5 mb-8">
                {[
                  'Оценка по фото/видео - цена не изменится при встрече',
                  'Оплата сразу - наличными или переводом на карту',
                  'Москва: выезд от 2 часов, выкуп от 30 000 ₽',
                  'Регионы: СДЭК / Яндекс / Авито доставка с наложенным платежом',
                  'Нерабочая, без документов, «убитая» - принимаем всё',
                ].map(t => (
                  <div key={t} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center"
                      style={{ background: '#F0FDF4', border: '1.5px solid #86EFAC' }}>
                      <Icon name="Check" size={11} className="text-green-600" />
                    </div>
                    <span className="text-sm font-medium" style={{ color: 'var(--navy-mid)' }}>{t}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a href={TG} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <Icon name="Send" size={17} />
                  Написать в Telegram
                </a>
                <a href={TEL} className="btn-ghost">
                  <Icon name="Phone" size={15} />
                  +7 (901) 345-60-08
                </a>
              </div>
            </div>

            {/* Форма + фото */}
            <div className="flex flex-col gap-4">
              {/* Фото специалиста */}
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img src={IMG_SPECIALIST} alt="Специалист оценивает технику" className="w-full h-full object-cover" />
                <div className="absolute bottom-3 left-3">
                  <div className="badge badge-green text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
                    Онлайн-оценка доступна сейчас
                  </div>
                </div>
              </div>

              {/* Форма */}
              <div className="card p-6" ref={formRef} id="form">
                <p className="font-bold text-base mb-4" style={{ color: 'var(--navy)' }}>
                  Оцени свою технику за 60 секунд
                </p>
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ДОВЕРИЕ-ПОЛОСКА ══ */}
      <div style={{ background: 'var(--navy)', padding: '18px 0' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {[
              { n: '2500+', l: 'сделок' },
              { n: '12 лет', l: 'на рынке' },
              { n: '5 мин', l: 'оценка' },
              { n: '100%', l: 'оплата в день' },
              { n: '0 ₽', l: 'скрытых платежей' },
            ].map(s => (
              <div key={s.l} className="text-center">
                <div className="text-xl font-black" style={{ color: 'var(--orange)' }}>{s.n}</div>
                <div className="text-xs" style={{ color: '#94A3B8' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ КАК ДОСТАВИТЬ / ФОРМАТЫ РАБОТЫ ══ */}
      <section id="delivery" className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="badge badge-orange mb-3 inline-flex">Логистика</span>
            <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color: 'var(--navy)' }}>
              Работаем по всей России - 4 способа
            </h2>
            <p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>
              Выберите удобный вариант - или совместим несколько
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {DELIVERY_METHODS.map((m, i) => (
              <div key={m.title} className="card p-6 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'var(--orange-bg)' }}>
                  <Icon name={m.icon as 'MapPin'} size={20} style={{ color: 'var(--orange)' }} />
                </div>
                <div>
                  <div className="font-bold text-sm mb-1" style={{ color: 'var(--navy)' }}>
                    {i + 1}. {m.title}
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Фото СДЭК */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img src={IMG_SDEK} alt="Отправка через СДЭК" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--navy)' }}>
                Из регионов - проще чем кажется
              </h3>
              <div className="flex flex-col gap-4">
                {[
                  { n: '1', t: 'Пришлите фото в WhatsApp или Telegram', d: 'Оценим за 5-15 минут. Скажем честную цену - она не изменится.' },
                  { n: '2', t: 'Договариваемся об условиях', d: 'Если цена устраивает - согласовываем способ доставки.' },
                  { n: '3', t: 'Отправляете СДЭК / Яндекс / Авито', d: 'С наложенным платежом - деньги получаете в ПВЗ или на карту.' },
                  { n: '4', t: 'Мы проверяем и подтверждаем', d: 'В день получения посылки - перевод. Всё прозрачно.' },
                ].map(s => (
                  <div key={s.n} className="flex gap-3">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-black text-white"
                      style={{ background: 'var(--orange)' }}>{s.n}</div>
                    <div>
                      <div className="font-semibold text-sm" style={{ color: 'var(--navy)' }}>{s.t}</div>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ЧТО ПРИНИМАЕМ ══ */}
      <section id="categories" className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <span className="badge badge-orange mb-3 inline-flex">Принимаем</span>
            <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color: 'var(--navy)' }}>
              Что мы выкупаем дорого
            </h2>
            <p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>
              Рабочее и нерабочее, с документами и без - оцениваем всё
            </p>
          </div>

          {/* Фото на весь слайд */}
          <div className="relative rounded-2xl overflow-hidden mb-8" style={{ minHeight: 400, maxHeight: 520 }}>
            <img src={IMG_STACK} alt="Большой ассортимент техники на выкуп" className="w-full h-full object-cover object-center" style={{ minHeight: 400 }} />
            <div className="absolute inset-0 flex flex-col justify-end p-8"
              style={{ background: 'linear-gradient(to top, rgba(30,41,59,0.85) 0%, transparent 60%)' }}>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Любая техника - любое состояние</h3>
              <p className="text-sm text-white opacity-80 mb-4 max-w-lg">Рабочие, нерабочие, без зарядок, с разбитыми экранами, офисные парки - оцениваем всё за 5 минут</p>
              <a href={TG} target="_blank" rel="noopener noreferrer"
                className="btn-primary inline-flex w-fit text-sm">
                <Icon name="Zap" size={15} />
                Оценить прямо сейчас
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {ACCEPTS.map(a => (
              <div key={a.cat} className="card p-4 flex flex-col gap-2">
                <div className="text-3xl">{a.emoji}</div>
                <div className="font-bold text-xs leading-tight" style={{ color: 'var(--navy)' }}>{a.cat}</div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{a.brands}</div>
                <div className="text-xs mt-auto font-medium" style={{ color: 'var(--orange)' }}>{a.note}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Icon name="MessageCircle" size={16} />
              Оценить мою технику
            </a>
          </div>
        </div>
      </section>

      {/* ══ БОЛИ ФИЗЛИЦ ══ */}
      <section id="fizlic" className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge badge-orange mb-4 inline-flex">Физическим лицам</span>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-3" style={{ color: 'var(--navy)' }}>
                Продайте технику<br />без нервов и рисков
              </h2>
              <p className="text-sm mb-6" style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                Мы знаем, что вас беспокоит. Вот честные ответы на главные вопросы:
              </p>

              <div className="flex flex-col gap-4">
                {PAINS_FIZLIC.map(p => (
                  <div key={p.q} className="card p-4">
                    <div className="flex items-start gap-3">
                      <Icon name="HelpCircle" size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--orange)' }} />
                      <div>
                        <div className="font-semibold text-sm mb-1" style={{ color: 'var(--navy)' }}>{p.q}</div>
                        <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{p.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Фото и CTA */}
            <div className="flex flex-col gap-5">
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img src={IMG_HAPPY} alt="Клиент доволен выкупом техники" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
                    <div className="flex flex-shrink-0">
                      {[1,2,3,4,5].map(s=><Icon key={s} name="Star" size={14} style={{color:'#F59E0B'}}/>)}
                    </div>
                    <p className="text-xs font-medium" style={{ color: 'var(--navy)' }}>"Быстро и честно. Оценили за 5 минут, деньги сразу"</p>
                  </div>
                </div>
              </div>
              <div className="card p-6" style={{ background: 'var(--orange-bg)', borderColor: 'var(--orange-light)' }}>
                <p className="font-bold text-base mb-1" style={{ color: 'var(--navy)' }}>
                  Сколько стоит ваша техника?
                </p>
                <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
                  Напишите в Telegram - ответим за 5 минут
                </p>
                <div className="flex flex-col gap-2">
                  <a href={TG} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center text-sm">
                    <Icon name="Send" size={15} />
                    Написать в Telegram
                  </a>
                  <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-ghost justify-center text-sm">
                    <Icon name="MessageCircle" size={15} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ДЛЯ ЮРЛИЦ ══ */}
      <section id="yurlica" className="section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="badge badge-orange mb-4 inline-flex">Юридическим лицам</span>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-3" style={{ color: 'var(--navy)' }}>
                Списание и вывоз<br />без головной боли
              </h2>
              <p className="text-sm mb-6" style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                Помогаем оформить списание техники, забираем оборудование, освобождаем место и склад.
                Работаем по всей России.
              </p>

              <div className="flex flex-col gap-3 mb-6">
                {[
                  'Шаблоны приказа и акта списания (форма ОС-4)',
                  'Акт приёма-передачи при каждом вывозе',
                  'Выезд в Москве и МО от 30 000 ₽ выкупа',
                  'Удаление данных с дисков - по запросу, с актом',
                  'Регионы: транспортная компания + удалённое оформление',
                ].map(t => (
                  <div key={t} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center"
                      style={{ background: '#F0FDF4', border: '1.5px solid #86EFAC' }}>
                      <Icon name="Check" size={11} className="text-green-600" />
                    </div>
                    <span className="text-sm" style={{ color: 'var(--navy-mid)' }}>{t}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 mb-6 p-4 rounded-xl"
                style={{ background: '#FEF2F2', border: '1px solid #FECACA' }}>
                <div className="flex items-start gap-2">
                  <Icon name="Info" size={15} className="flex-shrink-0 mt-0.5 text-red-500" />
                  <p className="text-xs" style={{ color: '#991B1B' }}>
                    Мы не являемся лицензированным утилизатором отходов. Мы выкупаем б/у технику и помогаем с документальным
                    списанием. Для официальной экологической утилизации с актом - направим к сертифицированным партнёрам.
                  </p>
                </div>
              </div>

              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Icon name="Building2" size={16} />
                Заказать вывоз для организации
              </a>
            </div>

            {/* FAQ для юрлиц */}
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-base mb-2" style={{ color: 'var(--navy)' }}>
                Отвечаем на ваши вопросы:
              </h3>
              {PAINS_YURLICO.map(p => (
                <div key={p.q} className="card p-4">
                  <div className="flex items-start gap-3">
                    <Icon name="HelpCircle" size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--orange)' }} />
                    <div>
                      <div className="font-semibold text-sm mb-1" style={{ color: 'var(--navy)' }}>{p.q}</div>
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{p.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ ПОЧЕМУ МЫ ══ */}
      <section id="about" className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="badge badge-orange mb-3 inline-flex">О нас</span>
            <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color: 'var(--navy)' }}>
              Почему удобнее работать с нами напрямую
            </h2>
            <p className="text-sm mt-2 max-w-lg mx-auto" style={{ color: 'var(--text-muted)' }}>
              Мы сами работаем на Авито и других площадках - но через наш сайт удобнее и безопаснее: официально, без торгов, с гарантией оплаты.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {WHY_US.map(w => (
              <div key={w.title} className="card p-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'var(--orange-bg)' }}>
                  <Icon name={w.icon as 'ShieldCheck'} size={20} style={{ color: 'var(--orange)' }} />
                </div>
                <div className="font-bold text-sm mb-1.5" style={{ color: 'var(--navy)' }}>{w.title}</div>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{w.desc}</p>
              </div>
            ))}
          </div>

          {/* Сравнение с Авито */}
          <div className="card p-6 overflow-x-auto">
            <table className="w-full text-sm min-w-96">
              <thead>
                <tr>
                  <th className="text-left pb-3 text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>Критерий</th>
                  <th className="pb-3 text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--orange)' }}>Мы</th>
                  <th className="pb-3 text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>Авито / самостоятельно</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Скорость', 'Деньги сегодня', 'Неделями'],
                  ['Торги', 'Нет - цена фиксирована', 'Постоянно'],
                  ['Документы', 'Договор при каждой сделке', 'Нет'],
                  ['Риски', 'Минимальные', 'Мошенники, показы, фейки'],
                  ['Удобство', 'Привезли - получили деньги', 'Объявления, звонки, встречи'],
                ].map(([c, ours, theirs]) => (
                  <tr key={c} style={{ borderTop: '1px solid var(--border-color)' }}>
                    <td className="py-2.5 font-medium text-xs" style={{ color: 'var(--navy-mid)' }}>{c}</td>
                    <td className="py-2.5 text-center text-xs font-semibold" style={{ color: '#16A34A' }}>{ours}</td>
                    <td className="py-2.5 text-center text-xs" style={{ color: 'var(--text-muted)' }}>{theirs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══ АВИТО ДОВЕРИЕ ══ */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            <div>
              <span className="badge badge-orange mb-4 inline-flex">Проверено временем</span>
              <h2 className="text-2xl font-extrabold mb-3" style={{ color: 'var(--navy)' }}>659 отзывов на Авито - рейтинг 4,8 ⭐</h2>
              <p className="text-sm mb-4" style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                Работаем на Авито с сентября 2017 года - 99+ завершённых сделок, 659 отзывов и рейтинг 4,8.
                Через наш сайт - быстрее и официальнее, без комиссий площадки.
              </p>
              <div className="flex flex-col gap-2 mb-5">
                {['659 отзывов, рейтинг 4,8 из 5', 'На Авито с сентября 2017', '3 147 подписчиков', '99+ завершённых сделок'].map(t => (
                  <div key={t} className="flex items-center gap-2">
                    <Icon name="Star" size={14} style={{ color: 'var(--orange)', flexShrink: 0 }} />
                    <span className="text-sm" style={{ color: 'var(--navy-mid)' }}>{t}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                Хотите проверить? Найдите нас на Авито: "Ноутбуки с Видеообзором" или напишите нам напрямую - это быстрее.
              </p>
            </div>
            <div className="card p-4 max-w-xs mx-auto md:ml-auto">
              <img
                src="https://cdn.poehali.dev/projects/91e8ab1f-16a6-4a0b-bdfb-9dbf57b7ed9c/bucket/17fe89d4-db78-45ad-9439-f400d132049a.jpg"
                alt="Наш профиль на Авито - 659 отзывов"
                className="w-full rounded-xl"
                style={{ maxWidth: 280 }}
              />
              <p className="text-xs text-center mt-2" style={{ color: 'var(--text-muted)' }}>Наш профиль: "Ноутбуки с Видеообзором"</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ФОРМА-CTA ══ */}
      <section id="contact" className="section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ color: 'var(--navy)' }}>
                Готовы оценить<br />вашу технику?
              </h2>
              <p className="text-base mb-6" style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                Заполните форму - перезвоним за 15 минут.
                Или напишите напрямую в мессенджер:
              </p>
              <div className="flex flex-col gap-3">
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border bg-white hover:shadow-md transition-all"
                  style={{ borderColor: 'var(--border-color)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: '#F0FDF4' }}>
                    <Icon name="MessageCircle" size={20} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: 'var(--navy)' }}>WhatsApp</div>
                    <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Пришлите фото - оценим за 5 минут</div>
                  </div>
                </a>
                <a href={TG} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border bg-white hover:shadow-md transition-all"
                  style={{ borderColor: 'var(--border-color)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: '#EFF6FF' }}>
                    <Icon name="Send" size={20} style={{ color: 'var(--blue)' }} />
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: 'var(--navy)' }}>Telegram @richsmm1</div>
                    <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Видеозвонок для оценки - welcome</div>
                  </div>
                </a>
                <a href={TEL}
                  className="flex items-center gap-3 p-4 rounded-xl border bg-white hover:shadow-md transition-all"
                  style={{ borderColor: 'var(--border-color)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'var(--orange-bg)' }}>
                    <Icon name="Phone" size={20} style={{ color: 'var(--orange)' }} />
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: 'var(--navy)' }}>+7 (901) 345-60-08</div>
                    <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Пн-Вс, 9:00-21:00</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="card p-6">
              <p className="font-bold text-base mb-4" style={{ color: 'var(--navy)' }}>Отправить заявку</p>
              <LeadForm compact />
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection />

      <Footer />
      <FloatingButtons />
      <StickyCtaBar />
      <ExitIntentPopup />
      <LiveActivityTicker />
    </div>
  );
}