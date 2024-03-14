import React from "react";
import Image from "next/image";
import gridPic from "../../images/12.jpg";

const page = () => {
  return (
    <div className="max-w-[1920px] h-[103%] mx-auto relative">
      <Image
        priority={true}
        src={gridPic}
        fill
        className="object-cover relative object-center"
        alt="/"
      />
      <div className="max-w-[1920px] h-[100%] mx-auto relative flex bg-black/50">
        <h1 className="font-bold text-6xl w-full flex justify-center items-center">
          Coming Soon
        </h1>
      </div>
    </div>
  );
};

export default page;
