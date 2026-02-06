import React from 'react';
import { Github, Heart, Linkedin, Twitter } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-2xl font-extrabold tracking-tighter text-slate-900 dark:text-white">VC.</span>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              Leveraging Data to Drive Insights and Innovation.
            </p>
          </div>

          <div className="flex space-x-4">
            <a 
              href={SOCIAL_LINKS.github} 
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-gray-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-slate-800 rounded-full transition-all"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href={SOCIAL_LINKS.linkedin} 
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-gray-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-[#0077b5] dark:hover:text-[#0077b5] hover:bg-gray-200 dark:hover:bg-slate-800 rounded-full transition-all"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href={SOCIAL_LINKS.x} 
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-gray-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-slate-800 rounded-full transition-all"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-slate-900 flex justify-center text-sm text-slate-500 dark:text-slate-500">
           <p className="flex items-center">
             © 2026 Vishwas Chakilam. Made with <Heart size={14} className="mx-1.5 text-red-500 fill-current" />
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;