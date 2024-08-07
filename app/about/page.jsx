"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import aboutPicture from "../images/4.jpg";
import { FaBehance, FaDribbble, FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  DiHtml5,
  DiCss3,
  DiPhotoshop,
  DiIllustrator,
  DiReact,
} from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiFigma } from "react-icons/di";
import { FaFigma } from "react-icons/fa";
import {
  SiTailwindcss,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiReact,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import { FaChevronDown } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const page = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="h-[calc(100vh-6rem)]"
    >
      <div className="flex flex-col h-full lg:flex-row px-4 py-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 lg:py-4 max-w-screen-3xl mx-auto xl:space-x-32 space-y-4">
        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-full flex flex-col items-center justify-center flex-wrap text-[#DEDCDC] gap-4">
          <div className="text-transform: uppercase lg:text-left">About Me</div>
          <div className="text-4xl md:text-6xl lg:text-7xl font-bold items-center break-normal lg:pb-4 text-center">
            Something About My Own Story
          </div>
          <div>
            <button
              onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}
              className="px-8 py-4  text-white flex flex-col gap-2 justify-center items-center"
            >
              Scroll Down
              <motion.p
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="text-xl"
              >
                <FaChevronDown />
              </motion.p>
            </button>
          </div>
        </div>
        {/* Image Container */}
        <div className="h-full lg:h-full lg:w-full relative">
          <Image
            priority
            src={aboutPicture}
            alt="About Picture"
            width={1000}
            height={1000}
            className="object-cover w-full h-full bg-center"
          />
        </div>
      </div>
      {/* Short description */}
      <div
        style={{ height: 1000 }}
        className=" max-w-screen-3xl h-screen mx-auto px-4 py-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 gap-4 mb:py-12 lg:py-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-8 place-items-top  gap-16 w-full h-fit py-12 md:py-16 lg:py-24">
          <h2 className="font-bold text-4xl col-span-4">
            I use my creativity and knowledge to create timeless expressions and
            meaningful experiences for brands in a primarily digital world.
          </h2>
          <p className="col-span-4 text-[#eeee]">
            I am Darko Mihajlovski, a creative developer and designer based out
            of Kumanovo, North Macedonia. I help companies and brands with
            specific solutions while focusing on taking my work to the next
            level with quality as the main goal.
          </p>
        </div>
        {/* Grid About Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 w-full h-fit gap-4 md:gap-8 py-12 md:py-16 lg:py-24">
          <div className="font-bold text-4xl text-balance col-span-4 row-span-6">
            My core services and capabilities
          </div>
          <div className="col-span-4 gap-8">
            <h4 className="font-bold text-2xl py-2">
              Digital design for services, products and platforms
            </h4>
            <p className="text-base text-[#eeee]">
              From marketing websites that inspire, to e-commerce that convinces
              and web apps that are truly beneficial. All while focusing on
              clean and minimalistic design to deliver use friendly designs for
              the web.
            </p>
          </div>
          <div className="col-span-4">
            <h4 className="font-bold text-2xl py-2">
              Web Development for services, products and platforms
            </h4>
            <p className="text-base text-[#eeee]">
              I build websites and web apps that focus on clean and minimalistic
              design. My focus is on clean and minimalistic design with focus on
              well placed animations, transitions as well as interaction.
            </p>
          </div>
          <div className="col-span-4">
            <h4 className="font-bold text-2xl py-2">
              Visual identities for primarily digital world and brands
            </h4>
            <p className="text-base text-[#eeee]">
              With my knowledge as a digital designer, I make sure that a visual
              identity can be used throughout all digital touchpoints in an
              accessible and user-friendly way.
            </p>
          </div>
          <div className="col-span-4">
            <h4 className="font-bold text-2xl py-2">
              The full package in designing for the web in general
            </h4>
            <p className="text-base text-[#eeee]">
              I build scalable websites from scratch that fit seamlessly with
              design. My focus is on clean and minimalistic design with
              carefully placed animations as well as transitions.
            </p>
          </div>
        </div>
        {/* Technologies used? */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 w-full h-fit py-12 md:py-16 lg:py-24">
          <div className="font-bold text-4xl col-span-4 row-span-6">
            Technologies I use within my work
          </div>
          <div className="col-span-4 p-8 bg-black flex items-center gap-2 hover:bg-white group hover:text-black">
            <p className="text-[#eeee] text-3xl group-hover:text-black">
              <DiHtml5 />
            </p>
            <p className=" text-[#eeee] text-xl group-hover:text-black ">
              Html
            </p>
          </div>
          <div className="col-span-4 p-8 bg-black flex items-center gap-2  hover:bg-white group hover:text-black">
            <p className="text-3xl text-[#eeee] group-hover:text-black">
              <DiCss3 />
            </p>
            <p className=" text-[#eeee] text-xl group-hover:text-black">Css</p>
          </div>
          <div className="col-span-4 p-8 bg-black flex items-center gap-2 hover:bg-white group hover:text-black">
            <p className="text-3xl text-[#eeee] group-hover:text-black">
              <DiJsBadge />
            </p>
            <p className=" text-[#eeee] text-xl group-hover:text-black">
              Javascript
            </p>
          </div>
          <div className="col-span-4 p-8 bg-black flex items-center gap-2 hover:bg-white group hover:text-black">
            <p className="text-3xl text-[#eeee] group-hover:text-black">
              <DiReact />
            </p>
            <p className=" text-[#eeee] text-xl group-hover:text-black">
              React
            </p>
          </div>
          <div className="col-span-4 p-8 bg-black flex items-center gap-2 hover:bg-white  group hover:text-black">
            <p className="text-2xl text-[#eeee] group-hover:text-black">
              <SiTailwindcss />
            </p>
            <p className=" text-[#eeee] text-xl group-hover:text-black">
              Tailwind Css
            </p>
          </div>
          <div className="col-span-4 p-8 bg-black flex items-center gap-2 hover:bg-white group hover:text-black">
            <p className="text-2xl text-[#eeee] group-hover:text-black">
              <TbBrandFramerMotion />
            </p>
            <p className=" text-[#eeee] text-xl group-hover:text-black">
              Framer Motion
            </p>
          </div>
          <div className="col-span-4 p-8 bg-black flex items-center gap-2 hover:bg-white group hover:text-black">
            <p className="text-2xl text-[#eeee] group-hover:text-black">
              <FaGithub />
            </p>
            <p className=" text-[#eeee] text-xl group-hover:text-black">
              Github
            </p>
          </div>
          <div className="col-span-4 p-8 bg-black flex items-center gap-2 hover:bg-white group hover:text-black">
            <p className="text-2xl text-[#eeee] group-hover:text-black">
              <SiNextdotjs />
            </p>
            <p className=" text-[#eeee] text-xl group-hover:text-black">
              Next.js
            </p>
          </div>

          <div className="col-span-4 p-8 bg-black flex items-center gap-2 hover:bg-white group hover:text-black">
            <p className="text-2xl text-[#eeee] group-hover:text-black">
              <FaFigma />
            </p>
            <p className=" text-[#eeee] text-xl group-hover:text-black">
              Figma
            </p>
          </div>
          <div className="col-span-4 p-8 bg-black flex items-center gap-2 hover:bg-white group hover:text-black">
            <p className="text-2xl text-[#eeee] group-hover:text-black">
              <SiAdobephotoshop />
            </p>
            <p className=" text-[#eeee] text-xl group-hover:text-black">
              Photoshop
            </p>
          </div>
          <div className="col-span-4 p-8 bg-black flex items-center gap-2 hover:bg-white group hover:text-black">
            <p className="text-2xl text-[#eeee] group-hover:text-black">
              <SiAdobeillustrator />
            </p>
            <p className=" text-[#eeee] text-xl group-hover:text-black">
              Illustrator
            </p>
          </div>
        </div>
        {/* Footer Section */}
        <div className="max-w-full h-[85%] mx-auto relative gap-4">
          <h2 className="text-5xl font-bold flex flex-col items-center justify-center h-[90%]">
            <Link
              href="/contact"
              className="hover:underline hover:text-red-500"
            >
              Contact Me
            </Link>
          </h2>
          <Footer />
        </div>
      </div>
    </motion.div>
  );
};

