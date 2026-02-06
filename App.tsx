import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TerminalComponent from './components/Terminal';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar 
        darkMode={darkMode} 
        toggleTheme={toggleTheme} 
        toggleTerminal={() => setIsTerminalOpen(true)}
      />
      <TerminalComponent isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
      <main className="space-y-0">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;