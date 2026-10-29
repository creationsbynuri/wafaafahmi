import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import TeamCard from '../components/TeamCard';

export default function Team() {
  const teamMembers = [
    {
      name: 'Wafaa Fahmi',
      role: 'Inhaberin · Fahrlehrerin Kl. A & B · Ausbildungsfahrlehrerin · Erste-Hilfe-Ausbilderin',
      vehicles: ['VW Tiguan (Automatik)', 'Audi Q2 (Schalter)'],
      quote: 'Ich möchte, dass jede*r mit einem sicheren Gefühl fährt.',
      whatsapp: 'https://wa.me/491785621630',
      image: '/WhatsApp_Image_2026-05-11_at_16.13.01_(3).jpeg',
    },
    {
      name: 'Seddik C.',
      role: 'Fahrlehrer Kl. B',
      vehicles: ['Audi Q2 (Schalter)'],
      quote: 'Fahren lernen darf Spaß machen – und sicher sein.',
      whatsapp: 'https://wa.me/491785499459',
      image: '/WhatsApp_Image_2026-05-11_at_16.13.01_(2).jpeg',
    },
  ];

  return (
    <main>
      <HeroBanner
        title="Lerne uns kennen"
        subtitle="Unser Team – gemeinsam für deinen Erfolg."
      />

      {/* Section 1: WHITE – Team */}
      <section className="bg-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#8B0000] text-sm font-bold uppercase tracking-widest mb-2">Das Team</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-[#1A1A1A]">
              Unsere Fahrlehrer:innen
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {teamMembers.map((member, idx) => (
              <TeamCard key={idx} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: DARK #1a1a1a – Fahrzeuge */}
      <section className="bg-[#1A1A1A] py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#8B0000] text-sm font-bold uppercase tracking-widest mb-2">Fahrzeuge</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-white">
              Unsere Ausbildungsfahrzeuge
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden mb-8 border border-white/10">
              <img
                src="/WhatsApp_Image_2026-05-11_at_16.13.01_(1).jpeg"
                alt="Ausbildungsfahrzeuge der Fahrschule Wafaa Fahmi"
                className="w-full"
                loading="lazy"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {['VW Tiguan', 'Audi Q2', 'Audi Q3'].map((vehicle) => (
                <span
                  key={vehicle}
                  className="bg-[#8B0000] text-white text-sm font-bold uppercase tracking-wider px-6 py-3 rounded"
                >
                  {vehicle}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: WHITE – CTA */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#8B0000] text-sm font-bold uppercase tracking-widest mb-2">Los geht's</p>
          <h2 className="text-2xl md:text-3xl font-black uppercase text-[#1A1A1A] mb-4">
            Starte jetzt deine Ausbildung
          </h2>
          <p className="text-[#555555] mb-8">
            Nimm Kontakt auf – wir freuen uns auf dich.
          </p>
          <Link
            to="/kontakt"
            className="inline-block bg-[#8B0000] text-white font-bold uppercase px-8 py-4 rounded hover:bg-[#B22222] transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </main>
  );
}
