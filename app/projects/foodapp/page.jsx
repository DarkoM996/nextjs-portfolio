"use client";
import React from "react";
import Image from "next/image";
import gridPic from "../../images/4.jpg";

const page = () => {
  return (
    <div className="max-w-[1920px] h-screen mx-auto relative overflow-hidden">
      <Image
        priority={true}
        src={gridPic}
        fill={true}
        sizes="(max-width: 768px) 100vw, 33vw"
        // sizes="100vw"
        // style={{ objectFit: "cover" }}
        className="object-cover absolute object-center"
        alt="/"
      />
      <div className="relative bg-black/50 max-w-[1920px] h-full flex flex-col justify-center items-center gap-4">
        <p className="text-base leading-relaxed text-transform: uppercase text-center text-[#DEDCDC]">
          The Tomato
        </p>
        <h1 className="font-bold text-6xl items-center text-center pb-4">
          Work In <br />
          Progress
        </h1>
        {/* This is how to have a scroll to section in React + NextJs */}
        <button className="px-8 py-4 rounded-3xl ring-1 ring-white bg-white text-black hover:bg-[#eee]">
          Coming Soon
        </button>
      </div>
    </div>
  );
};

export default page;
