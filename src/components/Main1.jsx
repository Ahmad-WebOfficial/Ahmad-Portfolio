import React, { useState } from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";

const Main1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sections = [
    {
      title: "Lessons and insights",
      subtitle: "from 8 years",
      description:
        "Where to grow your business as a photographer: site or social media?",
      button: "Register",
      image: "https://project-nexcent.vercel.app/HeroImg.svg",
      bgColor: "#F5F7FA",
    },
    {
      title: "Grow your reach",
      subtitle: "with smart marketing",
      description:
        "Expand your client base by learning proven marketing techniques.",
      button: "Register",
      image: "https://project-nexcent.vercel.app/HeroImg.svg",
      bgColor: "#E7F7F2",
    },
    {
      title: "Boost performance",
      subtitle: "with expert tools",
      description: "Get more done with the latest creative software.",
      button: "Register",
      image: "https://project-nexcent.vercel.app/HeroImg.svg",
      bgColor: "#FFF8E1",
    },
  ];

  const current = sections[currentIndex];

  return (
    <>
      <div
        className="relative flex flex-col md:flex-row h-screen -mt-7 w-full py-20 md:py-5 items-center justify-center gap-10 md:gap-10 md:px-20 transition-all duration-500"
        style={{ backgroundColor: current.bgColor }}
      >
        <div className="flex flex-col text-center md:text-left px-6 md:px-0 max-w-xl">
          <p className="text-black text-3xl md:text-5xl font-semibold">
            {current.title}
          </p>
          <p className="text-green-600 mt-2 text-2xl md:text-4xl font-semibold">
            {current.subtitle}
          </p>
          <p className="text-black mt-4 text-base md:text-lg">
            {current.description}
          </p>
          <button className="bg-green-500 text-white mt-6 py-2 px-6 text-base md:text-lg rounded self-center md:self-start">
            {current.button}
          </button>
        </div>

        <div className="flex justify-center md:justify-end p-5">
          <img
            src={current.image}
            alt="Illustration"
            className="w-60 md:w-96 lg:h-80 object-contain"
          />
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
          {sections.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full cursor-pointer border-2 ${
                currentIndex === index
                  ? "bg-green-600 border-green-600"
                  : "bg-white border-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>

      <div>
        <p className="text-center text-2xl md:text-3xl lg:text-4xl mt-8 text-black font-bold">
          Our Client
        </p>
        <p className="text-center text-sm  lg:text-lg mt-3 text-gray-800">
          We have been working with some Fortune 500+ clients
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-6 md:gap-10 lg:gap-25 lg:mt-5">
        <img
          src="https://project-nexcent.vercel.app/Clients/client1.svg"
          alt="client1"
          className="w-8 h-8 md:w-13 md:h-13 object-contain"
        />s
        <img
          src="https://project-nexcent.vercel.app/Clients/client2.svg"
          alt="client2"
          className="w-8 h-8 md:w-13 md:h-13 object-contain"
        />
        <img
          src="https://project-nexcent.vercel.app/Clients/client3.svg"
          alt="client3"
          className="w-8 h-8 md:w-13 md:h-13 object-contain"
        />
        <img
          src="https://project-nexcent.vercel.app/Clients/client4.svg"
          alt="client4"
          className="w-8 h-8 md:w-13 md:h-13 object-contain"
        />
        <img
          src="https://project-nexcent.vercel.app/Clients/client5.svg"
          alt="client5"
          className="w-8 h-8 md:w-13 md:h-13 object-contain"
        />
        <img
          src="https://project-nexcent.vercel.app/Clients/client6.svg"
          alt="client6"
          className="w-8 h-8 md:w-13 md:h-13 object-contain"
        />
        <img
          src="https://project-nexcent.vercel.app/Clients/client7.svg"
          alt="client7"
          className="w-8 h-8 md:w-13 md:h-13 object-contain"
        />
      </div>

      <div className="bg-white py-16 px-4 md:px-10 lg:px-20  text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Manage your entire community <br /> in a single system
        </h2>
        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Who is Nexcent suitable for?
        </p>

        <div className="mt-12 flex flex-col md:flex-row lg:gap-45 justify-center items-center gap-12">
          <div className="flex flex-col items-center max-w-xs">
            <img
              src="https://project-nexcent.vercel.app/Features/icon1.svg"
              alt="Membership"
              className="w-13 h-13 object-cover rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold lg:text-3xl md:text-2xl text-gray-800">
              Membership Organisations
            </h3>
          </div>

          <div className="flex flex-col items-center max-w-xs">
            <img
              src="https://project-nexcent.vercel.app/Features/icon2.svg"
              alt="National Associations"
              className="w-13 h-13 object-cover rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold lg:text-3xl md:text-2xl text-gray-800">
              National Associations
            </h3>
          </div>

          <div className="flex flex-col items-center max-w-xs">
            <img
              src="https://project-nexcent.vercel.app/Features/icon3.svg"
              alt="Clubs And Groups"
              className="w-13 h-13 object-cover rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold md:text-2xl lg:text-3xl text-gray-800">
              Clubs And Groups
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main1;
