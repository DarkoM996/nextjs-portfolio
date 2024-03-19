"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import aboutPicture from "../images/4.jpg";

const page = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="h-[calc(100vh-6rem)]"
    >
      <div className="flex flex-col h-full lg:flex-row px-4 py-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 lg:py-24 max-w-[1920px] mx-auto xl:space-x-32 space-y-4">
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
            className="object-cover"
          />
        </div>
      </div>
      {/* Short description */}
      <div className="max-w-[1920px] h-screen mx-auto px-4 py-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 gap-4 mb:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 place-items-top gap-4 w-full h-2/3">
          <h2 className="font-bold text-4xl col-span-4">
            Some heading about what I do as a developer and designer for brands
            and other companies
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            rerum non laudantium repellendus, molestiae ut dolorem, facere id
            unde repudiandae ullam delectus consectetur optio. Maxime eius
            quaerat sint voluptatem vel.
          </p>
        </div>
        {/* Grid About Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 w-full h-full">
          <div className="font-bold text-4xl col-span-4 row-span-6">
            My Services
          </div>
          <div className="col-span-4 gap-8 p-8 bg-black">
            <h4 className="font-bold text-2xl py-2">Some Heading</h4>
            <p className="text-base text-[#eeee]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quo
              recusandae quas! Cum quia rerum temporibus amet quod repellat
              dignissimos vitae voluptatibus a, sit sapiente dicta pariatur
              nobis iure ex!
            </p>
          </div>
          <div className="col-span-4 p-8 bg-black">
            <h4 className="font-bold text-2xl py-2">Some Heading</h4>
            <p className="text-base text-[#eeee]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quo
              recusandae quas! Cum quia rerum temporibus amet quod repellat
              dignissimos vitae voluptatibus a, sit sapiente dicta pariatur
              nobis iure ex!
            </p>
          </div>
          <div className="col-span-4 p-8 bg-black">
            <h4 className="font-bold text-2xl py-2">Some Heading</h4>
            <p className="text-base text-[#eeee]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quo
              recusandae quas! Cum quia rerum temporibus amet quod repellat
              dignissimos vitae voluptatibus a, sit sapiente dicta pariatur
              nobis iure ex!
            </p>
          </div>
          <div className="col-span-4 px-8 py-4 bg-black">
            <h4 className="font-bold text-2xl py-2">Some Heading</h4>
            <p className="text-base text-[#eeee]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quo
              recusandae quas! Cum quia rerum temporibus amet quod repellat
              dignissimos vitae voluptatibus a, sit sapiente dicta pariatur
              nobis iure ex!
            </p>
          </div>
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