export default page;

// Already functional and written code about About Page. I'm going to try a different style here up top

{
  /* Technologies used? */
}
{
  /* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 w-full h-fit py-12 md:py-16 lg:py-24">
  <div className="font-bold text-4xl col-span-4 row-span-6">
    Technologies I use within my work
  </div>
  <div className="col-span-4 p-8 bg-black flex items-center gap-2 hover:bg-white group hover:text-black">
    <p className="text-[#eeee] text-3xl group-hover:text-black">
      <DiHtml5 />
    </p>
    <p className=" text-[#eeee] text-xl group-hover:text-black ">Html</p>
  </div>
  <div className="col-span-4 p-8 bg-black flex items-center gap-2  hover:bg-white group hover:text-black">
    <p className="text-3xl text-[#eeee] group-hover:text-black">
      <DiCss3 />
    </p>
    <p className=" text-[#eeee] text-xl group-hover:text-black">Css</p>
  </div>
  <div className="col-span-4 p-8 bg-black flex items-center gap-2 hover:bg-white group hover:text-black">
    <p className="text-3xl text-[#eeee] group-hover:text-black">
      <DiJsBadge />
    </p>
    <p className=" text-[#eeee] text-xl group-hover:text-black">Javascript</p>
  </div>
  <div className="col-span-4 p-8 bg-black flex items-center gap-2 hover:bg-white group hover:text-black">
    <p className="text-3xl text-[#eeee] group-hover:text-black">
      <DiReact />
    </p>
    <p className=" text-[#eeee] text-xl group-hover:text-black">React</p>
  </div>
  <div className="col-span-4 p-8 bg-black flex items-center gap-2 hover:bg-white  group hover:text-black">
    <p className="text-2xl text-[#eeee] group-hover:text-black">
      <SiTailwindcss />
    </p>
    <p className=" text-[#eeee] text-xl group-hover:text-black">Tailwind Css</p>
  </div>
  <div className="col-span-4 p-8 bg-black flex items-center gap-2 hover:bg-white group hover:text-black">
    <p className="text-2xl text-[#eeee] group-hover:text-black">
      <TbBrandFramerMotion />
    </p>
    <p className=" text-[#eeee] text-xl group-hover:text-black">
      Framer Motion
    </p>
  </div>
  <div className="col-span-4 p-8 bg-black flex items-center gap-2 hover:bg-white group hover:text-black">
    <p className="text-2xl text-[#eeee] group-hover:text-black">
      <FaGithub />
    </p>
    <p className=" text-[#eeee] text-xl group-hover:text-black">Github</p>
  </div>
  <div className="col-span-4 p-8 bg-black flex items-center gap-2 hover:bg-white group hover:text-black">
    <p className="text-2xl text-[#eeee] group-hover:text-black">
      <SiNextdotjs />
    </p>
    <p className=" text-[#eeee] text-xl group-hover:text-black">Next.js</p>
  </div>

  <div className="col-span-4 p-8 bg-black flex items-center gap-2 hover:bg-white group hover:text-black">
    <p className="text-2xl text-[#eeee] group-hover:text-black">
      <FaFigma />
    </p>
    <p className=" text-[#eeee] text-xl group-hover:text-black">Figma</p>
  </div>
  <div className="col-span-4 p-8 bg-black flex items-center gap-2 hover:bg-white group hover:text-black">
    <p className="text-2xl text-[#eeee] group-hover:text-black">
      <SiAdobephotoshop />
    </p>
    <p className=" text-[#eeee] text-xl group-hover:text-black">Photoshop</p>
  </div>
  <div className="col-span-4 p-8 bg-black flex items-center gap-2 hover:bg-white group hover:text-black">
    <p className="text-2xl text-[#eeee] group-hover:text-black">
      <SiAdobeillustrator />
    </p>
    <p className=" text-[#eeee] text-xl group-hover:text-black">Illustrator</p>
  </div>
</div>; */
}
