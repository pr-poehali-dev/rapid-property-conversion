import Icon from '@/components/ui/icon';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-2.5">
      <a href="tel:+79013456008" title="Позвонить"
        className="w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110"
        style={{ background: '#22c55e', boxShadow: '0 4px 16px rgba(34,197,94,0.4)' }}>
        <Icon name="Phone" size={20} className="text-white" />
      </a>
      <a href="https://wa.me/79013456008" target="_blank" rel="noopener noreferrer" title="WhatsApp"
        className="w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110"
        style={{ background: '#25d366', boxShadow: '0 4px 16px rgba(37,211,102,0.35)' }}>
        <Icon name="MessageCircle" size={20} className="text-white" />
      </a>
      <a href="https://t.me/richsmm1" target="_blank" rel="noopener noreferrer" title="Telegram"
        className="w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110"
        style={{ background: 'var(--orange)', boxShadow: '0 4px 16px rgba(249,115,22,0.45)' }}>
        <Icon name="Send" size={20} className="text-white" />
      </a>
    </div>
  );
}
