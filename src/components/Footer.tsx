import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer style={{ background: '#0d1014', borderTop: '1px solid var(--steel)' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">

          {/* Бренд */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded flex items-center justify-center"
                style={{ background: 'var(--orange)', color: '#0a0a0a' }}>
                <Icon name="Cpu" size={16} />
              </div>
              <div className="text-white font-bold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>
                SROCHNO-VYKUP.RU
              </div>
            </Link>
            <p className="text-xs leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>
              Заберём старую технику.<br />Быстро. Честно. С оплатой.
            </p>
            <div className="flex items-center gap-2">
              <a href="https://t.me/richsmm1" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded flex items-center justify-center transition-colors"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--steel)' }}>
                <Icon name="Send" size={14} style={{ color: 'var(--orange)' }} />
              </a>
              <a href="https://wa.me/79013456008" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded flex items-center justify-center transition-colors"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--steel)' }}>
                <Icon name="MessageCircle" size={14} style={{ color: 'var(--orange)' }} />
              </a>
            </div>
          </div>

          {/* Услуги */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--text-dim)' }}>Услуги</h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'Физическим лицам', href: '/dlya-fizlic' },
                { label: 'Организациям', href: '/dlya-organizaciy' },
                { label: 'Скупка ноутбуков', href: '/noutbuki' },
                { label: 'Вывоз компьютеров', href: '/kompyutery' },
                { label: 'Приём телефонов', href: '/telefony' },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm transition-colors hover:text-white"
                    style={{ color: 'var(--text-muted)' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Города */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--text-dim)' }}>Города</h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'Москва', href: '/moskva' },
                { label: 'Санкт-Петербург', href: '/spb' },
                { label: 'Казань', href: '/kazan' },
                { label: 'Екатеринбург', href: '/ekb' },
                { label: 'Новосибирск', href: '/novosibirsk' },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm transition-colors hover:text-white"
                    style={{ color: 'var(--text-muted)' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--text-dim)' }}>Контакты</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="tel:+79013456008"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                  style={{ color: 'var(--text-muted)' }}>
                  <Icon name="Phone" size={13} style={{ color: 'var(--orange)' }} />
                  +7 (901) 345-60-08
                </a>
              </li>
              <li>
                <a href="mailto:hello@srochno-vykup.ru"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                  style={{ color: 'var(--text-muted)' }}>
                  <Icon name="Mail" size={13} style={{ color: 'var(--orange)' }} />
                  hello@srochno-vykup.ru
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                  <Icon name="Clock" size={13} style={{ color: 'var(--orange)' }} />
                  Пн–Вс: 9:00–21:00
                </div>
              </li>
              <li>
                <a href="https://t.me/richsmm1" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                  style={{ color: 'var(--text-muted)' }}>
                  <Icon name="Send" size={13} style={{ color: 'var(--orange)' }} />
                  @richsmm1
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--steel)' }} className="pt-8">
          <p className="text-xs leading-relaxed mb-4 max-w-2xl" style={{ color: 'var(--text-dim)' }}>
            <strong style={{ color: 'var(--text-muted)' }}>Важно:</strong> Srochno-Vykup.ru не проводит утилизацию отходов.
            Мы оказываем услуги по помощи в списании и организации вывоза компьютерной техники.
            Для официальной утилизации обратитесь к лицензированному оператору.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-xs" style={{ color: 'var(--text-dim)' }}>
              © 2026 Srochno-Vykup.ru. Все права защищены.
            </p>
            <Link to="/blog" className="text-xs transition-colors hover:text-white" style={{ color: 'var(--text-dim)' }}>
              Блог
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
