"use client";
import React, { useState } from "react";
import Image from "next/image";
import gridPic from "../../images/8.jpg";
import gridPic2 from "../../images/9.jpg";
import gridPic6 from "../../images/6.jpg";
import gridPic7 from "../../images/5.jpg";
import gridPic8 from "../../images/6.jpg";
import gridPic9 from "../../images/7.jpg";
import gridPic4 from "../../images/7.jpg";
import FAQ from "../../../app/components/FAQ";
import FAQ2 from "@/app/components/FAQ2";
import Footer from "@/app/components/Footer";

const page = () => {
  return (
    <div className="max-w-[1920px] mx-auto relative h-screen bg-[#494848] ">
      <Image
        priority={true}
        src={gridPic}
        fill
        className="object-cover  bg-center"
      />
      <div className="relative bg-black/40 max-w-[1920px] h-full flex flex-col justify-center items-center gap-6">
        <p className="text-base leading-relaxed text-transform: uppercase">
          Project Name
        </p>
        <h1 className="font-bold text-6xl items-center">
          Furnico-Furniture <br /> Ecommerce Web App
        </h1>
        <button className="px-8 py-4 rounded-3xl ring-1 ring-white bg-white text-black hover:bg-[#eee]">
          Scroll Down
        </button>
      </div>
      {/* Project Info + Accordion */}
      <div className="max-w-[1920px] mx-auto px-4 py-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 gap-18 xl:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 xl:gap-48">
          <h2 className="text-5xl w-full font-bold">
            Project title that explains in short what was the project, type of
            project etc.
          </h2>
          <div className="w-full h-2/3  text-white">
            <FAQ2 />
          </div>
        </div>
        {/* Picture */}
        <div className="max-w-[1920px] h-screen relative mx-auto px-4 py-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 gap-18 xl:py-24 bg-[#ccc] gap-48">
          <Image
            priority={true}
            src={gridPic6}
            fill
            className="object-cover max-w-full"
            alt="/"
          />
        </div>
      </div>
      {/* Picture with padding from side */}
      <div className=" max-w-[1920px] h-screen mx-auto relative p-4 sm:p-8 md:py-16 gap-18 xl:py-24 gap-32">
        <Image
          priority={true}
          src={gridPic2}
          fill
          className="object-cover max-w-full"
          alt="/"
        />
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
            src={gridPic9}
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
          src={gridPic7}
          fill
          className="object-cover max-w-full"
          alt="/"
        />
      </div>
      <div className="max-w-[1920px] h-screen mx-auto relative gap-4 px-4 py-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 xl:py-24">
        <Footer />
      </div>
    </div>
  );
};

export default page;
