import { useEffect } from 'react';
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
  useEffect(() => {
    document.title = 'Блог о скупке техники: советы и гайды | Srochno-Vykup.ru';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Полезные статьи о скупке техники, списании в организациях, отправке СДЭК и ценах на б/у устройства. Srochno-Vykup.ru.');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://srochno-vykup.ru/blog');

    // Blog Schema
    const schemaId = 'blog-schema';
    let existing = document.getElementById(schemaId);
    if (!existing) {
      existing = document.createElement('script');
      existing.id = schemaId;
      (existing as HTMLScriptElement).type = 'application/ld+json';
      document.head.appendChild(existing);
    }
    existing.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Блог Srochno-Vykup.ru',
      description: 'Статьи о скупке техники, списании ОС в организациях, доставке СДЭК и ценах на б/у устройства.',
      url: 'https://srochno-vykup.ru/blog',
      publisher: {
        '@type': 'Organization',
        name: 'Srochno-Vykup.ru',
        url: 'https://srochno-vykup.ru',
        logo: { '@type': 'ImageObject', url: 'https://srochno-vykup.ru/favicon.svg' },
      },
      blogPost: posts.map(p => ({
        '@type': 'BlogPosting',
        headline: p.title,
        description: p.excerpt,
        url: `https://srochno-vykup.ru/blog/${p.slug}`,
        datePublished: p.date,
        author: { '@type': 'Organization', name: 'Srochno-Vykup.ru' },
        articleSection: p.tag,
      })),
    });

    return () => {
      const el = document.getElementById('blog-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Header />
      <main id="main-content">

        {/* Breadcrumb */}
        <nav aria-label="Хлебные крошки" className="border-b" style={{ borderColor: 'var(--border-color)', background: 'var(--bg-soft)' }}>
          <div className="container mx-auto px-4 py-2">
            <ol className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}
              itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link to="/" itemProp="item" className="hover:underline" style={{ color: 'var(--text-muted)' }}>
                  <span itemProp="name">Главная</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" style={{ color: 'var(--navy)' }}>Блог</span>
                <meta itemProp="position" content="2" />
                <link itemProp="item" href="https://srochno-vykup.ru/blog" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Заголовок */}
        <section className="section section-alt" aria-label="Блог о скупке техники">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-black mb-3" style={{ color: 'var(--navy)' }}>
              Блог
            </h1>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Полезные статьи о скупке техники, списании в организациях и работе с регионами
            </p>
          </div>
        </section>

        {/* Посты */}
        <section className="section" aria-label="Список статей">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map((post) => (
                <article key={post.slug}
                  itemScope itemType="https://schema.org/BlogPosting">
                  <Link to={`/blog/${post.slug}`}
                    className="card p-6 flex flex-col gap-3 group h-full"
                    style={{ textDecoration: 'none', display: 'flex' }}
                    itemProp="url">
                    <div className="inline-flex items-center">
                      <span className="badge badge-orange">{post.tag}</span>
                    </div>
                    <h2 className="font-semibold text-sm leading-snug transition-colors"
                      style={{ color: 'var(--navy)' }}
                      itemProp="headline">
                      {post.title}
                    </h2>
                    <p className="text-xs leading-relaxed flex-1" style={{ color: 'var(--text-muted)' }}
                      itemProp="description">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 pt-2" style={{ borderTop: '1px solid var(--border-color)' }}>
                      <time dateTime={post.date} className="text-xs" style={{ color: 'var(--text-muted)' }}
                        itemProp="datePublished">
                        {post.date}
                      </time>
                      <span className="text-xs flex items-center gap-1" style={{ color: 'var(--text-muted)' }}>
                        <Icon name="Clock" size={11} aria-hidden="true" />{post.readTime}
                      </span>
                    </div>
                    <meta itemProp="author" content="Srochno-Vykup.ru" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
