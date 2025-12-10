import React from "react";

const Skills = () => {
  const skills = [
    "React",
    "Node.js",
    "MongoDB",
    "TailwindCSS",
    "Git",
    "Express",
  ];

  return (
    <section id="skills" class="py-20 bg-white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6">Skills</h2>
        <div class="flex flex-wrap gap-3 justify-center">
          <span class="px-4 py-2 bg-gray-200 rounded-full">JavaScript</span>
          <span class="px-4 py-2 bg-gray-200 rounded-full">React.js</span>
          <span class="px-4 py-2 bg-gray-200 rounded-full">Node.js</span>
          <span class="px-4 py-2 bg-gray-200 rounded-full">MongoDB</span>
          <span class="px-4 py-2 bg-gray-200 rounded-full">TypeScript</span>
          <span class="px-4 py-2 bg-gray-200 rounded-full">Express.js</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
