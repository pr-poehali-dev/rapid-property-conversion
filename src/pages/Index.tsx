import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import LeadForm from '@/components/LeadForm';
import Icon from '@/components/ui/icon';

const accepts = [
  { icon: '💻', title: 'Ноутбуки и компьютеры', desc: 'Любые модели, любые состояния. Рабочие — выкупим, нерабочие — заберём бесплатно.' },
  { icon: '📱', title: 'Смартфоны и планшеты', desc: 'iPhone, Samsung, Xiaomi и другие. Даже с разбитым экраном.' },
  { icon: '🖥️', title: 'Мониторы и телевизоры', desc: 'LCD, LED, старые ЭЛТ. Заберём всё.' },
  { icon: '🖨️', title: 'Принтеры и МФУ', desc: 'Рабочие и после ремонта. Разберём на запчасти или в лом.' },
];

const steps = [
  { num: '01', title: 'Оставляете заявку + фото', desc: 'Заполните форму или позвоните. Пришлите фото техники для предварительной оценки.' },
  { num: '02', title: 'Брат-оценщик связывается', desc: 'Наш эксперт уточнит детали, назовёт ориентировочную цену и способ работы (выезд или отправка).' },
  { num: '03', title: 'Получаете деньги', desc: 'Москва: приезжаем, забираем, платим сразу. Регионы: отправляете СДЭК, мы проверяем, переводим деньги.' },
];

const geo = [
  { dot: '#22c55e', title: 'Москва и МО', desc: 'Бесплатный выезд в течение 24 часов. Оценка на месте. Оплата сразу.' },
  { dot: '#eab308', title: 'Крупные города', desc: 'Выезд при заказе от 50 000 ₽. Или отправка техники транспортной компанией.' },
  { dot: '#3b82f6', title: 'Вся Россия', desc: 'Отправьте технику СДЭК/Почтой. Оценка по фото + оплата после проверки.' },
];

const trust = [
  { icon: 'CalendarCheck', text: 'Работаем с 2024' },
  { icon: 'Users', text: 'Более 500 клиентов' },
  { icon: 'Banknote', text: 'Наличные или карта' },
  { icon: 'MapPin', text: 'Работаем по всей РФ' },
];

export default function Index() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Header />

      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124,58,237,0.15) 0%, transparent 70%)' }} />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
                style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)', color: 'var(--purple-light)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Принимаем заявки прямо сейчас
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
                Утилизация компьютерной<br />
                <span className="text-gradient">техники по всей России</span>
              </h1>
              <p className="text-base md:text-lg mb-8" style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Поможем со списанием и вывозом ноутбуков, ПК, мониторов, телефонов.<br />
                Москва — выезд бесплатно. Регионы — отправка СДЭК.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#form" className="btn-primary text-sm">
                  <Icon name="Zap" size={16} />
                  Оценить технику
                </a>
                <a href="tel:+79013456008" className="btn-outline text-sm flex items-center gap-2 justify-center">
                  <Icon name="Phone" size={16} />
                  Позвонить
                </a>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                {trust.map((t) => (
                  <div key={t.text} className="flex items-center gap-2">
                    <Icon name={t.icon as 'MapPin'} size={14} style={{ color: 'var(--purple-light)' }} />
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{t.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <LeadForm title="Оцените технику за 1 минуту" subtitle="Перезвоним в течение 15 минут" />
            </div>
          </div>
        </div>
      </section>

      {/* Geo */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
            Работаем по всей России
          </h2>
          <p className="text-center text-sm mb-10" style={{ color: 'var(--text-muted)' }}>
            Условия зависят от вашего города
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {geo.map((g) => (
              <div key={g.title} className="card-dark p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: g.dot, boxShadow: `0 0 8px ${g.dot}` }} />
                  <h3 className="font-semibold text-white">{g.title}</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we accept */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Что принимаем</h2>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Принимаем любую технику в любом состоянии</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {accepts.map((a) => (
              <div key={a.title} className="card-dark p-6 hover:border-purple-500 transition-colors"
                style={{ borderColor: 'var(--border-color)' }}>
                <div className="text-3xl mb-4">{a.icon}</div>
                <h3 className="font-semibold text-white mb-2">{a.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Как это работает</h2>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Три простых шага</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {steps.map((s, i) => (
              <div key={s.num} className="card-dark p-6 relative">
                <div className="text-4xl font-black mb-4 leading-none"
                  style={{ color: 'rgba(139,92,246,0.2)' }}>{s.num}</div>
                <h3 className="font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 z-10 text-purple-500">
                    <Icon name="ChevronRight" size={20} style={{ color: 'var(--purple)' }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA for org */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl p-8 md:p-10 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(139,92,246,0.05) 100%)', border: '1px solid rgba(139,92,246,0.2)' }}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Вы представляете организацию?</h2>
            <p className="text-sm mb-6 max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Поможем со списанием по форме ОС-4, предоставим шаблоны документов и вывезем технику по акту приёма-передачи.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/dlya-organizaciy" className="btn-primary text-sm">
                <Icon name="Building2" size={16} />
                Подробнее для организаций
              </Link>
              <Link to="/dlya-fizlic" className="btn-outline text-sm flex items-center gap-2 justify-center">
                <Icon name="User" size={16} />
                Для физических лиц
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
