import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import LeadForm from '@/components/LeadForm';
import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/91e8ab1f-16a6-4a0b-bdfb-9dbf57b7ed9c/files/0dcf0f13-d894-4c48-9dff-39c5cb924132.jpg';
const TECH_IMG = 'https://cdn.poehali.dev/projects/91e8ab1f-16a6-4a0b-bdfb-9dbf57b7ed9c/files/99e421ce-877d-41fa-ac59-069634ece76e.jpg';

const accepts = [
  { icon: '💻', title: 'Ноутбуки и компьютеры', desc: 'Любые модели, любые состояния. Рабочие — выкупим по честной цене.', href: '/noutbuki' },
  { icon: '📱', title: 'Смартфоны и планшеты', desc: 'iPhone, Samsung, Xiaomi. Даже с разбитым экраном.', href: '/telefony' },
  { icon: '🖥️', title: 'Мониторы и телевизоры', desc: 'LCD, LED, старые ЭЛТ. Заберём оптом без вопросов.', href: '/monitory' },
  { icon: '🖨️', title: 'Принтеры и МФУ', desc: 'Рабочие и нерабочие. Офисный парк — вывезем за один выезд.', href: '/orgtehnika' },
];

const steps = [
  { title: 'Оставляете заявку + фото', desc: 'Заполните форму или позвоните. Пришлите фото для предварительной оценки.' },
  { title: 'Оценщик называет цену', desc: 'Свяжемся в течение 15 минут. Назовём точную сумму и способ работы.' },
  { title: 'Приезжаем и платим', desc: 'Москва: выезд и оплата сразу. Регионы: СДЭК + перевод после получения.' },
];

const geo = [
  { dot: 'var(--green)', label: 'Москва и МО', desc: 'Бесплатный выезд в течение 24 ч. Оплата наличными или переводом сразу.' },
  { dot: 'var(--yellow)', label: 'Крупные города', desc: 'Выезд при заказе от 50 000 ₽. Или отправляете сами — СДЭК/ТК.' },
  { dot: 'var(--blue)', label: 'Вся Россия', desc: 'Оценка по фото. Отправляете СДЭК — переводим деньги после проверки.' },
];

const stats = [
  { num: '500+', label: 'клиентов' },
  { num: '24 ч', label: 'выезд МСК' },
  { num: '5 мин', label: 'оценка' },
  { num: '0 ₽', label: 'вывоз МСК' },
];

