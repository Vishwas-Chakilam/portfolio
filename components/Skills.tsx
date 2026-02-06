import React from 'react';
import { Code2, Database, Layout, Server, Settings } from 'lucide-react';
import { SKILLS } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const SkillCard: React.FC<{ title: string; skills: string[]; icon: React.ReactNode }> = ({ title, skills, icon }) => (
  <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors duration-300 group h-full">
    <div className="flex items-center mb-6">
      <div className="p-3 bg-white dark:bg-slate-900 shadow-sm text-blue-600 dark:text-blue-400 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2.5">
      {skills.map((skill) => (
        <span 
          key={skill} 
          className="px-3 py-1.5 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-lg border border-gray-200 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors cursor-default shadow-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm">Expertise</span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl tracking-tight">Technical Arsenal</h2>
            <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <RevealOnScroll delay={100}>
            <SkillCard 
              title="Languages" 
              skills={SKILLS.languages} 
              icon={<Code2 size={24} />} 
            />
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <SkillCard 
              title="Frameworks" 
              skills={SKILLS.frameworks} 
              icon={<Layout size={24} />} 
            />
          </RevealOnScroll>
          <RevealOnScroll delay={300}>
            <SkillCard 
              title="Data & DB" 
              skills={SKILLS.dataTools} 
              icon={<Database size={24} />} 
            />
          </RevealOnScroll>
          <RevealOnScroll delay={400}>
            <SkillCard 
              title="DevOps & Tools" 
              skills={SKILLS.devOpsTools} 
              icon={<Settings size={24} />} 
            />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Skills;