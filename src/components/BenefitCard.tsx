import { Video as LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function BenefitCard({ icon: Icon, title, description }: BenefitCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl group">
      <div className="w-14 h-14 bg-[#8B0000] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
        <Icon size={28} className="text-white group-hover:scale-110 transition-transform duration-300" />
      </div>
      <h3 className="text-xl font-bold text-[#1A1A1A] mb-2 group-hover:text-[#8B0000] transition-colors">{title}</h3>
      <p className="text-[#555555] leading-relaxed">{description}</p>
    </div>
  );
}
