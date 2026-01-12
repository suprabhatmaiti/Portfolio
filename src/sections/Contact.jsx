import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_jukt34x",
        "template_hiw9fcq",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "T2tSYmJyHAMKSShx2"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  const fadeRight = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const fadeLeft = {
    hidden: { opacity: 0, x: 30 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="contact"
      data-cursor="-inverse"
      className="w-full py-16 sm:py-20 px-4 md:scroll-mt-16  overflow-x-hidden
      bg-gradient-to-b to-blue-900 via-indigo-800 from-blue-700"
    >
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.3 }}
        variants={fadeLeft}
        className="text-center mb-10 max-w-3xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-white">
          Get In Touch
        </h2>
        <p className="text-white/70 text-base sm:text-lg">
          Have a project in mind or just want to say hello? I'd love to hear
          from you!
        </p>
      </motion.div>

      {/* Form */}
      <motion.form
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.3 }}
        variants={fadeRight}
        data-cursor="inverse"
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white/95 backdrop-blur
          rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl"
      >
        {/* Name */}
        <div className="mb-5">
          <label className="block text-sm font-semibold mb-2 text-gray-800">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-lg border border-slate-300
              focus:ring-2 focus:ring-yellow-500/30 focus:border-yellow-500
              outline-none transition"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-sm font-semibold mb-2 text-gray-800">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-lg border border-slate-300
              focus:ring-2 focus:ring-yellow-500/30 focus:border-yellow-500
              outline-none transition"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2 text-gray-800">
            Your Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            placeholder="Tell me about your project..."
            className="w-full px-4 py-3 rounded-lg border border-slate-300 resize-none
              focus:ring-2 focus:ring-yellow-500/30 focus:border-yellow-500
              outline-none transition"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600
            text-white font-bold py-3 sm:py-4 rounded-lg
            transition-transform active:scale-95"
        >
          Send Message
        </button>
      </motion.form>

      {/* Direct Email */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.3 }}
        variants={fadeLeft}
        className="mt-6 text-center"
      >
        <p className="text-white/60 mb-2 text-sm sm:text-base">
          Or reach out directly at:
        </p>
        <a
          href="mailto:maitisuprabhat@gmail.com"
          className="text-yellow-400 hover:text-yellow-300 font-semibold text-base sm:text-lg"
        >
          maitisuprabhat@gmail.com
        </a>
      </motion.div>
    </motion.section>
  );
}
