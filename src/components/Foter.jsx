import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-black pt-5 px-5 md:px-10 -mt-25 overflow-x-hidden">
      <section className="md:flex md:justify-between items-center md:py-5">
        <div className="text-white pt-5 md:pt-0">
          <p className="text-[1.7rem] font-semibold md:hidden">
            I am available for free lancing
          </p>
          <p className="text-[1.7rem] font-semibold md:text-[2.3rem] hidden md:block">
            I am available for
            <br /> freelancing.
          </p>
        </div>

        <div className="text-white pt-5 md:pt-0">
          <p className="text-[1.1rem] text-blue-500 md:text-[1.2rem] hover:cursor-pointer">
            muhammadahmadfridi71al@gmail.com
          </p>
          <p className="text-[1.1rem] md:text-[1.2rem] hover:cursor-pointer">
            +92 3298708298
          </p>
        </div>
      </section>

      <div className="border-t border-t-white mt-10"></div>

      <div className="text-white bg-black py-5 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        <ul className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-10">
          <Link
            to="/"
            className="text-[1.1rem] font-semibold hover:cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/skills"
            className="text-[1.1rem] font-semibold hover:cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className="text-[1.1rem] font-semibold hover:cursor-pointer"
          >
            Project View
          </Link>
          <Link
            to="/about"
            className="text-[1.1rem] font-semibold hover:cursor-pointer"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-[1.1rem] font-semibold hover:cursor-pointer"
          >
            Get in Touch
          </Link>
        </ul>

        <ul className="flex justify-center md:justify-end gap-5">
          <a href="https://github.com/Ahmad-WebOfficial" target="_blank">
            <FaGithub className="text-[1.3rem] md:text-[1.4rem]" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-ahmad-fridi-b4780035a/"
            target="_blank "
          >
            <FaLinkedinIn className="text-[1.3rem] md:text-[1.4rem]" />
          </a>
        </ul>
      </div>

      <div className="border-t border-t-white"></div>

      <p className="text-center text-white py-7">
        © 2025 Muhammad Ahmad Fridi | Web Developer
      </p>
    </section>
  );
};

export default Footer;
