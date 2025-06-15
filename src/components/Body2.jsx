import React, { useState } from "react";
import img1 from "../images/img88.jpg";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const [webProjects, setWebProjects] = useState([
    { name: "Nexus News", url: "https://perfect-nexcent.vercel.app/" },
    { name: "Nexcent", url: "https://perfect-nexcent.vercel.app/" },
    { name: "Perfect Graphs", url: "https://perfect-graphs.vercel.app/" },
    { name: "Cleaning", url: "https://perfect-cleanic.vercel.app/" },
  ]);

  const [creativeProjects, setCreativeProjects] = useState([
    { name: "Digital Clock", url: "https://perfect-clock-ten.vercel.app/" },
    { name: "To Do App", url: "https://perfect-todo-iota.vercel.app/" },
  ]);

  const mobileProjects = [{ name: "Job Portal App", url: "#" }];

  const skillProjects = {
    web: { title: "Web Projects", projects: webProjects },
    mobile: { title: "Mobile Projects", projects: mobileProjects },
    creative: { title: "Creative Projects", projects: creativeProjects },
  };

  const ProjectList = ({ title, projects, onBack, tech, note }) => {
    const [adding, setAdding] = useState(false);
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleAddProject = () => {
      if (password !== "MuhammadAhmadFridi@511") {
        setError("Incorrect password!");
        return;
      }
      if (!name.trim() || !url.trim()) {
        setError("Please enter both name and URL.");
        return;
      }

      let fullUrl = url.trim();
      if (!fullUrl.startsWith("http://") && !fullUrl.startsWith("https://")) {
        fullUrl = "https://" + fullUrl;
      }

      const newProject = { name: name.trim(), url: fullUrl };

      if (selectedSkill === "creative") {
        setCreativeProjects((prev) => [...prev, newProject]);
      }

      setName("");
      setUrl("");
      setPassword("");
      setError("");
      setAdding(false);
    };

    return (
      <div className="fixed inset-0 bg-black text-white z-50 flex flex-col items-center justify-center px-6 py-10 overflow-auto">
        <button
          onClick={onBack}
          className="absolute top-6 left-6 text-3xl text-white hover:text-green-400"
          title="Go Back"
        >
          ×
        </button>

        <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>

        {!adding && selectedSkill === "creative" && (
          <button
            onClick={() => setAdding(true)}
            className="absolute top-6 right-6 bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white font-semibold"
          >
            Add Project
          </button>
        )}

        {!adding ? (
          <ul className="text-left max-w-md mx-auto space-y-3 text-xl mb-6 relative">
            {projects.map((project, i) => (
              <li
                key={i}
                className="bg-gray-800 px-4 py-2 rounded-lg shadow flex justify-between items-center hover:bg-green-600 transition relative"
              >
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    if (project.url && project.url !== "#") {
                      window.open(project.url, "_blank");
                    }
                  }}
                  title={`Open ${project.name}`}
                >
                  🔹 {project.name}
                </span>

                {selectedSkill === "creative" && (
                  <span
                    onClick={() => {
                      const enteredPassword = prompt("Enter password to delete project:");
                      if (enteredPassword === "MuhammadAhmadFridi@511") {
                        setCreativeProjects((prev) => prev.filter((_, idx) => idx !== i));
                      } else {
                        alert("Incorrect password!");
                      }
                    }}
                    title="Delete Project"
                    className="cursor-pointer text-red-500 hover:text-red-700 font-bold text-2xl select-none ml-4"
                  >
                    ×
                  </span>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-6 w-full max-w-md bg-gray-900 p-6 rounded-lg shadow relative">
            <button
              onClick={() => setAdding(false)}
              className="absolute top-4 right-4 text-3xl text-red-500 hover:text-red-700 font-bold select-none"
              title="Cancel adding project"
            >
              ×
            </button>

            <h3 className="text-xl font-bold mb-4 text-green-400">
              Add New Project
            </h3>

            <input
              type="text"
              placeholder="Project Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white mb-3"
            />
            <input
              type="text"
              placeholder="Project URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white mb-3"
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white mb-3"
            />
            {error && <p className="text-red-400 text-sm mb-2">{error}</p>}

            <button
              onClick={handleAddProject}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-2"
            >
              Add Project
            </button>
          </div>
        )}

        <div className="mt-6 text-center text-lg text-gray-300 max-w-md space-y-2">
          <p>{note}</p>
          <p className="text-sm text-gray-400">🛠 Technologies Used: {tech}</p>
          <p className="text-sm text-green-400">
            📱 You can view these projects by clicking on them.
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="bg-[#42454b] text-white py-16 px-5 md:px-12 transition-all duration-500 min-h-screen">
        <h2 className="text-2xl font-bold text-center md:text-[2rem] mb-8">
          What I Can Do
        </h2>

        <div className="transition-all duration-500">
          {activeIndex === 0 ? (
            <div className="text-center mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {["web", "mobile", "creative"].map((type) => (
                <div
                  key={type}
                  className="flex flex-col items-center cursor-pointer transform transition-transform duration-300 hover:scale-105"
                  onClick={() => setSelectedSkill(type)}
                >
                  <img
                    src={
                      type === "web"
                        ? "https://illustrations.popsy.co/gray/web-design.svg"
                        : type === "mobile"
                        ? "https://illustrations.popsy.co/gray/app-launch.svg"
                        : "https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
                    }
                    className={`${
                      type === "creative"
                        ? "w-[11rem] md:w-[10.5rem]lg:w-[15rem] md:mt-12 lg:mt-15"
                        : "w-[12rem] md:w-[15rem]"
                    } opacity-90`}
                    style={{ cursor: "pointer" }}
                    alt={type + " icon"}
                  />
                  <p className="text-white mt-3 lg:text-2xl font-semibold">
                    {type === "web"
                      ? "Web Development"
                      : type === "mobile"
                      ? "Mobile Development"
                      : "Creative Projects"}
                  </p>
                </div>
              ))}
            </div>
          ) : activeIndex === 1 ? (
            <div className="text-center px-4 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-green-400">
                Development Demand Comparison
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                Aaj ke dor mein{" "}
                <span className="font-semibold text-white">
                  Web Development
                </span>{" "}
                ki demand
                <span className="text-green-400 font-semibold">
                  {" "}
                  Mobile Development
                </span>{" "}
                se zyada hai...
              </p>
            </div>
          ) : (
            <div className="text-center px-4 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-green-400">
                Top Companies in WordPress and Pakistan
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                Pakistan mein WordPress development mein kuch top companies hain...
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setSelectedSkill(null);
              }}
              className={`h-3 w-3 rounded-full ${
                index === activeIndex ? "bg-green-400" : "bg-white"
              }`}
            />
          ))}
        </div>

        {selectedSkill && (
          <ProjectList
            title={skillProjects[selectedSkill].title}
            projects={skillProjects[selectedSkill].projects}
            onBack={() => setSelectedSkill(null)}
            tech={
              selectedSkill === "web"
                ? "React, Tailwind CSS, JavaScript"
                : selectedSkill === "mobile"
                ? "React Native, Expo"
                : "React, JavaScript"
            }
            note={
              selectedSkill === "mobile"
                ? "Mobile projects are still in development."
                : ""
            }
          />
        )}
      </section>

      <div className="h-full bg-[#1b1a1b] flex flex-col mt-0 items-center p-5 md:p-10 text-white">
        <img
          src={img1}
          alt="Muhammad Ahmad Fridi"
          className="w-52 h-52 md:w-60 md:h-60 rounded-full object-cover object-top mb-4 shadow-lg border-4 border-white"
        />
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Muhammad Ahmad Fridi
        </h1>
        <p className="text-center text-gray-300 max-w-2xl mb-10">
          I'm a passionate developer with a strong ambition to become a
          full-stack developer. I’m currently sharpening my skills across both
          front-end and back-end technologies. My future plan is to build my own
          software house and contribute to impactful digital solutions.
        </p>
      </div>
    </>
  );
};

export default About;
