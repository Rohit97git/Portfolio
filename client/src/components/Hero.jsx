import React from "react";

const Hero = () => {
  return (
    <section className="text-center py-20">
      <img
        src="/my-photo.jpg"
        alt="profile"
        className="w-40 h-40 mx-auto rounded-full shadow"
      />
      <h1 className="text-4xl font-bold mt-6">Rohit Verma</h1>
      <p className="text-xl text-gray-600 mt-2">Full-Stack Developer</p>
    </section>
  );
};

export default Hero;
