import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const WA_LINK = 'https://wa.me/79013456008?text=Хочу%20оценить%20технику';

const nav = [
  { label: 'Главная', href: '/' },
  { label: 'Что принимаем', href: '/#categories' },
  { label: 'Как работаем', href: '/#how' },
  { label: 'Юрлицам', href: '/#business' },
  { label: 'Блог', href: '/blog' },
];

const catItems = [
  { label: 'Ноутбуки', href: '/noutbuki' },
  { label: 'Компьютеры', href: '/kompyutery' },
  { label: 'Телефоны', href: '/telefony' },
  { label: 'Мониторы', href: '/monitory' },
  { label: 'Оргтехника', href: '/orgtehnika' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm" style={{ borderBottom: '1.5px solid var(--border-color)' }}>
      <div className="container mx-auto px-4 flex items-center justify-between h-16">

        {/* Лого */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'var(--orange)' }}>
            <Icon name="Cpu" size={16} className="text-white" />
          </div>
          <div>
            <div className="font-black text-sm leading-tight tracking-tight" style={{ color: 'var(--navy)' }}>
              SROCHNO-VYKUP
            </div>
            <div className="text-xs leading-none" style={{ color: 'var(--text-muted)' }}>
              скупка техники
            </div>
          </div>
        </Link>

        {/* Навигация — desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {nav.map(item => (
            <a key={item.href} href={item.href}
              className="px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-50"
              style={{ color: isActive(item.href) ? 'var(--orange)' : 'var(--navy-mid)' }}>
              {item.label}
            </a>
          ))}

          {/* Выпадашка «Категории» */}
          <div className="relative"
            onMouseEnter={() => setCatOpen(true)}
            onMouseLeave={() => setCatOpen(false)}>
            <button className="px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors hover:bg-gray-50"
              style={{ color: 'var(--navy-mid)' }}>
              Категории <Icon name="ChevronDown" size={13} />
            </button>
            {catOpen && (
              <div className="absolute top-full left-0 mt-1 py-1 rounded-xl shadow-lg min-w-40 bg-white z-50"
                style={{ border: '1.5px solid var(--border-color)' }}>
                {catItems.map(c => (
                  <Link key={c.href} to={c.href}
                    className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                    style={{ color: 'var(--navy-mid)' }}
                    onClick={() => setCatOpen(false)}>
                    {c.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Правая часть */}
        <div className="flex items-center gap-2">
          <a href="tel:+79013456008"
            className="hidden lg:flex items-center gap-1.5 text-sm font-semibold"
            style={{ color: 'var(--navy)' }}>
            <Icon name="Phone" size={14} style={{ color: 'var(--orange)' }} />
            +7 (901) 345-60-08
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs py-2 px-4 hidden md:inline-flex">
            <Icon name="Zap" size={13} />
            Оценить технику
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg"
            style={{ color: 'var(--navy-mid)' }}>
            <Icon name={open ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {open && (
        <div className="md:hidden border-t bg-white px-4 pb-4 flex flex-col gap-1"
          style={{ borderColor: 'var(--border-color)' }}>
          <a href="tel:+79013456008"
            className="flex items-center gap-2 py-3 text-sm font-semibold border-b"
            style={{ color: 'var(--navy)', borderColor: 'var(--border-color)' }}>
            <Icon name="Phone" size={14} style={{ color: 'var(--orange)' }} />
            +7 (901) 345-60-08
          </a>
          {nav.map(item => (
            <a key={item.href} href={item.href}
              className="py-2.5 text-sm font-medium"
              style={{ color: 'var(--navy-mid)' }}
              onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <div className="border-t pt-2" style={{ borderColor: 'var(--border-color)' }}>
            <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>Категории</div>
            {catItems.map(c => (
              <Link key={c.href} to={c.href}
                className="block py-2 text-sm pl-2"
                style={{ color: 'var(--navy-mid)' }}
                onClick={() => setOpen(false)}>
                {c.label}
              </Link>
            ))}
          </div>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="btn-primary mt-3 justify-center" onClick={() => setOpen(false)}>
            <Icon name="MessageCircle" size={15} />
            Написать в WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
