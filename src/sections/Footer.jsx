import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <footer
      data-cursor="-inverse"
      className=" w-full bg-gray-900 text-white border-t border-white/10 bg-gradient-to-b to-black-2000 via-indigo-950 from-blue-950"
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Skills", "Projects", "My Journey", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "")}`}
                      className="text-white/70 hover:text-yellow-500 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>

            <div className="flex justify-center lg:justify-start items-center gap-2 text-white/70 mb-4">
              <FaEnvelope className="text-yellow-500" />
              <a
                href="mailto:maitisuprabhat@gmail.com"
                className="hover:text-yellow-500 transition-colors"
              >
                maitisuprabhat@gmail.com
              </a>
            </div>

            <div className="flex justify-center lg:justify-start gap-5">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-yellow-500 transition-colors"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-yellow-500 transition-colors"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-yellow-500 transition-colors"
              >
                <FaTwitter size={22} />
              </a>
            </div>
          </div>

          {/* Thank You */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-bold mb-4">Thank You!</h3>
            <p className="text-white/70 text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
              Thank you for visiting my portfolio. I appreciate you taking the
              time to explore my work. Feel free to reach out if you'd like to
              collaborate or just have a chat!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm flex justify-center items-center gap-1 flex-wrap">
            © {new Date().getFullYear()} Made with
            <FaHeart className="text-red-600" />
            by Suprabhat Maiti
          </p>
        </div>
      </div>
    </footer>
  );
}
