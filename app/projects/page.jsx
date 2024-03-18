"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import gridPic from "../images/27.jpg";
import secondGridPic from "../images/19.jpg";
import thirdGridPic from "../images/2.jpg";
import fourthGridPic from "../images/12.jpg";
import fifthGridPic from "../images/4.jpg";
import sixthGridPic from "../images/3.png";
import ProjectItem from "../components/ProjectItem";

// sm:px-8 md:px-12 lg:px-20 xl:px-32 max-w-[1920px] mx-auto lg:h-full

const page = () => {
  return (
    <div className="h-full px-4 py-4 max-w-[1920px] mx-auto lg:h-full sm:px-8">
      <div className=" grid md:grid-cols-2 xl:grid-cols-3 h-full gap-4">
        <ProjectItem
          title="Furniture Web App"
          backgroundImg={gridPic}
          projectUrl="/projects/furnico"
        />
        <ProjectItem
          title="Sneakers Web App"
          backgroundImg={secondGridPic}
          projectUrl="/projects/sneakerhead"
        />
        <ProjectItem
          title="Coffee Bar Website"
          backgroundImg={thirdGridPic}
          projectUrl="/projects/coffeebar"
        />
        <ProjectItem
          title="Travel Website"
          backgroundImg={fourthGridPic}
          projectUrl="/projects/travelwebsite"
        />
        <ProjectItem
          title="Food Web App"
          backgroundImg={fifthGridPic}
          projectUrl="/projects/foodapp"
        />
        <ProjectItem
          title="Construction Website"
          backgroundImg={sixthGridPic}
          projectUrl="/cofreelance"
        />
      </div>
    </div>
  );
};

export default page;

// <div className="h-full grid grid-cols  md:grid-cols-2 xl:grid-cols-3 gap-4 px-4 py-4 sm:px-8 md:px-12 lg:px-20 xl:px-32  max-w-[1920px] mx-auto">
// <div className=" h-full w-full relative cursor-pointer hover:bg-black">
// <Image priority src={gridPic} alt="Grid Picture 1" width={300} className="object-cover h-full w-full cursor-pointer overflow-hidden" />
//  <div className="flex absolute justify-center  bottom-0 left-0 right-0 top-0 items-center">
//   <h3 className="text-4xl justify-center items-center">Project Name</h3>
//  </div>
// </div>
// <Image priority src={secondGridPic} alt="Grid Picture 2" width={300} className="object-cover h-full w-full" />
// <Image priority src={thirdGridPic} alt="Grid Picture 3" width={300} className="object-cover h-full w-full" />
// <Image priority src={fourthGridPic} alt="Grid Picture 4" width={300} className="object-cover h-full w-full" />
// <Image priority src={fifthGridPic} alt="Grid Picture 5" width={300} className="object-cover h-full w-full" />
// <Image priority src={sixthGridPic} alt="Grid Picture 6" width={300} className="object-cover h-full w-full" />

// </div>
