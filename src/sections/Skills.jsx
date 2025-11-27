import React from 'react';
import { Code2, Layout, Terminal, Database } from 'lucide-react';
import { Section, Card } from '../components/Shared';
import { skills } from '../data/portfolio';

export default function Skills() {
  return (
    <Section id="skills">
       <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-slate-100">Technical Skills</h2>
        <div className="h-px bg-slate-700 flex-1 max-w-[200px]"></div>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <div className="mb-4 text-blue-400"><Code2 /></div>
          <h3 className="text-lg font-semibold text-slate-200 mb-4">Languages</h3>
          <ul className="space-y-2">
            {skills.languages.map(skill => (
              <li key={skill} className="text-slate-400 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                {skill}
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <div className="mb-4 text-blue-400"><Layout /></div>
          <h3 className="text-lg font-semibold text-slate-200 mb-4">Frameworks</h3>
          <ul className="space-y-2">
            {skills.frameworks.map(skill => (
              <li key={skill} className="text-slate-400 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                {skill}
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <div className="mb-4 text-blue-400"><Terminal /></div>
          <h3 className="text-lg font-semibold text-slate-200 mb-4">Tools</h3>
          <ul className="space-y-2">
            {skills.tools.map(skill => (
              <li key={skill} className="text-slate-400 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                {skill}
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <div className="mb-4 text-blue-400"><Database /></div>
          <h3 className="text-lg font-semibold text-slate-200 mb-4">Databases</h3>
          <ul className="space-y-2">
            {skills.databases.map(skill => (
              <li key={skill} className="text-slate-400 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                {skill}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}