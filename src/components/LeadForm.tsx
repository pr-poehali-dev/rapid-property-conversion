import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface LeadFormProps {
  variant?: 'default' | 'org';
  title?: string;
  subtitle?: string;
}

export default function LeadForm({ variant = 'default', title, subtitle }: LeadFormProps) {
  const [form, setForm] = useState({
    type: '', condition: '', city: '', phone: '',
    orgName: '', contact: '', volume: '', model: '',
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cityWarning, setCityWarning] = useState(false);

  const moscowPattern = /москв|мо\b|подмосков/i;

  const handleCityBlur = () => {
    if (form.city && !moscowPattern.test(form.city)) {
      setCityWarning(true);
    } else {
      setCityWarning(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSent(true);
  };

  if (sent) {
    return (
      <div id="form" className="card-dark p-8 text-center">
        <div className="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4"
          style={{ background: 'var(--orange-glow)', border: '1px solid rgba(249,115,22,0.4)' }}>
          <Icon name="CheckCircle2" size={28} style={{ color: 'var(--orange)' }} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Заявка отправлена!</h3>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          Перезвоним в течение 15 минут. Никакого спама.
        </p>
      </div>
    );
  }

  return (
    <div id="form" className="card-dark p-6 md:p-8">
      {title && <h2 className="text-xl md:text-2xl font-bold text-white mb-1">{title}</h2>}
      {subtitle && <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>{subtitle}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Honeypot */}
        <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

        {variant === 'org' ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: 'var(--text-muted)' }}>
                  Название организации *
                </label>
                <input
                  required
                  type="text"
                  value={form.orgName}
                  onChange={(e) => setForm({ ...form, orgName: e.target.value })}
                  placeholder="ООО «Пример»"
                  className="w-full px-3 py-2.5 rounded-lg text-sm text-white outline-none transition-all focus:ring-1"
                  style={{ background: 'var(--bg-card2)', border: '1px solid var(--border-color)', focusRingColor: 'var(--purple)' }}
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: 'var(--text-muted)' }}>
                  Город *
                </label>
                <input
                  required
                  type="text"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  onBlur={handleCityBlur}
                  placeholder="Москва"
                  className="w-full px-3 py-2.5 rounded-lg text-sm text-white outline-none"
                  style={{ background: 'var(--bg-card2)', border: '1px solid var(--border-color)' }}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: 'var(--text-muted)' }}>
                  Контактное лицо *
                </label>
                <input
                  required
                  type="text"
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  placeholder="Иван Иванов"
                  className="w-full px-3 py-2.5 rounded-lg text-sm text-white outline-none"
                  style={{ background: 'var(--bg-card2)', border: '1px solid var(--border-color)' }}
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: 'var(--text-muted)' }}>
                  Примерный объём *
                </label>
                <select
                  required
                  value={form.volume}
                  onChange={(e) => setForm({ ...form, volume: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg text-sm text-white outline-none"
                  style={{ background: 'var(--bg-card2)', border: '1px solid var(--border-color)' }}
                >
                  <option value="">Выберите...</option>
                  <option value="до 10 шт">До 10 шт</option>
                  <option value="10–50 шт">10–50 шт</option>
                  <option value="50+ шт">50+ шт</option>
                </select>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: 'var(--text-muted)' }}>
                  Тип техники *
                </label>
                <select
                  required
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg text-sm text-white outline-none"
                  style={{ background: 'var(--bg-card2)', border: '1px solid var(--border-color)' }}
                >
                  <option value="">Выберите...</option>
                  <option value="Ноутбук">Ноутбук</option>
                  <option value="ПК / Системный блок">ПК / Системный блок</option>
                  <option value="Смартфон / Планшет">Смартфон / Планшет</option>
                  <option value="Монитор / ТВ">Монитор / ТВ</option>
                  <option value="Принтер / МФУ">Принтер / МФУ</option>
                  <option value="Другое">Другое</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: 'var(--text-muted)' }}>
                  Состояние *
                </label>
                <select
                  required
                  value={form.condition}
                  onChange={(e) => setForm({ ...form, condition: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg text-sm text-white outline-none"
                  style={{ background: 'var(--bg-card2)', border: '1px solid var(--border-color)' }}
                >
                  <option value="">Выберите...</option>
                  <option value="Рабочее">Рабочее</option>
                  <option value="Не работает">Не работает</option>
                  <option value="Не знаю">Не знаю</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium mb-1" style={{ color: 'var(--text-muted)' }}>
                Марка / модель (необязательно)
              </label>
              <input
                type="text"
                value={form.model}
                onChange={(e) => setForm({ ...form, model: e.target.value })}
                placeholder="Например: Lenovo ThinkPad X1"
                className="w-full px-3 py-2.5 rounded-lg text-sm text-white outline-none"
                style={{ background: 'var(--bg-card2)', border: '1px solid var(--border-color)' }}
              />
            </div>
          </>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {variant !== 'org' && (
            <div>
              <label className="block text-xs font-medium mb-1" style={{ color: 'var(--text-muted)' }}>
                Город *
              </label>
              <input
                required
                type="text"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                onBlur={handleCityBlur}
                placeholder="Москва"
                className="w-full px-3 py-2.5 rounded-lg text-sm text-white outline-none"
                style={{ background: 'var(--bg-card2)', border: '1px solid var(--border-color)' }}
              />
            </div>
          )}
          <div className={variant !== 'org' ? '' : 'sm:col-span-2'}>
            <label className="block text-xs font-medium mb-1" style={{ color: 'var(--text-muted)' }}>
              Телефон *
            </label>
            <input
              required
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+7 (___) ___-__-__"
              pattern="[\+7\-\(\) 0-9]{10,18}"
              className="w-full px-3 py-2.5 rounded-lg text-sm text-white outline-none"
              style={{ background: 'var(--bg-card2)', border: '1px solid var(--border-color)' }}
            />
          </div>
        </div>

        {cityWarning && (
          <div className="p-3 rounded-lg text-sm flex items-start gap-2"
            style={{ background: 'var(--orange-glow)', border: '1px solid rgba(249,115,22,0.3)' }}>
            <Icon name="Info" size={16} style={{ color: 'var(--orange)', flexShrink: 0, marginTop: 1 }} />
            <span style={{ color: 'var(--orange-light)' }}>
              Работаем с регионами через СДЭК. Пришлите фото — оценим дистанционно, переведём деньги после получения.
            </span>
          </div>
        )}

        <button type="submit" disabled={loading}
          className="btn-primary justify-center text-sm mt-2 w-full">
          {loading ? (
            <Icon name="Loader2" size={18} className="animate-spin" />
          ) : (
            <>
              <Icon name="Zap" size={16} />
              {variant === 'org' ? 'Заказать вывоз' : 'Оценить технику'}
            </>
          )}
        </button>
        <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
          Перезвоним в течение 15 минут. Никакого спама.
        </p>
      </form>
    </div>
  );
}