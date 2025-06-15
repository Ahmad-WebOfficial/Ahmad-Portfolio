import React, { useState } from "react";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const [webProjects] = useState([
    { name: "Nexus News", url: "https://perfect-nexcent.vercel.app/" },
    { name: "Nexcent", url: "https://perfect-nexcent.vercel.app/" },
    { name: "Perfect Graphs", url: "https://perfect-graphs.vercel.app/" },
    { name: "Cleaning", url: "https://perfect-cleanic.vercel.app/" },
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
                    className={`${type === "creative" ? "w-[11rem] md:w-[10.5rem] lg:w-[15rem] md:mt-12 lg:mt-15" : "w-[12rem] md:w-[15rem]"} opacity-90 transition-transform duration-300 group-hover:scale-110`}
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
                🌍 Global Top Companies:
              </p>
              <div className="flex flex-wrap justify-center gap-6 my-4">
                <div className="flex flex-col items-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="w-12 h-12 object-contain" />
                  <span className="mt-2 text-sm">Google (World)</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="w-12 h-12 object-contain" />
                  <span className="mt-2 text-sm">Microsoft (World)</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/2504/2504903.png" alt="Meta" className="w-12 h-12 object-contain" />
                  <span className="mt-2 text-sm">Meta (World)</span>
                </div>
              </div>
              <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                🇵🇰 Top Companies in Pakistan:
              </p>
              <div className="flex flex-wrap justify-center gap-6 my-4">
                <div className="flex flex-col items-center">
                  <img src="https://companieslogo.com/img/orig/SYS.PK-95e4fe9e.png?t=1633510547" alt="Systems Limited" className="w-20 h-10 object-contain" />
                  <span className="mt-1 text-sm">Systems Limited (Pakistan)</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://pbs.twimg.com/profile_images/1419934379616759811/kLoNFzrR_400x400.jpg" alt="10Pearls" className="w-20 h-10 object-contain" />
                  <span className="mt-1 text-sm">10Pearls (Pakistan)</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://seeklogo.com/images/N/netsol-technologies-logo-DBFEEA63D3-seeklogo.com.png" alt="NetSol" className="w-20 h-10 object-contain" />
                  <span className="mt-1 text-sm">NetSol (Pakistan)</span>
                </div>
              </div>
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
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="User Icon"
          className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover object-top mb-4 shadow-lg border-4 border-white"
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