export default function Index() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Header />

      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden" style={{ minHeight: '90vh' }}>
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Скупка компьютерной техники"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 30%' }}
          />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(105deg, rgba(17,20,24,0.97) 0%, rgba(17,20,24,0.88) 50%, rgba(17,20,24,0.35) 100%)' }} />
          <div className="absolute bottom-0 left-0 right-0 h-0.5"
            style={{ background: 'linear-gradient(90deg, var(--orange), transparent)' }} />
        </div>

        <div className="relative container mx-auto px-4 flex flex-col justify-center" style={{ minHeight: '90vh', paddingTop: 80, paddingBottom: 80 }}>
          <div className="max-w-2xl">
            <div className="badge-orange mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
              Принимаем заявки — ответим за 15 минут
            </div>

            <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 900 }}
              className="text-4xl sm:text-5xl md:text-6xl text-white mb-5">
              Утилизация<br />
              <span className="text-gradient">компьютерной<br />техники</span><br />
              по всей России
            </h1>

            <p className="text-base md:text-lg mb-8 max-w-lg" style={{ color: 'var(--text-muted)', lineHeight: 1.75 }}>
              Ноутбуки, ПК, мониторы, телефоны — заберём, оценим честно и заплатим сразу.
              <br />Москва — бесплатный выезд. Регионы — отправка СДЭК.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a href="#form" className="btn-primary text-sm">
                <Icon name="Zap" size={16} />
                Оценить технику бесплатно
              </a>
              <a href="tel:+79013456008" className="btn-ghost text-sm">
                <Icon name="Phone" size={15} />
                +7 (901) 345-60-08
              </a>
            </div>

            <div className="grid grid-cols-4 gap-2 max-w-md">
              {stats.map((s) => (
                <div key={s.label} className="text-center p-3 rounded-lg"
                  style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.15)' }}>
                  <div className="stat-num text-xl md:text-2xl">{s.num}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ ГЕО ══ */}
      <section className="section-padding section-stripe">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end gap-3 mb-8">
            <div>
              <p className="badge-orange mb-3">Охват</p>
              <h2 className="text-2xl md:text-3xl text-white">Работаем по всей России</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {geo.map((g) => (
              <div key={g.label} className="card-dark p-6 flex gap-4 items-start">
                <div className="w-3 h-3 rounded-full flex-shrink-0 mt-1.5"
                  style={{ background: g.dot, boxShadow: `0 0 8px ${g.dot}` }} />
                <div>
                  <div className="font-bold text-white text-sm mb-1">{g.label}</div>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ЧТО ПРИНИМАЕМ ══ */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <p className="badge-orange mb-3">Категории</p>
            <h2 className="text-2xl md:text-3xl text-white">Что принимаем</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {accepts.map((a) => (
              <Link key={a.title} to={a.href}
                className="card-dark p-6 group transition-all"
                style={{ borderColor: 'var(--steel)' }}>
                <div className="text-4xl mb-4">{a.icon}</div>
                <h3 className="font-bold text-white mb-2 text-sm">{a.title}</h3>
                <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>{a.desc}</p>
                <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: 'var(--orange)' }}>
                  Подробнее <Icon name="ArrowRight" size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ КАК РАБОТАЕМ ══ */}
      <section className="section-padding section-stripe">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="badge-orange mb-4">Процесс</p>
              <h2 className="text-2xl md:text-3xl text-white mb-8">Три шага — и деньги у вас</h2>
              <div className="flex flex-col gap-6">
                {steps.map((s, i) => (
                  <div key={s.title} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm"
                      style={{ background: 'var(--orange-glow)', border: '1px solid rgba(249,115,22,0.4)', color: 'var(--orange)', fontFamily: 'Syne, sans-serif' }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="pt-1.5">
                      <div className="font-bold text-white text-sm mb-1">{s.title}</div>
                      <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ height: 380 }}>
              <img src={TECH_IMG} alt="Профессиональная оценка техники" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(17,20,24,0.85) 100%)' }} />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold text-white"
                  style={{ background: 'var(--orange)' }}>
                  <Icon name="ShieldCheck" size={15} />
                  Профессиональная оценка специалистом
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ФОРМА ══ */}
      <section id="form" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="badge-orange mb-4">Оценка бесплатно</p>
              <h2 className="text-2xl md:text-3xl text-white mb-4">
                Узнайте цену вашей<br />техники за 5 минут
              </h2>
              <p className="text-sm mb-8" style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                Заполните форму — перезвоним в течение 15 минут.<br />
                Никакого спама и навязывания услуг.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: 'MapPin', text: 'Москва и МО — выедем бесплатно' },
                  { icon: 'Package', text: 'Регионы — принимаем через СДЭК' },
                  { icon: 'Banknote', text: 'Оплата наличными или переводом' },
                  { icon: 'Building2', text: 'Организациям — документы + вывоз' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--orange-glow)', border: '1px solid rgba(249,115,22,0.3)' }}>
                      <Icon name={item.icon as 'MapPin'} size={14} style={{ color: 'var(--orange)' }} />
                    </div>
                    <span className="text-sm font-medium text-white">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ДЛЯ ОРГАНИЗАЦИЙ ══ */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--steel)' }}>
            <div className="flex-1">
              <div className="badge-orange mb-3">Для юрлиц</div>
              <h2 className="text-xl md:text-2xl text-white mb-2">Вы представляете организацию?</h2>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Поможем со списанием по форме ОС-4, дадим шаблоны документов и вывезем технику по акту приёма-передачи.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link to="/dlya-organizaciy" className="btn-primary text-sm whitespace-nowrap">
                <Icon name="Building2" size={15} />
                Для организаций
              </Link>
              <Link to="/dlya-fizlic" className="btn-ghost text-sm whitespace-nowrap">
                <Icon name="User" size={15} />
                Физлицам
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
