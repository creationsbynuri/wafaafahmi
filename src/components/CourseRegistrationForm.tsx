import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { CheckCircle, Loader } from 'lucide-react';
import { getAvailableCourseDates } from '../lib/courseDates';

export default function CourseRegistrationForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    course_date: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

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
      setForm({ name: '', email: '', phone: '', course_date: '', message: '' });

      fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-course-registration-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submittedData),
      }).catch(() => {});
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-10 text-center">
        <div className="w-16 h-16 bg-[#8B0000]/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-[#8B0000]" />
        </div>
        <h3 className="text-xl font-black uppercase text-white mb-2">Anmeldung eingegangen!</h3>
        <p className="text-white/60">
          Wir haben deine Anmeldung erhalten und melden uns in Kürze bei dir.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-[#8B0000] hover:underline"
        >
          Weitere Anmeldung
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#1A1A1A] border border-white/10 rounded-xl p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-white/70 text-sm font-bold uppercase tracking-wide mb-2">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Dein vollständiger Name"
            className="w-full bg-white/5 border border-white/15 text-white placeholder-white/30 rounded-lg px-4 py-3 focus:outline-none focus:border-[#8B0000] transition-colors"
          />
        </div>
        <div>
          <label className="block text-white/70 text-sm font-bold uppercase tracking-wide mb-2">
            Telefon *
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="+49 ..."
            className="w-full bg-white/5 border border-white/15 text-white placeholder-white/30 rounded-lg px-4 py-3 focus:outline-none focus:border-[#8B0000] transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-white/70 text-sm font-bold uppercase tracking-wide mb-2">
          E-Mail *
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="deine@email.de"
          className="w-full bg-white/5 border border-white/15 text-white placeholder-white/30 rounded-lg px-4 py-3 focus:outline-none focus:border-[#8B0000] transition-colors"
        />
      </div>

      <div>
        <label className="block text-white/70 text-sm font-bold uppercase tracking-wide mb-2">
          Termin *
        </label>
        <select
          name="course_date"
          value={form.course_date}
          onChange={handleChange}
          required
          className="w-full bg-[#111111] border border-white/15 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#8B0000] transition-colors"
        >
          <option value="" disabled>Termin auswählen...</option>
          {getAvailableCourseDates().map((d) => (
            <option key={d.value} value={d.value}>{d.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-white/70 text-sm font-bold uppercase tracking-wide mb-2">
          Nachricht (optional)
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={3}
          placeholder="Hast du noch Fragen oder Anmerkungen?"
          className="w-full bg-white/5 border border-white/15 text-white placeholder-white/30 rounded-lg px-4 py-3 focus:outline-none focus:border-[#8B0000] transition-colors resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="text-[#8B0000] text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-[#8B0000] text-white font-bold uppercase py-4 rounded-lg hover:bg-[#B22222] transition-all duration-300 hover:shadow-lg disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <Loader size={18} className="animate-spin" />
            Wird gesendet...
          </>
        ) : (
          'Jetzt anmelden'
        )}
      </button>

      <p className="text-white/30 text-xs text-center">
        Wir melden uns innerhalb der Öffnungszeiten bei dir (Mo – Do, 14:00 – 18:00 Uhr).
      </p>
    </form>
  );
}
