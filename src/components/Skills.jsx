import React from "react";
import img1 from "../images/img55.jpg";
import Header from "../components/Head";
import Foter from "../components/Foter";

const skills = [
  {
    title: "HTML",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    description: "Markup language for web pages",
    color: "bg-orange-100",
    titleColor: "text-black",
  },
  {
    title: "CSS",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    description: "Styling language for web pages",
    color: "bg-blue-100",
    titleColor: "text-black",
  },
  {
    title: "JavaScript",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    description: "Programming language for web development",
    color: "bg-yellow-100",
    titleColor: "text-black",
  },
  {
    title: "React",
    logo: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
    description: "JavaScript library for building UI",
    color: "bg-cyan-100",
    titleColor: "text-black",
  },
  {
    title: "React Native",
    logo: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
    description: "Build mobile apps with React",
    color: "bg-blue-100",
    titleColor: "text-black",
  },
  {
    title: "Firebase",
    logo: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
    description: "Backend services & realtime DB",
    color: "bg-yellow-100",
    titleColor: "text-black",
  },
  {
    title: "Tailwind CSS",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    description: "Utility-first CSS framework",
    color: "bg-teal-100",
    titleColor: "text-black",
  },
  {
    title: "C++",
    logo: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
    description: "High-performance programming language",
    color: "bg-gray-200",
    titleColor: "text-black",
  },
  {
    title: "SPM",
    logo: "https://cdn-icons-png.flaticon.com/512/919/919841.png",
    description: "Swift Package Manager basics",
    color: "bg-purple-100",
    titleColor: "text-black",
  },
  {
    title: "Src & Se",
    logo: "https://cdn-icons-png.flaticon.com/512/149/149852.png",
    description: "Source and software engineering",
    color: "bg-indigo-100",
    titleColor: "text-black",
  },
  {
    title: "Python Basic",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    description: "Basic programming with Python",
    color: "bg-green-100",
    titleColor: "text-black",
  },
  {
    title: "Kotlin Basic",
    logo: "https://cdn-icons-png.flaticon.com/512/919/919832.png",
    description: "Kotlin for Android apps",
    color: "bg-orange-100",
    titleColor: "text-black",
  },
];

const ProfilePage = () => {
  return (
    <>
      <Header />
      <div className="h-full bg-[#0e1f40] flex flex-col mt-15 items-center p-5 md:p-10 text-white">
        <img
          src={img1}
          alt="Muhammad Ahmad Fridi"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mb-4 shadow-lg border-4 border-white"
        />

        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Muhammad Ahmad Fridi
        </h1>

        <p className="text-center text-gray-300 max-w-2xl mb-10">
          I'm a passionate developer with hands-on experience in both front-end
          and mobile technologies. Skilled in HTML, CSS, JavaScript, React,
          React Native, Firebase and more. Always eager to learn and build
          modern web and mobile apps.
        </p>

        <section className="w-full max-w-6xl bg-[#162039] rounded-lg py-6 px-4 md:px-10">
          <p className="text-center font-semibold text-white text-[1.6rem] md:text-[2rem]">
            Skills
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className={`${skill.color} p-5 rounded-2xl shadow-md flex flex-col items-center text-center`}
              >
                <img
                  src={skill.logo}
                  alt={`${skill.title} logo`}
                  className="w-16 h-16 object-contain mb-3"
                />
                <h2 className={`${skill.titleColor} text-xl font-bold mb-2`}>
                  {skill.title}
                </h2>
                <p className="text-sm text-gray-700">{skill.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="mt-22">
        <Foter />
      </div>
    </>
  );
};

export default ProfilePage;
