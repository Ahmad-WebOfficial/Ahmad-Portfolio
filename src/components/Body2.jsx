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
