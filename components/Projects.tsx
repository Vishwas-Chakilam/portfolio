import React from 'react';
import { Github, Zap } from 'lucide-react';
import { PROJECTS } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm">Portfolio</span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl tracking-tight">Featured Projects</h2>
            <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <RevealOnScroll key={index} delay={index * 150} className="h-full">
              <div 
                className="flex flex-col h-full bg-gray-50 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-gray-100 dark:border-slate-700 group"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/40 group-hover:bg-transparent transition-colors z-10"></div>
                  
                  {/* Fallback pattern if image fails or for style */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 opacity-50 z-0"></div>
                  
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 relative z-1"
                  />
                  
                  <div className="absolute top-4 right-4 z-20">
                      <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-800 dark:text-white text-xs rounded-full font-bold shadow-sm flex items-center border border-gray-200 dark:border-slate-700">
                          <Zap size={12} className="mr-1.5 text-yellow-500" />
                          {project.tools[0]}
                      </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mt-1">{project.period}</p>
                    </div>
                    <div className="flex space-x-2">
                      <a href="https://www.github.com/vishwas-chakilam" target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-700 rounded-full transition-all" aria-label="Github Repo">
                        <Github size={18} />
                      </a>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6 flex-1">
                    {project.description.map((desc, i) => (
                      <div key={i} className="flex items-start text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <span className="mr-2 mt-1.5 w-1 h-1 bg-slate-400 rounded-full flex-shrink-0"></span>
                        {desc}
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-gray-200 dark:border-slate-700 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tools.slice(1).map((tool) => (
                        <span 
                          key={tool} 
                          className="px-2.5 py-1 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-xs font-medium rounded border border-gray-200 dark:border-slate-700"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;