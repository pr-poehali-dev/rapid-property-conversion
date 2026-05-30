import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import LeadForm from '@/components/LeadForm';
import Icon from '@/components/ui/icon';

const WA = 'https://wa.me/79013456008?text=Здравствуйте!%20Хочу%20оценить%20технику.';
const TG = 'https://t.me/richsmm1';

const cities: Record<string, {
  slug: string; name: string; nameIn: string; nameRod: string;
  isMoscow?: boolean; delivery: string; deliveryNote: string;
  metaTitle: string; metaDesc: string;
  localFacts: string[];
}> = {
  moskva: {
    slug: 'moskva',
    name: 'Москва',
    nameIn: 'Москве',
    nameRod: 'Москвы',
    isMoscow: true,
    delivery: 'Бесплатный выезд в течение 2–24 часов',
    deliveryNote: 'Оплата сразу на месте — наличными или переводом',
    metaTitle: 'Скупка компьютерной техники в Москве | Выезд бесплатно | Srochno-Vykup.ru',
    metaDesc: 'Скупка ноутбуков, ПК, смартфонов в Москве. Бесплатный выезд в течение 24 часов. Оценка по фото за 5 минут. Оплата наличными в день сделки.',
    localFacts: ['Выезд по всей Москве и МО', 'Оплата наличными или на карту', 'Вывоз крупных партий техники', 'Работаем без выходных 09:00–21:00'],
  },
  spb: {
    slug: 'spb',
    name: 'Санкт-Петербург',
    nameIn: 'Санкт-Петербурге',
    nameRod: 'Санкт-Петербурга',
    delivery: 'Выезд при заказе от 50 000 ₽ или СДЭК',
    deliveryNote: 'Отправьте технику СДЭК — оплатим в день получения',
    metaTitle: 'Скупка техники в Санкт-Петербурге | Srochno-Vykup.ru',
    metaDesc: 'Скупка ноутбуков, смартфонов, ПК в Санкт-Петербурге. Отправка СДЭК или выезд. Оценка за 5 минут. Оплата в день сделки.',
    localFacts: ['Отправка СДЭК из любого ПВЗ', 'Выезд при сумме от 50 000 ₽', 'Оплата на карту в день получения', 'Оценка по фото за 5 минут'],
  },
  kazan: {
    slug: 'kazan',
    name: 'Казань',
    nameIn: 'Казани',
    nameRod: 'Казани',
    delivery: 'Отправка СДЭК, Яндекс или Авито',
    deliveryNote: 'Оценка по фото — оплата после получения и проверки',
    metaTitle: 'Скупка техники в Казани | Srochno-Vykup.ru',
    metaDesc: 'Выкуп ноутбуков и смартфонов в Казани. Отправка СДЭК — деньги в день получения. Оценка за 5 минут. Работаем по всей России.',
    localFacts: ['Отправка СДЭК из любого ПВЗ Казани', 'Яндекс Доставка и Авито Доставка', 'Предварительная оценка по фото', 'Деньги — в день получения посылки'],
  },
  ekb: {
    slug: 'ekb',
    name: 'Екатеринбург',
    nameIn: 'Екатеринбурге',
    nameRod: 'Екатеринбурга',
    delivery: 'Отправка СДЭК, Яндекс или Авито',
    deliveryNote: 'Оценка по фото — оплата после получения и проверки',
    metaTitle: 'Скупка техники в Екатеринбурге | Srochno-Vykup.ru',
    metaDesc: 'Выкуп ноутбуков и смартфонов в Екатеринбурге через СДЭК. Оценка за 5 минут. Деньги в день получения. Работаем по всей России.',
    localFacts: ['Отправка СДЭК из Екатеринбурга', 'Крупные ПВЗ СДЭК в центре города', 'Оценка до отправки — цена зафиксирована', 'Перевод на карту в день доставки'],
  },
  novosibirsk: {
    slug: 'novosibirsk',
    name: 'Новосибирск',
    nameIn: 'Новосибирске',
    nameRod: 'Новосибирска',
    delivery: 'Отправка СДЭК, Яндекс или Авито',
    deliveryNote: 'Оценка по фото — оплата после получения и проверки',
    metaTitle: 'Скупка техники в Новосибирске | Srochno-Vykup.ru',
    metaDesc: 'Выкуп ноутбуков и смартфонов в Новосибирске через СДЭК. Оценка за 5 минут. Деньги в день получения. Работаем по всей России.',
    localFacts: ['Отправка СДЭК из Новосибирска', 'Яндекс Доставка и Авито Доставка', 'Предварительная оценка по фото', 'Деньги — в день получения посылки'],
  },
};

const STEPS_REGION = [
  { n: '1', t: 'Пришлите фото в Telegram или WhatsApp', d: 'Ответим за 5–15 минут, назовём честную цену.' },
  { n: '2', t: 'Согласуйте условия', d: 'Если цена устраивает — определяем способ доставки.' },
  { n: '3', t: 'Отправьте СДЭК / Яндекс / Авито', d: 'Оплата отправки за ваш счёт. Упакуйте надёжно.' },
  { n: '4', t: 'Получите деньги в день получения', d: 'Проверим технику и переведём на карту в тот же день.' },
];

