import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      itemScope
      itemType="https://schema.org/Organization"
      style={{ background: 'var(--navy)', color: '#CBD5E1' }}
    >
      {/* Скрытые microdata для Яндекса */}
      <meta itemProp="name" content="Srochno-Vykup.ru" />
      <meta itemProp="url" content="https://srochno-vykup.ru" />
      <meta itemProp="telephone" content="+79013456008" />
      <meta itemProp="email" content="hello@srochno-vykup.ru" />
      <meta itemProp="foundingDate" content="2013" />
      <meta itemProp="priceRange" content="₽₽" />
      <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress" style={{ display: 'none' }}>
        <meta itemProp="addressLocality" content="Москва" />
        <meta itemProp="addressRegion" content="Москва" />
        <meta itemProp="addressCountry" content="RU" />
        <meta itemProp="postalCode" content="101000" />
      </span>
      <span itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates" style={{ display: 'none' }}>
        <meta itemProp="latitude" content="55.7558" />
        <meta itemProp="longitude" content="37.6176" />
      </span>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">

          {/* Бренд */}
          <div>
            <Link to="/" aria-label="Srochno-Vykup.ru — главная страница"
              className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'var(--orange)' }}>
                <Icon name="Cpu" size={16} className="text-white" aria-hidden="true" />
              </div>
              <div className="font-black text-sm text-white tracking-tight" itemProp="legalName">
                SROCHNO-VYKUP.RU
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#94A3B8' }} itemProp="description">
              Скупка компьютерной техники.<br />
              Заберём. Оценим честно. Заплатим сразу.
            </p>
            <p className="text-xs mb-4" style={{ color: '#64748B' }}>
              Работаем с 2013 года · 2500+ сделок · Рейтинг 4.8⭐
            </p>
            <div className="flex gap-2">
              <a href="https://t.me/richsmm1" target="_blank" rel="noopener noreferrer"
                aria-label="Telegram канал Srochno-Vykup.ru"
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.08)' }}>
                <Icon name="Send" size={14} style={{ color: 'var(--orange)' }} aria-hidden="true" />
              </a>
              <a href="https://wa.me/79013456008" target="_blank" rel="noopener noreferrer"
                aria-label="WhatsApp Srochno-Vykup.ru"
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.08)' }}>
                <Icon name="MessageCircle" size={14} style={{ color: 'var(--orange)' }} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Услуги */}
          <nav aria-label="Услуги компании">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-white">Услуги</h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'Физлицам', href: '/dlya-fizlic' },
                { label: 'Организациям', href: '/dlya-organizaciy' },
                { label: 'Скупка ноутбуков', href: '/noutbuki' },
                { label: 'Скупка компьютеров', href: '/kompyutery' },
                { label: 'Скупка смартфонов', href: '/telefony' },
                { label: 'Скупка мониторов', href: '/monitory' },
                { label: 'Оргтехника', href: '/orgtehnika' },
              ].map(l => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm transition-colors hover:text-white" style={{ color: '#94A3B8' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Города */}
          <nav aria-label="Города обслуживания">
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
            <h4 className="text-xs font-bold uppercase tracking-widest mb-3 mt-5 text-white">Информация</h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'Блог', href: '/blog' },
                { label: 'Вопрос и ответ', href: '/#faq' },
              ].map(l => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm transition-colors hover:text-white" style={{ color: '#94A3B8' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Контакты */}
          <address itemProp="address" style={{ fontStyle: 'normal' }}>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-white">Контакты</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="tel:+79013456008"
                  itemProp="telephone"
                  aria-label="Позвонить +7 (901) 345-60-08"
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors font-medium"
                  style={{ color: '#F97316' }}>
                  <Icon name="Phone" size={13} aria-hidden="true" />
                  +7 (901) 345-60-08
                </a>
              </li>
              <li>
                <a href="mailto:hello@srochno-vykup.ru"
                  itemProp="email"
                  aria-label="Написать на hello@srochno-vykup.ru"
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                  style={{ color: '#94A3B8' }}>
                  <Icon name="Mail" size={13} style={{ color: 'var(--orange)' }} aria-hidden="true" />
                  hello@srochno-vykup.ru
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-sm" style={{ color: '#94A3B8' }}>
                  <Icon name="Clock" size={13} style={{ color: 'var(--orange)' }} aria-hidden="true" />
                  <span itemProp="openingHours" content="Mo-Su 09:00-21:00">
                    Ежедневно 09:00–21:00
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2 text-sm" style={{ color: '#94A3B8' }}>
                  <Icon name="MapPin" size={13} style={{ color: 'var(--orange)' }} aria-hidden="true" />
                  <span itemProp="addressLocality">Москва</span>, Россия
                </div>
              </li>
              <li>
                <a href="https://t.me/richsmm1" target="_blank" rel="noopener noreferrer"
                  aria-label="Telegram @richsmm1"
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                  style={{ color: '#94A3B8' }}>
                  <Icon name="Send" size={13} style={{ color: 'var(--orange)' }} aria-hidden="true" />
                  Telegram: @richsmm1
                </a>
              </li>
              <li>
                <a href="https://wa.me/79013456008" target="_blank" rel="noopener noreferrer"
                  aria-label="WhatsApp чат"
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                  style={{ color: '#94A3B8' }}>
                  <Icon name="MessageCircle" size={13} style={{ color: 'var(--orange)' }} aria-hidden="true" />
                  WhatsApp чат
                </a>
              </li>
            </ul>
          </address>
        </div>

        {/* Нижняя полоса */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} className="pt-8">
          {/* Доверие */}
          <div className="flex flex-wrap gap-4 mb-5 text-xs" style={{ color: '#64748B' }}>
            <span className="flex items-center gap-1">
              <Icon name="Shield" size={11} style={{ color: '#22C55E' }} aria-hidden="true" />
              Договор купли-продажи
            </span>
            <span className="flex items-center gap-1">
              <Icon name="Star" size={11} style={{ color: '#F59E0B' }} aria-hidden="true" />
              659 отзывов на Авито, рейтинг 4.8
            </span>
            <span className="flex items-center gap-1">
              <Icon name="Award" size={11} style={{ color: 'var(--orange)' }} aria-hidden="true" />
              Работаем с 2013 года (12 лет)
            </span>
            <span className="flex items-center gap-1">
              <Icon name="Banknote" size={11} style={{ color: '#22C55E' }} aria-hidden="true" />
              Оплата в день сделки
            </span>
          </div>

          <p className="text-xs leading-relaxed mb-4 max-w-2xl" style={{ color: '#64748B' }}>
            Srochno-Vykup.ru не является лицензированным утилизатором отходов. Осуществляем скупку б/у техники
            и помогаем в документальном списании оборудования. Для официальной утилизации обращайтесь к специализированным компаниям.
          </p>

          <div className="flex flex-col sm:flex-row justify-between gap-3 items-start">
            <p className="text-xs" style={{ color: '#64748B' }}>
              © 2013–2026 Srochno-Vykup.ru. Все права защищены. ИП / самозанятый.
            </p>
            <div className="flex gap-4">
              <Link to="/blog" className="text-xs hover:text-white transition-colors" style={{ color: '#64748B' }}>
                Блог
              </Link>
              <a href="https://www.avito.ru/brands/8420401faf76579f05b6e183e6856b0b"
                target="_blank" rel="noopener noreferrer"
                aria-label="Наш профиль на Авито"
                className="text-xs hover:text-white transition-colors" style={{ color: '#64748B' }}>
                Авито
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
