import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Terminal, Code, Cpu } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-16 items-center"
        >
          <div className="w-full md:w-1/2">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-3xl transform rotate-3 scale-105 opacity-50 blur-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1974&auto=format&fit=crop" 
                alt="Developer workspace" 
                className="relative rounded-3xl object-cover w-full h-full shadow-2xl border border-slate-700/50 grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-outfit font-bold text-white mb-2">
              About <span className="text-blue-500">Me</span>
            </h2>
            <div className="h-1 w-20 bg-blue-500 rounded-full mb-6"></div>
            
            <p className="text-lg text-slate-300 font-inter leading-relaxed">
              I'm a self-taught full-stack developer with a passion for building beautiful, functional, and scalable web applications. My journey started back in college when I built my first web crawler, and I've been hooked on web development ever since.
            </p>
            <p className="text-lg text-slate-300 font-inter leading-relaxed">
              Currently, I'm working on modernizing legacy systems using React and Node.js, while exploring the expanding ecosystem of serverless architecture and AI integrations. I believe in clean code, user-centric design, and continuous learning.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {[
                { icon: <Terminal size={24} className="text-blue-400" />, title: "Frontend", desc: "React, Vue" },
                { icon: <Code size={24} className="text-purple-400" />, title: "Backend", desc: "Node, Python" },
                { icon: <Cpu size={24} className="text-emerald-400" />, title: "Systems", desc: "AWS, Docker" }
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-slate-800 rounded-2xl border border-slate-700 hover:border-slate-600 transition-colors">
                  <div className="mb-3 p-2 bg-slate-900 rounded-lg inline-block">{item.icon}</div>
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
