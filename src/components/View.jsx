import React, { useState } from "react";
import img1 from "../images/img77.jpg";
import Head from "../components/Head";
import Foter from "../components/Foter";
const ProjectManager = () => {
  const [projects, setProjects] = useState([
    {
      name: "Nexus News",
      url: "https://perfect-nexcent.vercel.app/",
      image: null,
    },
    {
      name: "Digital Clock",
      url: "https://perfect-clock-ten.vercel.app/",
      image: null,
    },
  ]);

  const [adding, setAdding] = useState(false);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setImage(null);
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImage(null);
  };

  const handleAddProject = () => {
    if (password !== "MuhammadAhmadFridi@511") {
      setError("Incorrect password!");
      return;
    }
    if (!name.trim() || !url.trim()) {
      setError("Please enter both project name and URL.");
      return;
    }
    setProjects((prev) => [
      ...prev,
      { name: name.trim(), url: url.trim(), image },
    ]);
    setName("");
    setUrl("");
    setPassword("");
    setError("");
    setImage(null);
    setAdding(false);
  };

  const handleDeleteProject = (index) => {
    const enteredPassword = prompt("Enter password to delete project:");
    if (enteredPassword !== "MuhammadAhmadFridi@511") {
      alert("Incorrect password!");
      return;
    }
    setProjects((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="mt-15">
        <Head />
      </div>

      <div className="h-full bg-[#1a282e] flex flex-col mt-15 items-center p-5 md:p-10 text-white">
        <img
          src={img1}
          alt="Muhammad Ahmad Fridi"
          className="w-40 h-40 md:w-48 md:h-48  rounded-full object-contain  mb-4 shadow-lg border-4 border-white"
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
          solve real-world problems
        </p>
      </div>

      <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8">Project Manager</h1>

        {!adding && (
          <button
            onClick={() => setAdding(true)}
            className="mb-6 bg-green-600 hover:bg-green-700 px-5 py-2 rounded text-white font-semibold"
          >
            Add New Project
          </button>
        )}

        {adding && (
          <div className="bg-gray-800 p-6 rounded shadow-md w-full max-w-md relative">
            <button
              onClick={() => {
                setAdding(false);
                setError("");
                setName("");
                setUrl("");
                setPassword("");
                setImage(null);
              }}
              className="absolute top-3 right-4 text-2xl font-bold text-red-500 hover:text-red-700 select-none"
              title="Cancel"
            >
              ×
            </button>

            <h2 className="text-xl font-semibold mb-4 text-green-400">
              Add Project
            </h2>
            <input
              type="text"
              placeholder="Project Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mb-3 px-3 py-2 rounded bg-gray-700 text-white"
            />
            <input
              type="text"
              placeholder="Project URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full mb-3 px-3 py-2 rounded bg-gray-700 text-white"
            />

            <div className="mb-3">
              <label className="block mb-1">Project Image (optional):</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="text-gray-900"
              />
              {image && (
                <div className="mt-2 flex items-center space-x-3">
                  <img
                    src={image}
                    alt="Project preview"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="text-red-500 hover:text-red-700 font-bold text-xl select-none"
                    title="Remove image"
                  >
                    ×
                  </button>
                </div>
              )}
            </div>

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-3 px-3 py-2 rounded bg-gray-700 text-white"
            />
            {error && <p className="text-red-400 mb-2">{error}</p>}

            <button
              onClick={handleAddProject}
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white font-semibold"
            >
              Add Project
            </button>
          </div>
        )}

        <ul className="w-full max-w-md space-y-3">
          {projects.map((project, i) => (
            <li
              key={i}
              className="flex justify-between items-center bg-gray-800 p-3 rounded hover:bg-green-700 transition cursor-pointer"
            >
              <div
                className="flex items-center flex-1 space-x-4"
                onClick={() => {
                  if (project.url && project.url !== "#") {
                    window.open(project.url, "_blank");
                  }
                }}
                title={`Open ${project.name}`}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-14 h-14 object-cover rounded-lg border border-gray-700"
                  />
                ) : (
                  <div className="w-40 h-45 bg-gray-600 rounded-lg flex items-center justify-center text-gray-400 text-xl">
                    📁
                  </div>
                )}
                <span className="text-lg font-semibold text-white">
                  {project.name}
                </span>
              </div>
              <button
                onClick={() => handleDeleteProject(i)}
                title="Delete Project"
                className="ml-4 text-red-500 hover:text-red-700 font-bold text-2xl select-none"
              >
                ×
              </button>
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
