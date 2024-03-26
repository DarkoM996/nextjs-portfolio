import React from "react";
import { FaBehance, FaDribbble, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1920px] py-8 border-t border-[#1f1e1e]">
      <div className="flex justify-between flex-col md:flex-row items-center gap-8 ">
        <div className="flex gap-8 justify-center ">
          <a href="https://www.behance.net/darkomihajlo">
            <FaBehance />
          </a>
          <a href="https://dribbble.com/DarkoM_0-10">
            <FaDribbble />
          </a>
          <a href="https://github.com/DarkoM996/nextjs-portfolio">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/darko-mihajlovski-1bb4701b7">
            <FaLinkedinIn />
          </a>
        </div>
        <p>Developer and Designer</p>
        <p>darko.mihajlovski96@gmail.com</p>
        <p>&copy; 2024</p>
      </div>
    </div>
  );
};

export default Footer;

// <p>©</p
