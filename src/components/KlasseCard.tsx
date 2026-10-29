import { Video as LucideIcon } from 'lucide-react';

interface KlasseCardProps {
  icon: LucideIcon;
  name: string;
  badge?: string;
  description: string;
  dark?: boolean;
}

export default function KlasseCard({ icon: Icon, name, badge, description, dark }: KlasseCardProps) {
  if (dark) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:border-[#8B0000]/50 group">
        <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#8B0000] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
            <Icon size={20} className="text-white" />
          </div>
          {badge && (
            <span className="bg-[#8B0000] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 sm:px-3 py-1 rounded">
              {badge}
            </span>
          )}
        </div>
        <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 group-hover:text-[#8B0000] transition-colors leading-snug">{name}</h3>
        <p className="text-white/60 leading-relaxed whitespace-pre-line text-xs sm:text-sm">{description}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 sm:p-6 hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:border-[#8B0000]/30 group">
      <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#8B0000] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
          <Icon size={20} className="text-white" />
        </div>
        {badge && (
          <span className="bg-[#8B0000] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 sm:px-3 py-1 rounded">
            {badge}
          </span>
        )}
      </div>
      <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A] mb-2 sm:mb-3 group-hover:text-[#8B0000] transition-colors leading-snug">{name}</h3>
      <p className="text-[#555555] leading-relaxed whitespace-pre-line text-xs sm:text-sm">{description}</p>
    </div>
  );
}
