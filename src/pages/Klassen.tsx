import { Car, Settings, RotateCw, Truck } from 'lucide-react';
import HeroBanner from '../components/HeroBanner';
import KlasseCard from '../components/KlasseCard';

export default function Klassen() {
  const pkwKlassen = [
    {
      icon: Car,
      name: 'Klasse B / BF17 – Pkw (Schalt- oder Automatik)',
      badge: 'AB 17 JAHREN',
      description: `Mindestalter: 18 Jahre (17 mit begleitetem Fahren)
Begleitetes Fahren ab 17 möglich
Umfang: 14 Grundstunden + Sonderfahrten
• 5 Überland
• 4 Autobahn
• 3 Nacht
Prüfungen: Theorie & Praxis`,
    },
    {
      icon: Settings,
      name: 'Klasse B197 – Automatik mit Schaltkompetenz',
      description: `Ausbildung auf Automatik
10 Stunden auf Schaltwagen
Keine Beschränkung auf Automatik im Führerschein`,
    },
    {
      icon: RotateCw,
      name: 'Klasse BA – Automatik',
      description: `Gilt nur für Automatik-Fahrzeuge
Umfang & Prüfungen wie Klasse B`,
    },
    {
      icon: Truck,
      name: 'Klasse BE / B96 – Anhänger',
      description: `Für Anhänger 750 kg – 3.500 kg
Voraussetzung: Klasse B
B96: Schlüsselzahl für leichtere Anhänger
BE: Nur praktische Prüfung, keine Theorieprüfung`,
    },
  ];

  const motorradKlassen = [
    {
      icon: Car,
      name: 'Klasse A – Direkteinstieg oder Aufstieg',
      description: `Mindestalter: 24 Jahre (Direkt) / 20 Jahre (Aufstieg von A2)
Aufstieg: nur praktische Prüfung
Direkt: Theorie + Übungsstunden + Sonderfahrten
• 5 Überland
• 4 Autobahn
• 3 Nacht`,
    },
    {
      icon: Car,
      name: 'Klasse A2 – Mittelklasse',
      description: `Mindestalter: 18 Jahre
Aufstieg von A1: keine Theorieprüfung
Mit Klasse B: regulärer Unterricht`,
    },
    {
      icon: Car,
      name: 'Klasse A1 – Leichtkrafträder',
      description: `Mindestalter: 16 Jahre
Aufstieg von AM: keine Theorieprüfung
Mit Klasse B: regulärer Unterricht`,
    },
    {
      icon: Car,
      name: 'Klasse B196 – 125ccm mit B-Führerschein',
      description: `Mindestalter: 25 Jahre
5 Jahre Vorbesitz Klasse B notwendig
Keine Prüfung, mind. 4 Theorie- & 5 Praxisstunden`,
    },
    {
      icon: Car,
      name: 'Klasse AM – Roller bis 45 km/h',
      description: `Mindestalter: 15 Jahre
Roller und Mopeds bis 45 km/h
Regulärer Theorie- & Praxisunterricht + Prüfung`,
    },
  ];

  return (
    <main>
      <HeroBanner
        title="Führerscheinklassen"
        subtitle="Finde die richtige Klasse für dich."
      />

      {/* Section 1: WHITE – PKW */}
      <section className="bg-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-[#8B0000] text-sm font-bold uppercase tracking-widest mb-2">PKW</p>
              <div className="flex items-center gap-3">
                <Car size={24} className="text-[#1A1A1A]" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-[#1A1A1A]">
                  PKW-Klassen
                </h2>
              </div>
            </div>
            <div className="lg:w-1/2 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/WhatsApp_Image_2026-05-11_at_16.13.02_(1).jpeg"
                alt="Fahrstunde im Fahrschulauto"
                className="w-full h-48 sm:h-56 object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            {pkwKlassen.map((klasse, idx) => (
              <KlasseCard key={idx} {...klasse} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: DARK #1a1a1a – Motorrad */}
      <section className="bg-[#1A1A1A] py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-[#8B0000] text-sm font-bold uppercase tracking-widest mb-2">Motorrad</p>
              <div className="flex items-center gap-3">
                <Car size={24} className="text-white" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white">
                  Motorrad-Klassen
                </h2>
              </div>
            </div>
            <div className="lg:w-1/2 rounded-xl overflow-hidden border border-white/10">
              <img
                src="/WhatsApp_Image_2026-05-11_at_16.13.01_(4).jpeg"
                alt="Motorrad-Fahrstunde mit Pylonen"
                className="w-full h-48 sm:h-56 object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {motorradKlassen.map((klasse, idx) => (
              <KlasseCard key={idx} {...klasse} dark />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
