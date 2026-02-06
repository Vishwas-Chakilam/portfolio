import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Terminal, ChevronRight, Twitter } from 'lucide-react';
import { SOCIAL_LINKS, CODING_PROFILES, BIO } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Software Engineer",
    "Data Analyst", 
    "CS Student"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause at end
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, roles, typingSpeed]);

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gray-50 dark:bg-slate-900">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-purple-400/20 dark:bg-indigo-600/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] bg-indigo-400/20 dark:bg-purple-600/10 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <RevealOnScroll className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-gray-100 dark:border-slate-700 text-blue-600 dark:text-blue-400 text-sm font-semibold">
              <Terminal size={14} className="mr-2" />
              CS Data Science Student
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Hi, I'm <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                  {BIO.name}
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl font-mono text-blue-600 dark:text-blue-400 h-8 flex items-center">
                 <span className="mr-2">&gt;</span>
                 {text}
                 <span className="animate-blink border-r-2 border-blue-600 dark:border-blue-400 ml-1 h-6"></span>
              </h2>
            </div>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
              {BIO.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href={SOCIAL_LINKS.github} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex justify-center items-center px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold shadow-lg shadow-slate-900/20 dark:shadow-white/10 hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <Github size={20} className="mr-2" />
                GitHub
              </a>
              <a 
                href={SOCIAL_LINKS.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex justify-center items-center px-6 py-3 bg-[#0077b5] text-white rounded-xl font-bold shadow-lg hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <Linkedin size={20} className="mr-2" />
                LinkedIn
              </a>
              <a 
                href="#contact"
                className="inline-flex justify-center items-center px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-white border border-gray-200 dark:border-slate-700 rounded-xl font-bold shadow-sm hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
              >
                Let's Talk
                <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm font-medium text-slate-500 dark:text-slate-400 pt-6">
              <div className="flex items-center bg-white/50 dark:bg-slate-800/50 px-3 py-1 rounded-md">
                <MapPin size={16} className="mr-2 text-blue-500" />
                {SOCIAL_LINKS.location}
              </div>
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center bg-white/50 dark:bg-slate-800/50 px-3 py-1 rounded-md hover:text-blue-600 transition-colors">
                <Mail size={16} className="mr-2 text-blue-500" />
                {SOCIAL_LINKS.email}
              </a>
            </div>
          </RevealOnScroll>

          {/* Right Side - Visuals */}
          <RevealOnScroll delay={200} className="relative">
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 p-6 md:p-8 rounded-2xl shadow-2xl">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-6">Coding Proficiency</h3>
              
              <div className="space-y-6">
                {CODING_PROFILES.map((profile, index) => (
                  <a 
                    key={index} 
                    href={profile.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group block hover:bg-white/50 dark:hover:bg-slate-700/50 p-2 rounded-lg -mx-2 transition-colors"
                  >
                    <div className="flex justify-between items-end mb-2">
                      <div className="flex items-center">
                        <span className="font-bold text-slate-800 dark:text-slate-100 text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {profile.platform}
                        </span>
                      </div>
                      <span className="text-blue-600 dark:text-blue-400 font-mono text-sm">{profile.stats}</span>
                    </div>
                    
                    <div className="w-full h-2.5 bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                        style={{ width: `${index === 0 ? '92%' : index === 1 ? '85%' : '78%'}` }} 
                      ></div>
                    </div>
                    {profile.extra && (
                       <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 text-right">{profile.extra}</p>
                    )}
                  </a>
                ))}
              </div>

              {/* Decorative Code Snippet lookalike */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-slate-700 font-mono text-xs text-slate-400 leading-relaxed opacity-75 select-none">
                <div className="flex space-x-1 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <p><span className="text-purple-500">const</span> <span className="text-blue-500">profile</span> = <span className="text-yellow-600">{"{"}</span></p>
                <p className="pl-4">role: <span className="text-green-500">"Data Analyst, Software Engineer"</span>,</p>
                <p className="pl-4">skills: [<span className="text-green-500">"Python"</span>, <span className="text-green-500">"React"</span>, <span className="text-green-500">"AI"</span>,<span className="text-green-500">"Spring Boot"</span>,<span className="text-green-500">"FastAPI"</span>],</p>
                <p className="pl-4">status: <span className="text-blue-500">"Open to Work"</span></p>
                <p><span className="text-yellow-600">{"}"}</span>;</p>
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};

export default Hero;