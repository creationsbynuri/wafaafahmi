import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          <div>
            <img
              src="/wafaawhite.png"
              alt="Fahrschule Wafaa Fahmi"
              className="h-16 mb-4"
            />
            <p className="text-white/70 leading-relaxed">
              Dein Führerschein ist mir wichtig. Schnell. Persönlich. Mit Herz und Kompetenz.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">Schnelllinks</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-white/70 hover:text-white transition-colors">
                Start
              </Link>
              <Link to="/team" className="text-white/70 hover:text-white transition-colors">
                Team
              </Link>
              <Link to="/klassen" className="text-white/70 hover:text-white transition-colors">
                Klassen
              </Link>
              <Link to="/kurse" className="text-white/70 hover:text-white transition-colors">
                Kurse
              </Link>
              <Link to="/preise" className="text-white/70 hover:text-white transition-colors">
                Preise
              </Link>
              <Link to="/kontakt" className="text-white/70 hover:text-white transition-colors">
                Kontakt
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-white" />
                </div>
                <div className="text-sm text-white/70">
                  Hochheimer Straße 1<br />55252 Mainz-Kastel
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-white" />
                </div>
                <a
                  href="tel:+491785499459"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  +49 (0) 178 54 99 459
                </a>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-white" />
                </div>
                <a
                  href="mailto:info@wafaafahmi.de"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  info@wafaafahmi.de
                </a>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-white" />
                </div>
                <div className="text-sm text-white/70">
                  Montag – Donnerstag<br />14:00 – 18:00 Uhr
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/50">
          <p>
            &copy; 2025 Fahrschule Wafaa Fahmi. Alle Rechte vorbehalten. |{' '}
            <Link to="/impressum" className="hover:text-white transition-colors underline">Impressum</Link>{' '}|{' '}
            <Link to="/datenschutz" className="hover:text-white transition-colors underline">Datenschutz</Link>
          </p>
        </div>
      </div>
      <div className="h-2 bg-[#8B0000]" />
    </footer>
  );
}
