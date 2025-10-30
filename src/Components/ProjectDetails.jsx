import React from "react";
import { useParams, useNavigate } from "react-router";
import Pimage1 from "../assets/Screenshot 2025-10-17 103738.png";
import Pimg2 from "../assets/Screenshot 2025-10-17 105904.png";
import Pimg3 from "../assets/Screenshot 2025-10-17 105225.png";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projectsData = [
    {
      id: 1,
      name: "Medinest Healthcare Website",
      image: Pimage1,
      description:
        "A full-stack healthcare platform built with React, Express.js, and MongoDB. It allows users to book appointments, manage profiles, and communicate with doctors.",
      technologies: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
      client: "https://github.com/safikolislam/MediNest-Client",
      server: "https://github.com/safikolislam/medinest-server",
      live: "https://admirable-taffy-bafd88.netlify.app/",
    },
    {
      id: 2,
      name: "Car Rental",
      image: Pimg2,
      description:
        "A car rental management system that allows users to browse cars, make bookings, and track rental history. It includes an admin dashboard.",
      technologies: ["React", "Tailwind", "Firebase", "Node.js", "Express"],
      client: "https://github.com/safikolislam/car-rental",
      server: "https://github.com/safikolislam/rentify-server",
      live: "https://sage-gecko-acb351.netlify.app/",
    },
    {
      id: 3,
      name: "Recipe Book",
      image: Pimg3,
      description:
        "A recipe sharing app where users can explore, like, and save their favorite dishes. Built with React, MongoDB, and Express.js.",
      technologies: ["React", "Tailwind", "Express", "MongoDB"],
      client: "https://github.com/safikolislam/Recipe-Book",
      server: "https://github.com/safikolislam/Recipe-Server",
      live: "https://classy-paletas-cf3675.netlify.app/",
    },
  ];


  const project = projectsData.find((p) => p.id === parseInt(id)) || projectsData[0];

  return (
    <section className="bg-slate-50 text-gray-900 py-16 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-72 object-cover rounded-lg mb-6"
        />

        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          {project.name}
        </h2>

        <p className="text-gray-700 mb-4">{project.description}</p>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-800">Technologies:</h4>
          <ul className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm font-medium"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 mt-6">
          <a
            href={project.client}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
          >
            GitHub Client
          </a>
          <a
            href={project.server}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
          >
            GitHub Server
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600"
          >
            Live Site 
          </a>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-8 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-md"
        >
          ← Back to Home
        </button>
      </div>
    </section>
  );
};

export default ProjectDetails;








