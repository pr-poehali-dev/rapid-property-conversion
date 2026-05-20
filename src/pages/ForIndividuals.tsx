import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import LeadForm from '@/components/LeadForm';
import Icon from '@/components/ui/icon';

const prices = [
  { icon: '💻', category: 'Ноутбуки', range: '1 000 — 15 000 ₽' },
  { icon: '📱', category: 'Смартфоны', range: '500 — 8 000 ₽' },
  { icon: '🖥️', category: 'Системные блоки', range: '300 — 5 000 ₽' },
  { icon: '📺', category: 'Мониторы', range: '100 — 2 000 ₽' },
];

const regionSteps = [
  { num: '01', title: 'Отправляете фото', desc: 'Сфотографируйте технику и пришлите нам. Оценим дистанционно.' },
  { num: '02', title: 'Согласовываем цену', desc: 'Наш оценщик называет сумму. Соглашаетесь — отправляете.' },
  { num: '03', title: 'Отправляете СДЭК', desc: 'Отправляете технику СДЭК или Почтой России.' },
  { num: '04', title: 'Получаете деньги', desc: 'Мы проверяем, подтверждаем получение, переводим деньги на карту.' },
];

export default function ForIndividuals() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Header />

      {/* Hero */}
      <section className="section" style={{ background: 'var(--bg-section)' }}>
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 badge badge-orange">
            <Icon name="User" size={12} />
            Для физических лиц
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight" style={{ color: 'var(--navy)' }}>
            Скупка б/у техники у физических лиц<br />
            <span style={{ color: 'var(--orange)' }}>по всей России</span>
          </h1>
          <p className="text-base md:text-lg mb-8" style={{ color: 'var(--text-muted)' }}>
            Оплата сразу. Москва — бесплатный выезд. Регионы — отправка СДЭК.
          </p>
          <a href="#form" className="btn-primary text-sm inline-flex">
            <Icon name="Zap" size={16} />
            Оценить мою технику
          </a>
        </div>
      </section>

      {/* Prices */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ color: 'var(--navy)' }}>
            Ориентировочные цены
          </h2>
          <p className="text-center text-sm mb-10" style={{ color: 'var(--text-muted)' }}>
            Точная цена зависит от состояния и модели
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {prices.map((p) => (
              <div key={p.category} className="card p-6 text-center">
                <div className="text-3xl mb-3">{p.icon}</div>
                <div className="font-semibold mb-1 text-sm" style={{ color: 'var(--navy)' }}>{p.category}</div>
                <div className="text-sm font-bold" style={{ color: 'var(--orange)' }}>{p.range}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How price is formed */}
      <section className="section section-alt">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)' }}>
                  <Icon name="CheckCircle2" size={18} style={{ color: '#16a34a' }} />
                </div>
                <h3 className="font-semibold" style={{ color: 'var(--navy)' }}>Рабочая техника</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Предложим до 30–40% от рыночной стоимости. Чем лучше состояние — тем выше цена.
                Оценка бесплатная, без обязательств.
              </p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'var(--orange-bg)', border: '1px solid var(--orange-light)' }}>
                  <Icon name="Recycle" size={18} style={{ color: 'var(--orange)' }} />
                </div>
                <h3 className="font-semibold" style={{ color: 'var(--navy)' }}>Нерабочая техника</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Заберём бесплатно (Москва) или оплатим по цене лома — за медь, платы и ценные компоненты.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Region workflow */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--navy)' }}>Как работать из регионов</h2>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Принимаем технику через СДЭК и Почту России по всей стране
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {regionSteps.map((s) => (
              <div key={s.num} className="card p-5">
                <div className="text-3xl font-black mb-3 leading-none" style={{ color: 'var(--orange-light)' }}>{s.num}</div>
                <h3 className="font-semibold mb-1 text-sm" style={{ color: 'var(--navy)' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="form" className="section section-alt">
        <div className="container mx-auto px-4 max-w-2xl">
          <LeadForm
            title="Оцените вашу технику"
            subtitle="Перезвоним в течение 15 минут. Никакого спама."
          />
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
