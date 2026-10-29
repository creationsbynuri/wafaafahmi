import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  }

  function decline() {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 sm:p-8 animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-[#8B0000]/10 rounded-lg flex items-center justify-center">
            <Shield size={20} className="text-[#8B0000]" />
          </div>
          <h3 className="text-lg font-bold text-[#1A1A1A]">Datenschutz-Einstellungen</h3>
        </div>

        <p className="text-[#555555] text-sm leading-relaxed mb-4">
          Wir verwenden auf dieser Website ausschließlich technisch notwendige Cookies, die für den
          Betrieb der Seite erforderlich sind. Es werden keine Tracking- oder Marketing-Cookies eingesetzt.
          Weitere Informationen findest du in unserer{' '}
          <Link to="/datenschutz" className="text-[#8B0000] underline hover:no-underline">
            Datenschutzerklärung
          </Link>.
        </p>

        <div className="bg-[#F5F5F5] rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-[#1A1A1A]">Technisch notwendige Cookies</p>
              <p className="text-xs text-[#555555] mt-0.5">Sitzungsverwaltung, Cookie-Einstellung</p>
            </div>
            <span className="text-xs font-bold text-[#8B0000] uppercase bg-[#8B0000]/10 px-2 py-1 rounded">
              Immer aktiv
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={accept}
            className="flex-1 bg-[#8B0000] text-white font-bold py-3 px-6 rounded hover:bg-[#B22222] transition-all duration-300 text-sm uppercase tracking-wide"
          >
            Alle akzeptieren
          </button>
          <button
            onClick={decline}
            className="flex-1 border-2 border-[#1A1A1A]/20 text-[#1A1A1A] font-bold py-3 px-6 rounded hover:border-[#1A1A1A]/40 hover:bg-[#F5F5F5] transition-all duration-300 text-sm uppercase tracking-wide"
          >
            Nur notwendige
          </button>
        </div>
      </div>
    </div>
  );
}
