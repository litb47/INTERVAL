import React from 'react';
import { Button } from './Button';
import { SITE_CONTENT } from '../constants';

interface PricingSectionProps {
    onScrollToForm: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onScrollToForm }) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark mb-6">
          {SITE_CONTENT.pricing.title}
        </h2>
        <p className="font-sans text-xl text-brand-gray mb-10 leading-relaxed">
          {SITE_CONTENT.pricing.description}
        </p>
        <Button onClick={onScrollToForm} variant="outline">
          {SITE_CONTENT.pricing.cta}
        </Button>
      </div>
    </section>
  );
};