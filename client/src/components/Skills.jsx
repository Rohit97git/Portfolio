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
    <section id="skills" className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
