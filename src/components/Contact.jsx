import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Code, User, MapPin } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="contact" className="py-24 bg-slate-950 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-900 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-outfit font-bold text-white mb-4">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-inter">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/3 space-y-8"
          >
            <a href="mailto:tnvssuryaprasad06@gmail.com" className="flex items-center p-4 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-colors group">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                <Mail size={24} />
              </div>
              <div className="ml-4">
                <h4 className="text-white font-medium">Email</h4>
                <p className="text-sm text-slate-400">Surya</p>
              </div>
            </a>

            <a href="https://github.com/Surya250106" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-slate-900 border border-slate-800 rounded-2xl hover:border-slate-500 transition-colors group">
              <div className="p-3 bg-slate-800 rounded-xl text-slate-300 group-hover:bg-slate-700 transition-colors">
                <Code size={24} />
              </div>
              <div className="ml-4">
                <h4 className="text-white font-medium">GitHub</h4>
                <p className="text-sm text-slate-400">View my repositories</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/surya-prasad-tanuku-9b0054364/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-colors group">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                <User size={24} />
              </div>
              <div className="ml-4">
                <h4 className="text-white font-medium">LinkedIn</h4>
                <p className="text-sm text-slate-400">Let's connect</p>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full md:w-1/2 bg-slate-900 p-8 rounded-3xl border border-slate-800"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-colors shadow-lg shadow-blue-900/20"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
