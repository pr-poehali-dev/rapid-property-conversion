import Icon from '@/components/ui/icon';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
      <a
        href="tel:+79013456008"
        title="Позвонить"
        className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        style={{ background: '#22c55e' }}
      >
        <Icon name="Phone" size={20} className="text-white" />
      </a>
      <a
        href="https://wa.me/79013456008"
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp"
        className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        style={{ background: '#25d366' }}
      >
        <Icon name="MessageCircle" size={20} className="text-white" />
      </a>
      <a
        href="https://t.me/richsmm1"
        target="_blank"
        rel="noopener noreferrer"
        title="Telegram"
        className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        style={{ background: 'var(--purple-dark)' }}
      >
        <Icon name="Send" size={20} className="text-white" />
      </a>
    </div>
  );
}
