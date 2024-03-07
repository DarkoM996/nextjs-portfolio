"use client";
import React, { useState } from "react";
import Image from "next/image";
import gridPic from "../../images/2.jpg";
import gridPic2 from "../../images/6.jpg";
import gridPic4 from "../../images/8.jpg";
import gridPic5 from "../../images/3.png";
import gridPic6 from "../../images/4.jpg";
import gridPic7 from "../../images/5.jpg";
import gridPic8 from "../../images/6.jpg";

import FAQ from "@/app/components/FAQ";

const page = () => {
  return (
    <div className="max-w-[1920px] mx-auto h-full">
      <div className="max-w-full h-[calc(100vh-4.4rem)] relative overflow-hidden overflow-x-hidden">
        <Image
          priority={true}
          src={gridPic}
          fill
          className="object-cover max-w-full"
          alt="/"
        />

        <div className="h-screen w-full flex flex-col items-center justify-center flex-wrap bg-black/40 absolute gap-4">
          {/* small heading */}
          <p className="text-transform: uppercase lg:text-center">
            Project Name
          </p>
          <h1 className=" text-4xl md:text-6xl lg:text-7xl font-bold items-center break-normal lg:pb-4 text-left">
            Coffee Bar <br /> Landing Page
          </h1>
          <div className="flex gap-4">
            <button className="px-8 py-4 rounded-full ring-1 ring-white bg-white text-black hover:bg-[#eee]">
              Scroll Down
            </button>
          </div>
        </div>
      </div>
      {/* Project Info Section, About + Dropdown menu */}
      <div className="max-w-[1920px] mx-auto px-4 py-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 gap-18 xl:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          <h2 className="text-5xl w-full font-bold">
            Project title that explains in short what was the project, type of
            project etc.
          </h2>
          <div className="w-full h-2/3  text-white">
            <FAQ />
          </div>
        </div>
      </div>
      {/* Huge Picture here */}
      <div className="max-w-[1920px] h-screen relative mx-auto px-4 py-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 gap-18 xl:py-24 bg-[#ccc]">
        <Image
          priority={true}
          src={gridPic6}
          fill
          className="object-cover max-w-full"
          alt="/"
        />
      </div>
      {/* Picture with padding from side */}
      <div className=" max-w-[1920px] h-screen mx-auto relative p-4 sm:p-8 md:py-16 gap-18 xl:py-24 gap-32">
        <Image
          priority={true}
          src={gridPic5}
          fill
          className="object-cover max-w-full"
          alt="/"
        />
      </div>
      {/*Grid/Flex with 2 pictures */}
      <div className="max-w-[1920px] h-screen relative mx-auto gap-24 px-4 py-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 xl:py-24">
        <div className="grid grid-cols md:grid-cols-2 h-full gap-4">
          <div className="relative">
            <Image
              priority={true}
              src={gridPic7}
              fill
              className="object-cover"
              alt="/"
            />
          </div>

          <div className="relative">
            <Image
              priority={true}
              src={gridPic8}
              fill
              className="object-cover"
              alt="/"
            />
          </div>
        </div>
      </div>
      {/*Grid/Flex with 3 pictures */}
      <div className="max-w-[1920px] h-screen mx-auto grid grid-cols md:grid-cols-2 gap-4 px-4 py-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 xl:py-24">
        <div className="relative col-span-2 ">
          <Image
            priority={true}
            src={gridPic7}
            fill
            className="object-cover"
            alt="/"
          />
        </div>

        <div className="relative">
          <Image
            priority={true}
            src={gridPic8}
            fill
            className="object-cover"
            alt="/"
          />
        </div>
        <div className="relative">
          <Image
            priority={true}
            src={gridPic8}
            fill
            className="object-cover"
            alt="/"
          />
        </div>
      </div>
      {/*Huge picture with padding on the side within a container */}
      <div className="max-w-[1920px] h-screen mx-auto relative gap-4 px-4 py-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 xl:py-24">
        <Image
          priority={true}
          src={gridPic4}
          fill
          className="object-cover max-w-full"
          alt="/"
        />
      </div>
    </div>
  );
};

export default page;

//

// <div className="max-w-[1920px] mx-auto h-[calc(100vh-6rem)]">
// <div className="max-w-full h-[calc(100vh-4.4rem)] relative overflow-hidden overflow-x-hidden">
//   <Image
//     priority={true}
//     src={gridPic}
//     fill
//     className="object-cover max-w-full"
//     alt="/"
//   />

//   {/* <div className="w-full h-screen bg-black/40 absolute">
//     <h1 className="text-7xl font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
//       Coffee Bar
//     </h1>
//   </div> */}

//   <div className="h-full w-full flex flex-col items-center justify-center flex-wrap bg-black/40 absolute gap-4">
//     {/* small heading */}
//     <p className="text-transform: uppercase lg:text-center">
//       Project Name
//     </p>
//     <h1 className=" text-4xl md:text-6xl lg:text-7xl font-bold items-center break-normal lg:pb-4 text-left">
//       Coffee Bar <br /> Landing Page
//     </h1>
//     <div className="flex gap-4">
//       <button className="px-8 py-4 rounded-full ring-1 ring-white bg-white text-black hover:bg-[#eee]">
//         Scroll Down
//       </button>
//     </div>
//   </div>
// </div>
// {/* Project Info Section, About + Dropdown menu */}
// <div className="grid grid-cols-2  px-4 py-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 max-w-[1920px] mx-auto gap-12 xl:py-24">
//   <h2 className="text-5xl w-full font-bold">
//     Project title that explains in short what was the project, type of
//     project etc.
//   </h2>
//   <div className=" bg-white p-4 rounded-xl">
//     <button className="flex justify-between w-full ">
//       <span className="text-black text-2xl">This is the title</span>
//       <span className="text-black">+</span>
//     </button>
//     <div
//       className={`grid overflow-hidden transitional-all duration-300 ease-in-out ${
//         accordionOpen
//           ? "grid-rows-1 opacity-100"
//           : "grid-rows-0 opacity-0"
//       }`}
//     >
//       <div className="text-black">This is the answer</div>
//     </div>
//   </div>
// </div>
// </div>
