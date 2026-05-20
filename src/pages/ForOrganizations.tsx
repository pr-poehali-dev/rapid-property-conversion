import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import LeadForm from '@/components/LeadForm';
import Icon from '@/components/ui/icon';

const doList = [
  { title: 'Консультация по процедуре списания', desc: 'Расскажем, как правильно оформить приказ и акт по форме ОС-4.' },
  { title: 'Шаблоны документов', desc: 'Предоставим готовые шаблоны приказа и акта списания — ничего скачивать самим не нужно.' },
  { title: 'Вывоз техники', desc: 'Приедем в удобное время (Москва) или примем отправку транспортной компанией (регионы), оформим акт приёма-передачи.' },
  { title: 'Конфиденциальность', desc: 'По запросу удалим данные с жёстких дисков перед вывозом.' },
];

const dontList = [
  { title: 'Не выдаём официальные акты утилизации', desc: 'Для этого обратитесь к лицензированному оператору. Мы помогаем только со списанием и вывозом.' },
  { title: 'Не проводим физическую переработку', desc: 'Техника, которую нельзя восстановить, передаётся в приёмки лома.' },
];

const steps = [
  { num: '01', title: 'Оставляете заявку', desc: 'Заполните форму ниже — укажите объём и город.' },
  { num: '02', title: 'Согласовываем детали', desc: 'Согласуем объём техники, дату и способ передачи.' },
  { num: '03', title: 'Оформляем документы', desc: 'Приезжаем или принимаем отправку. Оформляем акт приёма-передачи.' },
  { num: '04', title: 'Склад свободен', desc: 'Техника у вас списана, склад освобождён. Документы на руках.' },
];

const geo = [
  { dot: '#22c55e', title: 'Москва и МО', desc: 'Выезд в течение 24 часов после согласования.' },
  { dot: '#f97316', title: 'Крупные города', desc: 'Выезд при заказе от 50 000 ₽. Согласовываем индивидуально.' },
  { dot: '#3b82f6', title: 'Вся Россия', desc: 'Клиент отправляет технику транспортной компанией, мы оформляем документы удалённо.' },
];

export default function ForOrganizations() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Header />

      {/* Hero */}
      <section className="section" style={{ background: 'var(--bg-section)' }}>
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 badge badge-orange">
            <Icon name="Building2" size={12} />
            Для организаций
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight" style={{ color: 'var(--navy)' }}>
            Списание и вывоз компьютерной техники<br />
            <span style={{ color: 'var(--orange)' }}>для организаций по РФ</span>
          </h1>
          <p className="text-base md:text-lg mb-8" style={{ color: 'var(--text-muted)' }}>
            Оформим документы, заберём технику, освободим склад.<br />
            Без лицензий и посредников.
          </p>
          <a href="#form" className="btn-primary text-sm inline-flex">
            <Icon name="Zap" size={16} />
            Заказать вывоз
          </a>
        </div>
      </section>

      {/* What we do */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: 'var(--navy)' }}>Что мы делаем</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {doList.map((d) => (
              <div key={d.title} className="card p-6 flex gap-4">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)' }}>
                  <Icon name="Check" size={13} style={{ color: '#16a34a' }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: 'var(--navy)' }}>{d.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we don't do */}
      <section className="section section-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-6" style={{ color: 'var(--navy)' }}>Честно о границах</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dontList.map((d) => (
              <div key={d.title} className="card p-5 flex gap-4"
                style={{ borderColor: 'rgba(239,68,68,0.2)', background: 'rgba(239,68,68,0.03)' }}>
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}>
                  <Icon name="X" size={13} style={{ color: '#dc2626' }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: 'var(--navy)' }}>{d.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: 'var(--navy)' }}>Как это работает</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s) => (
              <div key={s.num} className="card p-6">
                <div className="text-3xl font-black mb-3 leading-none" style={{ color: 'var(--orange-light)' }}>{s.num}</div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--navy)' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geo */}
      <section className="section section-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-6" style={{ color: 'var(--navy)' }}>Работаем по всей России</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {geo.map((g) => (
              <div key={g.title} className="card p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: g.dot }} />
                  <h3 className="font-semibold text-sm" style={{ color: 'var(--navy)' }}>{g.title}</h3>
                </div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="form" className="section">
        <div className="container mx-auto px-4 max-w-2xl">
          <LeadForm
            variant="org"
            title="Заказать вывоз техники для организации"
            subtitle="Оставьте заявку — согласуем детали в течение 2 часов"
          />
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
