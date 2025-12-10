import React from "react";

const Skills = () => {
  const skillGroups = {
    Languages: ["JavaScript", "TypeScript", "Java", "SQL", "HTML5", "CSS3"],
    Frameworks: ["React.js", "Next.js", "Redux", "Node.js", "Express.js"],
    Databases: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"],
    Tools: ["Git", "GitHub", "Postman", "Docker", "NPM", "VS Code"],
  };

  return (
    <section id="skills" className="py-10 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">
          Technical Skills
        </h2>

        {Object.entries(skillGroups).map(([category, skills], i) => (
          <div key={i} className="mb-6">
            <h3 className="text-xl font-semibold mb-3">{category}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-200 rounded-full text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
