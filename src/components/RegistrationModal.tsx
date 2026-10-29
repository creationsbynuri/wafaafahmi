import { useState, useEffect } from 'react';
import { X, CheckCircle, Loader, CalendarCheck } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { getAvailableCourseDates } from '../lib/courseDates';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDate?: string;
  preselectedLabel?: string;
}

export default function RegistrationModal({ isOpen, onClose, preselectedDate, preselectedLabel }: RegistrationModalProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    course_date: preselectedDate || '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (isOpen) {
      setForm(f => ({ ...f, course_date: preselectedDate || '' }));
      setStatus('idle');
      setErrorMsg('');
    }
  }, [isOpen, preselectedDate]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    const submittedData = { ...form };
    const { error } = await supabase.from('course_registrations').insert([form]);
    if (error) {
      setStatus('error');
      setErrorMsg('Es ist ein Fehler aufgetreten. Bitte versuche es erneut oder kontaktiere uns direkt.');
    } else {
      setStatus('success');
      fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-course-registration-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submittedData),
      }).catch(() => {});
      setTimeout(() => onClose(), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg bg-[#1A1A1A] rounded-2xl shadow-2xl border border-white/10 overflow-hidden animate-fade-in">
        <div className="bg-[#8B0000] px-6 py-5 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <CalendarCheck size={18} className="text-white/80" />
              <p className="text-white/80 text-xs font-bold uppercase tracking-widest">Kursanmeldung</p>
            </div>
            {preselectedLabel ? (
              <h2 className="text-white font-black text-xl leading-tight">{preselectedLabel}</h2>
            ) : (
              <h2 className="text-white font-black text-xl">Jetzt anmelden</h2>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors ml-4 mt-1 flex-shrink-0 hover:bg-white/10 rounded-lg p-1"
            aria-label="Schließen"
          >
            <X size={22} />
          </button>
        </div>

        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[#8B0000]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-[#8B0000]" />
              </div>
              <h3 className="text-xl font-black uppercase text-white mb-2">Anmeldung eingegangen!</h3>
              <p className="text-white/60 mb-6">
                Wir haben deine Anmeldung erhalten und melden uns in Kürze bei dir.
              </p>
              <button
                onClick={onClose}
                className="bg-[#8B0000] text-white font-bold uppercase px-8 py-3 rounded-lg hover:bg-[#B22222] transition-colors"
              >
                Schließen
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/60 text-xs font-bold uppercase tracking-wide mb-1.5">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Dein vollständiger Name"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/25 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#8B0000] focus:bg-white/8 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-xs font-bold uppercase tracking-wide mb-1.5">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+49 ..."
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/25 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#8B0000] focus:bg-white/8 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/60 text-xs font-bold uppercase tracking-wide mb-1.5">
                  E-Mail *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="deine@email.de"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/25 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#8B0000] focus:bg-white/8 transition-all"
                />
              </div>

              <div>
                <label className="block text-white/60 text-xs font-bold uppercase tracking-wide mb-1.5">
                  Termin *
                </label>
                <select
                  name="course_date"
                  value={form.course_date}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#111111] border border-white/10 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#8B0000] transition-all"
                >
                  <option value="" disabled>Termin auswählen...</option>
                  {getAvailableCourseDates().map((d) => (
                    <option key={d.value} value={d.value}>{d.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white/60 text-xs font-bold uppercase tracking-wide mb-1.5">
                  Nachricht (optional)
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Fragen oder Anmerkungen?"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/25 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#8B0000] focus:bg-white/8 transition-all resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                  {errorMsg}
                </p>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#8B0000] text-white font-bold uppercase py-4 rounded-lg hover:bg-[#B22222] transition-all duration-300 hover:shadow-lg disabled:opacity-60 flex items-center justify-center gap-2 text-sm tracking-wider"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader size={16} className="animate-spin" />
                      Wird gesendet...
                    </>
                  ) : (
                    'Jetzt verbindlich anmelden'
                  )}
                </button>
                <p className="text-white/25 text-xs text-center mt-3">
                  Mo – Do, 14:00 – 18:00 Uhr · Wir melden uns schnellstmöglich
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
