"use client";
import React, { useState } from "react";
import Image from "next/image";
import gridPic from "../../images/30.jpg";
import gridPic6 from "../../images/23.jpg";
import gridPic7 from "../../images/24.jpg";
import gridPic8 from "../../images/25.jpg";
import gridPic9 from "../../images/31.jpg";
import gridPic10 from "../../images/29.jpg";
import gridPic11 from "../../images/26.jpg";
import gridPic4 from "../../images/27.jpg";
import FAQ from "../../components/FAQ";
import FAQ2 from "@/app/components/FAQ2";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="max-w-screen-3xl mx-auto relative h-screen bg-[#494848] ">
      <Image
        priority={true}
        src={gridPic}
        fill
        className="object-cover w-full h-full  bg-center"
        alt="/"
      />
      <div className="relative bg-black/50 max-w-screen-3xl h-full flex flex-col justify-center items-center gap-4">
        <p className="text-base leading-relaxed text-transform: uppercase text-center text-[#DEDCDC]">
          Project Info
        </p>
        <h1 className="font-bold text-6xl items-center text-center pb-4">
          Furnico Furniture <br />
          Ecommerce Web App
        </h1>
        {/* This is how to have a scroll to section in React + NextJs */}
        <button
          onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}
          className="px-8 py-4 text-white flex flex-col justify-center items-center"
        >
          Scroll Down
          <motion.p
            initial={{ opacity: 0.2, y: 0 }}
            animate={{ opacity: 1, y: "10px" }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-xl"
          >
            <FaChevronDown />
          </motion.p>
        </button>
      </div>
      {/* Project Info + Accordion */}
      {/* style code is so I can have a scroll to work in React */}
      <div
        style={{ height: 1000 }}
        className="max-w-screen-3xl h-screen mx-auto px-4 py-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 gap-18  xl:py-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 py-8 sm:py-12 md:py-16 lg:py-24">
          <h2 className="text-5xl w-full font-bold">
            Furnico is a web app for an ecommerce fictional furniture brand
          </h2>
          <div className="w-full h-2/3  text-white">
            <FAQ />
          </div>
        </div>
        {/* Picture */}
        <div className="max-w-screen-3xl h-screen relative mx-auto gap-18 py-8 sm:py-12 md:py-16  lg:py-24">
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
              src={gridPic9}
              fill
              className="object-cover max-w-full"
              alt="/"
            />
          </div>

          <div className="relative">
            <Image
              priority={true}
              src={gridPic10}
              fill
              className="object-cover"
              alt="/"
            />
          </div>
          <div className="relative">
            <Image
              priority={true}
              src={gridPic11}
              fill
              className="object-cover"
              alt="/"
            />
          </div>
        </div>
        <div className="max-w-full h-screen mx-auto relative gap-4">
          <Image
            priority={true}
            src={gridPic4}
            fill
            className="object-cover max-w-full"
            alt="/"
          />
        </div>
        <div className="max-w-full h-[85%] mx-auto relative gap-4">
          <h2 className="text-5xl font-bold flex flex-col items-center justify-center h-[90%]">
            <Link
              href="/projects/sneakerhead"
              className="hover:underline hover:text-red-500"
            >
              Next Case
            </Link>
          </h2>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default page;
