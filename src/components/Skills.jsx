import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"] },
  { category: "Tools & DevOps", items: ["Git", "Docker", "AWS", "CI/CD", "Jest"] }
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-blue-900 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-outfit font-bold text-white mb-4">
            Technical <span className="text-blue-500">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-inter">
            I've worked with a variety of technologies in the web development world. Here's an overview of my technical stack.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skills.map((skillGroup, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:bg-slate-800/50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <span className="w-8 h-1 bg-blue-500 rounded-full mr-3"></span>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm font-medium text-slate-300 hover:text-blue-400 hover:border-blue-500/50 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
