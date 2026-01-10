import React from "react";
import myImage from "../assets/myimage.jpg";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";

export default function Hero() {
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/suprabhatmaiti",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/suprabhat-maiti",
    },
    // {
    //   icon: FaXTwitter,
    //   href: "https://twitter.com/suprabhatmaiti",
    // },
    {
      icon: FaEnvelope,
      href: "mailto:maitisuprabhat@gmail.com",
      label: "Email",
    },
  ];
  return (
    <section
      id="home"
      data-cursor="inverse"
      className="w-full min-h-screen scroll-mt-24
      flex items-center justify-center
      bg-gradient-to-b from-blue-200 via-indigo-300 to-blue-300"
    >
      <div
        className="max-w-7xl mx-auto w-full
          flex flex-col-reverse md:flex-row
          items-center gap-10 justify-center md:justify-between
          px-6 sm:px-8 "
      >
        {/* Text */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {/* Heading + text */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="space-y-10"
          >
            <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-black leading-tight">
              <span className="block font-semibold italic text-orange-600 text-2xl md:text-4xl mb-2">
                Hi, I'm
              </span>
              <span className="text-indigo-900">Suprabhat </span>
              <span className="text-slate-900">Maiti</span>
            </h1>

            <p className="mt-4 text-white text-base md:text-lg max-w-lg mx-auto md:mx-0">
              I am a passionate Full-Stack Developer with a postgraduate degree
              in Information Technology from Kalyani Government Engineering
              College. I enjoy improving my coding skills by building
              applications and websites using React, Node.js, and PostgreSQL,
              and I am eager to learn new tools while growing professionally
              through hands-on projects.
            </p>
          </motion.div>

          {/* Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/1_Xy6FXwK0Uo1TGG0YDItpOCsz1K61GaT/preview"
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            className="inline-block bg-indigo-600 text-white px-6 md:px-8 py-3 
              text-xl md:text-2xl rounded-2xl font-semibold mt-8
              hover:bg-indigo-900 transition-all hover:shadow-2xl"
          >
            Resume →
          </motion.a>

          {/* Social Icons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            className="flex gap-6 mt-6 md:mt-8 justify-center md:justify-start"
          >
            {socialLinks.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white text-2xl p-4 rounded-full
      hover:bg-blue-800 transition-all hover:shadow-2xl"
              >
                <Icon />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          data-cursor-text="👋"
          className="relative p-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full"
        >
          <img
            src={myImage}
            alt="Suprabhat Maiti"
            className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 
              rounded-full object-cover border-4 border-white/50"
          />
        </motion.div>
      </div>
    </section>
  );
}
