import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Icon from '@/components/ui/icon';

const TG  = 'https://t.me/richsmm1';
const WA  = 'https://wa.me/79013456008?text=Здравствуйте!%20Хочу%20оценить%20технику.';
const TEL = 'tel:+79013456008';

/* ─── Данные прайс-листа ─── */
type Item = { label: string; minPrice: number; maxPrice: number; note?: string };

const PRICE_DATA: Record<string, { emoji: string; title: string; items: Item[] }> = {
  notebooks: {
    emoji: '💻',
    title: 'Ноутбуки',
    items: [
      { label: 'Apple MacBook Air M1/M2/M3', minPrice: 25000, maxPrice: 80000, note: 'Новее = дороже' },
      { label: 'Apple MacBook Pro M1/M2/M3', minPrice: 35000, maxPrice: 130000 },
      { label: 'Apple MacBook (Intel, до 2020)', minPrice: 8000, maxPrice: 35000 },
      { label: 'Lenovo ThinkPad (бизнес)', minPrice: 5000, maxPrice: 25000 },
      { label: 'Dell XPS / Latitude', minPrice: 5000, maxPrice: 28000 },
      { label: 'HP EliteBook / ProBook', minPrice: 4000, maxPrice: 20000 },
      { label: 'ASUS ZenBook / VivoBook', minPrice: 3000, maxPrice: 18000 },
      { label: 'Игровой ноутбук (MSI, ROG)', minPrice: 8000, maxPrice: 50000, note: 'Зависит от GPU' },
      { label: 'Ноутбук офисный (Celeron/i3)', minPrice: 1000, maxPrice: 6000 },
      { label: 'Нерабочий ноутбук', minPrice: 500, maxPrice: 5000, note: 'По запчастям' },
    ],
  },
  phones: {
    emoji: '📱',
    title: 'Смартфоны',
    items: [
      { label: 'iPhone 15 / 15 Pro / Max', minPrice: 30000, maxPrice: 75000 },
      { label: 'iPhone 14 / 14 Pro / Max', minPrice: 20000, maxPrice: 55000 },
      { label: 'iPhone 13 / 13 Pro / Max', minPrice: 12000, maxPrice: 35000 },
      { label: 'iPhone 12 / 12 Pro', minPrice: 8000, maxPrice: 20000 },
      { label: 'iPhone 11 и старше', minPrice: 2000, maxPrice: 12000 },
      { label: 'Samsung Galaxy S23/S24', minPrice: 15000, maxPrice: 45000 },
      { label: 'Samsung Galaxy S21/S22', minPrice: 6000, maxPrice: 20000 },
      { label: 'Samsung Galaxy A серия', minPrice: 1500, maxPrice: 10000 },
      { label: 'Xiaomi / Redmi (флагман)', minPrice: 3000, maxPrice: 15000 },
      { label: 'Сломанный смартфон', minPrice: 500, maxPrice: 5000, note: 'По запчастям' },
    ],
  },
  computers: {
    emoji: '🖥️',
    title: 'ПК и комплектующие',
    items: [
      { label: 'Видеокарта NVIDIA RTX 40xx', minPrice: 15000, maxPrice: 80000 },
      { label: 'Видеокарта NVIDIA RTX 30xx', minPrice: 8000, maxPrice: 40000 },
      { label: 'Видеокарта NVIDIA GTX', minPrice: 2000, maxPrice: 12000 },
      { label: 'Видеокарта AMD RX 6000/7000', minPrice: 8000, maxPrice: 35000 },
      { label: 'Процессор Intel Core i9/i7', minPrice: 5000, maxPrice: 25000 },
      { label: 'Процессор AMD Ryzen 7/9', minPrice: 5000, maxPrice: 22000 },
      { label: 'Игровой системный блок', minPrice: 10000, maxPrice: 80000, note: 'Зависит от комплектующих' },
      { label: 'Офисный системный блок', minPrice: 1000, maxPrice: 6000 },
      { label: 'SSD накопитель 1 ТБ+', minPrice: 1500, maxPrice: 6000 },
      { label: 'Оперативная память DDR4/DDR5', minPrice: 800, maxPrice: 5000 },
    ],
  },
  monitors: {
    emoji: '📺',
    title: 'Мониторы и ТВ',
    items: [
      { label: 'Монитор 27" 4K (2021+)', minPrice: 3000, maxPrice: 15000 },
      { label: 'Монитор 27" FullHD', minPrice: 1500, maxPrice: 7000 },
      { label: 'Монитор 24" FullHD', minPrice: 800, maxPrice: 4000 },
      { label: 'Игровой монитор 144+ Hz', minPrice: 2000, maxPrice: 12000 },
      { label: 'Монитор с дефектами', minPrice: 200, maxPrice: 2000 },
      { label: 'ЭЛТ монитор', minPrice: 0, maxPrice: 500, note: 'Как лом' },
      { label: 'Smart TV 50"+', minPrice: 2000, maxPrice: 15000 },
    ],
  },
  orgteh: {
    emoji: '🖨️',
    title: 'Оргтехника',
    items: [
      { label: 'Лазерный принтер HP / Canon', minPrice: 500, maxPrice: 4000 },
      { label: 'МФУ офисное', minPrice: 500, maxPrice: 5000 },
      { label: 'Копир / цветное МФУ', minPrice: 1000, maxPrice: 8000 },
      { label: 'Сканер', minPrice: 300, maxPrice: 2000 },
      { label: 'Нерабочая оргтехника', minPrice: 0, maxPrice: 1000, note: 'Как металлолом' },
    ],
  },
};

