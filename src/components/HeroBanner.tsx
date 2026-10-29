interface HeroBannerProps {
  title: string;
  subtitle: string;
  breadcrumb?: string;
}

export default function HeroBanner({ title, subtitle, breadcrumb }: HeroBannerProps) {
  return (
    <section className="bg-[#1A1A1A] text-white py-14 sm:py-20 mt-[62px] sm:mt-[88px] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8B0000]/15 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#8B0000]/10 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {breadcrumb && (
          <p className="text-white/50 text-sm mb-4">{breadcrumb}</p>
        )}
        <div className="w-10 h-1 bg-[#8B0000] mb-4 rounded"></div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-3 sm:mb-4">
          {title}
        </h1>
        <p className="text-base sm:text-xl text-white/70 max-w-2xl">{subtitle}</p>
      </div>
    </section>
  );
}
