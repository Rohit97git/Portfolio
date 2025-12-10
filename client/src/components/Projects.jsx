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
  });
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">GitHub Projects</h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="p-5 bg-white shadow rounded-lg hover:-translate-y-1 transition"
          >
            <h3 className="text-xl font-semibold">{repo.name}</h3>
            <p className="text-gray-600 text-sm mt-2">
              {repo.description || "No description available"}
            </p>

            <div className="flex justify-between mt-4 text-sm">
              <span>⭐ {repo.stargazers_count}</span>
              <span>🍴 {repo.forks_count}</span>
            </div>

            <a
              href={repo.html_url}
              target="_blank"
              className="block mt-4 text-blue-600 font-semibold"
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
