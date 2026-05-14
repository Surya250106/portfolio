import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured modern e-commerce platform with real-time inventory, secure payments via Stripe, and an admin dashboard.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Task Management SaaS",
    description: "A collaborative project management tool featuring real-time updates, drag-and-drop kanban boards, and team workspaces.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Redux Toolkit"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "AI Content Generator",
    description: "An application that leverages OpenAI's GPT models to help creators generate blog posts, social media content, and ad copy.",
    tech: ["React", "Vite", "Express", "OpenAI API", "Framer Motion"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-outfit font-bold text-white mb-4">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl font-inter">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore a new technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center bg-slate-800/30 rounded-3xl overflow-hidden border border-slate-700/50 hover:border-slate-600 transition-all duration-300 group`}
            >
              <div className="w-full md:w-1/2 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 md:h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              
              <div className="w-full md:w-1/2 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-slate-300 font-inter leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-slate-300 hover:text-white transition-colors"
                  >
                    <Code size={20} className="mr-2" />
                    Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
