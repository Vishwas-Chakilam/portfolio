import React, { useState, useEffect, useRef } from 'react';
import { X, Maximize2, Minus } from 'lucide-react';
import { BIO, SKILLS, EXPERIENCE, SOCIAL_LINKS } from '../constants';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TerminalComponent: React.FC<TerminalProps> = ({ isOpen, onClose }) => {
  const [history, setHistory] = useState<Array<{type: 'input' | 'output', content: React.ReactNode}>>([
    { type: 'output', content: 'Welcome to Vishwas Chakilam\'s Interactive Terminal v1.0.0' },
    { type: 'output', content: 'Type "help" to see available commands.' }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output: React.ReactNode = '';

    switch (trimmedCmd) {
      case 'help':
        output = (
          <div className="grid grid-cols-2 gap-2 max-w-sm">
            <span className="text-green-400">about</span> <span>- Who am I?</span>
            <span className="text-green-400">skills</span> <span>- Technical stack</span>
            <span className="text-green-400">exp</span> <span>- Experience info</span>
            <span className="text-green-400">socials</span> <span>- Connect with me</span>
            <span className="text-green-400">clear</span> <span>- Clear terminal</span>
            <span className="text-green-400">exit</span> <span>- Close terminal</span>
          </div>
        );
        break;
      case 'about':
        output = BIO.description;
        break;
      case 'skills':
        output = (
          <div>
            <div className="mb-1"><span className="text-blue-400">Languages:</span> {SKILLS.languages.join(', ')}</div>
            <div className="mb-1"><span className="text-blue-400">Frameworks:</span> {SKILLS.frameworks.join(', ')}</div>
            <div><span className="text-blue-400">Data:</span> {SKILLS.dataTools.join(', ')}</div>
          </div>
        );
        break;
      case 'exp':
        output = (
          <div className="space-y-2">
            {EXPERIENCE.map((exp, i) => (
              <div key={i}>
                <span className="text-yellow-400">{exp.role}</span> @ {exp.company}
              </div>
            ))}
          </div>
        );
        break;
      case 'socials':
        output = (
          <div className="flex flex-col">
            <a href={SOCIAL_LINKS.github} target="_blank" className="hover:underline hover:text-blue-400">Github</a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" className="hover:underline hover:text-blue-400">LinkedIn</a>
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="hover:underline hover:text-blue-400">Email</a>
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'exit':
        onClose();
        return;
      case '':
        return;
      default:
        output = `Command not found: ${trimmedCmd}. Type 'help' for list.`;
    }

    setHistory(prev => [
      ...prev,
      { type: 'input', content: cmd },
      { type: 'output', content: output }
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-3xl bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden border border-gray-700 font-mono text-sm sm:text-base animate-blob">
        {/* Title Bar */}
        <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-gray-700">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={onClose}></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-gray-400 text-xs">vishwas@portfolio:~</div>
          <div className="flex gap-2 text-gray-400">
             <Minus size={14} />
             <Maximize2 size={14} />
             <X size={14} className="cursor-pointer hover:text-white" onClick={onClose} />
          </div>
        </div>

        {/* Content */}
        <div className="p-4 h-[400px] overflow-y-auto text-gray-200" onClick={() => inputRef.current?.focus()}>
          {history.map((entry, i) => (
            <div key={i} className="mb-2">
              {entry.type === 'input' ? (
                <div className="flex">
                  <span className="text-green-500 mr-2">➜</span>
                  <span className="text-blue-400 mr-2">~</span>
                  <span>{entry.content}</span>
                </div>
              ) : (
                <div className="pl-6 text-gray-300 whitespace-pre-wrap">{entry.content}</div>
              )}
            </div>
          ))}
          
          <div className="flex items-center mt-2">
            <span className="text-green-500 mr-2">➜</span>
            <span className="text-blue-400 mr-2">~</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none text-white flex-1"
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </div>
          <div ref={bottomRef}></div>
        </div>
      </div>
    </div>
  );
};

export default TerminalComponent;