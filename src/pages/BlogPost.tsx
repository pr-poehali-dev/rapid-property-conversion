import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { posts } from './Blog';
import Icon from '@/components/ui/icon';

const WA = 'https://wa.me/79013456008?text=Здравствуйте!%20Хочу%20оценить%20технику.';
const TG = 'https://t.me/richsmm1';

const content: Record<string, string> = {
  'kak-spisat-tehniku-v-organizacii': `
<h2>Что такое списание основных средств</h2>
<p>Списание компьютерной техники — это официальная процедура вывода объекта из учёта организации. После неё технику можно передать на утилизацию, продать или просто вывезти.</p>
<h2>Пошаговая инструкция</h2>
<p><strong>Шаг 1. Создайте комиссию по списанию</strong><br/>
Для этого руководитель издаёт приказ о создании комиссии (минимум 3 человека, включая главного бухгалтера и технического специалиста).</p>
<p><strong>Шаг 2. Проведите осмотр техники</strong><br/>
Комиссия осматривает технику, определяет её техническое состояние и причины невозможности дальнейшего использования.</p>
<p><strong>Шаг 3. Оформите акт ОС-4</strong><br/>
Акт о списании объекта основных средств по форме ОС-4 — основной документ. Заполняется на каждое устройство или группу однородных устройств.</p>
<p><strong>Шаг 4. Подпишите у руководителя</strong><br/>
Акт подписывают все члены комиссии и утверждает руководитель организации.</p>
<p><strong>Шаг 5. Отразите в бухгалтерском учёте</strong><br/>
На основании акта бухгалтер списывает объект с баланса.</p>
<p><strong>Шаг 6. Вывезите технику</strong><br/>
После подписания акта мы забираем технику по акту приёма-передачи. Москва — выезд в течение 24 часов.</p>
<h2>Как мы помогаем</h2>
<p>Мы предоставим готовые шаблоны приказа и акта ОС-4, проконсультируем по заполнению, приедем и оформим акт приёма-передачи. Всё — без посредников и лишних бумаг.</p>
  `,
  'skolko-stoit-staryy-noutbuk': `
<h2>От чего зависит цена</h2>
<p>Скупочная цена ноутбука зависит от нескольких факторов: бренда, модели, года выпуска, технических характеристик и физического состояния.</p>
<h2>Ориентировочные цены</h2>
<p><strong>До 2 000 ₽:</strong> старые ноутбуки 2012–2016 года, нерабочие устройства, с серьёзными повреждениями.</p>
<p><strong>2 000 – 7 000 ₽:</strong> рабочие ноутбуки 2017–2020 года, офисные конфигурации, Celeron/i3/i5 с HDD.</p>
<p><strong>7 000 – 15 000 ₽:</strong> современные ноутбуки 2020+, с SSD, i5/i7/Ryzen 5, 8–16 ГБ ОЗУ, в хорошем состоянии.</p>
<p><strong>15 000 – 80 000 ₽:</strong> MacBook Air M1/M2/M3, игровые ноутбуки MSI/ROG с RTX видеокартой.</p>
<h2>Что снижает цену</h2>
<ul><li>Сломанный экран или петли</li><li>Нерабочий аккумулятор</li><li>Не включается</li><li>Отсутствие зарядки или крышки</li></ul>
<h2>Как получить максимум</h2>
<p>Пришлите нам фото ноутбука со всех сторон, включая включённый экран. Укажите модель и год. Чем больше информации — тем точнее оценка.</p>
  `,
  'kuda-sdat-nerabochuyu-tehniku': `
<h2>Варианты избавления от старой техники</h2>
<p><strong>1. Скупщики (мы)</strong><br/>
Принимаем рабочую и нерабочую технику. Нерабочую забираем бесплатно в Москве или платим символически за лом (медь, платы).</p>
<p><strong>2. Пункты приёма лома</strong><br/>
Принимают технику на вес — за цветные металлы. Цена минимальная, зато удобно для больших объёмов.</p>
<p><strong>3. Лицензированные операторы утилизации</strong><br/>
Если нужен официальный акт утилизации для отчётности — обращайтесь к ним. Мы такие акты не выдаём.</p>
<p><strong>4. Объявления</strong><br/>
Авито, Юла — для рабочих устройств с рыночной стоимостью. Требует времени и торга.</p>
<h2>Что нельзя просто выбросить</h2>
<p>Компьютерная техника содержит токсичные вещества и тяжёлые металлы. Выбрасывать в обычный мусор нельзя — это нарушение.</p>
  `,
  'kak-otpravit-tehniku-sdek': `
<h2>Как работает схема с регионами</h2>
<p>Если вы находитесь не в Москве — схема простая: вы отправляете технику СДЭК, мы проверяем и переводим деньги.</p>
<h2>Пошаговая инструкция</h2>
<p><strong>Шаг 1. Оставьте заявку</strong><br/>
Заполните форму или напишите нам в Telegram. Пришлите фото техники для предварительной оценки.</p>
<p><strong>Шаг 2. Получите предварительную цену</strong><br/>
Наш оценщик посмотрит фото и назовёт сумму.</p>
<p><strong>Шаг 3. Упакуйте технику</strong><br/>
Ноутбуки и смартфоны — в мягкую обёртку, затем в коробку с наполнителем. Мониторы — отдельно стекло.</p>
<p><strong>Шаг 4. Оформите отправку в СДЭК</strong><br/>
Укажите наш адрес в Москве (сообщим при согласовании). Оплата отправки — за вас.</p>
<p><strong>Шаг 5. Получите деньги</strong><br/>
После получения и проверки переведём деньги на карту в течение 24 часов.</p>
  `,
  'chto-mozhno-prodat-iz-staroj-elektroniki': `
<h2>Что ценится у скупщиков</h2>
<p><strong>Высокая ценность:</strong> MacBook (любой год), iPhone (даже сломанный), игровые ноутбуки MSI/ASUS ROG, современные смартфоны Samsung Galaxy.</p>
<p><strong>Средняя ценность:</strong> офисные ноутбуки 2017+, системные блоки с дискретной видеокартой, планшеты iPad, SSD-накопители.</p>
<p><strong>Низкая ценность (но заберём):</strong> старые мониторы, принтеры, нетбуки, ноутбуки до 2015 года.</p>
<h2>Что принимают только на лом</h2>
<p>ЭЛТ мониторы, старые телевизоры, нерабочие устройства с механическими повреждениями — принимаем, но платим по цене цветного лома.</p>
<h2>Что точно лучше выбросить</h2>
<p>Кассеты, диски CD/DVD, старые телефоны «раскладушки» до 2010 года — стоимость практически нулевая.</p>
  `,
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);
  const body = content[slug || ''];

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Srochno-Vykup.ru`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', post.excerpt);
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) canonical.setAttribute('href', `https://srochno-vykup.ru/blog/${post.slug}`);
      const robots = document.querySelector('meta[name="robots"]');
      if (robots) robots.setAttribute('content', 'index, follow');

      // Article Schema.org
      const schemaId = 'blogpost-schema';
      let existing = document.getElementById(schemaId);
      if (!existing) {
        existing = document.createElement('script');
        existing.id = schemaId;
        (existing as HTMLScriptElement).type = 'application/ld+json';
        document.head.appendChild(existing);
      }
      existing.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        author: {
          '@type': 'Organization',
          name: 'Srochno-Vykup.ru',
          url: 'https://srochno-vykup.ru',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Srochno-Vykup.ru',
          logo: {
            '@type': 'ImageObject',
            url: 'https://srochno-vykup.ru/favicon.svg',
          },
        },
        datePublished: post.date,
        dateModified: post.date,
        url: `https://srochno-vykup.ru/blog/${post.slug}`,
        inLanguage: 'ru-RU',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://srochno-vykup.ru/blog/${post.slug}`,
        },
        articleSection: post.tag,
      });
    }
    return () => {
      const el = document.getElementById('blogpost-schema');
      if (el) el.remove();
    };
  }, [post]);

  if (!post || !body) {
    return (
      <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
        <Header />
        <main>
          <div className="container mx-auto px-4 py-24 text-center">
            <p style={{ color: 'var(--text-muted)' }}>Статья не найдена</p>
            <Link to="/blog" className="btn-primary text-sm mt-4 inline-flex">Вернуться в блог</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
                <Link to="/blog" itemProp="item" className="hover:underline" style={{ color: 'var(--text-muted)' }}>
                  <span itemProp="name">Блог</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" style={{ color: 'var(--navy)' }}>{post.title}</span>
                <meta itemProp="position" content="3" />
                <link itemProp="item" href={`https://srochno-vykup.ru/blog/${post.slug}`} />
              </li>
            </ol>
          </div>
        </nav>

        <article
          className="section"
          itemScope
          itemType="https://schema.org/Article"
        >
          <div className="container mx-auto px-4 max-w-2xl">

            <div className="mb-3">
              <span className="badge badge-orange">{post.tag}</span>
            </div>

            <h1
              className="text-2xl md:text-3xl font-black mb-4 leading-tight"
              style={{ color: 'var(--navy)' }}
              itemProp="headline"
            >
              {post.title}
            </h1>

            <div className="flex items-center gap-4 mb-8 text-xs" style={{ color: 'var(--text-muted)' }}>
              <time dateTime={post.date} itemProp="datePublished">{post.date}</time>
              <span className="flex items-center gap-1">
                <Icon name="Clock" size={11} aria-hidden="true" />
                {post.readTime}
              </span>
              <span itemProp="author" itemScope itemType="https://schema.org/Organization" style={{ display: 'none' }}>
                <meta itemProp="name" content="Srochno-Vykup.ru" />
              </span>
            </div>

            <div
              className="prose-light text-sm leading-relaxed"
              itemProp="articleBody"
              dangerouslySetInnerHTML={{ __html: body }}
            />

            {/* CTA блок */}
            <div className="mt-12 p-6 rounded-2xl"
              style={{ background: 'var(--orange-bg)', border: '1px solid var(--orange-light)' }}>
              <p className="font-semibold mb-2 text-center" style={{ color: 'var(--navy)' }}>
                Хотите оценить технику?
              </p>
              <p className="text-xs mb-4 text-center" style={{ color: 'var(--text-muted)' }}>
                Пришлите фото — ответим за 5 минут
              </p>
              <div className="flex gap-3 justify-center">
                <a href={TG} target="_blank" rel="noopener noreferrer"
                  aria-label="Оценить технику в Telegram"
                  className="btn-primary text-sm">
                  <Icon name="Send" size={14} aria-hidden="true" />
                  Telegram
                </a>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  aria-label="Оценить технику в WhatsApp"
                  className="btn-ghost text-sm">
                  <Icon name="MessageCircle" size={14} aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Другие статьи */}
            <div className="mt-10">
              <h2 className="text-base font-bold mb-4" style={{ color: 'var(--navy)' }}>Другие статьи</h2>
              <div className="flex flex-col gap-3">
                {posts.filter(p => p.slug !== slug).slice(0, 3).map(p => (
                  <Link key={p.slug} to={`/blog/${p.slug}`}
                    className="flex items-start gap-3 p-3 rounded-xl transition-all hover:shadow-sm"
                    style={{ border: '1px solid var(--border-color)', background: 'white' }}>
                    <Icon name="FileText" size={14} style={{ color: 'var(--orange)', flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                    <span className="text-sm" style={{ color: 'var(--navy)' }}>{p.title}</span>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </article>

      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
