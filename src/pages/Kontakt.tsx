import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import HeroBanner from '../components/HeroBanner';
import ContactForm from '../components/ContactForm';

export default function Kontakt() {
  return (
    <main>
      <HeroBanner
        title="Kontakt"
        subtitle="Schnell, unkompliziert und persönlich."
      />

      {/* Section 1: WHITE – Contact info + form */}
      <section className="bg-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[#8B0000] text-sm font-bold uppercase tracking-widest mb-2">Erreichbarkeit</p>
              <h2 className="text-3xl font-black uppercase text-[#1A1A1A] mb-10">
                So erreichst du uns
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A] mb-1">Adresse</h3>
                    <p className="text-[#555555]">
                      Fahrschule Wafaa Fahmi<br />
                      Hochheimer Straße 1<br />
                      55252 Mainz-Kastel
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A] mb-1">Telefon & WhatsApp</h3>
                    <a
                      href="tel:+491785499459"
                      className="text-[#555555] hover:text-[#8B0000] transition-colors"
                    >
                      +49 (0) 178 54 99 459
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A] mb-1">E-Mail</h3>
                    <a
                      href="mailto:info@wafaafahmi.de"
                      className="text-[#555555] hover:text-[#8B0000] transition-colors"
                    >
                      info@wafaafahmi.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A] mb-1">Öffnungszeiten</h3>
                    <p className="text-[#555555]">
                      Montag – Donnerstag<br />
                      14:00 – 18:00 Uhr
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/491785499459"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-4 rounded hover:bg-[#1fb855] transition-colors mt-8"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Direkt auf WhatsApp schreiben
              </a>
            </div>

            <div>
              <p className="text-[#8B0000] text-sm font-bold uppercase tracking-widest mb-2">Nachricht</p>
              <h2 className="text-3xl font-black uppercase text-[#1A1A1A] mb-10">
                Schreib uns
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Beratungsbild */}
      <section className="bg-[#F5F5F5] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/WhatsApp_Image_2026-05-11_at_16.13.01.jpeg"
              alt="Persönliche Beratung in der Fahrschule"
              className="w-full h-64 md:h-80 object-cover"
              loading="lazy"
            />
            <img
              src="/WhatsApp_Image_2026-05-11_at_16.13.02.jpeg"
              alt="Beratungsgespräch mit Fahrlehrer Seddik"
              className="w-full h-64 md:h-80 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Section 2: DARK #1a1a1a – Location */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#8B0000] text-sm font-bold uppercase tracking-widest mb-2">Standort</p>
            <h2 className="text-3xl font-black uppercase text-white">Besuche uns vor Ort</h2>
          </div>
          <a
            href="https://maps.app.goo.gl/FcPPmRnRGoK2aCSs7"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block rounded-lg overflow-hidden h-[400px] border border-white/10 group"
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
      </section>
    </main>
  );
}
