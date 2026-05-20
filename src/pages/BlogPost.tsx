import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { posts } from './Blog';
import Icon from '@/components/ui/icon';

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

  if (!post || !body) {
    return (
      <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
        <Header />
        <div className="container mx-auto px-4 py-24 text-center">
          <p style={{ color: 'var(--text-muted)' }}>Статья не найдена</p>
          <Link to="/blog" className="btn-primary text-sm mt-4 inline-flex">Вернуться в блог</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Header />

      <article className="section">
        <div className="container mx-auto px-4 max-w-2xl">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm mb-8 transition-colors"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--navy)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
            <Icon name="ArrowLeft" size={14} />
            Все статьи
          </Link>

          <div className="mb-2">
            <span className="badge badge-orange">
              {post.tag}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black mb-4 leading-tight" style={{ color: 'var(--navy)' }}>
            {post.title}
          </h1>
          <div className="flex items-center gap-4 mb-8 text-xs" style={{ color: 'var(--text-muted)' }}>
            <span>{post.date}</span>
            <span className="flex items-center gap-1">
              <Icon name="Clock" size={11} />{post.readTime}
            </span>
          </div>

          <div
            className="prose-light text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: body }}
          />

          <div className="mt-12 p-6 rounded-2xl text-center"
            style={{
              background: 'var(--orange-bg)',
              border: '1px solid var(--orange-light)',
            }}>
            <p className="font-semibold mb-2" style={{ color: 'var(--navy)' }}>Хотите оценить технику?</p>
            <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>
              Перезвоним в течение 15 минут
            </p>
            <a href="/#form" className="btn-primary text-sm inline-flex">
              <Icon name="Zap" size={14} />
              Оценить бесплатно
            </a>
          </div>
        </div>
      </article>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
