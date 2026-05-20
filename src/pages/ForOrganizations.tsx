import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import LeadForm from '@/components/LeadForm';
import Icon from '@/components/ui/icon';

const WA = 'https://wa.me/79013456008?text=Здравствуйте!%20Нужна%20утилизация%20и%20списание%20техники.';

const doList = [
  { title: 'Консультация по списанию', desc: 'Объясним процедуру, дадим шаблоны приказа и акта ОС-4. Не нужно разбираться самому.' },
  { title: 'Акт приёма-передачи', desc: 'При каждом вывозе оформляем акт - документ для вашей бухгалтерии.' },
  { title: 'Выезд и вывоз в Москве', desc: 'При выкупе от 30 000 ₽ - бесплатный выезд и вывоз в Москве и МО.' },
  { title: 'Удаление данных', desc: 'По запросу - перезаписываем или уничтожаем носители, подтверждаем актом.' },
  { title: 'Регионы', desc: 'Клиент отправляет транспортной компанией, мы оформляем документы удалённо.' },
];

const dontList = [
  { title: 'Не выдаём лицензированные акты утилизации', desc: 'Для экологической отчётности - обратитесь к сертифицированному партнёру. Мы перенаправим.' },
  { title: 'Не проводим физическую переработку', desc: 'Нерабочая техника передаётся в лом или на разборку.' },
];

const pains = [
  { q: '«Кто оформит документы на списание?»', a: 'По запросу и необходимости - поможем подготовить нужные документы. Шаблоны приказа и акта ОС-4 предоставим, акт приёма-передачи оформим при каждом вывозе.' },
  { q: '«Нужна ли лицензия на утилизацию?»', a: 'Для большинства организаций - нет. Если нужен официальный акт - направим к сертифицированным партнёрам.' },
  { q: '«Как вывезти 100+ единиц техники?»', a: 'Организуем вывоз в удобное время. В Москве и МО - договоримся о логистике, при необходимости привлечём грузоперевозчика. Для регионов - отправка любой транспортной компанией.' },
  { q: '«Данные с дисков попадут к конкурентам?»', a: 'По запросу - полностью форматируем рабочие ПК и ноутбуки или физически уничтожаем нерабочие носители. Подтверждаем актом.' },
  { q: '«Это официально и законно?»', a: 'Да. Договор, акт приёма-передачи, оплата на р/с или наличными. Прозрачно для налоговой.' },
];

export default function ForOrganizations() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Header />

      <section style={{ background: 'linear-gradient(160deg, #fff 60%, #FFF7ED 100%)' }}>
        <div className="container mx-auto px-4 py-14 md:py-20 max-w-3xl text-center">
          <span className="badge badge-orange mb-5 inline-flex">Юридическим лицам</span>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: 'var(--navy)' }}>
            Списание и вывоз оргтехники<br />
            <span style={{ color: 'var(--orange)' }}>для организаций по всей России</span>
          </h1>
          <p className="text-base mb-8" style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
            Оформим документы, заберём технику, освободим склад.<br />
            Без лицензий и посредников - только результат.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Icon name="MessageCircle" size={16} />
              Написать в WhatsApp
            </a>
            <a href="tel:+79013456008" className="btn-ghost">
              <Icon name="Phone" size={15} />
              +7 (901) 345-60-08
            </a>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-extrabold mb-8" style={{ color: 'var(--navy)' }}>Что мы делаем</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {doList.map(d => (
              <div key={d.title} className="card p-5 flex gap-4">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: '#F0FDF4', border: '1.5px solid #86EFAC' }}>
                  <Icon name="Check" size={12} className="text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-sm mb-1" style={{ color: 'var(--navy)' }}>{d.title}</div>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <h3 className="text-base font-bold mb-4" style={{ color: 'var(--navy)' }}>Честно о границах</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dontList.map(d => (
              <div key={d.title} className="p-5 rounded-2xl flex gap-3"
                style={{ background: '#FEF2F2', border: '1px solid #FECACA' }}>
                <Icon name="X" size={14} className="text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-sm mb-1" style={{ color: '#991B1B' }}>{d.title}</div>
                  <p className="text-xs leading-relaxed" style={{ color: '#B91C1C' }}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-extrabold mb-6" style={{ color: 'var(--navy)' }}>
                Закрываем ваши вопросы
              </h2>
              <div className="flex flex-col gap-3">
                {pains.map(p => (
                  <div key={p.q} className="card p-4">
                    <div className="flex gap-3">
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
            <div>
              <LeadForm variant="org" title="Заказать вывоз для организации"
                subtitle="Заполните форму - перезвоним в течение 2 часов" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}