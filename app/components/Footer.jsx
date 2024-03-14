import React from "react";
import { FaBehance, FaDribbble, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1920px] py-8 border-t border-[#1f1e1e]">
      <div className="flex justify-between flex-col md:flex-row items-center gap-8 ">
        <div className="flex gap-8 justify-center ">
          <FaBehance /> <FaDribbble /> <FaGithub /> <FaLinkedinIn />
        </div>
        <p>Developer and Designer</p>
        <p>darko.mihajlovski@gmail.com</p>
        <p>
          <p>©</p>2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
