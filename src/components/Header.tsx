import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'START', path: '/' },
    { name: 'TEAM', path: '/team' },
    { name: 'KLASSEN', path: '/klassen' },
    { name: 'KURSE', path: '/kurse' },
    { name: 'ERFOLGE', path: '/erfolge' },
    { name: 'PREISE', path: '/preise' },
    { name: 'KONTAKT', path: '/kontakt' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-1.5 sm:h-2 bg-[#8B0000] z-50" />
      <header className="fixed top-1.5 sm:top-2 left-0 right-0 bg-white shadow-md z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[60px] sm:h-[72px]">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/fahmi.png"
                alt="Fahrschule Wafaa Fahmi Logo"
                className="h-12 sm:h-16"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold tracking-wide transition-colors py-1 ${
                    isActive(link.path)
                      ? 'text-[#8B0000] border-b-2 border-[#8B0000]'
                      : 'text-[#1A1A1A] hover:text-[#8B0000]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="tel:+491785499459"
                className="hidden sm:flex lg:hidden items-center gap-2 text-[#8B0000] font-bold text-sm"
              >
                <Phone size={16} />
                <span>Anrufen</span>
              </a>
              <button
                className="lg:hidden text-[#8B0000] p-2 -mr-2 touch-manipulation"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed right-0 top-0 bottom-0 w-72 sm:w-80 bg-[#1A1A1A] shadow-2xl animate-slide-in flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <img src="/wafaawhite.png" alt="Logo" className="h-10" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white p-2 -mr-2 touch-manipulation"
              >
                <X size={26} />
              </button>
            </div>

            <nav className="flex flex-col gap-1 px-4 py-6 flex-1 overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-bold tracking-wide transition-all rounded-xl px-4 py-3.5 touch-manipulation ${
                    isActive(link.path)
                      ? 'text-white bg-[#8B0000]'
                      : 'text-white/80 hover:text-white hover:bg-white/5 active:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="p-4 border-t border-white/10">
              <a
                href="tel:+491785499459"
                className="flex items-center justify-center gap-2 bg-[#8B0000] text-white font-bold uppercase px-6 py-4 rounded-xl text-sm tracking-wide touch-manipulation"
              >
                <Phone size={16} />
                Jetzt anrufen
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
