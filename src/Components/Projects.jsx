import React from "react";
import { useNavigate } from "react-router";
import Pimage1 from "../assets/Screenshot 2025-10-17 103738.png";
import Pimg2 from "../assets/Screenshot 2025-10-17 105904.png";
import Pimg3 from "../assets/Screenshot 2025-10-17 105225.png";

const Projects = () => {
  const navigate = useNavigate();

  const projectsData = [
    {
      id: 1,
      name: "Medinest Healthcare Website",
      image: Pimage1,
      description:
        "A full-stack healthcare appointment and management platform built with React, Express.js, and MongoDB.",
      client: "https://github.com/safikolislam/MediNest-Client",
      server: "https://github.com/safikolislam/MediNest-Server",
    },
    {
      id: 2,
      name: "Car Rental",
      image: Pimg2,
      description:
        "A car rental management system with admin and user dashboards.",
      client: "https://github.com/safikolislam/car-rental",
      server: "https://github.com/safikolislam/rentify-server",
    },
    {
      id: 3,
      name: "Recipe Book",
      image: Pimg3,
      description:
        "A recipe sharing app where users can explore and save dishes.",
      client: "https://github.com/safikolislam/Recipe-Book",
      server: "https://github.com/safikolislam/Recipe-Server",
    },
  ];

  const handleViewDetails = (id) => {
    navigate(`/projects/${id}`);
  };

  return (
    <section
      id="Projects"
      className="bg-slate-50 text-gray-900 py-16 px-4"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">
                  {project.name}
                </h3>

                <div className="flex gap-2 mb-4">
                  <a
                    href={project.client}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-blue-50 text-blue-800 font-semibold py-2 px-4 rounded-md hover:bg-blue-100 transition"
                  >
                    GitHub Client
                  </a>
                  <a
                    href={project.server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-cyan-50 text-blue-800 font-semibold py-2 px-4 rounded-md hover:bg-blue-100 transition"
                  >
                    GitHub Server
                  </a>
                </div>

                <button
                  onClick={() => handleViewDetails(project.id)}
                  className="mt-auto w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

