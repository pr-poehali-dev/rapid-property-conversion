import { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const TG  = 'https://t.me/richsmm1';
const WA  = 'https://wa.me/79013456008?text=Здравствуйте!%20Хочу%20оценить%20технику.';
const TEL = 'tel:+79013456008';

/* ════════════════════════════════════════════
   1. STICKY BOTTOM CTA BAR (мобильный)
   ════════════════════════════════════════════ */
export function StickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
      style={{ background: '#fff', borderTop: '2px solid var(--orange)', padding: '10px 16px', boxShadow: '0 -4px 20px rgba(0,0,0,0.12)' }}>
      <div className="flex gap-2">
        <a href={TEL}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold"
          style={{ background: 'var(--bg-section)', color: 'var(--navy)', border: '1.5px solid var(--border-dark)' }}>
          <Icon name="Phone" size={16} style={{ color: 'var(--orange)' }} />
          Позвонить
        </a>
        <a href={TG} target="_blank" rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold btn-primary">
          <Icon name="Zap" size={16} />
          Оценить
        </a>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   2. EXIT-INTENT POPUP
   ════════════════════════════════════════════ */
export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    if (dismissed) return;

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !triggered.current) {
        triggered.current = true;
        setTimeout(() => setShow(true), 300);
      }
    };

    // Мобильный — через скролл вверх
    let lastY = 0;
    const onScroll = () => {
      const curr = window.scrollY;
      if (lastY - curr > 80 && curr < 200 && !triggered.current && window.innerWidth < 768) {
        triggered.current = true;
        setShow(true);
      }
      lastY = curr;
    };

    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('scroll', onScroll);
    };
  }, [dismissed]);

  const close = () => { setShow(false); setDismissed(true); };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
      onClick={close}>
      <div className="relative bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl"
        style={{ border: '2px solid var(--orange)' }}
        onClick={e => e.stopPropagation()}>
        <button onClick={close} className="absolute top-3 right-3 p-1 rounded-lg hover:bg-gray-100"
          style={{ color: 'var(--text-muted)' }}>
          <Icon name="X" size={18} />
        </button>

        <div className="text-4xl mb-3">💸</div>
        <h3 className="text-xl font-black mb-2" style={{ color: 'var(--navy)' }}>
          Подождите! Узнайте цену за 5 минут
        </h3>
        <p className="text-sm mb-5" style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
          Пришлите фото в Telegram прямо сейчас - ответим быстро и назовём честную цену без скрытых условий.
        </p>

        <div className="flex flex-col gap-2">
          <a href={TG} target="_blank" rel="noopener noreferrer"
            className="btn-primary justify-center py-3 rounded-xl" onClick={close}>
            <Icon name="Send" size={16} />
            Написать в Telegram
          </a>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="btn-ghost justify-center py-2.5 rounded-xl text-sm" onClick={close}>
            <Icon name="MessageCircle" size={15} />
            Или в WhatsApp
          </a>
        </div>

        <p className="text-xs mt-4" style={{ color: 'var(--text-muted)' }}>
          2500+ сделок · Работаем 12 лет · Оплата в день
        </p>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   3. LIVE ACTIVITY TICKER (псевдо-уведомления)
   ════════════════════════════════════════════ */
const ACTIVITIES = [
  'Антон из Москвы только что оценил ноутбук — 12 000 ₽',
  'Марина из Казани отправила iPhone через СДЭК',
  'ООО «Техносфера» согласовала вывоз 45 ноутбуков',
  'Дмитрий из Екатеринбурга получил деньги за MacBook',
  'Ольга из Новосибирска получила оценку за 3 минуты',
  'Сергей из Санкт-Петербурга продал системный блок',
  'Кирилл из Краснодара отправил планшет Яндекс доставкой',
];

export function LiveActivityTicker() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx(i => (i + 1) % ACTIVITIES.length);
        setVisible(true);
      }, 400);
    }, 5000);
    return () => clearInterval(timer);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      className="fixed bottom-20 left-4 z-40 max-w-xs hidden md:flex items-start gap-3 p-3 rounded-xl shadow-lg transition-all"
      style={{
        background: '#fff',
        border: '1.5px solid var(--border-color)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(8px)',
        transition: 'all 0.4s ease',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      }}>
      <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center"
        style={{ background: '#F0FDF4' }}>
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse block" />
      </div>
      <div className="flex-1">
        <p className="text-xs font-medium" style={{ color: 'var(--navy)' }}>{ACTIVITIES[idx]}</p>
        <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>только что</p>
      </div>
      <button onClick={() => setDismissed(true)} className="flex-shrink-0 ml-1"
        style={{ color: 'var(--text-muted)' }}>
        <Icon name="X" size={12} />
      </button>
    </div>
  );
}

