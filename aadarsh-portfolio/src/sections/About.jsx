import React from 'react';
import { Award, Code2, Cpu } from 'lucide-react';
import { Section } from '../components/Shared';
import { personalInfo, education } from '../data/portfolio';

export default function About() {
  return (
    <Section id="about" className="bg-slate-900/30">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-slate-100">About Me</h2>
            <div className="h-px bg-slate-700 flex-1 max-w-[200px]"></div>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            {personalInfo.about}
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            I am currently pursuing my <strong className="text-blue-400">B.Tech in Computer Science</strong> at 
            <span className="text-slate-200"> {education[0].institution}</span>.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
              <Award className="w-8 h-8 text-yellow-500 mb-2" />
              <h4 className="text-slate-200 font-bold">LeetCode</h4>
              <p className="text-sm text-slate-400">Top 13.77% Globally</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
              <Code2 className="w-8 h-8 text-blue-500 mb-2" />
              <h4 className="text-slate-200 font-bold">Problem Solving</h4>
              <p className="text-sm text-slate-400">Rank 200/31k in Contest 438</p>
            </div>
          </div>
        </div>
        
        {/* Tech Stack Visual */}
        <div className="w-full md:w-1/3 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-slate-900 p-8 rounded-lg border border-slate-800 h-full flex flex-col justify-center items-center text-center">
             <Cpu className="w-16 h-16 text-slate-600 mb-4 group-hover:text-blue-500 transition-colors duration-300" />
             <h3 className="text-xl font-bold text-slate-200 mb-2">Modern Stack</h3>
             <p className="text-slate-400 text-sm">
               Focused on building performant React applications with the latest ecosystem tools.
             </p>
          </div>
        </div>
      </div>
    </Section>
  );
}