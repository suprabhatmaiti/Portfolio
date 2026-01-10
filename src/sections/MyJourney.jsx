import React from "react";
import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";
import { motion } from "framer-motion";

export default function MyJourney() {
  const educationTimeline = [
    {
      year: "2025",
      institution: "Your University Name",
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      description: "Specialized in web development and software engineering.",
      icon: <FaUniversity />,
    },
    {
      year: "2022",
      institution: "Your College Name",
      degree: "Higher Secondary",
      field: "Science Stream",
      description: "Focused on Mathematics, Physics, and Computer Science.",
      icon: <FaSchool />,
    },
    {
      year: "2019",
      institution: "Your School Name",
      degree: "Secondary School",
      field: "General Studies",
      description:
        "Completed with distinction and strong foundation in academics.",
      icon: <FaGraduationCap />,
    },
    {
      year: "2017",
      institution: "Your School Name",
      degree: "Secondary School",
      field: "General Studies",
      description:
        "Completed with distinction and strong foundation in academics.",
      icon: <FaGraduationCap />,
    },
    {
      year: "2015",
      institution: "Your School Name",
      degree: "Secondary School",
      field: "General Studies",
      description:
        "Completed with distinction and strong foundation in academics.",
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <motion.section
      data-cursor="-inverse"
      className="w-full py-16 sm:py-20 
        bg-gradient-to-b to-blue-700 via-indigo-600 from-blue-500"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            My Educational Journey
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
            The path that shaped my knowledge and passion for technology
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop center line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 h-full w-1 
            bg-gradient-to-b from-yellow-400 via-rose-400 to-violet-400 hidden md:block"
          />

          {/* Mobile left line */}
          <div
            className="absolute left-9.5 h-full w-1 
            bg-gradient-to-b from-yellow-400 via-rose-400 to-violet-400 md:hidden"
          />

          <div className="space-y-12">
            {educationTimeline.map((item, index) => (
              <React.Fragment key={index}>
                <motion.div className="relative flex items-start">
                  {/* Mobile year */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -60,
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="md:hidden absolute left-0 z-10"
                  >
                    <div
                      className="w-20 h-20 rounded-full 
                      bg-gradient-to-br from-yellow-400 to-rose-500
                      flex items-center justify-center shadow-lg"
                    >
                      <span className="text-white font-black text-lg">
                        {item.year}
                      </span>
                    </div>
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? 60 : -60,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`w-full pl-24 md:pl-0 md:w-5/12 ${
                      index % 2 === 0
                        ? "md:pr-12 md:ml-auto"
                        : "md:pl-12 md:order-3"
                    }`}
                  >
                    <div
                      className="bg-white/10 backdrop-blur-md border border-white/10
                      rounded-2xl p-6 hover:border-yellow-400
                      transition-all hover:scale-105 hover:shadow-xl hover:shadow-black/30"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-3xl text-yellow-400">
                          {item.icon}
                        </div>
                        <h3 className="text-white text-xl font-bold">
                          {item.institution}
                        </h3>
                      </div>

                      <h4 className="text-white font-semibold text-lg mb-2">
                        {item.degree}
                      </h4>
                      <p className="text-yellow-400 font-medium mb-3">
                        {item.field}
                      </p>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Desktop year */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -60,
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:flex"
                  >
                    <div
                      className="w-20 h-20 rounded-full 
                      bg-gradient-to-br from-yellow-300 to-rose-500
                      flex items-center justify-center shadow-lg"
                    >
                      <span className="text-white font-black text-lg">
                        {item.year}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Intermediate years */}
                {index < educationTimeline.length - 1 && (
                  <motion.div className="relative h-24 flex items-center justify-center">
                    {/* Desktop intermediate years */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col gap-4">
                      {Array.from({
                        length:
                          parseInt(educationTimeline[index].year) -
                          parseInt(educationTimeline[index + 1].year) -
                          1,
                      }).map((_, i) => {
                        const year =
                          parseInt(educationTimeline[index].year) - i - 1;
                        return (
                          <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            key={year}
                            className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-white/20"
                          >
                            <span className="text-black/40 font-semibold text-xs">
                              {year}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                    {/* Mobile intermediate years */}{" "}
                    <div className="md:hidden absolute left-0 top-0 flex flex-col gap-4">
                      {" "}
                      {Array.from({
                        length:
                          parseInt(educationTimeline[index].year) -
                          parseInt(educationTimeline[index + 1].year) -
                          1,
                      }).map((_, i) => {
                        const year =
                          parseInt(educationTimeline[index].year) - i - 1;
                        return (
                          <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            key={year}
                            className="w-12 h-12 rounded-full bg-white flex items-center justify-center border-2 border-white/10 ml-4 shadow-lg"
                          >
                            {" "}
                            <span className="text-black/50 font-semibold text-xs">
                              {" "}
                              {year}{" "}
                            </span>{" "}
                          </motion.div>
                        );
                      })}{" "}
                    </div>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-white/60 text-sm">
            Continuously learning and growing in the field of technology
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
