import HeroBanner from '../components/HeroBanner';

export default function Impressum() {
  return (
    <main>
      <HeroBanner title="Impressum" subtitle="Angaben gemäß § 5 TMG" />

      <section className="bg-white py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-[#333]">

            <div>
              <h2 className="text-2xl font-black uppercase text-[#1A1A1A] mb-4">Angaben gemäß § 5 TMG</h2>
              <p className="text-[#555] leading-relaxed">
                Fahrschule Wafaa Fahmi<br />
                Hochheimer Straße 1<br />
                55252 Mainz-Kastel
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black uppercase text-[#1A1A1A] mb-4">Kontakt</h2>
              <p className="text-[#555] leading-relaxed">
                Telefon: +49 (0) 178 54 99 459<br />
                E-Mail: info@wafaafahmi.de
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black uppercase text-[#1A1A1A] mb-4">Vertretungsberechtigte Person</h2>
              <p className="text-[#555] leading-relaxed">
                Wafaa Fahmi (Inhaberin)
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black uppercase text-[#1A1A1A] mb-4">Zuständige Aufsichtsbehörde</h2>
              <p className="text-[#555] leading-relaxed">
                Regierungspräsidium Darmstadt<br />
                Hilpertstraße 31<br />
                64295 Darmstadt
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black uppercase text-[#1A1A1A] mb-4">Berufsbezeichnung</h2>
              <p className="text-[#555] leading-relaxed">
                Fahrlehrerin, verliehen in der Bundesrepublik Deutschland
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black uppercase text-[#1A1A1A] mb-4">Streitschlichtung</h2>
              <p className="text-[#555] leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8B0000] underline hover:no-underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="text-[#555] leading-relaxed mt-4">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black uppercase text-[#1A1A1A] mb-4">Haftung für Inhalte</h2>
              <p className="text-[#555] leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black uppercase text-[#1A1A1A] mb-4">Haftung für Links</h2>
              <p className="text-[#555] leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
                haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
                der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black uppercase text-[#1A1A1A] mb-4">Urheberrecht</h2>
              <p className="text-[#555] leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
                außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
                Autors bzw. Erstellers.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
