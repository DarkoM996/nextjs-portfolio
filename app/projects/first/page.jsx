import React from "react";
import Image from "next/image";
import gridPic from "../../images/5.jpg";

const page = () => {
  return (
    <div>
      <div className="w-full h-screen relative overflow-hidden overflow-x-hidden">
        <Image
          priority={true}
          src={gridPic}
          fill
          className=" object-cover"
          alt="/"
        />

        {/* <div className="w-full h-screen bg-black/40 absolute">
          <h1 className="text-7xl font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            Coffee Bar
          </h1>
        </div> */}

        <div className="h-full w-full flex flex-col items-center justify-center flex-wrap bg-black/40 absolute gap-4">
          {/* small heading */}
          <p className="text-transform: uppercase lg:text-center">
            Project Name
          </p>
          <h1 className=" text-4xl md:text-6xl lg:text-7xl font-bold items-center break-normal lg:pb-4 text-left">
            Furnico-Furniture <br /> Ecommerce Web App
          </h1>
          <div className="flex gap-4">
            <button className="px-8 py-4 rounded-3xl ring-1 ring-white bg-white text-black hover:bg-[#eee]">
              Scroll Down
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
