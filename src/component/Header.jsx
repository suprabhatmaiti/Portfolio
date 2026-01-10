import React, { useState, useRef, use, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose, MdMenu } from "react-icons/md";
import MenuToggle from "./MenuToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };
  const menuItems = [
    ["Home", "home"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Timeline", "myjourney"],
    ["Contact", "contact"],
  ];
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={menuRef}
      className="sticky top-0 z-50 w-full max-w-7xl mx-auto
      px-4 md:px-10 py-3 relative
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
            {[
              ["Home", "home"],
              ["Skills", "skills"],
              ["Projects", "projects"],
              ["Timeline", "myjourney"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-sm font-medium text-text-light
                  hover:text-primary transition"
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollToSection("contact")}
            className="h-10 px-4 rounded-lg bg-yellow-500
              text-white text-sm font-bold hover:opacity-90 transition"
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
                className="text-left px-4 py-3 rounded-lg
                  text-text-light font-medium
                  hover:bg-yellow-100 transition"
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
