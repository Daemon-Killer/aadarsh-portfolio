import React from 'react';
import { Mail, Github, Linkedin, Code2 } from 'lucide-react';
import { Section } from '../components/Shared';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  return (
    <>
      <Section id="contact" className="text-center py-32 bg-gradient-to-b from-slate-950 to-slate-900">
        <p className="text-blue-500 font-mono mb-4">04. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Get In Touch</h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-12 text-lg">
          I'm currently looking for new opportunities as a Frontend Engineer. 
          Whether you have a question or just want to say hi, my inbox is always open!
        </p>
        <a 
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-blue-500 text-blue-500 rounded hover:bg-blue-500/10 transition-all font-medium"
        >
          <Mail className="w-5 h-5" />
          Say Hello
        </a>
      </Section>

      <footer className="py-8 text-center text-slate-500 text-sm bg-slate-950 border-t border-slate-900">
        <div className="flex justify-center gap-6 mb-4">
          <a href={personalInfo.links.github} className="hover:text-blue-400 transition-colors"><Github className="w-5 h-5" /></a>
          <a href={personalInfo.links.linkedin} className="hover:text-blue-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href={personalInfo.links.portfolio} className="hover:text-blue-400 transition-colors"><Code2 className="w-5 h-5" /></a>
        </div>
        <p>Designed & Built by {personalInfo.name}</p>
      </footer>
    </>
  );
}