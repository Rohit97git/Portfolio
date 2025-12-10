import React, { useState, useEffect } from "react";

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Rohit97git/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <section id="projects" className="py-10 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">
        Projects
      </h2>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="p-4 bg-white rounded-lg border shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-slate-800">
              {repo.name}
            </h3>

            <p className="text-gray-600 text-sm mt-2 line-clamp-2">
              {repo.description || "No description available"}
            </p>

            <div className="flex justify-between text-xs text-gray-500 mt-3">
              <span>⭐ {repo.stargazers_count}</span>
              <span>🍴 {repo.forks_count}</span>
            </div>

            <a
              href={repo.html_url}
              target="_blank"
              className="block mt-3 text-blue-600 text-sm font-medium"
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
