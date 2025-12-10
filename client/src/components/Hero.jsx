import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-50 px-4">
      <h1 className="text-5xl font-extrabold">Rohit Verma</h1>

      <p className="text-xl text-gray-700 mt-3">Full Stack Developer (MERN)</p>

      <p className="max-w-2xl text-gray-600 mt-4">
        Seeking to apply expertise in full-stack development and scalable
        architectures to build high-performance, user-focused applications,
        delivering clean and optimized solutions in Delhi NCR.
      </p>

      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
