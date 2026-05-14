import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  // Parallax effect for decorative circle
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Decorative background parallax element */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute top-1/4 -right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]), opacity }}
        className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
            Available for new opportunities
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-outfit font-extrabold tracking-tight text-white max-w-4xl"
          >
            Building digital <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">experiences that matter.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl font-inter leading-relaxed"
          >
            Hi, I'm <span className="text-slate-200 font-semibold">Alex Developer</span>. A passionate Full Stack Engineer specializing in React, Node.js, and modern cloud architectures.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg shadow-blue-900/20"
            >
              View My Work
              <ArrowRight className="ml-2" size={18} />
            </Link>
            
            <a 
              href="#"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-all hover:scale-105 active:scale-95 border border-slate-700"
            >
              <Download className="mr-2" size={18} />
              Resume
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-500"
      >
        <span className="text-sm font-medium mb-2 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-slate-500 to-transparent"></div>
      </motion.div>
    </section>
  );
}
