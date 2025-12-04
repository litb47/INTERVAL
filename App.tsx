import React from 'react';
import { HeroSection } from './components/HeroSection';
import { FeatureSection } from './components/FeatureSection';
import { PricingSection } from './components/PricingSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <HeroSection onScrollToForm={scrollToForm} />
      <FeatureSection />
      <PricingSection onScrollToForm={scrollToForm} />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default App;