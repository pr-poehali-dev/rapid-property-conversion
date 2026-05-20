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
    <header style={{ background: 'rgba(17,20,24,0.96)', borderBottom: '1px solid var(--steel)', backdropFilter: 'blur(16px)' }}
      className="sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">

        {/* Лого */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="w-8 h-8 rounded flex items-center justify-center"
            style={{ background: 'var(--orange)', color: '#0a0a0a' }}>
            <Icon name="Cpu" size={16} />
          </div>
          <div className="leading-tight">
            <div className="text-white font-bold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>
              SROCHNO-VYKUP
            </div>
            <div className="text-xs" style={{ color: 'var(--text-muted)', marginTop: -2 }}>
              скупка техники
            </div>
          </div>
        </Link>

        {/* Навигация desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) =>
            item.sub ? (
              <div key={item.label} className="relative">
                <button
                  className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-white"
                  style={{ color: 'var(--text-muted)', fontFamily: 'Manrope, sans-serif' }}
                  onMouseEnter={() => setCatOpen(true)}
                  onMouseLeave={() => setCatOpen(false)}
                >
                  {item.label}
                  <Icon name="ChevronDown" size={13} />
                </button>
                {catOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 py-1.5 rounded-xl shadow-2xl min-w-44"
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--steel)' }}
                    onMouseEnter={() => setCatOpen(true)}
                    onMouseLeave={() => setCatOpen(false)}
                  >
                    {item.sub.map((s) => (
                      <Link key={s.href} to={s.href}
                        className="block px-4 py-2 text-sm transition-colors hover:text-white"
                        style={{ color: 'var(--text-muted)', fontFamily: 'Manrope, sans-serif' }}
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
                style={{
                  color: location.pathname === item.href ? 'var(--orange-light)' : 'var(--text-muted)',
                  fontFamily: 'Manrope, sans-serif'
                }}>
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Правая часть */}
        <div className="flex items-center gap-3">
          <a href="tel:+79013456008"
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-white">
            <Icon name="Phone" size={14} style={{ color: 'var(--orange)' }} />
            +7 (901) 345-60-08
          </a>
          <a href="#form" className="btn-primary text-xs py-2 px-3 hidden md:inline-flex">
            <Icon name="Zap" size={13} />
            Оценить технику
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded"
            style={{ color: 'var(--text-muted)' }}>
            <Icon name={open ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-1"
          style={{ borderTop: '1px solid var(--steel)' }}>
          <a href="tel:+79013456008"
            className="flex items-center gap-2 py-3 text-sm font-semibold text-white">
            <Icon name="Phone" size={14} style={{ color: 'var(--orange)' }} />
            +7 (901) 345-60-08
          </a>
          {nav.map((item) =>
            item.sub ? (
              <div key={item.label}>
                <div className="py-2 text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-dim)' }}>
                  Категории
                </div>
                {item.sub.map((s) => (
                  <Link key={s.href} to={s.href}
                    className="block py-2 pl-2 text-sm text-white"
                    onClick={() => setOpen(false)}>
                    {s.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link key={item.href} to={item.href}
                className="py-2.5 text-sm font-medium text-white border-b"
                style={{ borderColor: 'var(--steel)' }}
                onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            )
          )}
          <a href="#form" className="btn-primary text-sm mt-3 justify-center" onClick={() => setOpen(false)}>
            <Icon name="Zap" size={15} />
            Оценить технику
          </a>
        </div>
      )}
    </header>
  );
}
