import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import LeadForm from '@/components/LeadForm';
import Icon from '@/components/ui/icon';

const WA = 'https://wa.me/79013456008?text=Здравствуйте!%20Хочу%20продать%20технику.';

const prices = [
  { emoji: '💻', cat: 'Ноутбуки', range: '1 000 — 50 000 ₽', note: 'MacBook, игровые — дороже' },
  { emoji: '📱', cat: 'Смартфоны', range: '500 — 30 000 ₽', note: 'iPhone ценятся выше всего' },
  { emoji: '🖥️', cat: 'Системные блоки', range: '500 — 15 000 ₽', note: 'С видеокартой — от 3 000 ₽' },
  { emoji: '📺', cat: 'Мониторы', range: '200 — 5 000 ₽', note: 'Зависит от диагонали и года' },
];

const regionSteps = [
  { n: '1', t: 'Пришлите фото в WhatsApp/TG', d: 'Отвечаем за 5–15 минут. Называем честную цену — она не изменится.' },
  { n: '2', t: 'Соглашаетесь — договариваемся', d: 'Согласовываем адрес отправки и способ доставки.' },
  { n: '3', t: 'Отправляете с наложенным платежом', d: 'СДЭК, Яндекс доставка, Авито доставка — удобно для вас.' },
  { n: '4', t: 'Деньги в день получения', d: 'Мы проверяем посылку и подтверждаем перевод сразу.' },
];

const pains = [
  { q: '«Что если занизят цену при встрече?»', a: 'Называем цену ДО встречи — по фото. Подтверждаем в переписке. Встреча только для расчёта и передачи.' },
  { q: '«Как продать из другого города?»', a: 'Оцениваем по фото или видеозвонку. Вы отправляете СДЭК / Яндекс / Авито с наложенным платежом — деньги получаете в ПВЗ.' },
  { q: '«Нерабочая техника — возьмёте?»', a: 'Да. Любое состояние — рабочее, со сломанным экраном, без зарядки, вздутый аккумулятор. Цена зависит от состояния, но берём всё.' },
  { q: '«Как получить деньги?»', a: 'Москва: наличными или переводом сразу при передаче. Регионы: перевод на карту любого банка в день получения посылки.' },
  { q: '«Нужны ли документы на технику?»', a: 'Нет. Только ваш паспорт при встрече — для договора купли-продажи. Коробка и аксессуары — не обязательны.' },
];

export default function ForIndividuals() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Header />

      <section style={{ background: 'linear-gradient(160deg, #fff 60%, #FFF7ED 100%)' }}>
        <div className="container mx-auto px-4 py-14 md:py-20 max-w-3xl text-center">
          <span className="badge badge-orange mb-5 inline-flex">Физическим лицам</span>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: 'var(--navy)' }}>
            Продайте б/у технику<br />
            <span style={{ color: 'var(--orange)' }}>за 5 минут — по всей России</span>
          </h1>
          <p className="text-base mb-8" style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
            Оценка по фото. Оплата в день сделки.<br />
            Москва — приедем или приедете сами. Регионы — СДЭК с наложенным платежом.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Icon name="MessageCircle" size={16} />
              Оценить мою технику
            </a>
            <a href="tel:+79013456008" className="btn-ghost">
              <Icon name="Phone" size={15} />
              Позвонить
            </a>
          </div>
        </div>
      </section>

      {/* Ориентировочные цены */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold" style={{ color: 'var(--navy)' }}>Ориентировочные цены</h2>
            <p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>
              Точная цена — после фото. Никаких скрытых уценок.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {prices.map(p => (
              <div key={p.cat} className="card p-5 text-center">
                <div className="text-3xl mb-2">{p.emoji}</div>
                <div className="font-bold text-sm mb-1" style={{ color: 'var(--navy)' }}>{p.cat}</div>
                <div className="font-extrabold text-base mb-1" style={{ color: 'var(--orange)' }}>{p.range}</div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{p.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Регионы */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-extrabold mb-3" style={{ color: 'var(--navy)' }}>
                Из регионов — проще чем кажется
              </h2>
              <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
                Не нужно никуда ехать — отправьте СДЭК, Яндексом или Авито доставкой с наложенным платежом
              </p>
              <div className="flex flex-col gap-4">
                {regionSteps.map(s => (
                  <div key={s.n} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 font-black text-white text-sm"
                      style={{ background: 'var(--orange)' }}>{s.n}</div>
                    <div>
                      <div className="font-bold text-sm" style={{ color: 'var(--navy)' }}>{s.t}</div>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Закрытие болей */}
            <div>
              <h3 className="font-bold text-base mb-4" style={{ color: 'var(--navy)' }}>Отвечаем честно:</h3>
              <div className="flex flex-col gap-3">
                {pains.map(p => (
                  <div key={p.q} className="card p-4">
                    <div className="flex gap-3">
                      <Icon name="HelpCircle" size={15} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--orange)' }} />
                      <div>
                        <div className="font-semibold text-sm mb-1" style={{ color: 'var(--navy)' }}>{p.q}</div>
                        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{p.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Форма */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container mx-auto px-4 max-w-xl">
          <LeadForm title="Оценить мою технику бесплатно"
            subtitle="Пришлём цену за 5 минут. Никаких обязательств." />
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
