import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import LeadForm from '@/components/LeadForm';
import Icon from '@/components/ui/icon';

const WA = 'https://wa.me/79013456008?text=Здравствуйте!%20Хочу%20оценить%20технику.';
const TG = 'https://t.me/richsmm1';

const categories: Record<string, {
  slug: string; title: string; metaDesc: string; h1: string; desc: string;
  emoji: string; items: string[]; priceFrom: string; priceTo: string;
  brands: string[]; faq: { q: string; a: string }[];
  schemaType: string;
}> = {
  noutbuki: {
    slug: 'noutbuki',
    title: 'Скупка ноутбуков в Москве и по России | Srochno-Vykup.ru',
    metaDesc: 'Выкупим ноутбук Apple MacBook, ASUS, Lenovo, Dell, HP в любом состоянии. Оценка по фото за 5 минут. Москва: выезд. Регионы: СДЭК. Оплата в день.',
    h1: 'Скупка ноутбуков — оценка за 5 минут',
    desc: 'Принимаем ноутбуки любых марок в любом состоянии. Рабочие и нерабочие, с разбитым экраном, без зарядки. Оценка по фото — цена не изменится при встрече.',
    emoji: '💻',
    priceFrom: '1 000',
    priceTo: '80 000',
    brands: ['Apple MacBook Air / Pro', 'Lenovo ThinkPad, IdeaPad', 'Dell XPS, Inspiron', 'HP ProBook, EliteBook', 'ASUS ZenBook, VivoBook', 'MSI, ASUS ROG (игровые)', 'Acer, Samsung'],
    items: ['Рабочие ноутбуки любых годов', 'Нерабочие и с дефектами', 'С разбитым экраном', 'Без зарядного устройства', 'Без пароля от BIOS'],
    faq: [
      { q: 'Принимаете нерабочие ноутбуки?', a: 'Да. Нерабочие, с разбитым экраном, не включающиеся — принимаем всё. Цена зависит от состояния.' },
      { q: 'Нужны документы на ноутбук?', a: 'Нет. Документы не нужны. По желанию оформим договор купли-продажи.' },
      { q: 'Как быстро приедут?', a: 'В Москве выезжаем в течение 2–24 часов при сумме выкупа от 30 000 ₽.' },
    ],
    schemaType: 'ComputerStore',
  },
  kompyutery: {
    slug: 'kompyutery',
    title: 'Скупка компьютеров и системных блоков | Srochno-Vykup.ru',
    metaDesc: 'Выкупим системный блок, ПК, сервер или комплектующие. Офисные парки оптом. Москва: выезд. Регионы: СДЭК. Оплата в день сделки.',
    h1: 'Скупка компьютеров и системных блоков',
    desc: 'Выкупаем системные блоки, ПК и комплектующие — офисные и игровые. Отдельно: видеокарты, процессоры, ОЗУ, SSD. Большие объёмы забираем оптом.',
    emoji: '🖥️',
    priceFrom: '300',
    priceTo: '100 000',
    brands: ['Офисные ПК (любые)', 'Игровые сборки', 'Серверное оборудование', 'Видеокарты NVIDIA/AMD', 'Процессоры Intel/AMD', 'ОЗУ, SSD, HDD'],
    items: ['Офисные ПК и неттопы', 'Игровые системные блоки', 'Серверное оборудование', 'Разрозненные комплектующие', 'Нерабочие блоки'],
    faq: [
      { q: 'Берёте ли вы отдельные комплектующие?', a: 'Да. Видеокарты, процессоры, ОЗУ, SSD, HDD — принимаем отдельно.' },
      { q: 'Можно привезти сразу много ПК?', a: 'Да. При больших объёмах (от 5 штук) организуем вывоз со склада в Москве.' },
    ],
    schemaType: 'ElectronicsStore',
  },
  telefony: {
    slug: 'telefony',
    title: 'Скупка смартфонов и iPhone в Москве | Srochno-Vykup.ru',
    metaDesc: 'Выкупим iPhone, Samsung, Xiaomi — рабочие и с разбитым экраном. Оценка за 5 минут. Москва: выезд. Регионы: СДЭК. Оплата в день.',
    h1: 'Скупка смартфонов и планшетов',
    desc: 'Принимаем iPhone, Samsung, Xiaomi и другие бренды. Даже с разбитым экраном, не включающиеся, без Face ID. Оценка по фото — честная цена.',
    emoji: '📱',
    priceFrom: '500',
    priceTo: '50 000',
    brands: ['iPhone (все модели)', 'Samsung Galaxy S/A серия', 'Xiaomi, Redmi, POCO', 'Huawei, Honor', 'Планшеты iPad', 'Android планшеты'],
    items: ['iPhone в любом состоянии', 'Android смартфоны', 'Планшеты iPad, Android', 'С разбитыми экранами', 'Без Touch/Face ID'],
    faq: [
      { q: 'Берёте iPhone с iCloud?', a: 'Да, берём. Стоимость немного ниже — до снятия блокировки.' },
      { q: 'Принимаете со сломанным экраном?', a: 'Да. Смартфон с разбитым экраном принимаем — цена ниже, но отказа не будет.' },
    ],
    schemaType: 'MobilePhoneRepair',
  },
  monitory: {
    slug: 'monitory',
    title: 'Приём мониторов и телевизоров | Srochno-Vykup.ru',
    metaDesc: 'Вывезем мониторы LCD, LED, старые ЭЛТ и телевизоры. Москва: бесплатный вывоз. Регионы: СДЭК. Оценка за 5 минут.',
    h1: 'Приём и вывоз мониторов и телевизоров',
    desc: 'Принимаем LCD, LED мониторы и телевизоры, старые ЭЛТ. Заберём оптом со склада или офиса. Москва — выезд бесплатный.',
    emoji: '📺',
    priceFrom: '0',
    priceTo: '15 000',
    brands: ['Dell, LG, Samsung', 'Philips, AOC, BenQ', 'Профессиональные дисплеи', 'ЭЛТ мониторы', 'Smart TV и телевизоры'],
    items: ['LCD/LED мониторы', 'Телевизоры (смарт и обычные)', 'Старые ЭЛТ мониторы', 'Профессиональные дисплеи', 'Нерабочие экраны'],
    faq: [
      { q: 'Берёте старые ЭЛТ мониторы?', a: 'Да. ЭЛТ принимаем — по цене лома или бесплатно в Москве.' },
      { q: 'Заберёте много мониторов?', a: 'Да. Оптовый вывоз организуем в удобное время.' },
    ],
    schemaType: 'ElectronicsStore',
  },
  orgtehnika: {
    slug: 'orgtehnika',
    title: 'Вывоз оргтехники: принтеры, МФУ, копиры | Srochno-Vykup.ru',
    metaDesc: 'Заберём принтеры HP, Canon, Xerox, МФУ, копиры, сканеры. Для офисов при переезде или замене парка. Москва: бесплатный вывоз.',
    h1: 'Вывоз оргтехники: принтеры, МФУ, сканеры',
    desc: 'Забираем принтеры, МФУ, копиры и другую оргтехнику. Удобно для офисов при переезде или замене парка. Москва — выезд и загрузка за наш счёт.',
    emoji: '🖨️',
    priceFrom: '0',
    priceTo: '5 000',
    brands: ['HP LaserJet, OfficeJet', 'Canon imageRunner', 'Xerox WorkCentre', 'Kyocera, Ricoh, Konica', 'Brother, Samsung'],
    items: ['Лазерные принтеры', 'Многофункциональные устройства (МФУ)', 'Копировальные аппараты', 'Сканеры', 'Кассовое оборудование'],
    faq: [
      { q: 'Берёте нерабочие принтеры?', a: 'Да. Нерабочую оргтехнику также принимаем — цена по лому.' },
      { q: 'Нужны ли документы на технику?', a: 'Нет, документы не нужны. Для организаций оформим акт приёма-передачи.' },
    ],
    schemaType: 'LocalBusiness',
  },
};

