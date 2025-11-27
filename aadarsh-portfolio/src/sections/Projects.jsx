import React from 'react';
import { Layout, Github, ExternalLink } from 'lucide-react';
import { Section, Card } from '../components/Shared';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <Section id="projects" className="bg-slate-900/30">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-slate-100">Featured Projects</h2>
        <div className="h-px bg-slate-700 flex-1 max-w-[200px]"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col h-full group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:text-blue-300 transition-colors">
                <Layout className="w-6 h-6" />
              </div>
              <div className="flex gap-4 text-slate-400">
                <a href={project.repo} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href={project.link} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-400 mb-6 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech) => (
                <span key={tech} className="text-xs font-mono text-slate-500">
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}