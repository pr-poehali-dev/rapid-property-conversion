import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import LeadForm from '@/components/LeadForm';
import Icon from '@/components/ui/icon';

const cities: Record<string, {
  name: string; nameIn: string; isMoscow?: boolean;
  delivery: string; deliveryNote: string;
}> = {
  moskva: {
    name: 'Москва',
    nameIn: 'Москве',
    isMoscow: true,
    delivery: 'Бесплатный выезд в течение 24 часов',
    deliveryNote: 'Оплата сразу на месте — наличными или переводом',
  },
  spb: {
    name: 'Санкт-Петербург',
    nameIn: 'Санкт-Петербурге',
    delivery: 'Выезд при заказе от 50 000 ₽',
    deliveryNote: 'Или отправьте технику СДЭК — оплатим после проверки',
  },
  kazan: {
    name: 'Казань',
    nameIn: 'Казани',
    delivery: 'Отправка СДЭК или Почтой России',
    deliveryNote: 'Оценка по фото — оплата после получения и проверки',
  },
  ekb: {
    name: 'Екатеринбург',
    nameIn: 'Екатеринбурге',
    delivery: 'Отправка СДЭК или Почтой России',
    deliveryNote: 'Оценка по фото — оплата после получения и проверки',
  },
  novosibirsk: {
    name: 'Новосибирск',
    nameIn: 'Новосибирске',
    delivery: 'Отправка СДЭК или Почтой России',
    deliveryNote: 'Оценка по фото — оплата после получения и проверки',
  },
};

export default function CityPage() {
  const location = useLocation();
  const slug = location.pathname.replace('/', '');
  const city = cities[slug || ''];

  if (!city) {
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
                style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)', color: 'var(--purple-light)' }}>
                <Icon name="MapPin" size={12} />
                {city.name}
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                Скупка компьютерной техники<br />
                <span className="text-gradient">в {city.nameIn}</span>
              </h1>
              <p className="text-base mb-8" style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Ноутбуки, ПК, смартфоны, мониторы и оргтехника.
                Оценка за 5 минут — по фото или на месте.
              </p>

              <div className="card-dark p-5 mb-4 flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: city.isMoscow ? 'rgba(34,197,94,0.15)' : 'rgba(59,130,246,0.15)' }}>
                  <Icon name={city.isMoscow ? 'Truck' : 'Package'} size={16}
                    className={city.isMoscow ? 'text-green-400' : 'text-blue-400'} />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm mb-1">{city.delivery}</div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{city.deliveryNote}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {['Ноутбуки', 'Компьютеры', 'Смартфоны', 'Мониторы', 'Оргтехника'].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-lg text-xs font-medium"
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <LeadForm title={`Оценить технику в ${city.nameIn}`} subtitle="Перезвоним в течение 15 минут" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}