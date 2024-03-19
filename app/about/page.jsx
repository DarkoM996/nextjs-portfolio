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
import { SiTailwindcss, SiAdobexd } from "react-icons/si";
import Link from "next/link";
import Footer from "@/app/components/Footer";

const page = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="h-[calc(100vh-6rem)]"
    >
      <div className="flex flex-col h-full lg:flex-row px-4 py-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 lg:py-4 max-w-[1920px] mx-auto xl:space-x-32 space-y-4">
        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-full flex flex-col items-center justify-center flex-wrap text-[#DEDCDC] gap-4">
          <div className="text-transform: uppercase lg:text-left">About Me</div>
          <div className="text-4xl md:text-6xl lg:text-7xl font-bold items-center break-normal lg:pb-4 text-center">
            Something About My Own Story
          </div>
          <div>
            <button className="px-8 py-4 rounded-3xl ring-1 ring-white bg-white text-black hover:bg-[#eee]">
              Scroll Down
            </button>
          </div>
        </div>
        {/* Image Container */}
        <div className="h-full lg:h-full lg:w-full relative">
          <Image
            priority
            src={aboutPicture}
            alt="About Picture"
            fill
            className="object-cover max-w-full"
          />
        </div>
      </div>
      {/* Short description */}
      <div className="max-w-[1920px] h-screen mx-auto px-4 py-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 gap-4 mb:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-8 place-items-top gap-4 w-full h-2/3">
          <h2 className="font-bold text-4xl col-span-4">
            I use my creativity and expertise to create timeless expressions and
            meaningful experiences for brands in a primarily digital world.
          </h2>
          <p className="col-span-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            rerum non laudantium repellendus, molestiae ut dolorem, facere id
            unde repudiandae ullam delectus consectetur optio. Maxime eius
            quaerat sint voluptatem vel.
          </p>
        </div>
        {/* Grid About Services */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 w-full h-fit gap-4 py-12 md:py-16 lg:py-24">
          <div className="font-bold text-4xl col-span-4 row-span-6">
            My core services and capabilities
          </div>
          <div className="col-span-4 gap-8 p-8 bg-black">
            <h4 className="font-bold text-2xl py-2">
              Digital design for services, products and platforms
            </h4>
            <p className="text-base text-[#eeee]">
              Extensive experience in creating everything digital. From
              marketing websites that inspire, to e-commerce that convinces and
              web apps that are truly beneficial. All while creating a unique
              and meaningful experience for the user
            </p>
          </div>
          <div className="col-span-4 p-8 bg-black">
            <h4 className="font-bold text-2xl py-2">
              Web Development for services, products and platforms
            </h4>
            <p className="text-base text-[#eeee]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quo
              recusandae quas! Cum quia rerum temporibus amet quod repellat
              dignissimos vitae voluptatibus a, sit sapiente dicta pariatur
              nobis iure ex!
            </p>
          </div>
          <div className="col-span-4 p-8 bg-black">
            <h4 className="font-bold text-2xl py-2">
              Visual identities and logos for a primarily digital world
            </h4>
            <p className="text-base text-[#eeee]">
              Not just timeless and memorable, but usable in todays digital
              world. By using my expertise as a digital designer, I make sure
              that a visual identity can be used throughout all digital
              touchpoints in an accessible and user-friendly way.
            </p>
          </div>
          <div className="col-span-4 p-8  bg-black">
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
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-16 w-full h-fit py-12 md:py-16 lg:py-24">
          <div className="font-bold text-4xl col-span-4 row-span-6">
            Technologies I use within my work
          </div>
          <div className="col-span-4 p-8 bg-black">
            <p className=" text-[#eeee] text-2xl">
              <DiHtml5 />
            </p>
          </div>
          <div className="col-span-4 p-8 bg-black">
            <p className="text-2xl text-[#eeee]">
              <DiCss3 />
            </p>
          </div>
          <div className="col-span-4 p-8 bg-black">
            <p className="text-2xl text-[#eeee]">
              <DiJsBadge />
            </p>
          </div>
          <div className="col-span-4 p-8 bg-black">
            <p className="text-2xl text-[#eeee]">
              <DiReact />
            </p>
          </div>
          <div className="col-span-4 p-8 bg-black">
            <p className="text-2xl text-[#eeee]">
              <SiTailwindcss />
            </p>
          </div>
          <div className="col-span-4 p-8 bg-black">
            <p className="text-2xl text-[#eeee]">
              <FaGithub />
            </p>
          </div>

          <div className="col-span-4 p-8 bg-black">
            <p className="text-2xl text-[#eeee]">
              <FaFigma />
            </p>
          </div>
          <div className="col-span-4 p-8 bg-black">
            <p className="text-2xl text-[#eeee]">
              <DiPhotoshop />
            </p>
          </div>
          <div className="col-span-4 p-8 bg-black">
            <p className="text-2xl text-[#eeee]">
              <DiIllustrator />
            </p>
          </div>
          <div className="col-span-4 p-8 bg-black">
            <p className="text-2xl text-[#eeee]">
              <SiAdobexd />
            </p>
          </div>
        </div>
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

// {/* Container */}
// <div className="flex flex-col h-full lg:flex-row px-4 py-4 sm:px-8 md:px-12 lg:px-20 lg: gap-24 xl:px-32 lg:py-4">
//   <div className="h-full lg:h-full lg:w-full relative ">
//   <Image src={aboutPic} alt="About Image" fill className=" object-cover" />
//   </div>
//   {/* Text Container */}
//   <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 gap-24">
//     {/* Small Heading */}
//     <p className="text-transform: uppercase pb-4 lg:text-left">About Me</p>
//     {/* H1 */}
//     <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold items-center break-normal lg:pb-4 text-left">Something about my story and beginnings</h1>
//     {/* Buttons */}
//     <div className="flex py-4">
//       <button className="px-8 py-4 rounded-3xl ring-1 ring-white bg-white text-black hover:bg-[#eee]">Scroll Down</button>

//     </div>
//   </div>
// </div>
