import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)', color: '#CBD5E1' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">

          {/* Бренд */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'var(--orange)' }}>
                <Icon name="Cpu" size={16} className="text-white" />
              </div>
              <div className="font-black text-sm text-white tracking-tight">SROCHNO-VYKUP.RU</div>
            </Link>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#94A3B8' }}>
              Скупка компьютерной техники.<br />
              Заберём. Оценим честно. Заплатим сразу.
            </p>
            <div className="flex gap-2">
              <a href="https://t.me/richsmm1" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.08)' }}>
                <Icon name="Send" size={14} style={{ color: 'var(--orange)' }} />
              </a>
              <a href="https://wa.me/79013456008" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.08)' }}>
                <Icon name="MessageCircle" size={14} style={{ color: 'var(--orange)' }} />
              </a>
            </div>
          </div>

          {/* Услуги */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-white">Услуги</h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'Физлицам', href: '/dlya-fizlic' },
                { label: 'Организациям', href: '/dlya-organizaciy' },
                { label: 'Ноутбуки', href: '/noutbuki' },
                { label: 'Компьютеры', href: '/kompyutery' },
                { label: 'Телефоны', href: '/telefony' },
              ].map(l => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm transition-colors hover:text-white" style={{ color: '#94A3B8' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Города */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-white">Города</h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'Москва', href: '/moskva' },
                { label: 'Санкт-Петербург', href: '/spb' },
                { label: 'Казань', href: '/kazan' },
                { label: 'Екатеринбург', href: '/ekb' },
                { label: 'Новосибирск', href: '/novosibirsk' },
              ].map(l => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm transition-colors hover:text-white" style={{ color: '#94A3B8' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-white">Контакты</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="tel:+79013456008" className="flex items-center gap-2 text-sm hover:text-white transition-colors" style={{ color: '#94A3B8' }}>
                  <Icon name="Phone" size={13} style={{ color: 'var(--orange)' }} />
                  +7 (901) 345-60-08
                </a>
              </li>
              <li>
                <a href="mailto:hello@srochno-vykup.ru" className="flex items-center gap-2 text-sm hover:text-white transition-colors" style={{ color: '#94A3B8' }}>
                  <Icon name="Mail" size={13} style={{ color: 'var(--orange)' }} />
                  hello@srochno-vykup.ru
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-sm" style={{ color: '#94A3B8' }}>
                  <Icon name="Clock" size={13} style={{ color: 'var(--orange)' }} />
                  Пн–Вс: 9:00–21:00
                </div>
              </li>
              <li>
                <a href="https://t.me/richsmm1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-white transition-colors" style={{ color: '#94A3B8' }}>
                  <Icon name="Send" size={13} style={{ color: 'var(--orange)' }} />
                  @richsmm1
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} className="pt-8">
          <p className="text-xs leading-relaxed mb-4 max-w-2xl" style={{ color: '#64748B' }}>
            Srochno-Vykup.ru не является лицензированным утилизатором отходов. Мы осуществляем скупку б/у техники
            и помогаем в документальном списании оборудования. Для официальной утилизации обращайтесь к специализированным компаниям.
          </p>
          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <p className="text-xs" style={{ color: '#64748B' }}>© 2026 Srochno-Vykup.ru. Все права защищены.</p>
            <Link to="/blog" className="text-xs hover:text-white transition-colors" style={{ color: '#64748B' }}>Блог</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
