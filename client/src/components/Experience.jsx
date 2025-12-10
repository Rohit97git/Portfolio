import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold">
            Full Stack Developer — Crud Studio, Noida
          </h3>

          <p className="text-gray-500">July 2023 – Present</p>

          <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
            <li>
              Designing and developing scalable applications using React.js &
              Node.js.
            </li>
            <li>
              Optimizing databases in PostgreSQL and MongoDB for
              high-performance.
            </li>
            <li>
              Building reusable UI components and secure backend services.
            </li>
            <li>
              Improved load speed by 15–25% and development efficiency by
              20–30%.
            </li>
            <li>
              Enhanced API integrations leading to 30% faster data retrieval.
            </li>
            <li>
              Created features for DriveHub & Service Portal with improved data
              accuracy.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
