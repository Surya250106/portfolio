import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code } from 'lucide-react';

const projects = [
  {
    title: "Serverless Image Processing Pipeline 2026",
    description: "Designed an event-driven system to process images asynchronously, improving scalability and fault tolerance. Implemented queue-based architecture using SQS to handle concurrent workloads.",
    tech: ["AWS Lambda", "SQS", "Python"],
    github: "https://github.com/Surya250106/image-processing-pipeline",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Multi-Region Backend System 2026",
    description: "Built a distributed backend supporting multi-region deployment with load balancing and failover handling. Used Kafka for asynchronous communication, improving system resilience and throughput.",
    tech: ["NGINX", "PostgreSQL", "Kafka"],
    github: "https://github.com/Surya250106/multi-region-property",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "High-Volume Data Export Engine 2026",
    description: "Developed a system to process and export 10M+ records efficiently using streaming techniques. Optimized memory usage and improved performance for large-scale data processing.",
    tech: ["Python"],
    github: "https://github.com/Surya250106/polyglot-export-engine",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Asynchronous Payment Gateway 2026",
    description: "Built an async payment system with webhook-based event handling. Implemented retry logic and failure handling to ensure reliable transactions.",
    tech: ["Python", "Webhooks"],
    github: "https://github.com/Surya250106/asyncpay-payment-gateway",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop"
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

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