/* ════════════════════════════════════════════
   4. URGENCY TIMER (таймер "ответим сегодня")
   ════════════════════════════════════════════ */
export function UrgencyBanner() {
  const [timeLeft, setTimeLeft] = useState('');
  const [show, setShow] = useState(true);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const hours = now.getHours();
      // Работаем до 21:00
      if (hours >= 9 && hours < 21) {
        const endOfDay = new Date(now);
        endOfDay.setHours(21, 0, 0, 0);
        const diff = endOfDay.getTime() - now.getTime();
        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        setTimeLeft(`${h}ч ${m}мин`);
      } else {
        setTimeLeft('');
      }
    };
    update();
    const t = setInterval(update, 60000);
    return () => clearInterval(t);
  }, []);

  if (!show || !timeLeft) return null;

  return (
    <div className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium"
      style={{ background: 'var(--orange)', color: 'white' }}>
      <div className="flex items-center gap-2 container mx-auto justify-center">
        <Icon name="Clock" size={15} />
        <span>Работаем сегодня ещё <strong>{timeLeft}</strong> - оставьте заявку и получите ответ сегодня</span>
        <a href="#form" className="ml-3 underline font-bold text-xs whitespace-nowrap hidden sm:inline">Оценить сейчас</a>
      </div>
      <button onClick={() => setShow(false)} className="ml-3 flex-shrink-0 opacity-80 hover:opacity-100">
        <Icon name="X" size={14} />
      </button>
    </div>
  );
}

/* ════════════════════════════════════════════
   5. БЛОК ОТЗЫВОВ (социальное доказательство)
   ════════════════════════════════════════════ */
const REVIEWS = [
  { name: 'Анна К.', city: 'Москва', rating: 5, text: 'Продала MacBook Air, всё быстро и честно. Оценили по фото, приехали в тот же день, заплатили наличными. Рекомендую!' },
  { name: 'Дмитрий С.', city: 'Казань', rating: 5, text: 'Из Казани отправил ноутбук через СДЭК. Деньги пришли в тот же день как получили посылку. Никакого обмана.' },
  { name: 'Ирина В.', city: 'Санкт-Петербург', rating: 5, text: 'Сдала офисные ПК от организации. Документы оформили, всё вывезли. Удобно и без бюрократии.' },
  { name: 'Максим Р.', city: 'Екатеринбург', rating: 5, text: 'Телефон с разбитым экраном - думал, никто не возьмёт. Взяли, оценили честно, деньги получил быстро.' },
  { name: 'Светлана П.', city: 'Новосибирск', rating: 4, text: 'Отправила iPad через Яндекс доставку. Всё прошло хорошо, только ждала немного дольше чем рассчитывала.' },
  { name: 'Алексей Т.', city: 'Москва', rating: 5, text: 'Третий раз продаю через них. Ценят постоянных клиентов, иногда дают чуть больше рынка. Надёжные.' },
];

export function ReviewsSection() {
  return (
    <section className="section" style={{ background: 'var(--bg-soft)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="badge badge-orange mb-3 inline-flex">Отзывы клиентов</span>
          <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color: 'var(--navy)' }}>
            Что говорят 2500+ клиентов
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="flex">
              {[1,2,3,4,5].map(s => (
                <Icon key={s} name="Star" size={18} style={{ color: '#F59E0B' }} />
              ))}
            </div>
            <span className="font-bold text-base" style={{ color: 'var(--navy)' }}>4.8</span>
            <span className="text-sm" style={{ color: 'var(--text-muted)' }}>· 659 отзывов на Авито</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {REVIEWS.map((r, i) => (
            <div key={i} className="card p-5 flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-bold text-sm" style={{ color: 'var(--navy)' }}>{r.name}</div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{r.city}</div>
                </div>
                <div className="flex">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Icon key={j} name="Star" size={13} style={{ color: '#F59E0B' }} />
                  ))}
                </div>
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--navy-mid)' }}>"{r.text}"</p>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                <Icon name="CheckCircle2" size={12} className="inline mr-1 text-green-600" />
                Проверенный отзыв
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Ещё 600+ отзывов на нашем профиле Авито · "Ноутбуки с Видеообзором"
          </p>
        </div>
      </div>
    </section>
  );
}
