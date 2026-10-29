import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import PriceCalculator from '../components/PriceCalculator';
import FAQ from '../components/FAQ';
import { Calculator, Sparkles, Shield, Zap } from 'lucide-react';

export default function Preise() {
  const pricingData = [
    { leistung: 'Grundbetrag', b: '350 €', a: '350 €', am: '350 €', be: '200 €', b196: '–' },
    { leistung: 'Grundbetrag Umschreiber', b: '300 €', a: '–', am: '–', be: '–', b196: '–' },
    { leistung: 'Grundbetrag Mehrfach-Klassen', b: '550 €', a: '–', am: '–', be: '–', b196: '–' },
    { leistung: 'Übungsfahrt (45 Min)', b: '75 €', a: '80 €', am: '80 €', be: '80 €', b196: '–' },
    { leistung: 'Sonderfahrt je Stunde', b: '75 €', a: '80 €', am: '–', be: '80 €', b196: '–' },
    { leistung: 'Vorstellung zur Theorieprüfung', b: '150 €*', a: '150 €*', am: '–', be: '–', b196: '–' },
    { leistung: 'Vorstellung zur Praktischen Prüfung', b: '200 €*', a: '230 €*', am: '–', be: '200 €*', b196: '–' },
    { leistung: 'B196 Komplettpaket', b: '–', a: '–', am: '–', be: '–', b196: '899 €' },
  ];

  return (
    <main>
      <HeroBanner
        title="Unsere Preise"
        subtitle="Transparent. Fair. Ohne versteckte Kosten."
      />

      {/* Section 1: WHITE – Preistabelle */}
      <section className="bg-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-[#8B0000] text-sm font-bold uppercase tracking-widest mb-2">Preisübersicht</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-[#1A1A1A]">
              Alle Leistungen auf einen Blick
            </h2>
          </div>

          {/* Mobile card view */}
          <div className="md:hidden space-y-3">
            {pricingData.map((row, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                <p className="font-bold text-[#1A1A1A] text-sm mb-3 pb-2 border-b border-gray-100">{row.leistung}</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {row.b !== '–' && (
                    <div className="flex justify-between">
                      <span className="text-[#555555]">B/BF17</span>
                      <span className="font-semibold text-[#1A1A1A]">{row.b}</span>
                    </div>
                  )}
                  {row.a !== '–' && (
                    <div className="flex justify-between">
                      <span className="text-[#555555]">A</span>
                      <span className="font-semibold text-[#1A1A1A]">{row.a}</span>
                    </div>
                  )}
                  {row.am !== '–' && (
                    <div className="flex justify-between">
                      <span className="text-[#555555]">AM</span>
                      <span className="font-semibold text-[#1A1A1A]">{row.am}</span>
                    </div>
                  )}
                  {row.be !== '–' && (
                    <div className="flex justify-between">
                      <span className="text-[#555555]">BE/B96</span>
                      <span className="font-semibold text-[#1A1A1A]">{row.be}</span>
                    </div>
                  )}
                  {row.b196 !== '–' && (
                    <div className="flex justify-between">
                      <span className="text-[#555555]">B196</span>
                      <span className="font-semibold text-[#1A1A1A]">{row.b196}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop table view */}
          <div className="hidden md:block overflow-x-auto shadow-sm rounded-lg border border-gray-100">
            <table className="w-full">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="px-5 py-4 text-left font-bold uppercase tracking-wide text-sm">Leistung</th>
                  <th className="px-4 py-4 text-right font-bold uppercase tracking-wide text-sm">B / BA / B197 / BF17</th>
                  <th className="px-4 py-4 text-right font-bold uppercase tracking-wide text-sm">A / A1 / A2</th>
                  <th className="px-4 py-4 text-right font-bold uppercase tracking-wide text-sm">AM</th>
                  <th className="px-4 py-4 text-right font-bold uppercase tracking-wide text-sm">BE / B96</th>
                  <th className="px-4 py-4 text-right font-bold uppercase tracking-wide text-sm">B196</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-[#FFF5F5] transition-colors border-b border-gray-100`}
                  >
                    <td className="px-5 py-4 font-semibold text-[#1A1A1A]">{row.leistung}</td>
                    <td className="px-4 py-4 text-right text-[#555555]">{row.b}</td>
                    <td className="px-4 py-4 text-right text-[#555555]">{row.a}</td>
                    <td className="px-4 py-4 text-right text-[#555555]">{row.am}</td>
                    <td className="px-4 py-4 text-right text-[#555555]">{row.be}</td>
                    <td className="px-4 py-4 text-right text-[#555555]">{row.b196}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
            <div className="border-l-4 border-[#8B0000] bg-gray-50 p-4 sm:p-6 rounded-r-lg">
              <p className="text-[#555555] leading-relaxed text-sm">
                In der Anmeldegebühr sind Theorieunterricht, Verwaltungskosten und die Fahrschulcard-App enthalten.
              </p>
            </div>
            <div className="border-l-4 border-[#8B0000] bg-gray-50 p-4 sm:p-6 rounded-r-lg">
              <p className="text-[#555555] leading-relaxed text-sm">
                Beträge mit <span className="text-[#8B0000] font-bold">*</span> verstehen sich zzgl. TÜV-Gebühren.
              </p>
            </div>
            <div className="border-l-4 border-[#8B0000] bg-gray-50 p-4 sm:p-6 rounded-r-lg">
              <p className="text-[#555555] leading-relaxed text-sm">
                <span className="font-bold text-[#1A1A1A]">B196:</span> Komplettpaket 899 € inkl. Anmeldung, Theorie und Fahrstunden. Jede weitere Fahrstunde: 80 €. Zzgl. TÜV-Gebühren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: DARK #1a1a1a – Price Calculator */}
      <section className="bg-[#1A1A1A] py-14 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/70 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4">
              <Sparkles size={14} className="text-[#8B0000]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest">Interaktiver Rechner</span>
              <Sparkles size={14} className="text-[#8B0000]" />
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase text-white mb-3 sm:mb-4 leading-tight">
              Dein persönlicher Preisrechner
            </h2>
            <p className="text-sm sm:text-lg text-white/50 max-w-2xl mx-auto mb-4 sm:mb-6">
              Interaktiver Kostenrechner für maximale Transparenz
            </p>
            <div className="hidden sm:flex flex-wrap justify-center gap-6 text-sm text-white/40">
              <div className="flex items-center gap-2">
                <Calculator size={15} className="text-[#8B0000]" />
                <span>Individuell berechnet</span>
              </div>
              <span className="text-white/20">·</span>
              <div className="flex items-center gap-2">
                <Shield size={15} className="text-[#8B0000]" />
                <span>Keine versteckten Kosten</span>
              </div>
              <span className="text-white/20">·</span>
              <div className="flex items-center gap-2">
                <Zap size={15} className="text-[#8B0000]" />
                <span>Sofort verfügbar</span>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <PriceCalculator />
          </div>
        </div>
      </section>

      {/* Section 3: WHITE – FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#8B0000] text-sm font-bold uppercase tracking-widest mb-2">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-[#1A1A1A] mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-lg text-[#555555]">
              Alles, was du über deine Führerscheinausbildung wissen musst
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* Section 4: DARK #1a1a1a – CTA */}
      <section className="bg-[#1A1A1A] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#8B0000] text-sm font-bold uppercase tracking-widest mb-3">Kursanmeldung</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-4">
            Hast du Fragen zu den Preisen?
          </h2>
          <p className="text-white/50 mb-8">
            Kontaktiere uns direkt oder melde dich für einen Kurs an.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/kontakt"
              className="inline-block bg-[#8B0000] text-white font-bold uppercase px-10 py-4 rounded hover:bg-[#B22222] transition-all duration-300 hover:scale-105"
            >
              Jetzt Kontakt aufnehmen
            </Link>
            <Link
              to="/kurse"
              className="inline-block border-2 border-white/20 text-white font-bold uppercase px-10 py-4 rounded hover:border-white/50 hover:bg-white/5 transition-all duration-300"
            >
              Kurse & Anmeldung
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