export default function CategoryPage() {
  const location = useLocation();
  const slug = location.pathname.replace('/', '');
  const cat = categories[slug || ''];

  useEffect(() => {
    if (cat) {
      document.title = cat.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', cat.metaDesc);
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) canonical.setAttribute('href', `https://srochno-vykup.ru/${cat.slug}`);

      // Schema.org для страницы категории
      const schemaId = 'category-schema';
      let existing = document.getElementById(schemaId);
      if (!existing) {
        existing = document.createElement('script');
        existing.id = schemaId;
        (existing as HTMLScriptElement).type = 'application/ld+json';
        document.head.appendChild(existing);
      }
      existing.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: cat.h1,
        description: cat.metaDesc,
        provider: { '@type': 'Organization', name: 'Srochno-Vykup.ru', url: 'https://srochno-vykup.ru' },
        url: `https://srochno-vykup.ru/${cat.slug}`,
        areaServed: { '@type': 'Country', name: 'Россия' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'RUB',
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: parseInt(cat.priceFrom.replace(/\s/g, '')) || 0,
            maxPrice: parseInt(cat.priceTo.replace(/\s/g, '')) || 0,
            priceCurrency: 'RUB',
          },
          availability: 'https://schema.org/InStock',
        },
      });
    }
    return () => {
      const el = document.getElementById('category-schema');
      if (el) el.remove();
    };
  }, [cat]);

  if (!cat) {
    return (
      <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
        <Header />
        <main>
          <div className="container mx-auto px-4 py-24 text-center">
            <p style={{ color: 'var(--text-muted)' }}>Страница не найдена</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
                <span itemProp="name" style={{ color: 'var(--navy)' }}>{cat.h1}</span>
                <meta itemProp="position" content="2" />
                <link itemProp="item" href={`https://srochno-vykup.ru/${cat.slug}`} />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero секция */}
        <section aria-label={cat.h1} className="section" style={{ background: 'var(--bg-section)' }}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="text-5xl mb-4" aria-hidden="true">{cat.emoji}</div>
                <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight" style={{ color: 'var(--navy)' }}>
                  {cat.h1}
                </h1>
                <p className="text-base mb-6" style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  {cat.desc}
                </p>

                {/* Цены */}
                <div className="card p-5 mb-4"
                  itemScope itemType="https://schema.org/Offer">
                  <p className="text-xs font-medium mb-2" style={{ color: 'var(--text-muted)' }}>
                    Ориентировочные цены выкупа
                  </p>
                  <p className="text-2xl font-black" style={{ color: 'var(--navy)' }}
                    itemProp="price">
                    {cat.priceFrom} — {cat.priceTo} ₽
                  </p>
                  <meta itemProp="priceCurrency" content="RUB" />
                  <meta itemProp="availability" content="https://schema.org/InStock" />
                  <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                    Точная цена — после осмотра или по фото
                  </p>
                </div>

                {/* Что принимаем */}
                <div className="card p-5 mb-4">
                  <h2 className="text-sm font-bold mb-3" style={{ color: 'var(--navy)' }}>Что принимаем</h2>
                  <ul className="flex flex-col gap-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm" style={{ color: 'var(--navy-mid)' }}>
                        <Icon name="Check" size={14} style={{ color: 'var(--orange)', flexShrink: 0 }} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Бренды */}
                <div className="card p-5 mb-6">
                  <h2 className="text-sm font-bold mb-3" style={{ color: 'var(--navy)' }}>Марки и бренды</h2>
                  <div className="flex flex-wrap gap-2">
                    {cat.brands.map(b => (
                      <span key={b} className="text-xs px-2.5 py-1 rounded-lg"
                        style={{ background: 'var(--bg-soft)', border: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Мессенджеры */}
                <div className="flex gap-3">
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    aria-label="Оценить технику в WhatsApp"
                    className="btn-primary text-sm flex-1 justify-center">
                    <Icon name="MessageCircle" size={15} aria-hidden="true" />
                    WhatsApp
                  </a>
                  <a href={TG} target="_blank" rel="noopener noreferrer"
                    aria-label="Оценить технику в Telegram"
                    className="btn-ghost text-sm flex-1 justify-center">
                    <Icon name="Send" size={15} aria-hidden="true" />
                    Telegram
                  </a>
                </div>
              </div>

              <div>
                <LeadForm title="Оценить технику" subtitle="Перезвоним в течение 15 минут" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ секция */}
        {cat.faq.length > 0 && (
          <section aria-label="Частые вопросы" className="section" style={{ background: 'var(--bg-soft)' }}>
            <div className="container mx-auto px-4 max-w-2xl">
              <h2 className="text-xl font-extrabold mb-6" style={{ color: 'var(--navy)' }}>
                Частые вопросы
              </h2>
              <div className="flex flex-col gap-4">
                {cat.faq.map(f => (
                  <div key={f.q} className="card p-5">
                    <h3 className="font-semibold text-sm mb-2" style={{ color: 'var(--navy)' }}>{f.q}</h3>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Доверие */}
        <section aria-label="Почему нам доверяют" className="section">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-xl font-extrabold mb-6 text-center" style={{ color: 'var(--navy)' }}>
              Почему выбирают нас
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { icon: 'Clock', label: 'Оценка за 5 мин', sub: 'По фото или видео' },
                { icon: 'Banknote', label: 'Оплата сразу', sub: 'Наличные / карта' },
                { icon: 'Star', label: '4.8 / 5 на Авито', sub: '659 отзывов' },
                { icon: 'Award', label: '12 лет работы', sub: '2500+ сделок' },
              ].map(i => (
                <div key={i.label} className="card p-4 flex flex-col items-center gap-2">
                  <Icon name={i.icon} size={22} style={{ color: 'var(--orange)' }} aria-hidden="true" />
                  <p className="font-bold text-sm" style={{ color: 'var(--navy)' }}>{i.label}</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{i.sub}</p>
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
