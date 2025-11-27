import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Section } from '../components/Shared';
import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <Section id="experience">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-slate-100">Where I've Worked</h2>
        <div className="h-px bg-slate-700 flex-1 max-w-[200px]"></div>
      </div>

      <div className="space-y-12">
        {experience.map((job, index) => (
          <div key={index} className="relative pl-8 md:pl-0">
            {/* Timeline Line (Desktop) */}
            <div className="hidden md:block absolute left-[20%] top-0 bottom-0 w-px bg-slate-800"></div>
            
            <div className="md:flex gap-12 group">
              {/* Date & Company (Left) */}
              <div className="md:w-[20%] md:text-right md:pr-12 relative">
                <div className="hidden md:block absolute right-[-6px] top-2 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-slate-950 group-hover:ring-blue-500/30 transition-all"></div>
                <h3 className="text-xl font-bold text-slate-100">{job.company}</h3>
                <p className="text-sm text-slate-500 font-mono mt-1 mb-2">{job.period}</p>
                <span className="text-xs font-semibold text-slate-400 bg-slate-800 px-2 py-1 rounded inline-block">
                  {job.location}
                </span>
              </div>

              {/* Details (Right) */}
              <div className="md:w-[80%] mt-4 md:mt-0 relative border-l-2 border-slate-800 pl-6 md:border-l-0 md:pl-0">
                  {/* Mobile Timeline Dot */}
                <div className="md:hidden absolute left-[-7px] top-0 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-slate-950"></div>
                
                <h4 className="text-lg font-medium text-blue-400 mb-4">{job.role}</h4>
                <ul className="space-y-3">
                  {job.achievements.map((point, i) => (
                    <li key={i} className="flex gap-3 text-slate-400 text-base">
                      <ChevronRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}