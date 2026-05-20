import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import LeadForm from '@/components/LeadForm';
import Icon from '@/components/ui/icon';

const categories: Record<string, {
  slug: string; title: string; h1: string; desc: string;
  emoji: string; items: string[]; priceFrom: string; priceTo: string;
}> = {
  noutbuki: {
    slug: 'noutbuki',
    title: 'Утилизация ноутбуков по России | Скупка в Москве — Srochno-Vykup.ru',
    h1: 'Скупка и утилизация ноутбуков',
    desc: 'Принимаем ноутбуки любых марок в любом состоянии. Москва — выезд бесплатно. Регионы — отправка СДЭК.',
    emoji: '💻',
    priceFrom: '1 000',
    priceTo: '15 000',
    items: ['Apple MacBook (все модели)', 'Lenovo ThinkPad, IdeaPad', 'Dell, HP, Asus, Acer', 'Игровые ноутбуки (MSI, ROG)', 'Нерабочие и с дефектами'],
  },
  kompyutery: {
    slug: 'kompyutery',
    title: 'Вывоз системных блоков и ПК — Srochno-Vykup.ru',
    h1: 'Скупка и вывоз системных блоков, ПК',
    desc: 'Выкупаем системные блоки, ПК и комплектующие. Офисные парки, игровые сборки, серверное оборудование.',
    emoji: '🖥️',
    priceFrom: '300',
    priceTo: '5 000',
    items: ['Офисные ПК и неттопы', 'Игровые системные блоки', 'Серверное оборудование', 'Разрозненные комплектующие', 'Нерабочие блоки'],
  },
  telefony: {
    slug: 'telefony',
    title: 'Скупка смартфонов и планшетов — Srochno-Vykup.ru',
    h1: 'Скупка смартфонов и планшетов',
    desc: 'Принимаем iPhone, Samsung, Xiaomi и другие бренды. Даже с разбитым экраном или не включающиеся.',
    emoji: '📱',
    priceFrom: '500',
    priceTo: '8 000',
    items: ['iPhone (все модели)', 'Samsung Galaxy', 'Xiaomi, Redmi, POCO', 'Планшеты iPad, Android', 'С разбитыми экранами'],
  },
  monitory: {
    slug: 'monitory',
    title: 'Приём мониторов и телевизоров — Srochno-Vykup.ru',
    h1: 'Приём и вывоз мониторов и телевизоров',
    desc: 'Принимаем LCD, LED мониторы и телевизоры, старые ЭЛТ. Заберём оптом со склада.',
    emoji: '📺',
    priceFrom: '100',
    priceTo: '2 000',
    items: ['LCD/LED мониторы', 'Телевизоры (смарт и обычные)', 'Старые ЭЛТ мониторы', 'Профессиональные дисплеи', 'Нерабочие экраны'],
  },
  orgtehnika: {
    slug: 'orgtehnika',
    title: 'Вывоз оргтехники: принтеры, МФУ — Srochno-Vykup.ru',
    h1: 'Вывоз оргтехники: принтеры, МФУ, сканеры',
    desc: 'Забираем принтеры, МФУ, копиры и другую оргтехнику. Удобно для офисов при переезде или замене парка.',
    emoji: '🖨️',
    priceFrom: '0',
    priceTo: '2 000',
    items: ['Лазерные принтеры', 'Многофункциональные устройства (МФУ)', 'Копировальные аппараты', 'Сканеры', 'Кассовое оборудование'],
  },
};

export default function CategoryPage() {
  const location = useLocation();
  const slug = location.pathname.replace('/', '');
  const cat = categories[slug || ''];

  if (!cat) {
    return (
      <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
        <Header />
        <div className="container mx-auto px-4 py-24 text-center">
          <p style={{ color: 'var(--text-muted)' }}>Страница не найдена</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Header />

      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124,58,237,0.1) 0%, transparent 70%)' }} />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-5xl mb-6">{cat.emoji}</div>
              <h1 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                {cat.h1}
              </h1>
              <p className="text-base mb-8" style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                {cat.desc}
              </p>

              <div className="card-dark p-6 mb-6">
                <div className="text-xs font-medium mb-3" style={{ color: 'var(--text-muted)' }}>
                  Ориентировочные цены выкупа
                </div>
                <div className="text-2xl font-black text-white">
                  {cat.priceFrom} — {cat.priceTo} ₽
                </div>
                <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                  Точная цена — после осмотра или по фото
                </div>
              </div>

              <div className="card-dark p-6">
                <div className="text-xs font-medium mb-4" style={{ color: 'var(--text-muted)' }}>
                  Что принимаем
                </div>
                <ul className="flex flex-col gap-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white">
                      <Icon name="Check" size={14} style={{ color: 'var(--purple-light)', flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <LeadForm title="Оценить технику" subtitle="Перезвоним в течение 15 минут" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}