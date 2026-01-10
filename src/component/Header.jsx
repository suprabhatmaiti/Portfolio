import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full max-w-7xl px-4 md:px-10 py-3 transition-colors duration-300 bg-white/50 backdrop-blur-md rounded-b-xl border-b border-white/20">
      <div className="flex items-center justify-between whitespace-nowrap">
        <div className="flex items-center gap-4 text-text-light">
          <div className="size-6 text-primary">
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <h2 className="text-text-light text-lg font-bold leading-tight tracking-[-0.015em]">
            Suprabhat
          </h2>
        </div>
        <div className="hidden md:flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <a
              className="text-text-light text-sm font-medium leading-normal hover:text-primary transition-colors"
              data-cursor-text="Home"
              data-cursor-stick
            >
              Home
            </a>
            <a
              className="text-text-light text-sm font-medium leading-normal hover:text-primary transition-colors"
              data-cursor-text="Timeline"
              data-cursor-stick
            >
              Timeline
            </a>
            <a
              className="text-text-light text-sm font-medium leading-normal hover:text-primary transition-colors"
              href=""
              data-cursor-text="Skills"
              data-cursor-stick
            >
              Skills
            </a>
            <a
              className="text-text-light text-sm font-medium leading-normal hover:text-primary transition-colors"
              data-cursor-text="Contact"
              data-cursor-stick
            >
              Contact
            </a>
          </div>
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-yellow-500 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity"
            data-cursor-text="Click"
            data-cursor-stick
          >
            <span className="">Contact Me</span>
          </button>
        </div>
        <div className="md:hidden">
          <button className="text-text-light">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
