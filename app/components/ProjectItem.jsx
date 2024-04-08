import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full  group hover:bg-black/50">
      <Image
        className=" group-hover:opacity-30 h-full w-full object-cover object-center"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl pb-4">{title}</h3>
        <Link href={projectUrl}>
          <p className="text-center p-4 rounded-full bg-white hover:bg-[#eee] text-black text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
