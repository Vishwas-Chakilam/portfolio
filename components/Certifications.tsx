import React from 'react';
import { Award, BadgeCheck, Trophy } from 'lucide-react';
import { CERTIFICATIONS, ACHIEVEMENTS } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const Certifications: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Certifications */}
            <div>
              <RevealOnScroll>
                <div className="flex items-center mb-10">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-4">
                    <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Certifications</h2>
                </div>
              </RevealOnScroll>
              
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert, idx) => (
                  <RevealOnScroll key={idx} delay={idx * 100}>
                    <div className="flex items-start p-5 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-700/50 transition-colors">
                      <BadgeCheck className="w-6 h-6 text-purple-500 mt-0.5 mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-lg leading-tight">{cert.name}</h4>
                        <div className="flex flex-wrap items-center text-sm text-slate-500 dark:text-slate-400 mt-2">
                          <span className="font-medium text-slate-700 dark:text-slate-300 mr-2">{cert.issuer}</span>
                          <span className="text-slate-300 dark:text-slate-600 mr-2">•</span>
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <RevealOnScroll delay={200}>
                <div className="flex items-center mb-10">
                   <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg mr-4">
                    <Trophy className="w-6 h-6 text-yellow-600 dark:text-yellow-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Achievements</h2>
                </div>
              </RevealOnScroll>
              
              <div className="space-y-4">
                {ACHIEVEMENTS.map((ach, idx) => (
                  <RevealOnScroll key={idx} delay={300 + (idx * 100)}>
                    <div className="relative p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-800 rounded-xl border border-amber-100 dark:border-slate-700">
                       <div className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 mr-4 flex-shrink-0 animate-pulse"></div>
                          <div>
                            <h4 className="font-bold text-slate-900 dark:text-white text-lg">{ach.title}</h4>
                            <p className="text-sm text-amber-700 dark:text-amber-500 mt-1 font-medium">{ach.date}</p>
                          </div>
                       </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>

         </div>
       </div>
    </section>
  )
}

export default Certifications;