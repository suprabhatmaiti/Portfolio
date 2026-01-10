import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Online Auction Platform",
    description:
      "A real-time auction system with live bidding, authentication, and winner tracking.",
    tech: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    github: "https://github.com/suprabhatmaiti/auction",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio built with React and Tailwind CSS.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://your-portfolio.com",
  },
  {
    title: "REST API Backend",
    description:
      "Secure REST API with JWT authentication and role-based access.",
    tech: ["Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/yourusername/backend-api",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-16 sm:py-20 px-4 scroll-mt-24
      bg-gradient-to-b from-blue-400 via-indigo-500 to-blue-500"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14 max-w-3xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
          Projects
        </h2>
        <p className="text-white/70 text-base sm:text-lg">
          Some of the projects I’ve built to apply and sharpen my skills
        </p>
      </motion.div>

      {/* Project Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.3 }}
        className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            className="group bg-white/10 backdrop-blur-md border border-white/10
              rounded-2xl p-6 hover:border-yellow-400
              transition-all hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Title */}
            <h3 className="text-white text-xl font-bold mb-2">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full
                  bg-yellow-400/10 text-yellow-300 border border-yellow-400/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-auto">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition"
                >
                  <FaGithub size={20} />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition"
                >
                  <FaExternalLinkAlt size={18} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-14 text-center text-white/60 text-sm"
      >
        More projects coming as I continue learning and building 🚀
      </motion.p>
    </section>
  );
}
