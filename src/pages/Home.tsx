import { Link } from 'react-router-dom';
import { Users, Heart, GraduationCap, Car, Heart as HeartPulse, Calendar, Star, Shield, Zap, Trophy, Calculator, Sparkles } from 'lucide-react';
import BenefitCard from '../components/BenefitCard';
import TeamCard from '../components/TeamCard';
import KlasseCard from '../components/KlasseCard';
import USPCard from '../components/USPCard';
import PriceCalculator from '../components/PriceCalculator';
import FAQ from '../components/FAQ';

export default function Home() {
  const benefits = [
    { icon: Users, title: 'Persönliche Betreuung', description: 'Individuell statt Massenabfertigung.' },
    { icon: Heart, title: 'Familiäre Atmosphäre', description: 'Persönlich, herzlich, nah dran.' },
    { icon: GraduationCap, title: 'Erfahrene Fahrlehrer:innen', description: 'Geduldig & kompetent.' },
    { icon: Car, title: 'Moderne Fahrzeuge', description: 'Technik auf neuestem Stand.' },
    { icon: HeartPulse, title: 'Erste-Hilfe-Kurs', description: 'Direkt bei uns vor Ort.' },
    { icon: Calendar, title: '7-Tage-Intensivkurs', description: 'Theorie in nur einer Woche.' },
  ];

  const usps = [
    {
      icon: Zap,
      title: 'Schnell zum Führerschein',
      subtitle: 'Express-Ausbildung',
      features: [
        'Intensivkurse mit 7-Tage-Theorieunterricht',
        'Flexible Fahrstunden nach deinem Zeitplan',
        'Kurzfristige Prüfungstermine möglich',
        'Durchschnittlich 30% schneller als andere Fahrschulen',
      ],
    },
    {
      icon: Shield,
      title: 'Sicherheit garantiert',
      subtitle: 'Qualität & Vertrauen',
      features: [
        'Zertifizierte Ausbildungsfahrlehrer',
        'Modernste Fahrzeuge mit neuester Sicherheitstechnik',
        'Überdurchschnittliche Erfolgsquote bei Prüfungen',
        'Über 15 Jahre Erfahrung in der Ausbildung',
      ],
    },
    {
      icon: Trophy,
      title: 'Dein Erfolg ist unser Ziel',
      subtitle: 'Beste Betreuung',
      features: [
        'Prüfungsangst-Coaching inklusive',
        'WhatsApp-Support für alle Fragen',
        'Familiäre Atmosphäre statt Massenabfertigung',
      ],
    },
  ];

  const teamPreview = [
    {
      name: 'Wafaa Fahmi',
      role: 'Inhaberin · Fahrlehrerin',
      vehicles: ['VW Tiguan', 'Audi Q2'],
      quote: 'Ich möchte, dass jede*r mit einem sicheren Gefühl fährt.',
      whatsapp: 'https://wa.me/491785621630',
      image: '/WhatsApp_Image_2026-05-11_at_16.13.01_(3).jpeg',
    },
    {
      name: 'Seddik C.',
      role: 'Fahrlehrer Kl. B',
      vehicles: ['Audi Q2'],
      quote: 'Fahren lernen darf Spaß machen – und sicher sein.',
      whatsapp: 'https://wa.me/491785499459',
      image: '/WhatsApp_Image_2026-05-11_at_16.13.01_(2).jpeg',
    },
  ];

  return (
    <main>
      {/* Section 1: DARK #1a1a1a – Hero */}
      <section className="bg-[#1A1A1A] text-white pt-24 sm:pt-32 pb-14 sm:pb-20 mt-[62px] sm:mt-[88px] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B0000]/8 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest mb-4 text-[#8B0000]">
                Fahrschule in Mainz-Kastel
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-6 text-white">
                Dein Führerschein. Unsere Mission.
              </h1>
              <p className="text-base sm:text-xl mb-6 sm:mb-8 text-white/70">
                Schnell. Persönlich. Mit Herz und Kompetenz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/kontakt"
                  className="bg-[#8B0000] text-white font-bold uppercase px-8 py-4 rounded hover:bg-[#B22222] transition-all duration-300 text-center hover:scale-105 hover:shadow-2xl"
                >
                  Jetzt Kontakt aufnehmen
                </Link>
                <Link
                  to="/klassen"
                  className="text-white font-bold border-2 border-white/30 px-8 py-4 rounded hover:border-white/60 hover:bg-white/5 transition-all duration-300 text-center"
                >
                  Klassen ansehen →
                </Link>
              </div>
            </div>
            <div className="relative pb-12">
              <div className="aspect-square rounded-lg overflow-hidden relative group">
                <img
                  src="/wafaa-landingpage.png"
                  alt="Fahrschule Wafaa Fahmi Team"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 bg-white text-[#8B0000] px-4 py-2 rounded shadow-lg">
                  <p className="font-bold text-sm">Fahrschule Mainz-Kastel</p>
                </div>
              </div>
              <a
                href="https://search.google.com/local/writereview?placeid=ChIJb___GdeXvUcRjd0z-TAbNHU"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-6 -right-6 bg-white text-[#1A1A1A] px-5 py-4 rounded-xl shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group border border-gray-100"
              >
                <div className="flex items-center gap-1.5 mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={14} fill="#FFD700" stroke="#FFD700" />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black">5,0</span>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-[#555]">auf Google</span>
                    <span className="text-[10px] text-[#8B0000] font-semibold group-hover:underline">Jetzt bewerten</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: WHITE – Benefits */}
      <section className="bg-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#8B0000] text-sm font-bold uppercase tracking-widest mb-2">
              Unsere Stärken
            </p>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-[#1A1A1A]">
              Warum Fahrschule Wafaa Fahmi?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <BenefitCard key={idx} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: DARK #1a1a1a – USPs */}
      <section className="bg-[#1A1A1A] py-14 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#8B0000] text-sm font-bold uppercase tracking-widest mb-2">
              Deine Vorteile
            </p>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-4">
              Mehr als nur eine Fahrschule
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Dein Partner für den Führerschein – von Anfang bis zum bestandenen Test
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {usps.map((usp, idx) => (
              <USPCard key={idx} {...usp} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: WHITE – Klassen Preview */}
      <section className="bg-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#8B0000] text-sm font-bold uppercase tracking-widest mb-2">
                Führerscheinklassen
              </p>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-[#1A1A1A] mb-6">
                Von Anfänger bis Motorrad
              </h2>
              <p className="text-lg text-[#555555] leading-relaxed mb-8">
                Wir bieten alle gängigen Führerscheinklassen an – vom PKW bis zum Motorrad.
                Professionell ausgebildete Fahrlehrer:innen begleiten dich vom ersten Tag bis zur Prüfung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/klassen"
                  className="inline-block bg-[#8B0000] text-white font-bold uppercase px-8 py-4 rounded hover:bg-[#B22222] transition-all duration-300 hover:scale-105 hover:shadow-xl text-center"
                >
                  Alle Klassen ansehen
                </Link>
                <Link
                  to="/kurse"
                  className="inline-block border-2 border-[#1A1A1A] text-[#1A1A1A] font-bold uppercase px-8 py-4 rounded hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 text-center"
                >
                  Kurse & Anmeldung
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/WhatsApp_Image_2026-05-11_at_16.13.01_(5).jpeg"
                  alt="Motorrad-Gruppe bereit zur Fahrstunde"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6">
                <KlasseCard icon={Car} name="Klasse B" badge="AB 17" description="PKW (Schalt- oder Automatik)" />
                <KlasseCard icon={Car} name="Klasse A" description="Motorrad ohne Leistungsbeschränkung" />
                <KlasseCard icon={Car} name="Klasse A2" description="Motorrad bis 35 kW" />
                <KlasseCard icon={Car} name="Klasse AM" description="Roller bis 45 km/h" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: DARK #1a1a1a – Price Calculator */}
      <section className="bg-[#1A1A1A] py-14 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/80 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4">
              <Sparkles size={14} className="text-[#8B0000]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest">Interaktiver Rechner</span>
              <Sparkles size={14} className="text-[#8B0000]" />
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase text-white mb-3 sm:mb-4 leading-tight">
              Berechne deine Kosten
            </h2>
            <p className="text-sm sm:text-lg text-white/50 max-w-2xl mx-auto mb-4 sm:mb-6">
              Transparente Kalkulation – sofort und individuell für deine Führerscheinklasse
            </p>
            <div className="hidden sm:flex flex-wrap justify-center gap-6 text-sm text-white/40">
              <div className="flex items-center gap-2">
                <Calculator size={15} className="text-[#8B0000]" />
                <span>Sofortige Kalkulation</span>
              </div>
              <span className="text-white/20">·</span>
              <div className="flex items-center gap-2">
                <Shield size={15} className="text-[#8B0000]" />
                <span>100% transparent</span>
              </div>
              <span className="text-white/20">·</span>
              <div className="flex items-center gap-2">
                <Zap size={15} className="text-[#8B0000]" />
                <span>Alle Klassen verfügbar</span>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mb-8">
            <PriceCalculator />
          </div>

          <div className="text-center">
            <Link
              to="/preise"
              className="inline-flex items-center gap-2 bg-[#8B0000] text-white font-bold uppercase px-8 py-4 rounded hover:bg-[#B22222] transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Calculator size={18} />
              Alle Preise ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: WHITE – Team Preview */}
      <section className="bg-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#8B0000] text-sm font-bold uppercase tracking-widest mb-2">
              Unser Team
            </p>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-[#1A1A1A] mb-4">
              Dein Team vor Ort
            </h2>
            <p className="text-lg text-[#555555]">
              Gemeinsam für deinen Erfolg.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
            {teamPreview.map((member, idx) => (
              <TeamCard key={idx} {...member} />
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/team"
              className="inline-block bg-[#8B0000] text-white font-bold uppercase px-8 py-4 rounded hover:bg-[#B22222] transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Ganzes Team kennenlernen
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7: DARK #1a1a1a – Testimonials */}
      <section className="bg-[#1A1A1A] py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#8B0000] text-sm font-bold uppercase tracking-widest mb-2">
              Bewertungen
            </p>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-4">
              Was unsere Fahrschüler sagen
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={22} fill="#FFD700" stroke="#FFD700" />
                ))}
              </div>
              <span className="text-white font-black text-xl">5,0</span>
              <span className="text-white/50 text-sm">auf Google</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { text: 'Hervorragende Fahrschule! Ich habe mich vom ersten Tag an sehr wohl gefühlt. Die Fahrlehrer sind geduldig und kompetent.', name: 'Sarah M.' },
              { text: 'Sehr professionell und freundlich. Der Theorieunterricht war super strukturiert und die Fahrstunden haben mir viel Sicherheit gegeben.', name: 'David K.' },
              { text: 'Kann ich nur weiterempfehlen! Tolle Atmosphäre, faire Preise und ich habe beim ersten Mal bestanden. Danke Wafaa!', name: 'Lena R.' },
            ].map((review, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/[0.08] transition-all duration-300 hover:border-white/20">
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="#FFD700" stroke="#FFD700" />
                  ))}
                </div>
                <p className="text-white/70 leading-relaxed mb-5 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#8B0000] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{review.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{review.name}</p>
                    <p className="text-white/40 text-xs">Google Bewertung</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJb___GdeXvUcRjd0z-TAbNHU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#1A1A1A] font-bold px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span>Bewertung auf Google schreiben</span>
              <Star size={16} fill="#FFD700" stroke="#FFD700" className="group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Section 8: DARK – Erfolgsgeschichten */}
      <section className="bg-[#1A1A1A] py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#8B0000] text-sm font-bold uppercase tracking-widest mb-2">
              Erfolge
            </p>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-4">
              Unsere Erfolgsgeschichten
            </h2>
            <p className="text-lg text-white/50">
              Stolze Gesichter nach bestandener Prüfung
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              '/Kunde1.png',
              '/Kunde2.png',
              '/Kunde3.png',
              '/Kunde4.png',
            ].map((url, i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden border border-white/10 group">
                <img
                  src={url}
                  alt={`Erfolg ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/erfolge"
              className="inline-block bg-[#8B0000] text-white font-bold uppercase px-8 py-4 rounded hover:bg-[#B22222] transition-all duration-300 hover:scale-105"
            >
              Alle Erfolge ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Section 9: WHITE – FAQ */}
      <section className="bg-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#8B0000] text-sm font-bold uppercase tracking-widest mb-2">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-[#1A1A1A] mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-lg text-[#555555]">
              Alles, was du über deine Führerscheinausbildung wissen musst
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <FAQ />
          </div>
        </div>
      </section>

      {/* Section 9: DARK #1a1a1a – CTA + Location */}
      <section className="bg-[#1A1A1A] py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#8B0000] text-sm font-bold uppercase tracking-widest mb-2">
              Standort
            </p>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-4">
              Besuche uns vor Ort
            </h2>
            <p className="text-lg text-white/50">
              Wir freuen uns auf deinen Besuch in Mainz-Kastel
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <h3 className="text-xl font-bold text-white mb-6 uppercase">Kontaktinformationen</h3>
              <div className="space-y-6">
                <div
                  className="flex items-start gap-4 group cursor-pointer"
                  onClick={() => window.open('https://maps.app.goo.gl/FcPPmRnRGoK2aCSs7', '_blank')}
                >
                  <div className="bg-[#8B0000] text-white p-3 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-white mb-1">Adresse</p>
                    <p className="text-white/60">Fahrschule Wafaa Fahmi</p>
                    <p className="text-white/60">Hochheimer Straße 1</p>
                    <p className="text-white/60">55252 Mainz-Kastel</p>
                    <p className="text-[#8B0000] text-sm mt-2 font-semibold group-hover:underline">
                      → In Google Maps öffnen
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#8B0000] text-white p-3 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-white mb-1">Telefon</p>
                    <a href="tel:+491785499459" className="text-[#8B0000] hover:underline">0178 5499459</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#8B0000] text-white p-3 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-white mb-1">Öffnungszeiten</p>
                    <p className="text-white/60">Mo – Do: 14:00 – 18:00 Uhr</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#8B0000] text-white p-3 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-white mb-1">E-Mail</p>
                    <a href="mailto:info@wafaafahmi.de" className="text-[#8B0000] hover:underline">
                      info@wafaafahmi.de
                    </a>
                  </div>
                </div>
              </div>

            </div>

            <a
              href="https://maps.app.goo.gl/FcPPmRnRGoK2aCSs7"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block rounded-lg overflow-hidden h-[500px] border border-white/10 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a]" />
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                  backgroundSize: '32px 32px'
                }} />
              </div>
              <div className="relative h-full flex flex-col items-center justify-center text-center px-8">
                <div className="bg-[#8B0000]/20 p-6 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-12 h-12 text-[#8B0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-white text-xl font-bold mb-2">Fahrschule Wafaa Fahmi</h4>
                <p className="text-white/60 mb-1">Hochheimer Straße 1</p>
                <p className="text-white/60 mb-6">55252 Mainz-Kastel</p>
                <div className="inline-flex items-center gap-2 bg-[#8B0000] text-white font-bold uppercase px-6 py-3 rounded group-hover:bg-[#B22222] transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  In Google Maps öffnen
                </div>
              </div>
            </a>
          </div>

          <div className="mt-20 text-center border-t border-white/10 pt-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-4">
              Bereit für deinen Führerschein?
            </h2>
            <p className="text-lg mb-8 text-white/50">
              Melde dich jetzt an und starte noch heute.
            </p>
            <Link
              to="/kontakt"
              className="inline-block bg-[#8B0000] text-white font-bold uppercase px-10 py-5 rounded hover:bg-[#B22222] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Jetzt anmelden
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
