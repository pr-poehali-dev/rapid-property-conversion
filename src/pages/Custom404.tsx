import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Icon from '@/components/ui/icon';

export default function Custom404() {
  useEffect(() => {
    // Сообщаем поисковикам что это реальная 404
    document.title = '404 — Страница не найдена | Srochno-Vykup.ru';
    const meta = document.querySelector('meta[name="robots"]');
    if (meta) meta.setAttribute('content', 'noindex, nofollow');
    return () => {
      document.title = 'Скупка техники в Москве и по России | Srochno-Vykup.ru';
      if (meta) meta.setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    };
  }, []);

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }} role="main" aria-label="Страница не найдена">
      <Header />
      <div className="section">
        <div className="container mx-auto px-4 text-center max-w-lg">
          <div className="text-7xl mb-4" aria-hidden="true">🖥️</div>
          <div className="text-8xl font-black mb-4 leading-none" style={{ color: 'var(--orange-light)' }}
            aria-label="Ошибка 404">
            404
          </div>
          <h1 className="text-2xl font-bold mb-3" style={{ color: 'var(--navy)' }}>
            Страница не найдена
          </h1>
          <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
            Похоже, страница устарела и ушла на утилизацию. Но мы легко найдёмся — нажмите кнопку ниже.
          </p>

          {/* Быстрые ссылки */}
          <div className="grid grid-cols-2 gap-2 mb-6 max-w-xs mx-auto text-left">
            {[
              { to: '/noutbuki', label: 'Скупка ноутбуков' },
              { to: '/telefony', label: 'Скупка смартфонов' },
              { to: '/kompyutery', label: 'Скупка ПК' },
              { to: '/dlya-organizaciy', label: 'Для организаций' },
            ].map(l => (
              <Link key={l.to} to={l.to}
                className="text-xs font-medium px-3 py-2 rounded-lg text-center"
                style={{ background: 'var(--bg-soft)', color: 'var(--navy)', border: '1px solid var(--border-color)' }}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/" className="btn-primary text-sm inline-flex items-center justify-center gap-2">
              <Icon name="Home" size={16} />
              На главную
            </Link>
            <a href="https://t.me/richsmm1" target="_blank" rel="noopener noreferrer"
              aria-label="Написать в Telegram"
              className="btn-ghost text-sm flex items-center gap-2 justify-center">
              <Icon name="Send" size={16} />
              Написать в Telegram
            </a>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingButtons />
    </div>
  );
}