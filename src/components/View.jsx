import React, { useState } from "react";
import img1 from "../images/img77.jpg";
import Head from "../components/Head";
import Foter from "../components/Foter";

const ProjectManager = () => {
  const [projects] = useState([
    {
      name: "Nexus News",
      url: "https://perfect-nexcent.vercel.app/",
      image: null,
    },
    {
      name: "Digital Clock",
      url: "https://perfect-clock-ten.vercel.app/",
      image: "https://via.placeholder.com/80?text=Clock", // 👈 Replace with real image if needed
    },
  ]);

  return (
    <>
      <div className="mt-15">
        <Head />
      </div>

      <div className="h-full bg-[#1a282e] flex flex-col mt-15 items-center p-5 md:p-10 text-white">
        <img
          src={img1}
          alt="Muhammad Ahmad Fridi"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full object-contain mb-4 shadow-lg border-4 border-white"
        />

        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Muhammad Ahmad Fridi
        </h1>

        <p className="text-center text-gray-300 max-w-2xl mb-10">
          I am Muhammad Ahmad Fridi, a passionate Frontend Developer dedicated
          to building modern, responsive, and user-friendly websites. I have
          successfully completed multiple projects in web development using
          React, Tailwind CSS, and JavaScript. Many more projects are in
          progress, as I continue to learn and grow in this fast-moving tech
          world. My mission is to create impactful digital experiences that
          solve real-world problems.
        </p>
      </div>

      <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8">Project Manager</h1>

        <ul className="w-full max-w-md space-y-4">
          {projects.map((project, i) => (
            <li
              key={i}
              className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg hover:bg-green-700 transition cursor-pointer"
              onClick={() => {
                if (project.url && project.url !== "#") {
                  window.open(project.url, "_blank");
                }
              }}
              title={`Open ${project.name}`}
            >
              {project.name === "Digital Clock" && project.image && (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-16 h-16 object-cover rounded border border-white"
                />
              )}
              <span className="text-lg font-semibold">{project.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-25">
        <Foter />
      </div>
    </>
  );
};

export default ProjectManager;
