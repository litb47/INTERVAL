import React from 'react';
import { SITE_CONTENT } from '../constants';

export const FeatureSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-light overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-32">
          {SITE_CONTENT.features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={feature.id} 
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                {/* Text Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="flex items-center gap-4">
                     <span className="text-brand-accent font-display font-bold text-5xl opacity-20">
                        0{index + 1}
                     </span>
                     <div className="h-px w-20 bg-brand-dark opacity-20"></div>
                  </div>
                  <h2 className="font-display text-4xl font-bold text-brand-dark leading-tight">
                    {feature.title}
                  </h2>
                  <p className="font-sans text-lg text-brand-gray leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Image Content */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className={`absolute inset-0 bg-brand-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl transform ${isEven ? 'translate-x-4 translate-y-4' : '-translate-x-4 translate-y-4'}`}></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};