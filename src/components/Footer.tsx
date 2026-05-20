import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer style={{ background: '#0a0a0a', borderTop: '1px solid var(--border-color)' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'var(--purple-dark)' }}>
                <Icon name="Cpu" size={16} className="text-white" />
              </div>
              <span className="font-bold text-white">Srochno-Vykup.ru</span>
            </Link>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
              Заберём старую технику. Быстро. Честно. С оплатой.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://t.me/richsmm1" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                <Icon name="Send" size={16} style={{ color: 'var(--purple-light)' }} />
              </a>
              <a href="https://wa.me/79013456008" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                <Icon name="MessageCircle" size={16} style={{ color: 'var(--purple-light)' }} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Услуги</h4>
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

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Города</h4>
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

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Контакты</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="tel:+79013456008"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                  style={{ color: 'var(--text-muted)' }}>
                  <Icon name="Phone" size={14} />
                  +7 (901) 345-60-08
                </a>
              </li>
              <li>
                <a href="mailto:hello@srochno-vykup.ru"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                  style={{ color: 'var(--text-muted)' }}>
                  <Icon name="Mail" size={14} />
                  hello@srochno-vykup.ru
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                  <Icon name="Clock" size={14} />
                  Пн–Вс: 9:00–21:00
                </div>
              </li>
              <li>
                <a href="https://t.me/richsmm1" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                  style={{ color: 'var(--text-muted)' }}>
                  <Icon name="Send" size={14} />
                  Telegram: @richsmm1
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-color)' }} className="pt-8">
          <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
            <strong className="text-white">Важно:</strong> Srochno-Vykup.ru не проводит утилизацию отходов.
            Мы оказываем услуги по помощи в списании и организации вывоза компьютерной техники.
            Для официальной утилизации обратитесь к лицензированному оператору.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              © 2026 Srochno-Vykup.ru. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Link to="/blog" className="text-xs transition-colors hover:text-white"
                style={{ color: 'var(--text-muted)' }}>Блог</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
