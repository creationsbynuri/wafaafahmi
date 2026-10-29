import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, Bike, CalendarCheck, ChevronRight, Users, Heart, ChevronDown } from 'lucide-react';
import HeroBanner from '../components/HeroBanner';
import RegistrationModal from '../components/RegistrationModal';
import { supabase } from '../lib/supabase';
import { getAvailableCourseDates } from '../lib/courseDates';

interface FirstAidCourse {
  id: string;
  date: string;
  time: string;
  location: string;
}

interface CourseDay {
  date: string;
  dayLabel: string;
  dateValue: string;
  modalLabel: string;
  lessons: string[];
  note?: string;
  isSpecial?: boolean;
  soldOut?: boolean;
}

const soldOutCourseDays: CourseDay[] = [
  {
    date: '15. Juli 2026',
    dayLabel: 'Tag 1 — Dienstag',
    dateValue: '15.07.2026',
    modalLabel: '',
    lessons: ['1. Persönliche Voraussetzungen', '2. Rechtliche Rahmenbedingungen'],
    soldOut: true,
  },
  {
    date: '16. Juli 2026',
    dayLabel: 'Tag 2 — Mittwoch',
    dateValue: '16.07.2026',
    modalLabel: '',
    lessons: ['3. Verkehrszeichen und Verkehrseinrichtungen', '4. Straßen-Verkehrssystem und seine Nutzung'],
    soldOut: true,
  },
  {
    date: '17. Juli 2026',
    dayLabel: 'Tag 3 — Donnerstag',
    dateValue: '17.07.2026',
    modalLabel: '',
    lessons: ['5. Vorfahrt', '6. Verkehrsregelungen / Bahnübergänge'],
    soldOut: true,
  },
  {
    date: '20. Juli 2026',
    dayLabel: 'Tag 4 — Montag',
    dateValue: '20.07.2026',
    modalLabel: '',
    lessons: ['7. Geschwindigkeit, Abstand und umweltschonende Fahrweise', '8. Andere Teilnehmer im Straßenverkehr'],
    soldOut: true,
  },
  {
    date: '21. Juli 2026',
    dayLabel: 'Tag 5 — Dienstag',
    dateValue: '21.07.2026',
    modalLabel: '',
    lessons: ['9. Verkehrsverhalten bei Fahrmanövern, Verkehrsbeobachtung', '10. Ruhender Verkehr'],
    soldOut: true,
  },
  {
    date: '22. Juli 2026',
    dayLabel: 'Tag 6 — Mittwoch',
    dateValue: '22.07.2026',
    modalLabel: '',
    lessons: ['11. Verhalten in besonderen Situationen', '12. Lebenslanges Lernen / Folgen von Verstößen'],
    soldOut: true,
  },
  {
    date: '23. Juli 2026',
    dayLabel: 'Tag 7 — Donnerstag',
    dateValue: '23.07.2026',
    modalLabel: '',
    lessons: ['13. Technische Bedingungen / umweltbewusster Umgang', '14. Fahren mit Solofahrzeugen und Zügen / Motorrad'],
    isSpecial: true,
    soldOut: true,
  },
  {
    date: '17. August 2026',
    dayLabel: 'Tag 1 — Montag',
    dateValue: '17.08.2026',
    modalLabel: '',
    lessons: ['1. Persönliche Voraussetzungen', '2. Rechtliche Rahmenbedingungen'],
    soldOut: true,
  },
  {
    date: '18. August 2026',
    dayLabel: 'Tag 2 — Dienstag',
    dateValue: '18.08.2026',
    modalLabel: '',
    lessons: ['3. Verkehrszeichen und Verkehrseinrichtungen', '4. Straßen-Verkehrssystem und seine Nutzung'],
    soldOut: true,
  },
  {
    date: '19. August 2026',
    dayLabel: 'Tag 3 — Mittwoch',
    dateValue: '19.08.2026',
    modalLabel: '',
    lessons: ['5. Vorfahrt', '6. Verkehrsregelungen / Bahnübergänge'],
    soldOut: true,
  },
  {
    date: '20. August 2026',
    dayLabel: 'Tag 4 — Donnerstag',
    dateValue: '20.08.2026',
    modalLabel: '',
    lessons: ['7. Geschwindigkeit, Abstand und umweltschonende Fahrweise', '8. Andere Teilnehmer im Straßenverkehr'],
    soldOut: true,
  },
  {
    date: '24. August 2026',
    dayLabel: 'Tag 5 — Montag',
    dateValue: '24.08.2026',
    modalLabel: '',
    lessons: ['9. Verkehrsverhalten bei Fahrmanövern, Verkehrsbeobachtung', '10. Ruhender Verkehr'],
    soldOut: true,
  },
  {
    date: '25. August 2026',
    dayLabel: 'Tag 6 — Dienstag',
    dateValue: '25.08.2026',
    modalLabel: '',
    lessons: ['11. Verhalten in besonderen Situationen', '12. Lebenslanges Lernen / Folgen von Verstößen'],
    soldOut: true,
  },
  {
    date: '26. August 2026',
    dayLabel: 'Tag 7 — Mittwoch',
    dateValue: '26.08.2026',
    modalLabel: '',
    lessons: ['13. Technische Bedingungen / umweltbewusster Umgang', '14. Fahren mit Solofahrzeugen und Zügen / Motorrad'],
    isSpecial: true,
    soldOut: true,
  },
  {
    date: '15. Oktober 2026',
    dayLabel: 'Tag 1 — Donnerstag',
    dateValue: '15.10.2026',
    modalLabel: '',
    lessons: ['1. Persönliche Voraussetzungen', '2. Rechtliche Rahmenbedingungen'],
    soldOut: true,
  },
  {
    date: '16. Oktober 2026',
    dayLabel: 'Tag 2 — Freitag',
    dateValue: '16.10.2026',
    modalLabel: '',
    lessons: ['3. Verkehrszeichen und Verkehrseinrichtungen', '4. Straßen-Verkehrssystem und seine Nutzung'],
    soldOut: true,
  },
  {
    date: '19. Oktober 2026',
    dayLabel: 'Tag 3 — Montag',
    dateValue: '19.10.2026',
    modalLabel: '',
    lessons: ['5. Vorfahrt', '6. Verkehrsregelungen / Bahnübergänge'],
    soldOut: true,
  },
  {
    date: '20. Oktober 2026',
    dayLabel: 'Tag 4 — Dienstag',
    dateValue: '20.10.2026',
    modalLabel: '',
    lessons: ['7. Geschwindigkeit, Abstand und umweltschonende Fahrweise', '8. Andere Teilnehmer im Straßenverkehr – Besonderheiten'],
    soldOut: true,
  },
  {
    date: '21. Oktober 2026',
    dayLabel: 'Tag 5 — Mittwoch',
    dateValue: '21.10.2026',
    modalLabel: '',
    lessons: ['9. Verkehrsverhalten bei Fahrmanövern, Verkehrsbeobachtung', '10. Ruhender Verkehr'],
    soldOut: true,
  },
  {
    date: '22. Oktober 2026',
    dayLabel: 'Tag 6 — Donnerstag',
    dateValue: '22.10.2026',
    modalLabel: '',
    lessons: ['11. Verhalten in besonderen Situationen', '12. Lebenslanges Lernen / Folgen von Verstößen'],
    soldOut: true,
  },
  {
    date: '23. Oktober 2026',
    dayLabel: 'Tag 7 — Freitag',
    dateValue: '23.10.2026',
    modalLabel: '',
    lessons: ['B1. Technische Bedingungen / umweltbewusster Umgang mit Kraftfahrzeugen', 'B2. Fahren mit Solofahrzeugen und Zügen, Personen- und Güterbeförderung'],
    isSpecial: true,
    soldOut: true,
  },
  {
    date: '16. November 2026',
    dayLabel: 'Tag 1 — Montag',
    dateValue: '16.11.2026',
    modalLabel: '',
    lessons: ['1. Persönliche Voraussetzungen', '2. Rechtliche Rahmenbedingungen'],
    soldOut: true,
  },
  {
    date: '17. November 2026',
    dayLabel: 'Tag 2 — Dienstag',
    dateValue: '17.11.2026',
    modalLabel: '',
    lessons: ['3. Verkehrszeichen und Verkehrseinrichtungen', '4. Straßen-Verkehrssystem und seine Nutzung'],
    soldOut: true,
  },
  {
    date: '18. November 2026',
    dayLabel: 'Tag 3 — Mittwoch',
    dateValue: '18.11.2026',
    modalLabel: '',
    lessons: ['5. Vorfahrt', '6. Verkehrsregelungen / Bahnübergänge'],
    soldOut: true,
  },
  {
    date: '19. November 2026',
    dayLabel: 'Tag 4 — Donnerstag',
    dateValue: '19.11.2026',
    modalLabel: '',
    lessons: ['7. Geschwindigkeit, Abstand und umweltschonende Fahrweise', '8. Andere Teilnehmer im Straßenverkehr – Besonderheiten'],
    soldOut: true,
  },
  {
    date: '20. November 2026',
    dayLabel: 'Tag 5 — Freitag',
    dateValue: '20.11.2026',
    modalLabel: '',
    lessons: ['9. Verkehrsverhalten bei Fahrmanövern, Verkehrsbeobachtung', '10. Ruhender Verkehr'],
    soldOut: true,
  },
  {
    date: '23. November 2026',
    dayLabel: 'Tag 6 — Montag',
    dateValue: '23.11.2026',
    modalLabel: '',
    lessons: ['11. Verhalten in besonderen Situationen', '12. Lebenslanges Lernen / Folgen von Verstößen'],
    soldOut: true,
  },
  {
    date: '24. November 2026',
    dayLabel: 'Tag 7 — Dienstag',
    dateValue: '24.11.2026',
    modalLabel: '',
    lessons: ['B1. Technische Bedingungen / umweltbewusster Umgang mit Kraftfahrzeugen', 'B2. Fahren mit Solofahrzeugen und Zügen, Personen- und Güterbeförderung'],
    isSpecial: true,
    soldOut: true,
  },
  {
    date: '15. Dezember 2026',
    dayLabel: 'Tag 1 — Dienstag',
    dateValue: '15.12.2026',
    modalLabel: '',
    lessons: ['1. Persönliche Voraussetzungen', '2. Rechtliche Rahmenbedingungen'],
    soldOut: true,
  },
  {
    date: '16. Dezember 2026',
    dayLabel: 'Tag 2 — Mittwoch',
    dateValue: '16.12.2026',
    modalLabel: '',
    lessons: ['3. Verkehrszeichen und Verkehrseinrichtungen', '4. Straßen-Verkehrssystem und seine Nutzung'],
    soldOut: true,
  },
  {
    date: '17. Dezember 2026',
    dayLabel: 'Tag 3 — Donnerstag',
    dateValue: '17.12.2026',
    modalLabel: '',
    lessons: ['5. Vorfahrt', '6. Verkehrsregelungen / Bahnübergänge'],
    soldOut: true,
  },
  {
    date: '18. Dezember 2026',
    dayLabel: 'Tag 4 — Freitag',
    dateValue: '18.12.2026',
    modalLabel: '',
    lessons: ['7. Geschwindigkeit, Abstand und umweltschonende Fahrweise', '8. Andere Teilnehmer im Straßenverkehr – Besonderheiten'],
    soldOut: true,
  },
  {
    date: '21. Dezember 2026',
    dayLabel: 'Tag 5 — Montag',
    dateValue: '21.12.2026',
    modalLabel: '',
    lessons: ['9. Verkehrsverhalten bei Fahrmanövern, Verkehrsbeobachtung', '10. Ruhender Verkehr'],
    soldOut: true,
  },
  {
    date: '22. Dezember 2026',
    dayLabel: 'Tag 6 — Dienstag',
    dateValue: '22.12.2026',
    modalLabel: '',
    lessons: ['11. Verhalten in besonderen Situationen', '12. Lebenslanges Lernen / Folgen von Verstößen'],
    soldOut: true,
  },
  {
    date: '23. Dezember 2026',
    dayLabel: 'Tag 7 — Mittwoch',
    dateValue: '23.12.2026',
    modalLabel: '',
    lessons: ['B1. Technische Bedingungen / umweltbewusster Umgang mit Kraftfahrzeugen', 'B2. Fahren mit Solofahrzeugen und Zügen, Personen- und Güterbeförderung'],
    isSpecial: true,
    soldOut: true,
  },
];

