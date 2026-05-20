import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface LeadFormProps {
  variant?: 'default' | 'org';
  title?: string;
  subtitle?: string;
}

const inputStyle = {
  background: '#fff',
  border: '1.5px solid var(--border-dark)',
  color: 'var(--navy)',
};

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
      <div id="form" className="card p-8 text-center">
        <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
          style={{ background: '#F0FDF4', border: '1.5px solid #86EFAC' }}>
          <Icon name="CheckCircle2" size={28} className="text-green-600" />
        </div>
        <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--navy)' }}>Заявка отправлена!</h3>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          Перезвоним в течение 15 минут. Никакого спама.
        </p>
      </div>
    );
  }

  return (
    <div id="form" className="card p-6 md:p-8">
      {title && <h2 className="text-xl font-bold mb-1" style={{ color: 'var(--navy)' }}>{title}</h2>}
      {subtitle && <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>{subtitle}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

        {variant === 'org' ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--navy-mid)' }}>Организация *</label>
                <input required type="text" value={form.orgName}
                  onChange={(e) => setForm({ ...form, orgName: e.target.value })}
                  placeholder="ООО «Пример»"
                  className="w-full px-3 py-2.5 rounded-lg text-sm outline-none" style={inputStyle} />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--navy-mid)' }}>Город *</label>
                <input required type="text" value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  onBlur={handleCityBlur} placeholder="Москва"
                  className="w-full px-3 py-2.5 rounded-lg text-sm outline-none" style={inputStyle} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--navy-mid)' }}>Контактное лицо *</label>
                <input required type="text" value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  placeholder="Иван Иванов"
                  className="w-full px-3 py-2.5 rounded-lg text-sm outline-none" style={inputStyle} />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--navy-mid)' }}>Объём *</label>
                <select required value={form.volume}
                  onChange={(e) => setForm({ ...form, volume: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg text-sm outline-none" style={inputStyle}>
                  <option value="">Выберите...</option>
                  <option>До 10 шт</option>
                  <option>10–50 шт</option>
                  <option>50+ шт</option>
                </select>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--navy-mid)' }}>Тип техники *</label>
                <select required value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg text-sm outline-none" style={inputStyle}>
                  <option value="">Выберите...</option>
                  <option>Ноутбук</option>
                  <option>ПК / Системный блок</option>
                  <option>Смартфон / Планшет</option>
                  <option>Монитор / ТВ</option>
                  <option>Принтер / МФУ</option>
                  <option>Другое</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--navy-mid)' }}>Состояние *</label>
                <select required value={form.condition}
                  onChange={(e) => setForm({ ...form, condition: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg text-sm outline-none" style={inputStyle}>
                  <option value="">Выберите...</option>
                  <option>Рабочее</option>
                  <option>Не работает</option>
                  <option>Не знаю</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--navy-mid)' }}>Марка / модель</label>
              <input type="text" value={form.model}
                onChange={(e) => setForm({ ...form, model: e.target.value })}
                placeholder="Lenovo ThinkPad X1"
                className="w-full px-3 py-2.5 rounded-lg text-sm outline-none" style={inputStyle} />
            </div>
          </>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {variant !== 'org' && (
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--navy-mid)' }}>Город *</label>
              <input required type="text" value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                onBlur={handleCityBlur} placeholder="Москва"
                className="w-full px-3 py-2.5 rounded-lg text-sm outline-none" style={inputStyle} />
            </div>
          )}
          <div className={variant !== 'org' ? '' : 'sm:col-span-2'}>
            <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--navy-mid)' }}>Телефон *</label>
            <input required type="tel" value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+7 (___) ___-__-__"
              className="w-full px-3 py-2.5 rounded-lg text-sm outline-none" style={inputStyle} />
          </div>
        </div>

        {cityWarning && (
          <div className="p-3 rounded-lg text-sm flex items-start gap-2"
            style={{ background: '#FFF7ED', border: '1px solid var(--orange-light)' }}>
            <Icon name="Info" size={15} style={{ color: 'var(--orange)', flexShrink: 0, marginTop: 1 }} />
            <span style={{ color: 'var(--orange-dark)' }}>
              Работаем с регионами через СДЭК. Пришлите фото — оценим, вы отправляете, мы платим.
            </span>
          </div>
        )}

        <button type="submit" disabled={loading} className="btn-primary justify-center w-full py-3">
          {loading
            ? <Icon name="Loader2" size={18} className="animate-spin" />
            : <><Icon name="Zap" size={16} />{variant === 'org' ? 'Заказать вывоз' : 'Оценить технику'}</>
          }
        </button>
        <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
          Перезвоним за 15 минут. Никакого спама.
        </p>
      </form>
    </div>
  );
}
