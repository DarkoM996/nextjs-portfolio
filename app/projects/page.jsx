"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import gridPic from "../images/27.jpg";
import secondGridPic from "../images/19.jpg";
import thirdGridPic from "../images/2.jpg";
import fourthGridPic from "../images/travel-landing-page-mockup-1.4.jpg";
import fifthGridPic from "../images/4.jpg";
import sixthGridPic from "../images/3.png";
import ProjectItem from "../components/ProjectItem";

// sm:px-8 md:px-12 lg:px-20 xl:px-32 max-w-[1920px] mx-auto lg:h-full

const page = () => {
  return (
    <div className="h-full px-4 py-4 max-w-screen-3xl mx-auto lg:h-full sm:px-8">
      <div className=" grid md:grid-cols-2 xl:grid-cols-3 h-full gap-4">
        <ProjectItem
          title="Furniture Web App"
          backgroundImg={gridPic}
          projectUrl="/projects/furniico"
        />
        <ProjectItem
          title="Sneakers Web App"
          backgroundImg={secondGridPic}
          projectUrl="/projects/sneakerhead"
        />
        <ProjectItem
          title="Travel Website"
          backgroundImg={fourthGridPic}
          projectUrl="/projects/travelwebsite"
        />
        <ProjectItem
          title="Coffee Bar Website"
          backgroundImg={thirdGridPic}
          projectUrl="/projects/coffeebar"
        />
        <ProjectItem
          title="Food Web App"
          backgroundImg={fifthGridPic}
          projectUrl="/projects/foodapp"
        />
        <ProjectItem
          title="Construction Website"
          backgroundImg={sixthGridPic}
          projectUrl="/projects/cofreelance"
        />
      </div>
    </div>
  );
};

export default page;
