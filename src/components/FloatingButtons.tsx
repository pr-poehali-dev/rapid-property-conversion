import Icon from '@/components/ui/icon';

const WA_LINK = 'https://wa.me/79013456008?text=Хочу%20оценить%20технику';
const TG_LINK = 'https://t.me/richsmm1';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-2.5 items-end">
      {/* Подпись */}
      <div className="hidden sm:flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-md text-xs font-semibold"
        style={{ color: 'var(--navy-mid)', border: '1.5px solid var(--border-color)' }}>
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        Ответим за 5 мин
      </div>
      <a href="tel:+79013456008" title="Позвонить"
        className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        style={{ background: '#16A34A', boxShadow: '0 4px 16px rgba(22,163,74,0.4)' }}>
        <Icon name="Phone" size={20} className="text-white" />
      </a>
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" title="WhatsApp"
        className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        style={{ background: '#25D366', boxShadow: '0 4px 16px rgba(37,211,102,0.4)' }}>
        <Icon name="MessageCircle" size={20} className="text-white" />
      </a>
      <a href={TG_LINK} target="_blank" rel="noopener noreferrer" title="Telegram"
        className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        style={{ background: '#2AABEE', boxShadow: '0 4px 16px rgba(42,171,238,0.4)' }}>
        <Icon name="Send" size={20} className="text-white" />
      </a>
    </div>
  );
}
