import React, { useState } from 'react';
import { Button } from './Button';
import { WEBHOOK_URL } from '../constants';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'Landing Page',
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ fullName: '', phone: '', email: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error(error);
      // In a real production scenario, we might retry or log this error remotely.
      // For this demo, we simulate success if the URL is dummy to avoid bad UX
      if (WEBHOOK_URL === 'YOUR_WEBHOOK_URL_HERE') {
          console.warn("Webhook URL not set, simulating success for demo.");
          setStatus('success');
          setFormData({ fullName: '', phone: '', email: '' });
      } else {
          setStatus('error');
      }
    }
  };

  return (
    <section id="contact-form" className="py-24 bg-brand-dark text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Request Access</h2>
            <p className="text-gray-400">Join the community of elite fitness professionals.</p>
          </div>

          {status === 'success' ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-400 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-gray-300">We will be in touch shortly to schedule your tour.</p>
              <button 
                onClick={() => setStatus('idle')} 
                className="mt-6 text-sm text-brand-accent hover:text-white transition-colors"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent text-white placeholder-gray-500 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent text-white placeholder-gray-500 transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent text-white placeholder-gray-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {status === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm text-center">
                  Something went wrong. Please try again later.
                </div>
              )}

              <Button 
                type="submit" 
                fullWidth 
                variant="white"
                disabled={status === 'submitting'}
                className="mt-4"
              >
                {status === 'submitting' ? 'Sending...' : 'Submit Request'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};