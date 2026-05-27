import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const WA = 'https://wa.me/79013456008?text=Здравствуйте!%20Хочу%20оценить%20технику.';

const NAV = [
  { label: 'Что принимаем', href: '/#categories' },
  { label: 'Физлицам', href: '/#fizlic' },
  { label: 'Юрлицам', href: '/#yurlica' },
  { label: 'Доставка', href: '/#delivery' },
  { label: 'Блог', href: '/blog' },
];

const CAT = [
  { label: 'Ноутбуки', href: '/noutbuki' },
  { label: 'Компьютеры и ПК', href: '/kompyutery' },
  { label: 'Смартфоны', href: '/telefony' },
  { label: 'Мониторы и ТВ', href: '/monitory' },
  { label: 'Оргтехника', href: '/orgtehnika' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const location = useLocation();

  return (
    <header role="banner" className="sticky top-0 z-50 bg-white"
      style={{ borderBottom: '1.5px solid var(--border-color)', boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">

        {/* Лого */}
        <Link to="/" aria-label="Srochno-Vykup.ru — главная страница" className="flex items-center gap-2.5 flex-shrink-0" onClick={() => setOpen(false)}>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--orange)' }}>
            <Icon name="Cpu" size={16} className="text-white" />
          </div>
          <div className="leading-tight">
            <div className="font-black text-sm tracking-tight" style={{ color: 'var(--navy)' }}>SROCHNO-VYKUP</div>
            <div className="text-xs" style={{ color: 'var(--text-muted)', marginTop: -1 }}>скупка и утилизация техники</div>
          </div>
        </Link>

        {/* Nav — desktop */}
        <nav aria-label="Основная навигация" className="hidden lg:flex items-center gap-1 flex-1 ml-4">
          {NAV.map(item => (
            <a key={item.href} href={item.href}
              className="px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-50 whitespace-nowrap"
              style={{ color: location.pathname === item.href ? 'var(--orange)' : 'var(--navy-mid)' }}>
              {item.label}
            </a>
          ))}

          {/* Дропдаун категорий */}
          <div className="relative" onMouseEnter={() => setCatOpen(true)} onMouseLeave={() => setCatOpen(false)}>
            <button className="px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1 hover:bg-gray-50"
              style={{ color: 'var(--navy-mid)' }}
              aria-haspopup="true"
              aria-expanded={catOpen}>
              Категории <Icon name="ChevronDown" size={13} />
            </button>
            {catOpen && (
              <div className="absolute top-full left-0 mt-1 py-1 rounded-xl shadow-lg min-w-44 bg-white z-50"
                style={{ border: '1.5px solid var(--border-color)' }}>
                {CAT.map(c => (
                  <Link key={c.href} to={c.href}
                    className="block px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors"
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
        <div className="flex items-center gap-2 flex-shrink-0">
          <a href="tel:+79013456008" className="hidden md:flex items-center gap-1.5 text-sm font-semibold"
            style={{ color: 'var(--navy)' }}>
            <Icon name="Phone" size={14} style={{ color: 'var(--orange)' }} />
            +7 (901) 345-60-08
          </a>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="btn-primary text-xs py-2 px-3 hidden sm:inline-flex rounded-lg">
            <Icon name="Zap" size={13} />
            Оценить технику
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-lg"
            style={{ color: 'var(--navy-mid)' }}
            aria-label="Открыть меню"
            aria-expanded={open}>
            <Icon name={open ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {open && (
        <div className="lg:hidden border-t bg-white px-4 pb-5 flex flex-col gap-1"
          style={{ borderColor: 'var(--border-color)' }}>
          <a href="tel:+79013456008"
            className="flex items-center gap-2 py-3 text-sm font-bold border-b"
            style={{ color: 'var(--navy)', borderColor: 'var(--border-color)' }}>
            <Icon name="Phone" size={14} style={{ color: 'var(--orange)' }} />
            +7 (901) 345-60-08
          </a>

          {NAV.map(item => (
            <a key={item.href} href={item.href}
              className="py-2.5 text-sm font-medium"
              style={{ color: 'var(--navy-mid)' }}
              onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}

          <div className="border-t pt-3 mt-1" style={{ borderColor: 'var(--border-color)' }}>
            <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
              Категории
            </div>
            {CAT.map(c => (
              <Link key={c.href} to={c.href}
                className="block py-2 pl-2 text-sm"
                style={{ color: 'var(--navy-mid)' }}
                onClick={() => setOpen(false)}>
                {c.label}
              </Link>
            ))}
          </div>

          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="btn-primary mt-3 justify-center rounded-xl" onClick={() => setOpen(false)}>
            <Icon name="MessageCircle" size={15} />
            Написать в WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}