"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import heroPic from "/app/images/8.jpg";
import { FaBehance, FaDribbble, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  return (
    // Motion div is being used so I can animate the homepage here and the elements inside it

    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="h-[calc(100vh-6rem)]"
    >
      <div className="flex flex-col h-full lg:flex-row px-4 py-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 lg:py-4 max-w-[1920px] mx-auto xl:space-x-20">
        {/* Image Container */}
        <div className="h-full lg:h-full lg:w-full relative">
          <Image
            priority
            src={heroPic}
            alt="Contact Section Picture"
            fill
            className=" object-cover"
          />
        </div>
        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-full flex flex-col items-center justify-center flex-wrap">
          {/* small heading */}
          <p className="text-transform: uppercase lg:text-left">
            Darko Mihajlovski
          </p>
          {/* H1 */}
          <h1 className="text-4xl md:text-6xl font-bold items-center break-normal lg:pb-4 text-center">
            Freelance Designer and Developer
          </h1>
          {/* Buttons */}
          <div className="flex gap-4 py-4 flex-wrap">
            <button className="px-6 py-4 md:px-8 md:py-4 rounded-3xl ring-1 ring-white bg-white text-black hover:bg-[#eee]">
              See Projects
            </button>
            <button className="px-8 py-4 rounded-3xl ring-1 ring-[#a59f9f] bg-black ">
              Download CV
            </button>
          </div>
          {/* Social Media Links */}
          <div className="flex flex-wrap justify-start items-center md:flex md:flex-row gap-4">
            <div className="p-4 text-2xl">
              <p>
                <FaGithub />
              </p>
            </div>
            <div className="p-4 text-2xl">
              <p>
                <FaDribbble />
              </p>
            </div>
            <div className="p-4 text-2xl">
              <p>
                <FaBehance />
              </p>
            </div>
            <div className="p-4 text-2xl">
              <p>
                <FaLinkedinIn />
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
