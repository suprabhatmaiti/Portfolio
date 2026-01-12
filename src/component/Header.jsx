import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose, MdMenu } from "react-icons/md";
import MenuToggle from "./MenuToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    ["Home", "home"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Timeline", "myjourney"],
    ["Contact", "contact"],
  ];
  const menuRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
      // setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Scroll spy logic
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // header offset

      let current = "home";

      for (const [, id] of menuItems) {
        const section = document.getElementById(id);
        if (!section) continue;

        if (section.offsetTop <= scrollPosition) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={menuRef}
      className="fixed top-0 left-0 right-0 z-50 w-full max-w-7xl mx-auto
      px-4 md:px-10 py-3
      bg-white/50 backdrop-blur-md rounded-b-xl border-b border-white/20"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4 text-text-light">
          <div className="size-6 text-primary">
            <svg fill="none" viewBox="0 0 48 48">
              <path
                d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-lg font-bold tracking-tight">Suprabhat</h2>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-9">
            {menuItems.slice(0, 4).map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-sm font-medium px-3 py-2 rounded-md transition cursor-pointer
                  hover:text-primary hover:bg-yellow-100
                  ${
                    activeSection === id
                      ? "bg-yellow-200 text-primary font-bold"
                      : "text-text-light"
                  }`}
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollToSection("contact")}
            className={`h-10 px-4 rounded-lg bg-yellow-500 cursor-pointer
              text-white text-sm font-bold hover:opacity-90 transition ${
                activeSection === "contact" ? "ring-2 ring-yellow-400" : ""
              }`}
          >
            Contact Me
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="md:hidden text-text-light"
        >
          <MenuToggle isOpen={isOpen} />
        </button>
      </div>

      {/* ✅ Absolute Mobile Dropdown */}
      {isOpen && (
        <div
          className="md:hidden absolute left-0 right-0 top-full
          bg-white/95 backdrop-blur-md
          border-t border-white/20 shadow-xl"
        >
          <nav className="flex flex-col p-4 gap-2">
            {menuItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-left px-4 py-3 rounded-lg font-medium transition cursor-pointer
                  hover:bg-yellow-100 hover:text-primary
                  ${
                    activeSection === id
                      ? "bg-yellow-200 text-primary font-bold"
                      : "text-text-light"
                  }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
