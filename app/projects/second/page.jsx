"use client";
import React, { useState } from "react";
import Image from "next/image";
import gridPic from "../../images/15.jpg";
import gridPic2 from "../../images/9.jpg";
import gridPic6 from "../../images/16.jpg";
import gridPic7 from "../../images/17.jpg";
import gridPic8 from "../../images/20.jpg";
import gridPic9 from "../../images/7.jpg";
import gridPic4 from "../../images/7.jpg";
import FAQ from "../../../app/components/FAQ";
import FAQ2 from "@/app/components/FAQ2";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const page = () => {
  return (
    <div className="max-w-[1920px] mx-auto relative h-screen bg-[#494848] ">
      <Image
        priority={true}
        src={gridPic}
        fill
        className="object-cover  bg-center"
      />
      <div className="relative bg-black/80 max-w-[1920px] h-full flex flex-col justify-center items-center gap-4">
        <p className="text-base leading-relaxed text-transform: uppercase text-center">
          Project Info
        </p>
        <h1 className="font-bold text-6xl items-center text-center pb-4">
          Sneaker Head <br />
          Ecommerce Web App
        </h1>
        <button className="px-8 py-4 rounded-3xl ring-1 ring-white bg-white text-black hover:bg-[#eee]">
          Scroll Down
        </button>
      </div>
      {/* Project Info + Accordion */}
      <div className="max-w-[1920px] h-screen mx-auto px-4 py-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 gap-18  xl:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 py-8 sm:py-12 md:py-16 lg:py-24">
          <h2 className="text-5xl w-full font-bold">
            Project title that explains in short what was the project, type of
            project etc.
          </h2>
          <div className="w-full h-2/3  text-white">
            <FAQ2 />
          </div>
        </div>
        {/* Picture */}
        <div className="max-w-[1920px] h-screen relative mx-auto gap-18 py-8 sm:py-12 md:py-16  lg:py-24">
          <Image
            priority={true}
            src={gridPic6}
            fill
            className="object-cover max-w-full"
            alt="/"
          />
        </div>
        {/*Grid/Flex with 2 pictures */}
        <div className="max-w-full h-screen relative  gap-24 sm:py-12 md:py-16 lg:py-24">
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
        <div className="max-w-full h-screen mx-auto grid grid-cols md:grid-cols-2 gap-4 py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="relative sm:col-span-2 ">
            <Image
              priority={true}
              src={gridPic7}
              fill
              className="object-cover max-w-full"
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
        <div className="max-w-full h-screen mx-auto relative gap-4">
          <h2 className="text-5xl font-bold flex flex-col items-center justify-center h-[95%]">
            <Link href="/projects/first">Next Case</Link>
          </h2>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default page;
