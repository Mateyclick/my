
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  direction: 'left' | 'right';
}

const BenefitCard = ({ icon: Icon, title, description, direction }: BenefitCardProps) => {
  const animationClass = direction === 'left' ? 'animate-slide-in-left' : 'animate-slide-in-right';
  
  return (
    <div className={`opacity-0 ${animationClass} flex items-center gap-8 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 group`}>
      <div className={`flex items-center gap-8 w-full ${direction === 'right' ? 'flex-row-reverse' : ''}`}>
        <div className="flex-shrink-0 p-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-500">
          <Icon className="w-12 h-12 text-secondary group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className={`text-${direction === 'right' ? 'right' : 'left'}`}>
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
