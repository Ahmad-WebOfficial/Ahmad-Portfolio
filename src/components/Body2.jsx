import React, { useState } from "react";
import img11 from "../images/img1.jpg";


const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const [webProjects] = useState([
    { name: "Nexcent", url: "https://perfect-nexcent.vercel.app/" },
    { name: "Nexus News", url: "https://pefect-news.vercel.app/" },
    { name: "Perfect Graphs", url: "https://perfect-graphs.vercel.app/" },
    { name: "Cleaning App", url: "https://wix-cleanic-project.vercel.app/" },
    { name: "Api Product", url: "https://perfect-product-api.vercel.app/" },
    { name: "Mejiwoo Fashion", url: "https://mejiwoo-fashion-project.vercel.app/" },

  ]);

  const [creativeProjects] = useState([
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
            </li>
          ))}
        </ul>

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
              {[
                { type: "web", label: "Web Development", icon: "https://illustrations.popsy.co/gray/web-design.svg" },
                { type: "mobile", label: "Mobile Development", icon: "https://illustrations.popsy.co/gray/app-launch.svg" },
                { type: "creative", label: "Creative Projects", icon: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png" },
              ].map(({ type, label, icon }) => (
                <div
                  key={type}
                  className="flex flex-col items-center cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-2 hover:border-green-400 rounded-lg p-4 group"
                  onClick={() => setSelectedSkill(type)}
                >
                  <img
                    src={icon}
                    className={`${
                      type === "creative"
                        ? "w-[7rem] md:w-[8rem] lg:w-[9rem] md:mt-10 lg:mt-12"
                        : "w-[12rem] md:w-[12rem]"
                    } opacity-90 transition-transform duration-300 group-hover:scale-110`}
                    alt={type + " icon"}
                  />
                  <p className="text-white mt-3 lg:text-2xl font-semibold">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          ) : activeIndex === 1 ? (
            <div className="text-center px-4 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-green-400">
                Web vs Mobile Development Demand
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                🌐 Web Development ki demand 📱 Mobile Development se zyada hai. Magar mobile ka scope bhi barh raha hai — khaaskar Android/iOS apps ke liye.
              </p>
              <p className="text-lg md:text-xl mt-4 leading-relaxed text-gray-200 flex items-center justify-center gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/2721/2721623.png" alt="Web Icon" className="w-6 h-6" />
                <span className="text-green-400 font-semibold">60% Web</span>
                vs
                <img src="https://cdn-icons-png.flaticon.com/512/747/747376.png" alt="Mobile Icon" className="w-6 h-6" />
                <span className="text-blue-400 font-semibold">40% Mobile</span>
              </p>
            </div>
          ) : (
            <div className="text-center px-4 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-green-400">
                Top Companies
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                🌍 <strong>Global:</strong> Google, Microsoft, Amazon, Meta, Apple
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-200 mt-2">
                🏆 <strong>Top Global Company:</strong> Google
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-200 mt-6">
                🇵🇰 <strong>Pakistan:</strong> Systems Limited, NetSol Technologies, 10Pearls, Arbisoft, CureMD
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-200 mt-2">
                🏆 <strong>Top Pakistani Company:</strong> Systems Limited
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
  src={img11}
  alt="User Icon"
  className="w-55 h-55 md:w-80 md:h-80 rounded-full object-cover object-top mb-0 shadow-lg border-4 border-white"
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