export default function CityPage() {
  const location = useLocation();
  const slug = location.pathname.replace('/', '');
  const city = cities[slug || ''];

  useEffect(() => {
    if (city) {
      document.title = city.metaTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', city.metaDesc);
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) canonical.setAttribute('href', `https://srochno-vykup.ru/${city.slug}`);

      // Schema.org LocalBusiness для города
      const schemaId = 'city-schema';
      let existing = document.getElementById(schemaId);
      if (!existing) {
        existing = document.createElement('script');
        existing.id = schemaId;
        (existing as HTMLScriptElement).type = 'application/ld+json';
        document.head.appendChild(existing);
      }
      existing.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: `Srochno-Vykup.ru — скупка техники в ${city.nameIn}`,
        url: `https://srochno-vykup.ru/${city.slug}`,
        telephone: '+79013456008',
        description: city.metaDesc,
        areaServed: { '@type': 'City', name: city.name },
        address: {
          '@type': 'PostalAddress',
          addressLocality: city.name,
          addressCountry: 'RU',
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
          opens: '09:00',
          closes: '21:00',
        },
        priceRange: '₽₽',
      });
    }
    return () => {
      const el = document.getElementById('city-schema');
      if (el) el.remove();
    };
  }, [city]);

  if (!city) {
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
                <span itemProp="name" style={{ color: 'var(--navy)' }}>
                  Скупка техники в {city.nameIn}
                </span>
                <meta itemProp="position" content="2" />
                <link itemProp="item" href={`https://srochno-vykup.ru/${city.slug}`} />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section aria-label={`Скупка техники в ${city.nameIn}`} className="section" style={{ background: 'var(--bg-section)' }}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-5 badge badge-orange">
                  <Icon name="MapPin" size={12} aria-hidden="true" />
                  {city.name}
                </div>
                <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight" style={{ color: 'var(--navy)' }}>
                  Скупка компьютерной техники<br />
                  <span style={{ color: 'var(--orange)' }}>в {city.nameIn}</span>
                </h1>
                <p className="text-base mb-6" style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  Ноутбуки, ПК, смартфоны, мониторы и оргтехника из {city.nameRod}.
                  Оценка за 5 минут — по фото или на месте.
                </p>

                {/* Доставка */}
                <div className="card p-5 mb-5 flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: city.isMoscow ? 'rgba(34,197,94,0.1)' : 'rgba(59,130,246,0.1)',
                      border: city.isMoscow ? '1px solid rgba(34,197,94,0.2)' : '1px solid rgba(59,130,246,0.2)',
                    }}>
                    <Icon
                      name={city.isMoscow ? 'Truck' : 'Package'}
                      size={18}
                      style={{ color: city.isMoscow ? '#16a34a' : '#2563eb' }}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: 'var(--navy)' }}>{city.delivery}</p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{city.deliveryNote}</p>
                  </div>
                </div>

                {/* Местные факты */}
                <ul className="flex flex-col gap-2 mb-6">
                  {city.localFacts.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm" style={{ color: 'var(--navy-mid)' }}>
                      <Icon name="CheckCircle2" size={14} style={{ color: 'var(--orange)', flexShrink: 0 }} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Категории */}
                <h2 className="text-sm font-bold mb-3" style={{ color: 'var(--navy)' }}>
                  Что принимаем в {city.nameIn}
                </h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Ноутбуки', 'Компьютеры', 'Смартфоны', 'Мониторы', 'Оргтехника'].map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg text-xs font-medium"
                      style={{ background: 'var(--bg-soft)', border: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    aria-label={`Оценить технику из ${city.nameRod} в WhatsApp`}
                    className="btn-primary text-sm flex-1 justify-center">
                    <Icon name="MessageCircle" size={15} aria-hidden="true" />
                    WhatsApp
                  </a>
                  <a href={TG} target="_blank" rel="noopener noreferrer"
                    aria-label={`Оценить технику из ${city.nameRod} в Telegram`}
                    className="btn-ghost text-sm flex-1 justify-center">
                    <Icon name="Send" size={15} aria-hidden="true" />
                    Telegram
                  </a>
                </div>
              </div>

              <div>
                <LeadForm title={`Оценить технику в ${city.nameIn}`} subtitle="Перезвоним в течение 15 минут" />
              </div>
            </div>
          </div>
        </section>

        {/* Пошаговая инструкция для регионов */}
        {!city.isMoscow && (
          <section aria-label="Как отправить технику из региона" className="section" style={{ background: 'var(--bg-soft)' }}>
            <div className="container mx-auto px-4 max-w-2xl">
              <h2 className="text-xl font-extrabold mb-6" style={{ color: 'var(--navy)' }}>
                Как продать технику из {city.nameRod}
              </h2>
              <div className="flex flex-col gap-4">
                {STEPS_REGION.map(s => (
                  <div key={s.n} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-black text-white"
                      style={{ background: 'var(--orange)' }}
                      aria-label={`Шаг ${s.n}`}>
                      {s.n}
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: 'var(--navy)' }}>{s.t}</p>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{s.d}</p>
                    </div>
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
