import React from "react";
import Image from "next/image";
import gridPic from "/app/images/2.jpg";

const page = () => {
  return (
    <div>
      <div className="w-full h-fit">
        <Image src={gridPic} fill className="object-contain" />
      </div>
    </div>
  );
};

export default page;
