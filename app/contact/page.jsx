"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import contactPic from "../images/10.png";
import { FaBehance, FaDribbble, FaGithub, FaLinkedinIn } from "react-icons/fa";

const page = () => {
  return (
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
            src={contactPic}
            alt="Contact Section Picture"
            fill
            className=" object-cover"
          />
        </div>
        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-full flex flex-col items-center justify-center flex-wrap">
          {/* small heading */}
          <p className="text-transform: uppercase lg:text-left">Contact</p>
          {/* H1 */}
          <h1 className="text-4xl md:text-6xl font-bold items-center break-normal mb:pb-4 text-center">
            Need a project? Get in touch now
          </h1>
          {/* Buttons */}
          <div className="flex gap-4 py-4">
            {/* Connects to email.. Will stand until I find a better solution */}
            <button
              onClick={() =>
                (window.location = "mailto:darko.mihajlovski96@gmail.com")
              }
              className="px-8 rounded-3xl ring-1 ring-white bg-white text-black hover:bg-[#eee]"
            >
              Email
            </button>
            <button className="px-8 py-4 rounded-3xl ring-1 ring-[#a59f9f] bg-black ">
              Phone
            </button>
          </div>
          {/* Social Media */}
          <div className="flex gap-4">
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
};

export default page;
