import React from "react";

const Hero = () => {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-white to-gray-100 px-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
        Hi, I'm <span className="text-blue-600">Rohit Verma</span>
      </h1>

      <p className="text-lg sm:text-xl text-gray-600 mt-2">
        Full Stack Developer (MERN)
      </p>

      <p className="max-w-xl text-gray-700 mt-4 text-sm sm:text-base">
        I build fast, scalable & user-focused applications with clean code and
        strong backend architecture.
      </p>

      <a
        href="#projects"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
