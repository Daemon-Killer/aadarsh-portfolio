import React from 'react';

export const Section = ({ id, className, children }) => (
  <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 ${className || ''}`}>
    <div className="max-w-6xl mx-auto">
      {children}
    </div>
  </section>
);

export const Badge = ({ children }) => (
  <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
    {children}
  </span>
);

export const Card = ({ children, className = "" }) => (
  <div className={`bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 ${className}`}>
    {children}
  </div>
);