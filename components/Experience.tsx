import React from 'react';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';
import { EXPERIENCE, EDUCATION } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm">Path</span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl tracking-tight">My Journey</h2>
            <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Work Experience */}
          <div>
            <RevealOnScroll>
              <div className="flex items-center mb-10">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                  <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Work Experience</h3>
              </div>
            </RevealOnScroll>
            
            <div className="space-y-12 border-l-2 border-blue-200 dark:border-blue-900/50 ml-3.5 pl-8 relative">
              {EXPERIENCE.map((exp, index) => (
                <RevealOnScroll key={index} delay={index * 100}>
                  <div className="relative group">
                    <div className="absolute -left-[43px] top-1 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-4 border-blue-500 dark:border-blue-500 group-hover:scale-110 transition-transform shadow-sm"></div>
                    
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 dark:text-white">{exp.role}</h4>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                        </div>
                        <span className="inline-flex items-center text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/50 px-3 py-1 rounded-full mt-2 sm:mt-0">
                          <Calendar size={12} className="mr-1.5" />
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-3">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="flex items-start text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                            <span className="mr-3 mt-2 w-1.5 h-1.5 bg-blue-400 dark:bg-blue-500 rounded-full flex-shrink-0"></span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <RevealOnScroll delay={200}>
              <div className="flex items-center mb-10">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                  <GraduationCap className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h3>
              </div>
            </RevealOnScroll>
            
            <div className="space-y-6">
              {EDUCATION.map((edu, index) => (
                <RevealOnScroll key={index} delay={300 + (index * 100)}>
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 hover:border-green-500/50 dark:hover:border-green-500/50 transition-colors duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white pr-4">{edu.institution}</h4>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/50 px-2 py-1 rounded whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-green-600 dark:text-green-400 font-medium text-sm mb-4">{edu.degree}</p>
                    <div className="flex items-center">
                      <div className="h-px flex-1 bg-gray-100 dark:bg-slate-700 mr-4"></div>
                      <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;