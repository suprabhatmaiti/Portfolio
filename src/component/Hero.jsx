import React from "react";
import myImage from "../assets/myimage.jpg";

export default function Hero() {
  return (
    <section
      data-cursor="inverse"
      className="min-h-screen w-full py-20 
      bg-gradient-to-b to-blue-300 via-indigo-200 from-blue-200"
    >
      <div
        className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row 
        justify-between items-center gap-6 px-6 sm:px-8"
      >
        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-black leading-tight">
            <span className="block font-light italic text-yellow-400 text-2xl md:text-4xl mb-2">
              Hi, I'm
            </span>
            Suprabhat Maiti
          </h1>

          <p className="mt-4 text-white/80 text-base md:text-lg max-w-lg mx-auto md:mx-0">
            A passionate full-stack developer dedicated to creating intuitive,
            powerful, and seamless digital experiences. Welcome to my corner of
            the web.
          </p>
        </div>

        {/* Image */}
        <div
          data-cursor-text="👋"
          className="relative p-2 bg-gradient-to-br from-indigo-400 to-blue-600 rounded-full"
        >
          <img
            src={myImage}
            alt="Suprabhat Maiti"
            className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 
              rounded-full object-cover border-4 border-white/50"
          />
        </div>
      </div>
    </section>
  );
}
