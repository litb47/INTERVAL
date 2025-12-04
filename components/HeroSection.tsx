import React from 'react';
import { Button } from './Button';
import { SITE_CONTENT } from '../constants';

interface HeroSectionProps {
  onScrollToForm: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToForm }) => {
  return (
    <div className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={SITE_CONTENT.hero.backgroundImage} 
          alt="Gym Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold text-white tracking-tight mb-6 animate-fade-in-up">
          {SITE_CONTENT.hero.title}
        </h1>
        <p className="font-sans text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          {SITE_CONTENT.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="white" onClick={onScrollToForm}>
                {SITE_CONTENT.hero.cta}
            </Button>
        </div>
      </div>
    </div>
  );
};