const courseDays: CourseDay[] = [
  {
    date: '15. Januar 2027',
    dayLabel: 'Tag 1 — Freitag',
    dateValue: '15.01.2027',
    modalLabel: '15. Januar 2027 – Lektion 1 & 2',
    lessons: [
      '1. Persönliche Voraussetzungen',
      '2. Rechtliche Rahmenbedingungen',
    ],
  },
  {
    date: '18. Januar 2027',
    dayLabel: 'Tag 2 — Montag',
    dateValue: '18.01.2027',
    modalLabel: '18. Januar 2027 – Lektion 3 & 4',
    lessons: [
      '3. Verkehrszeichen und Verkehrseinrichtungen',
      '4. Straßen-Verkehrssystem und seine Nutzung',
    ],
  },
  {
    date: '19. Januar 2027',
    dayLabel: 'Tag 3 — Dienstag',
    dateValue: '19.01.2027',
    modalLabel: '19. Januar 2027 – Lektion 5 & 6',
    lessons: [
      '5. Vorfahrt',
      '6. Verkehrsregelungen / Bahnübergänge',
    ],
  },
  {
    date: '20. Januar 2027',
    dayLabel: 'Tag 4 — Mittwoch',
    dateValue: '20.01.2027',
    modalLabel: '20. Januar 2027 – Lektion 7 & 8',
    lessons: [
      '7. Geschwindigkeit, Abstand und umweltschonende Fahrweise',
      '8. Andere Teilnehmer im Straßenverkehr – Besonderheiten und Verhalten',
    ],
  },
  {
    date: '21. Januar 2027',
    dayLabel: 'Tag 5 — Donnerstag',
    dateValue: '21.01.2027',
    modalLabel: '21. Januar 2027 – Lektion 9 & 10',
    lessons: [
      '9. Verkehrsverhalten bei Fahrmanövern, Verkehrsbeobachtung',
      '10. Ruhender Verkehr',
    ],
  },
  {
    date: '22. Januar 2027',
    dayLabel: 'Tag 6 — Freitag',
    dateValue: '22.01.2027',
    modalLabel: '22. Januar 2027 – Lektion 11 & 12',
    lessons: [
      '11. Verhalten in besonderen Situationen',
      '12. Lebenslanges Lernen / Folgen von Verstößen gegen Verkehrsvorschriften',
    ],
  },
  {
    date: '25. Januar 2027',
    dayLabel: 'PKW',
    dateValue: '25.01.2027',
    modalLabel: '25. Januar 2027 – PKW / Lektion B1 & B2',
    lessons: [
      'B1. Technische Bedingungen / umweltbewusster Umgang mit Kraftfahrzeugen',
      'B2. Fahren mit Solofahrzeugen und Zügen, Personen- und Güterbeförderung',
    ],
    note: 'Motorrad: Auf Anfrage (Sa. 11:00 – 17:30 Uhr)',
    isSpecial: true,
  },
];

function FullRegistrationForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', course_date: '', message: '',
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
      <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 bg-[#8B0000]/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CalendarCheck size={32} className="text-[#8B0000]" />
        </div>
        <h3 className="text-xl font-black uppercase text-white mb-2">Anmeldung eingegangen!</h3>
        <p className="text-white/60 mb-6">Wir melden uns in Kürze bei dir.</p>
        <button onClick={() => setStatus('idle')} className="text-sm text-[#8B0000] hover:underline">
          Weitere Anmeldung →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-white/60 text-xs font-bold uppercase tracking-wide mb-2">Name *</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required
            placeholder="Dein vollständiger Name"
            className="w-full bg-white/5 border border-white/10 text-white placeholder-white/25 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#8B0000] transition-all" />
        </div>
        <div>
          <label className="block text-white/60 text-xs font-bold uppercase tracking-wide mb-2">Telefon *</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required
            placeholder="+49 ..."
            className="w-full bg-white/5 border border-white/10 text-white placeholder-white/25 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#8B0000] transition-all" />
        </div>
      </div>
      <div>
        <label className="block text-white/60 text-xs font-bold uppercase tracking-wide mb-2">E-Mail *</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required
          placeholder="deine@email.de"
          className="w-full bg-white/5 border border-white/10 text-white placeholder-white/25 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#8B0000] transition-all" />
      </div>
      <div>
        <label className="block text-white/60 text-xs font-bold uppercase tracking-wide mb-2">Termin *</label>
        <select name="course_date" value={form.course_date} onChange={handleChange} required
          className="w-full bg-[#111111] border border-white/10 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#8B0000] transition-all">
          <option value="" disabled>Termin auswählen...</option>
          {getAvailableCourseDates().map((d) => (
            <option key={d.value} value={d.value}>{d.label}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-white/60 text-xs font-bold uppercase tracking-wide mb-2">Nachricht (optional)</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={3}
          placeholder="Fragen oder Anmerkungen?"
          className="w-full bg-white/5 border border-white/10 text-white placeholder-white/25 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#8B0000] transition-all resize-none" />
      </div>
      {status === 'error' && (
        <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">{errorMsg}</p>
      )}
      <button type="submit" disabled={status === 'loading'}
        className="w-full bg-[#8B0000] text-white font-bold uppercase py-4 rounded-lg hover:bg-[#B22222] transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-2 text-sm tracking-wider">
        {status === 'loading' ? (
          <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin inline-block"></span>Wird gesendet...</>
        ) : (
          'Jetzt verbindlich anmelden'
        )}
      </button>
      <p className="text-white/25 text-xs text-center">
        Mo – Do, 14:00 – 18:00 Uhr · Wir melden uns schnellstmöglich
      </p>
    </form>
  );
}

function formatGermanDate(dateStr: string): string {
  const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  const d = new Date(dateStr + 'T00:00:00');
  return `${String(d.getDate()).padStart(2, '0')}. ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function formatDateValue(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  return `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}.${d.getFullYear()}`;
}

export default function Kurse() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedLabel, setSelectedLabel] = useState('');
  const [showSoldOut, setShowSoldOut] = useState(false);
  const [firstAidCourses, setFirstAidCourses] = useState<FirstAidCourse[]>([]);
  const [firstAidLoading, setFirstAidLoading] = useState(true);

  useEffect(() => {
    supabase
      .from('first_aid_courses')
      .select('*')
      .gte('date', new Date().toISOString().split('T')[0])
      .order('date', { ascending: true })
      .then(({ data }) => {
        setFirstAidCourses(data || []);
        setFirstAidLoading(false);
      });
  }, []);

  const firstAidCourse = firstAidCourses.length > 0 ? firstAidCourses[0] : null;
  const upcomingFirstAidCourses = firstAidCourses.slice(1);

  const openModal = (dateValue: string, label: string) => {
    setSelectedDate(dateValue);
    setSelectedLabel(label);
    setModalOpen(true);
  };

  return (
    <main>
      <HeroBanner
        title="Kurse & Anmeldung"
        subtitle="Theorie-Intensivkurs – dein schneller Weg zur Prüfung."
      />

      {/* Section 1: WHITE – Available course FIRST */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Next course notice */}
          <div className="bg-[#8B0000]/5 border-2 border-[#8B0000]/20 rounded-2xl p-5 sm:p-6 mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#8B0000] rounded-xl flex items-center justify-center flex-shrink-0">
                  <CalendarCheck size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-[#8B0000] text-xs font-bold uppercase tracking-widest mb-0.5">Nächster Kurs</p>
                  <p className="text-[#1A1A1A] font-black text-lg sm:text-xl leading-tight">Januar 2027</p>
                  <p className="text-[#555555] text-sm">15.–25. Januar 2027 · 7 Kurstage · 14 Lektionen</p>
                </div>
              </div>
              <button
                onClick={() => openModal('Komplettkurs', 'Komplettkurs – alle Termine (Januar)')}
                className="w-full sm:w-auto flex-shrink-0 bg-[#8B0000] text-white font-bold uppercase px-6 py-3.5 rounded-xl hover:bg-[#B22222] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm tracking-wide"
              >
                <CalendarCheck size={16} />
                Komplettkurs buchen
              </button>
            </div>
          </div>

          {/* Quick info row */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-10">
            <div className="flex flex-col items-center text-center bg-gray-50 border border-gray-100 rounded-xl px-2 py-3 sm:flex-row sm:text-left sm:items-center sm:gap-3 sm:px-5 sm:py-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#8B0000] rounded-lg flex items-center justify-center flex-shrink-0 mb-1.5 sm:mb-0">
                <Clock size={16} className="text-white" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wide text-[#1A1A1A]">Block 1</p>
                <p className="text-[#555555] text-xs sm:text-sm font-medium">17:30 – 19:00</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center bg-gray-50 border border-gray-100 rounded-xl px-2 py-3 sm:flex-row sm:text-left sm:items-center sm:gap-3 sm:px-5 sm:py-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#8B0000] rounded-lg flex items-center justify-center flex-shrink-0 mb-1.5 sm:mb-0">
                <Clock size={16} className="text-white" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wide text-[#1A1A1A]">Block 2</p>
                <p className="text-[#555555] text-xs sm:text-sm font-medium">19:15 – 20:45</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center bg-gray-50 border border-gray-100 rounded-xl px-2 py-3 sm:flex-row sm:text-left sm:items-center sm:gap-3 sm:px-5 sm:py-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#8B0000] rounded-lg flex items-center justify-center flex-shrink-0 mb-1.5 sm:mb-0">
                <Bike size={16} className="text-white" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wide text-[#1A1A1A]">Motorrad</p>
                <p className="text-[#555555] text-xs sm:text-sm font-medium">Auf Anfrage</p>
              </div>
            </div>
          </div>

          {/* Day cards – available August course */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4 px-1">
              <BookOpen size={15} className="text-[#8B0000]" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#555]">
                Einzelne Tage buchen — Januar 2027
              </p>
            </div>

            <div className="space-y-2">
              {courseDays.map((day, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden
                    ${day.isSpecial
                      ? 'border-[#8B0000]/25 bg-[#fff8f8]'
                      : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-md'
                    }`}
                >
                  <div className="p-3.5 sm:p-5">
                    <div className="flex items-center gap-3 sm:gap-5">
                      <div className="flex-shrink-0 w-auto sm:w-44">
                        <span className="text-[#8B0000] text-[10px] sm:text-xs font-bold uppercase tracking-wide block">
                          {day.dayLabel}
                        </span>
                        <span className="text-[#1A1A1A] font-black text-sm">
                          {day.date}
                        </span>
                        {day.note && (
                          <span className="block text-[#8B0000] text-[10px] sm:text-xs mt-0.5 font-semibold">
                            {day.note}
                          </span>
                        )}
                      </div>
                      <div className="hidden sm:block w-px h-10 bg-gray-100 flex-shrink-0" />
                      <div className="flex-1 min-w-0 hidden sm:block">
                        <ul className="space-y-0.5">
                          {day.lessons.map((lesson, i) => (
                            <li key={i} className="flex items-start gap-1.5 text-sm text-[#555555]">
                              <ChevronRight size={12} className="text-[#8B0000] mt-0.5 flex-shrink-0" />
                              <span className="leading-snug">{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex-shrink-0 ml-auto">
                        <button
                          onClick={() => openModal(day.dateValue, day.modalLabel)}
                          className="flex items-center justify-center gap-1.5 bg-[#1A1A1A] text-white text-[11px] sm:text-xs font-bold uppercase px-3.5 sm:px-5 py-2.5 rounded-lg hover:bg-[#8B0000] transition-all duration-200 tracking-wide"
                        >
                          <CalendarCheck size={12} />
                          <span className="hidden xs:inline">Anmelden</span>
                          <span className="xs:hidden">Buchen</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[#555555]/40 text-xs text-center pt-3">
              Jeweils zwei Lektionen pro Abend · Beginn 17:30 Uhr · Änderungen vorbehalten
            </p>
          </div>

          {/* Sold out July course – collapsible */}
          <div className="border-t border-gray-100 pt-8">
            <button
              onClick={() => setShowSoldOut(!showSoldOut)}
              className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors w-full justify-center py-2"
            >
              <span className="text-xs font-bold uppercase tracking-widest">
                Ausgebuchte Kurse
              </span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${showSoldOut ? 'rotate-180' : ''}`} />
            </button>

            {showSoldOut && (
              <div className="space-y-1.5 mt-4 opacity-50">
                {soldOutCourseDays.map((day, idx) => (
                  <div key={idx} className="rounded-lg border border-gray-100 bg-gray-50 p-3 sm:p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <span className="text-gray-400 text-[10px] sm:text-xs font-bold uppercase tracking-wide block">
                          {day.dayLabel}
                        </span>
                        <span className="text-gray-500 font-bold text-sm">{day.date}</span>
                      </div>
                      <span className="text-[10px] sm:text-xs font-bold uppercase px-3 py-1.5 rounded bg-gray-200 text-gray-500">
                        Ausgebucht
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section: Erste-Hilfe-Kurs */}
      <section className="bg-[#F9F9F9] py-16 md:py-20 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#8B0000] text-sm font-bold uppercase tracking-widest mb-2">
              Erste-Hilfe-Kurs
            </p>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-[#1A1A1A] mb-3">
              Erste-Hilfe direkt bei uns
            </h2>
            <p className="text-[#555555] text-lg max-w-xl mx-auto">
              Pflicht für jeden Führerschein – bequem bei uns in der Fahrschule absolvieren.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
            {firstAidLoading ? (
              <div className="flex items-center justify-center py-6">
                <span className="w-5 h-5 border-2 border-[#8B0000]/30 border-t-[#8B0000] rounded-full animate-spin"></span>
              </div>
            ) : firstAidCourse ? (
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-[#8B0000]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Heart size={32} className="text-[#8B0000]" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-black text-[#1A1A1A] mb-1">Nächster Termin</h3>
                  <p className="text-[#8B0000] font-bold text-lg">
                    {formatGermanDate(firstAidCourse.date)} · {firstAidCourse.time}
                  </p>
                  <p className="text-[#555555] text-sm mt-1">{firstAidCourse.location}</p>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => openModal(
                      `Erste-Hilfe ${formatDateValue(firstAidCourse.date)}`,
                      `Erste-Hilfe-Kurs – ${formatGermanDate(firstAidCourse.date)}`
                    )}
                    className="inline-flex items-center gap-2 bg-[#8B0000] text-white font-bold uppercase px-6 py-3 rounded-xl hover:bg-[#B22222] transition-all duration-300 hover:scale-105 text-sm tracking-wide"
                  >
                    <Heart size={15} />
                    Anmelden
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Heart size={32} className="text-gray-400" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-black text-[#1A1A1A] mb-1">Termin in Planung</h3>
                  <p className="text-[#555555] text-base">
                    Der nächste Erste-Hilfe-Kurs wird derzeit geplant. Kontaktiere uns für weitere Infos.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    to="/kontakt"
                    className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white font-bold uppercase px-6 py-3 rounded-xl hover:bg-[#8B0000] transition-all duration-300 hover:scale-105 text-sm tracking-wide"
                  >
                    Kontakt
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Weitere Termine */}
          {!firstAidLoading && upcomingFirstAidCourses.length > 0 && (
            <div className="mt-6 space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-[#555] px-1">
                Weitere Termine
              </p>
              {upcomingFirstAidCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4"
                >
                  <div className="w-10 h-10 bg-[#8B0000]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart size={20} className="text-[#8B0000]" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <p className="text-[#1A1A1A] font-bold">
                      {formatGermanDate(course.date)} · {course.time}
                    </p>
                    <p className="text-[#555555] text-sm">{course.location}</p>
                  </div>
                  <button
                    onClick={() => openModal(
                      `Erste-Hilfe ${formatDateValue(course.date)}`,
                      `Erste-Hilfe-Kurs – ${formatGermanDate(course.date)}`
                    )}
                    className="flex-shrink-0 inline-flex items-center gap-1.5 bg-[#1A1A1A] text-white font-bold uppercase px-5 py-2.5 rounded-lg hover:bg-[#8B0000] transition-all duration-200 text-xs tracking-wide"
                  >
                    <Heart size={13} />
                    Anmelden
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Section 2: DARK – Full registration form */}
      <section className="bg-[#1A1A1A] py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <CalendarCheck size={18} className="text-[#8B0000]" />
              <p className="text-[#8B0000] text-xs font-bold uppercase tracking-widest">Ausführliche Anmeldung</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-2">
              Anmeldeformular
            </h2>
            <p className="text-white/40 text-base">
              Wähle deinen Wunschtermin und sende uns deine Kontaktdaten.
            </p>
          </div>
          <FullRegistrationForm />
        </div>
      </section>

      {/* Section 3: WHITE – CTA */}
      <section className="bg-white py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#8B0000] text-sm font-bold uppercase tracking-widest mb-2">Noch Fragen?</p>
          <h2 className="text-2xl md:text-3xl font-black uppercase text-[#1A1A1A] mb-4">
            Wir helfen dir gerne weiter
          </h2>
          <p className="text-[#555555] mb-8">
            Unsicher bei der Kurswahl oder spezielle Anfragen? Kontaktiere uns direkt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/kontakt"
              className="inline-block bg-[#8B0000] text-white font-bold uppercase px-8 py-4 rounded-lg hover:bg-[#B22222] transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Kontakt aufnehmen
            </Link>
            <Link
              to="/preise"
              className="inline-block border-2 border-[#1A1A1A] text-[#1A1A1A] font-bold uppercase px-8 py-4 rounded-lg hover:bg-[#1A1A1A] hover:text-white transition-all duration-300"
            >
              Preise ansehen
            </Link>
          </div>
        </div>
      </section>

      <RegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedDate={selectedDate}
        preselectedLabel={selectedLabel}
      />
    </main>
  );
}
