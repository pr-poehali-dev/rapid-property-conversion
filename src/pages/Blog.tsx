import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Icon from '@/components/ui/icon';

export const posts = [
  {
    slug: 'kak-spisat-tehniku-v-organizacii',
    title: 'Как списать компьютерную технику в организации: пошаговая инструкция',
    excerpt: 'Подробная инструкция по процедуре списания ОС: какие документы нужны, как оформить приказ и акт ОС-4, куда деть списанную технику.',
    date: '2026-04-15',
    readTime: '7 мин',
    tag: 'Для организаций',
  },
  {
    slug: 'skolko-stoit-staryy-noutbuk',
    title: 'Сколько стоит старый ноутбук: оценка за 5 минут',
    excerpt: 'Разбираем, от чего зависит цена б/у ноутбука, что делают скупщики при оценке и как получить максимум за свою технику.',
    date: '2026-04-08',
    readTime: '5 мин',
    tag: 'Цены',
  },
  {
    slug: 'kuda-sdat-nerabochuyu-tehniku',
    title: 'Куда сдать нерабочую технику: полный гайд',
    excerpt: 'Обзор всех способов избавиться от старой электроники: скупщики, лом, утилизация, муниципальные программы.',
    date: '2026-03-29',
    readTime: '6 мин',
    tag: 'Гайды',
  },
  {
    slug: 'kak-otpravit-tehniku-sdek',
    title: 'Как отправить технику СДЭК: инструкция для регионов',
    excerpt: 'Пошаговая инструкция: как упаковать ноутбук или смартфон, оформить отправку в СДЭК и получить деньги после проверки.',
    date: '2026-03-20',
    readTime: '4 мин',
    tag: 'Регионы',
  },
  {
    slug: 'chto-mozhno-prodat-iz-staroj-elektroniki',
    title: 'Что можно продать из старой электроники: гайд',
    excerpt: 'Какие устройства ценятся у скупщиков, что принимают только на лом, а что точно стоит выбросить.',
    date: '2026-03-10',
    readTime: '5 мин',
    tag: 'Гайды',
  },
];

export default function Blog() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Header />

      {/* Header block */}
      <section className="section section-alt">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-black mb-3" style={{ color: 'var(--navy)' }}>Блог</h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Полезные статьи о скупке техники, списании и работе с регионами
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`}
                className="card p-6 flex flex-col gap-3 group"
                style={{ textDecoration: 'none' }}>
                <div className="inline-flex items-center">
                  <span className="badge badge-orange">
                    {post.tag}
                  </span>
                </div>
                <h2 className="font-semibold text-sm leading-snug transition-colors"
                  style={{ color: 'var(--navy)' }}>
                  {post.title}
                </h2>
                <p className="text-xs leading-relaxed flex-1" style={{ color: 'var(--text-muted)' }}>
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 pt-2" style={{ borderTop: '1px solid var(--border-color)' }}>
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{post.date}</span>
                  <span className="text-xs flex items-center gap-1" style={{ color: 'var(--text-muted)' }}>
                    <Icon name="Clock" size={11} />{post.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
