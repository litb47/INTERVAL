import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/10 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-display font-bold text-white tracking-tight">INTERVAL</h3>
          <p className="text-sm text-gray-500 mt-2">© {new Date().getFullYear()} Interval Studio. All rights reserved.</p>
        </div>
        <div className="flex gap-6">
           {/* Social placeholders */}
           <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
           <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
           <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};