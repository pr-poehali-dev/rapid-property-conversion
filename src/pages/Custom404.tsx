import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Icon from '@/components/ui/icon';

export default function Custom404() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Header />
      <div className="section-padding">
        <div className="container mx-auto px-4 text-center max-w-lg">
          <div className="text-7xl mb-4">🖥️</div>
          <div className="text-8xl font-black mb-4" style={{ color: 'rgba(139,92,246,0.15)', lineHeight: 1 }}>
            404
          </div>
          <h1 className="text-2xl font-bold text-white mb-3">Эта страница не найдена</h1>
          <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
            Похоже, страница устарела и ушла на утилизацию. Но мы легко найдёмся — нажмите кнопку ниже.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/" className="btn-primary text-sm">
              <Icon name="Home" size={16} />
              На главную
            </Link>
            <a href="https://t.me/richsmm1" target="_blank" rel="noopener noreferrer"
              className="btn-outline text-sm flex items-center gap-2 justify-center">
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
