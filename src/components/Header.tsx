import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const nav = [
  { label: 'Физлицам', href: '/dlya-fizlic' },
  { label: 'Организациям', href: '/dlya-organizaciy' },
  { label: 'Категории', href: '#', sub: [
    { label: 'Ноутбуки', href: '/noutbuki' },
    { label: 'Компьютеры', href: '/kompyutery' },
    { label: 'Телефоны', href: '/telefony' },
    { label: 'Мониторы', href: '/monitory' },
    { label: 'Оргтехника', href: '/orgtehnika' },
  ]},
  { label: 'Блог', href: '/blog' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const location = useLocation();

  return (
    <header style={{ background: 'rgba(15,15,15,0.95)', borderBottom: '1px solid var(--border-color)', backdropFilter: 'blur(12px)' }}
      className="sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'var(--purple-dark)' }}>
            <Icon name="Cpu" size={16} className="text-white" />
          </div>
          <span className="font-bold text-white text-sm leading-tight">
            Srochno-<br className="hidden sm:block" />Vykup.ru
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) =>
            item.sub ? (
              <div key={item.label} className="relative">
                <button
                  onClick={() => setCatOpen(!catOpen)}
                  className="flex items-center gap-1 text-sm font-medium transition-colors"
                  style={{ color: 'var(--text-muted)' }}
                  onMouseEnter={() => setCatOpen(true)}
                  onMouseLeave={() => setCatOpen(false)}
                >
                  {item.label}
                  <Icon name="ChevronDown" size={14} />
                </button>
                {catOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 py-1 rounded-xl shadow-xl min-w-44"
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
                    onMouseEnter={() => setCatOpen(true)}
                    onMouseLeave={() => setCatOpen(false)}
                  >
                    {item.sub.map((s) => (
                      <Link key={s.href} to={s.href}
                        className="block px-4 py-2 text-sm transition-colors hover:text-white"
                        style={{ color: 'var(--text-muted)' }}
                        onClick={() => setCatOpen(false)}>
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.href} to={item.href}
                className="text-sm font-medium transition-colors hover:text-white"
                style={{ color: location.pathname === item.href ? 'var(--purple-light)' : 'var(--text-muted)' }}>
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+79013456008"
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-white">
            <Icon name="Phone" size={15} style={{ color: 'var(--purple-light)' }} />
            +7 (901) 345-60-08
          </a>
          <a href="#form" className="btn-primary text-sm py-2 px-4 hidden md:inline-flex">
            Оценить технику
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg"
            style={{ color: 'var(--text-muted)' }}>
            <Icon name={open ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2"
          style={{ borderTop: '1px solid var(--border-color)' }}>
          <a href="tel:+79013456008"
            className="flex items-center gap-2 py-3 text-sm font-semibold text-white">
            <Icon name="Phone" size={15} style={{ color: 'var(--purple-light)' }} />
            +7 (901) 345-60-08
          </a>
          {nav.map((item) =>
            item.sub ? (
              <div key={item.label}>
                <div className="py-2 text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                  Категории
                </div>
                {item.sub.map((s) => (
                  <Link key={s.href} to={s.href}
                    className="block py-2 pl-3 text-sm" style={{ color: 'var(--text-muted)' }}
                    onClick={() => setOpen(false)}>
                    {s.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link key={item.href} to={item.href}
                className="py-2 text-sm font-medium text-white"
                onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            )
          )}
          <a href="#form" className="btn-primary text-sm mt-2 justify-center" onClick={() => setOpen(false)}>
            Оценить технику
          </a>
        </div>
      )}
    </header>
  );
}