/* ─── Калькулятор ─── */
type Selection = { category: string; itemIdx: number; condition: 'good' | 'medium' | 'bad' };

const COND_MULT = { good: 1, medium: 0.6, bad: 0.25 };
const COND_LABEL = { good: 'Хорошее', medium: 'Среднее (есть дефекты)', bad: 'Плохое / нерабочее' };

export default function Calculator() {
  const [selections, setSelections] = useState<Selection[]>([
    { category: 'notebooks', itemIdx: 0, condition: 'good' },
  ]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    document.title = 'Калькулятор стоимости техники — узнайте цену за 1 минуту | Srochno-Vykup.ru';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Узнайте ориентировочную цену вашего ноутбука, смартфона или ПК онлайн. Бесплатный калькулятор скупки техники. Реальные цены 2026 года.');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://srochno-vykup.ru/calculator');

    // Schema.org для калькулятора
    const schemaId = 'calc-schema';
    let el = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement('script') as HTMLScriptElement;
      el.id = schemaId;
      el.type = 'application/ld+json';
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Калькулятор стоимости скупки техники',
      url: 'https://srochno-vykup.ru/calculator',
      description: 'Бесплатный онлайн-калькулятор для оценки стоимости б/у техники: ноутбуков, смартфонов, ПК, мониторов и оргтехники.',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'RUB' },
      provider: { '@type': 'Organization', name: 'Srochno-Vykup.ru', url: 'https://srochno-vykup.ru' },
    });

    return () => { document.getElementById('calc-schema')?.remove(); };
  }, []);

  const totalMin = selections.reduce((sum, s) => {
    const item = PRICE_DATA[s.category]?.items[s.itemIdx];
    return sum + Math.round(item ? item.minPrice * COND_MULT[s.condition] : 0);
  }, 0);

  const totalMax = selections.reduce((sum, s) => {
    const item = PRICE_DATA[s.category]?.items[s.itemIdx];
    return sum + Math.round(item ? item.maxPrice * COND_MULT[s.condition] : 0);
  }, 0);

  const addItem = () => setSelections(prev => [...prev, { category: 'notebooks', itemIdx: 0, condition: 'good' }]);
  const removeItem = (i: number) => setSelections(prev => prev.filter((_, idx) => idx !== i));

  const updateSel = (i: number, field: keyof Selection, value: string) => {
    setSelections(prev => prev.map((s, idx) => {
      if (idx !== i) return s;
      if (field === 'category') return { ...s, category: value, itemIdx: 0 };
      if (field === 'itemIdx') return { ...s, itemIdx: Number(value) };
      if (field === 'condition') return { ...s, condition: value as Selection['condition'] };
      return s;
    }));
  };

  const fmt = (n: number) => n.toLocaleString('ru-RU');

  const tgText = encodeURIComponent(
    `Здравствуйте! Хочу оценить технику.\n\n` +
    selections.map((s, i) => {
      const cat = PRICE_DATA[s.category];
      const item = cat.items[s.itemIdx];
      return `${i + 1}. ${cat.title}: ${item.label} — состояние: ${COND_LABEL[s.condition]}`;
    }).join('\n') +
    `\n\nОриентировочная оценка: ${fmt(totalMin)} – ${fmt(totalMax)} ₽`
  );

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Header />
      <main id="main-content">

        {/* Breadcrumb */}
        <nav aria-label="Хлебные крошки" className="border-b" style={{ borderColor: 'var(--border-color)', background: 'var(--bg-soft)' }}>
          <div className="container mx-auto px-4 py-2">
            <ol className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}
              itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link to="/" itemProp="item" className="hover:underline" style={{ color: 'var(--text-muted)' }}>
                  <span itemProp="name">Главная</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" style={{ color: 'var(--navy)' }}>Калькулятор цен</span>
                <meta itemProp="position" content="2" />
                <link itemProp="item" href="https://srochno-vykup.ru/calculator" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section aria-label="Калькулятор стоимости техники"
          style={{ background: 'linear-gradient(160deg, #FFFFFF 60%, #FFF7ED 100%)' }}
          className="section">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-8">
              <span className="badge badge-orange mb-3 inline-flex">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse inline-block" />
                Цены обновлены в мае 2026
              </span>
              <h1 className="text-3xl md:text-4xl font-black mb-3 leading-tight" style={{ color: 'var(--navy)' }}>
                Калькулятор стоимости<br />
                <span style={{ color: 'var(--orange)' }}>вашей техники</span>
              </h1>
              <p className="text-sm max-w-lg mx-auto" style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Выберите устройство и состояние — получите ориентировочную цену выкупа за 1 минуту.
                Финальная цена уточняется по фото.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* Левая колонка — выбор техники */}
              <div className="lg:col-span-2 flex flex-col gap-4">

                {selections.map((sel, i) => {
                  const catData = PRICE_DATA[sel.category];
                  const item = catData?.items[sel.itemIdx];
                  const est = item
                    ? { min: Math.round(item.minPrice * COND_MULT[sel.condition]), max: Math.round(item.maxPrice * COND_MULT[sel.condition]) }
                    : null;

                  return (
                    <div key={i} className="card p-5 relative">
                      {selections.length > 1 && (
                        <button onClick={() => removeItem(i)}
                          aria-label={`Удалить позицию ${i + 1}`}
                          className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center hover:opacity-70"
                          style={{ background: 'var(--bg-soft)', color: 'var(--text-muted)' }}>
                          <Icon name="X" size={12} />
                        </button>
                      )}

                      <p className="text-xs font-bold mb-3" style={{ color: 'var(--text-muted)' }}>
                        Устройство {i + 1}
                      </p>

                      {/* Категория */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                        <div>
                          <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--navy)' }}>
                            Тип техники
                          </label>
                          <select
                            aria-label="Тип техники"
                            value={sel.category}
                            onChange={e => updateSel(i, 'category', e.target.value)}
                            className="w-full text-sm rounded-xl px-3 py-2.5 focus:outline-none"
                            style={{ border: '1.5px solid var(--border-color)', background: 'white', color: 'var(--navy)' }}>
                            {Object.entries(PRICE_DATA).map(([key, cat]) => (
                              <option key={key} value={key}>{cat.emoji} {cat.title}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--navy)' }}>
                            Модель / конфигурация
                          </label>
                          <select
                            aria-label="Модель устройства"
                            value={sel.itemIdx}
                            onChange={e => updateSel(i, 'itemIdx', e.target.value)}
                            className="w-full text-sm rounded-xl px-3 py-2.5 focus:outline-none"
                            style={{ border: '1.5px solid var(--border-color)', background: 'white', color: 'var(--navy)' }}>
                            {catData.items.map((item, idx) => (
                              <option key={idx} value={idx}>{item.label}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Состояние */}
                      <div className="mb-3">
                        <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--navy)' }}>
                          Состояние
                        </label>
                        <div className="flex gap-2">
                          {(['good', 'medium', 'bad'] as const).map(c => (
                            <button key={c}
                              onClick={() => updateSel(i, 'condition', c)}
                              aria-pressed={sel.condition === c}
                              className="flex-1 py-2 px-2 rounded-xl text-xs font-medium transition-all"
                              style={{
                                background: sel.condition === c ? (c === 'good' ? '#DCFCE7' : c === 'medium' ? '#FEF9C3' : '#FEE2E2') : 'var(--bg-soft)',
                                border: `1.5px solid ${sel.condition === c ? (c === 'good' ? '#86EFAC' : c === 'medium' ? '#FDE047' : '#FCA5A5') : 'var(--border-color)'}`,
                                color: sel.condition === c ? (c === 'good' ? '#15803D' : c === 'medium' ? '#92400E' : '#B91C1C') : 'var(--text-muted)',
                              }}>
                              {c === 'good' ? '✅ Хорошее' : c === 'medium' ? '⚠️ Среднее' : '❌ Плохое'}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Результат позиции */}
                      {est && (
                        <div className="rounded-xl px-4 py-3 flex items-center justify-between"
                          style={{ background: 'var(--orange-bg)', border: '1px solid var(--orange-light)' }}>
                          <div>
                            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                              {item?.note ? `${item.note} · ` : ''}Ориентировочно
                            </p>
                            <p className="text-lg font-black" style={{ color: 'var(--navy)' }}>
                              {fmt(est.min)} — {fmt(est.max)} ₽
                            </p>
                          </div>
                          <Icon name="TrendingUp" size={20} style={{ color: 'var(--orange)', opacity: 0.6 }} aria-hidden="true" />
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Добавить устройство */}
                {selections.length < 8 && (
                  <button onClick={addItem}
                    className="card p-4 flex items-center justify-center gap-2 text-sm font-medium transition-all hover:shadow-md w-full"
                    style={{ border: '2px dashed var(--border-color)', color: 'var(--text-muted)', background: 'transparent' }}>
                    <Icon name="Plus" size={16} aria-hidden="true" />
                    Добавить ещё устройство
                  </button>
                )}
              </div>

              {/* Правая колонка — итог и CTA */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">

                  {/* Итог */}
                  <div className="card p-6 mb-4"
                    style={{ background: 'var(--navy)', color: 'white' }}>
                    <p className="text-xs mb-1" style={{ color: '#94A3B8' }}>
                      Итого за {selections.length} {selections.length === 1 ? 'устройство' : 'устройства'}
                    </p>
                    <p className="text-3xl font-black mb-1">
                      {fmt(totalMin)} — {fmt(totalMax)} ₽
                    </p>
                    <p className="text-xs" style={{ color: '#94A3B8' }}>
                      Ориентировочная оценка. Финальная цена — по фото или при осмотре.
                    </p>

                    <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-xs" style={{ color: '#94A3B8' }}>
                          <Icon name="CheckCircle2" size={12} style={{ color: '#22C55E' }} aria-hidden="true" />
                          Цена не изменится при встрече
                        </div>
                        <div className="flex items-center gap-2 text-xs" style={{ color: '#94A3B8' }}>
                          <Icon name="CheckCircle2" size={12} style={{ color: '#22C55E' }} aria-hidden="true" />
                          Оплата в день сделки
                        </div>
                        <div className="flex items-center gap-2 text-xs" style={{ color: '#94A3B8' }}>
                          <Icon name="CheckCircle2" size={12} style={{ color: '#22C55E' }} aria-hidden="true" />
                          Принимаем нерабочую технику
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA кнопки */}
                  {!showForm ? (
                    <div className="flex flex-col gap-2">
                      <a href={`https://t.me/richsmm1?text=${tgText}`}
                        target="_blank" rel="noopener noreferrer"
                        aria-label="Отправить список в Telegram для точной оценки"
                        className="btn-primary justify-center py-3 text-sm">
                        <Icon name="Send" size={15} aria-hidden="true" />
                        Отправить в Telegram
                      </a>
                      <a href={WA} target="_blank" rel="noopener noreferrer"
                        aria-label="Написать в WhatsApp"
                        className="btn-ghost justify-center py-3 text-sm">
                        <Icon name="MessageCircle" size={15} aria-hidden="true" />
                        WhatsApp
                      </a>
                      <a href={TEL}
                        aria-label="Позвонить нам"
                        className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-xl transition-all"
                        style={{ color: 'var(--text-muted)', border: '1.5px solid var(--border-color)' }}>
                        <Icon name="Phone" size={14} style={{ color: 'var(--orange)' }} aria-hidden="true" />
                        +7 (901) 345-60-08
                      </a>
                      <button onClick={() => setShowForm(true)}
                        className="text-xs text-center underline"
                        style={{ color: 'var(--text-muted)' }}>
                        Оставить заявку на обратный звонок
                      </button>
                    </div>
                  ) : (
                    <CallbackForm onBack={() => setShowForm(false)} estimate={`${fmt(totalMin)} – ${fmt(totalMax)} ₽`} />
                  )}

                  {/* Доверие */}
                  <div className="mt-4 p-4 rounded-xl text-center" style={{ background: 'var(--bg-soft)' }}>
                    <div className="flex justify-center gap-0.5 mb-1">
                      {[1,2,3,4,5].map(s => (
                        <Icon key={s} name="Star" size={13} style={{ color: '#F59E0B' }} aria-hidden="true" />
                      ))}
                    </div>
                    <p className="text-xs font-bold" style={{ color: 'var(--navy)' }}>4.8 из 5</p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>659 отзывов на Авито</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Прайс-лист секция */}
        <section aria-label="Прайс-лист на выкуп техники" className="section" style={{ background: 'var(--bg-soft)' }}>
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-2" style={{ color: 'var(--navy)' }}>
                Прайс-лист выкупа техники
              </h2>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Актуальные цены на май 2026 года · Финальная цена уточняется по фото
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(PRICE_DATA).map(([key, cat]) => (
                <div key={key} className="card overflow-hidden">
                  <div className="px-5 py-3 flex items-center gap-2"
                    style={{ background: 'var(--orange-bg)', borderBottom: '1px solid var(--orange-light)' }}>
                    <span className="text-xl" aria-hidden="true">{cat.emoji}</span>
                    <h3 className="font-bold text-sm" style={{ color: 'var(--navy)' }}>{cat.title}</h3>
                  </div>
                  <div className="divide-y" style={{ borderColor: 'var(--border-color)' }}>
                    {cat.items.map((item, idx) => (
                      <div key={idx} className="px-5 py-3 flex items-center justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium truncate" style={{ color: 'var(--navy)' }}>
                            {item.label}
                          </p>
                          {item.note && (
                            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{item.note}</p>
                          )}
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-xs font-bold whitespace-nowrap" style={{ color: 'var(--orange)' }}>
                            {item.minPrice === 0
                              ? `до ${fmt(item.maxPrice)} ₽`
                              : `${fmt(item.minPrice)} – ${fmt(item.maxPrice)} ₽`}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-xs mt-6" style={{ color: 'var(--text-muted)' }}>
              * Цены ориентировочные. Финальная стоимость зависит от конкретной модели, комплектности и состояния.
              Пришлите фото — назовём точную цену за 5–15 минут.
            </p>
          </div>
        </section>

        {/* FAQ калькулятора */}
        <section aria-label="Вопросы о ценах выкупа" className="section">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-xl font-extrabold mb-6" style={{ color: 'var(--navy)' }}>
              Вопросы о ценах
            </h2>
            <div className="flex flex-col gap-4">
              {[
                { q: 'Почему цены такие разные — широкий диапазон?', a: 'Цена зависит от конкретной модели, года выпуска, состояния и комплектности. MacBook 2019 и MacBook M3 — разные устройства. Для точной цены пришлите фото.' },
                { q: 'Цена может оказаться выше чем в калькуляторе?', a: 'Да! Для редких моделей, топовых конфигураций или отличного состояния — цена может быть выше диапазона. Калькулятор показывает нижнюю планку.' },
                { q: 'Что снижает цену при осмотре?', a: 'Нерабочий аккумулятор, царапины на экране, отсутствие зарядки, битые пиксели, сломанные петли. Каждый дефект уменьшает стоимость.' },
                { q: 'Как получить максимальную цену?', a: 'Сохраните зарядку, очистите данные, снимите iCloud/Google аккаунт. Хорошее первое впечатление = лучшая цена.' },
              ].map(f => (
                <div key={f.q} className="card p-5">
                  <h3 className="font-semibold text-sm mb-2" style={{ color: 'var(--navy)' }}>{f.q}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

/* ─── Форма обратного звонка ─── */
function CallbackForm({ onBack, estimate }: { onBack: () => void; estimate: string }) {
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    // Открываем WhatsApp с заявкой
    const text = encodeURIComponent(`Здравствуйте! Перезвоните мне: ${phone}. Оценка по калькулятору: ${estimate}`);
    window.open(`https://wa.me/79013456008?text=${text}`, '_blank');
    setSent(true);
  };

  if (sent) {
    return (
      <div className="card p-5 text-center">
        <Icon name="CheckCircle2" size={32} className="mx-auto mb-3 text-green-500" />
        <p className="font-bold text-sm mb-1" style={{ color: 'var(--navy)' }}>Заявка отправлена!</p>
        <p className="text-xs mb-3" style={{ color: 'var(--text-muted)' }}>Перезвоним в течение 15 минут</p>
        <button onClick={onBack} className="text-xs underline" style={{ color: 'var(--text-muted)' }}>
          Назад
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Форма обратного звонка" className="card p-5">
      <p className="font-bold text-sm mb-3" style={{ color: 'var(--navy)' }}>Обратный звонок</p>
      <input
        type="tel"
        aria-label="Ваш номер телефона"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        placeholder="+7 (___) ___-__-__"
        required
        className="w-full text-sm px-3 py-2.5 rounded-xl mb-3 focus:outline-none"
        style={{ border: '1.5px solid var(--border-color)', color: 'var(--navy)' }}
      />
      <button type="submit" className="btn-primary w-full justify-center text-sm py-2.5">
        <Icon name="Phone" size={14} aria-hidden="true" />
        Перезвоните мне
      </button>
      <button type="button" onClick={onBack} className="text-xs text-center w-full mt-2 underline" style={{ color: 'var(--text-muted)' }}>
        Назад
      </button>
    </form>
  );
}
