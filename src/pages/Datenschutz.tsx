import HeroBanner from '../components/HeroBanner';

export default function Datenschutz() {
  return (
    <main>
      <HeroBanner title="Datenschutzerklärung" subtitle="Informationen zum Datenschutz gemäß DSGVO" />

      <section className="bg-white py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <div className="space-y-10 text-[#333]">

            <div>
              <h2 className="text-2xl font-black uppercase text-[#1A1A1A] mb-4">1. Verantwortlicher</h2>
              <p className="text-[#555] leading-relaxed">
                Fahrschule Wafaa Fahmi<br />
                Hochheimer Straße 1<br />
                55252 Mainz-Kastel<br />
                Telefon: +49 (0) 178 54 99 459<br />
                E-Mail: info@wafaafahmi.de
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black uppercase text-[#1A1A1A] mb-4">2. Erhebung und Speicherung personenbezogener Daten</h2>
              <p className="text-[#555] leading-relaxed mb-4">
                Beim Besuch unserer Website werden automatisch Informationen an den Server unserer Website gesendet.
                Diese Informationen werden temporär in einem sog. Logfile gespeichert. Folgende Informationen werden
                dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:
              </p>
              <ul className="list-disc pl-6 text-[#555] space-y-2">
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                <li>Verwendeter Browser und ggf. das Betriebssystem</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-black uppercase text-[#1A1A1A] mb-4">3. Kontaktformular</h2>
              <p className="text-[#555] leading-relaxed">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage
                und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
                Einwilligung weiter. Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt
                ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black uppercase text-[#1A1A1A] mb-4">4. Kursanmeldung</h2>
              <p className="text-[#555] leading-relaxed">
                Bei der Anmeldung zu einem Erste-Hilfe-Kurs oder einem anderen Kursangebot werden Ihre
                personenbezogenen Daten (Name, E-Mail, Telefon) gespeichert, um die Anmeldung zu bearbeiten und
                Sie über den Kurs zu informieren. Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
                DSGVO (Vertragserfüllung).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black uppercase text-[#1A1A1A] mb-4">5. Cookies</h2>
              <p className="text-[#555] leading-relaxed">
                Wir verwenden auf unserer Website ausschließlich technisch notwendige Cookies. Diese sind
                erforderlich, um den Betrieb der Website sicherzustellen, und werden auf Grundlage von Art. 6 Abs. 1
                lit. f DSGVO gesetzt. Es werden keine Tracking-, Analyse- oder Marketing-Cookies verwendet.
                Ein Cookie zur Speicherung Ihrer Datenschutz-Einstellung wird im Local Storage Ihres Browsers abgelegt.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black uppercase text-[#1A1A1A] mb-4">6. Hosting</h2>
              <p className="text-[#555] leading-relaxed">
                Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten,
                die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann
                es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
                Kontaktdaten, Namen, Websitezugriffe und sonstige Daten handeln, die über eine Website generiert werden.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black uppercase text-[#1A1A1A] mb-4">7. Ihre Rechte</h2>
              <p className="text-[#555] leading-relaxed mb-4">
                Sie haben jederzeit das Recht:
              </p>
              <ul className="list-disc pl-6 text-[#555] space-y-2">
                <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO)</li>
                <li>Die Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
                <li>Die Löschung Ihrer bei uns gespeicherten Daten zu verlangen (Art. 17 DSGVO)</li>
                <li>Die Einschränkung der Datenverarbeitung zu verlangen (Art. 18 DSGVO)</li>
                <li>Der Datenverarbeitung zu widersprechen (Art. 21 DSGVO)</li>
                <li>Datenübertragbarkeit zu verlangen (Art. 20 DSGVO)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-black uppercase text-[#1A1A1A] mb-4">8. Beschwerderecht</h2>
              <p className="text-[#555] leading-relaxed">
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
                personenbezogenen Daten durch uns zu beschweren. Zuständige Aufsichtsbehörde ist der Hessische
                Beauftragte für Datenschutz und Informationsfreiheit.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black uppercase text-[#1A1A1A] mb-4">9. Aktualität und Änderung dieser Datenschutzerklärung</h2>
              <p className="text-[#555] leading-relaxed">
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2025. Durch die
                Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben
                kann es notwendig werden, diese Datenschutzerklärung zu ändern.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
