import { Video as LucideIcon } from 'lucide-react';

interface USPCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  features: string[];
}

export default function USPCard({ icon: Icon, title, subtitle, features }: USPCardProps) {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl border-2 border-transparent hover:border-[#8B0000] group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B0000]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>

      <div className="relative z-10">
        <div className="w-16 h-16 bg-gradient-to-br from-[#8B0000] to-[#B22222] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
          <Icon size={32} className="text-white" />
        </div>

        <h3 className="text-2xl font-black uppercase text-[#1A1A1A] mb-2 group-hover:text-[#8B0000] transition-colors">
          {title}
        </h3>
        <p className="text-sm font-bold text-[#8B0000] uppercase tracking-wider mb-4">
          {subtitle}
        </p>

        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-[#555555]">
              <svg className="w-5 h-5 text-[#8B0000] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
