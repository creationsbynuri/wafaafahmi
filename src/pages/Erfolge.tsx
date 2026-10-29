import { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

const successPhotos = [
  {
    url: '/Kunde1.png',
    caption: 'Bestanden! Herzlichen Glückwunsch!',
  },
  {
    url: '/Kunde2.png',
    caption: 'Endlich den Führerschein in der Hand!',
  },
  {
    url: '/Kunde3.png',
    caption: 'Erfolgreiche Prüfung beim ersten Versuch!',
  },
  {
    url: '/Kunde4.png',
    caption: 'Stolz auf unsere Fahrschülerin!',
  },
  {
    url: '/Kunde5.png',
    caption: 'Bestanden - was für ein Gefühl!',
  },
];

export default function Erfolge() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % successPhotos.length);
    }
  };

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + successPhotos.length) % successPhotos.length);
    }
  };

  return (
    <main className="pt-[74px] sm:pt-[88px]">
      <section className="bg-[#1A1A1A] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#8B0000] text-sm font-bold uppercase tracking-widest mb-2">
              Galerie
            </p>
            <h1 className="text-4xl md:text-5xl font-black uppercase text-white mb-4">
              Unsere Erfolgsgeschichten
            </h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Nichts macht uns stolzer als das Lächeln unserer Fahrschüler nach bestandener Prüfung. Hier sind einige unserer erfolgreichsten Momente.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {successPhotos.map((photo, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer border border-white/10"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <p className="text-white font-semibold text-sm">{photo.caption}</p>
                </div>
                <div className="absolute top-3 right-3 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera size={16} className="text-white" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-6 py-4">
              <div className="text-4xl font-black text-[#8B0000]">500+</div>
              <div className="text-left">
                <p className="text-white font-bold">Erfolgreiche Absolventen</p>
                <p className="text-white/50 text-sm">und es werden täglich mehr</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-10"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 text-white/80 hover:text-white p-2 z-10"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 text-white/80 hover:text-white p-2 z-10"
          >
            <ChevronRight size={40} />
          </button>

          <div
            className="max-w-4xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={successPhotos[lightboxIndex].url}
              alt={successPhotos[lightboxIndex].caption}
              className="max-w-full max-h-[75vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 font-semibold">
              {successPhotos[lightboxIndex].caption}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
