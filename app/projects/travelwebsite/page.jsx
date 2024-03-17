import React from "react";
import Image from "next/image";
import gridPic from "../../images/12.jpg";

const page = () => {
  return (
    <div className="max-w-[1920px] h-screen mx-auto relative">
      <Image
        priority={true}
        src={gridPic}
        fill
        className="object-cover relative object-center"
        alt="/"
      />
      <div className="max-w-[1920px] h-[100%] mx-auto relative flex bg-black/50">
        <h1 className="font-bold text-4xl md:text-6xl w-full flex flex-col justify-center items-center text-center">
          Coming <br /> Soon
        </h1>
      </div>
    </div>
  );
};

export default page;
