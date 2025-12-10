import React, { useState, useEffect } from "react";

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Rohit97git/repos")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        );
        setRepos(sorted);
      });
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{repo.name}</h3>
            <p className="text-gray-600 text-sm mt-2">
              {repo.description || "GitHub project without description"}
            </p>

            <a
              href={repo.html_url}
              target="_blank"
              className="text-blue-600 font-semibold mt-4 block"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
