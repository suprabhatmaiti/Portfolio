import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
} from "react-icons/fa";
import { SiPostgresql, SiMysql, SiExpress, SiCplusplus } from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
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

  const skills = [
    {
      name: "React JS",
      icon: <FaReact />,
      color: "from-cyan-400 to-blue-500",
      level: "Intermediate",
    },
    {
      name: "Node JS",
      icon: <FaNodeJs />,
      color: "from-green-400 to-green-600",
      level: "Intermediate",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      color: "from-yellow-300 to-yellow-500",
      level: "Intermediate",
    },
    {
      name: "Express JS",
      icon: <SiExpress />,
      color: "from-gray-400 to-gray-600",
      level: "Intermediate",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
      color: "from-blue-400 to-blue-600",
      level: "Intermediate",
    },
    {
      name: "SQL",
      icon: <SiMysql />,
      color: "from-indigo-400 to-indigo-600",
      level: "Intermediate",
    },
    {
      name: "HTML",
      icon: <FaHtml5 />,
      color: "from-orange-400 to-orange-600",
      level: "Advanced",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      color: "from-sky-400 to-blue-500",
      level: "Advanced",
    },
    {
      name: "Python",
      icon: <FaPython />,
      color: "from-blue-500 to-yellow-400",
      level: "Beginner",
    },
    {
      name: "C++",
      icon: <SiCplusplus />,
      color: "from-blue-600 to-purple-600",
      level: "Intermediate",
    },
  ];

  return (
    <motion.section
      id="skills"
      data-cursor="inverse"
      className="w-full py-16 sm:py-20 px-4 scroll-mt-24
        bg-gradient-to-b from-blue-300 via-indigo-400 to-blue-400"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
          Skills & Technologies
        </h2>
        <p className="text-white/70 text-base sm:text-lg">
          A collection of technologies I work with to build scalable, modern
          applications
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.3 }}
        className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            className="group relative bg-white/95 backdrop-blur rounded-2xl p-5 sm:p-6
              hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            {/* Hover Gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${skill.color}
                opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}
            />

            <div className="relative flex flex-col items-center gap-3 sm:gap-4">
              <div className="text-4xl sm:text-5xl text-gray-700 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <div className="text-center">
                <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                  {skill.name}
                </h3>
                <span className="text-gray-600 text-xs sm:text-sm">
                  {skill.level}
                </span>
              </div>
            </div>

            {/* Corner Accent */}
            <div
              className={`absolute top-0 right-0 w-14 h-14 bg-gradient-to-br ${skill.color}
                opacity-0 group-hover:opacity-20 rounded-bl-full rounded-tr-2xl`}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.3 }}
        transition={{ delay: 0.2 }}
        className="mt-12 sm:mt-16 text-center text-white/60 text-sm"
      >
        Continuously learning and adapting to stay ahead in an ever-evolving
        tech landscape
      </motion.p>
    </motion.section>
  );
}
