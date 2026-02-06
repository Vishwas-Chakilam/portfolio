import React, { useState, useRef } from 'react';
import { Mail, Send, CheckCircle, AlertCircle, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { SOCIAL_LINKS } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    if (formRef.current) {
      try {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
          throw new Error('EmailJS configuration is missing. Please check your .env file.');
        }

        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
        
        setStatus('success');
        formRef.current.reset();
      } catch (error) {
        console.error('Email error:', error);
        setStatus('error');
      } finally {
        setIsSubmitting(false);
        setTimeout(() => setStatus('idle'), 5000);
      }
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm">Get in Touch</span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl tracking-tight">Contact Me</h2>
            <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Have a project in mind or want to discuss data science opportunities? I'd love to hear from you.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <RevealOnScroll className="space-y-8">
            <div className="bg-gray-50 dark:bg-slate-800 p-8 rounded-2xl border border-gray-100 dark:border-slate-700 h-full">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-start group">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Email</p>
                    <p className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{SOCIAL_LINKS.email}</p>
                  </div>
                </a>

                <div className="flex items-start">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Phone</p>
                    <p className="text-lg font-semibold text-slate-900 dark:text-white">{SOCIAL_LINKS.phone}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Location</p>
                    <p className="text-lg font-semibold text-slate-900 dark:text-white">{SOCIAL_LINKS.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-gray-200 dark:border-slate-700">
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Open to Full-time opportunities and freelance projects in Data Science and Full Stack Development.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Form */}
          <RevealOnScroll delay={200}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-none border border-gray-100 dark:border-slate-700">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  id="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea 
                  name="message" 
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full inline-flex justify-center items-center px-6 py-3.5 border border-transparent text-base font-bold rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-500/30"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message <Send size={18} className="ml-2" />
                  </span>
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-center p-4 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-xl animate-fade-in">
                  <CheckCircle size={20} className="mr-2 flex-shrink-0" />
                  <p>Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center p-4 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-xl animate-fade-in">
                  <AlertCircle size={20} className="mr-2 flex-shrink-0" />
                  <p>Failed to send message. Please try again or email directly.</p>
                </div>
              )}
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Contact;