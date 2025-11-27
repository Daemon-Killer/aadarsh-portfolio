import React from 'react';
import { Github } from 'lucide-react';
import { Section } from '../components/Shared';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  return (
    <Section id="home" className="pt-32 pb-20 min-h-screen flex items-center">
      <div className="max-w-3xl">
        <p className="text-blue-500 font-medium mb-4 tracking-wide">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 tracking-tight">
          {personalInfo.name}.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8">
          I build things for the web.
        </h2>
        <p className="text-xl text-slate-400 max-w-xl mb-12 leading-relaxed">
          {personalInfo.tagline} Currently focusing on creating accessible, human-centered products as a 
          <span className="text-blue-400"> {personalInfo.role}</span>.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="#projects" 
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Check out my work
          </a>
          <a 
            href={personalInfo.links.github}
            target="_blank" 
            rel="noreferrer"
            className="px-8 py-4 border border-slate-700 text-slate-300 rounded-lg font-medium hover:border-blue-500/50 hover:bg-blue-500/5 transition-all flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            Github
          </a>
        </div>
      </div>
    </Section>
  );
}