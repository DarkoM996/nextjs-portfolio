"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import heroPic from "/app/images/27.jpg";
import { FaBehance, FaDribbble, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    // Motion div is being used so I can animate the homepage here and the elements inside it
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="max-w-screen-3xl mx-auto h-full"
    >
      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full gap-6 lg:gap-16">
        {/* Image */}
        <div className="relative w-full h-full">
          <Image
            priority={true}
            src={heroPic}
            alt="Hero Section Picture"
            width={800}
            height={800}
            className="object-cover w-full h-full bg-center"
          />
        </div>
        {/* Text Container */}
        <div className="flex flex-col justify-start md:justify-center items-center gap-2 px-4">
          {/* small heading */}
          <p className="text-transform: uppercase text-center text-[#DEDCDC]">
            Darko Mihajlovski
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-center text-balance">
            {" "}
            Creative Designer and Developer
          </h1>
          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-center w-full pt-4 gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 md:px-8 md:py-4 rounded-3xl md:rounded-full ring-1 ring-white bg-white text-black hover:bg-[#eee] w-[180px] text-center"
            >
              Projects
            </Link>
            <button className="px-6 py-3 md:px-8 md:py-4 rounded-3xl md:rounded-full ring-1 ring-[#a59f9f] bg-black hover:bg-[#0e0d0d] w-[180px]">
              Download CV
            </button>
          </div>
          {/* Social Media Icons */}
          <div className="flex  gap-4">
            <div className="p-4 text-xl md:text-2xl">
              <a href="https://github.com/DarkoM996/nextjs-portfolio">
                <p>
                  <FaGithub />
                </p>
              </a>
            </div>
            <div className="p-4 text-xl  md:text-2xl">
              <a href="https://dribbble.com/DarkoM_0-10">
                <p>
                  <FaDribbble />
                </p>
              </a>
            </div>
            <div className="p-4 text-xl  md:text-2xl">
              <a href="https://www.behance.net/darkomihajlo">
                <p>
                  <FaBehance />
                </p>
              </a>
            </div>
            <div className="p-4 text-xl  md:text-2xl">
              <a href="https://www.linkedin.com/in/darko-mihajlovski-1bb4701b7">
                <p>
                  <FaLinkedinIn />
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Working Code

// {/* <motion.div
// initial={{ y: 20, opacity: 0 }}
// animate={{ y: 0, opacity: 1 }}
// transition={{ ease: "easeInOut", duration: 0.75 }}
// className="h-[calc(100vh-6rem)]"
// >
// <div className="flex flex-col h-full lg:flex-row px-4 py-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 lg:py-4 max-w-screen-3xl mx-auto xl:space-x-20 space-y-4">
//   {/* Image Container */}
//   <div className="h-full lg:h-full lg:w-full relative space-y-24">
//     <Image
//       priority
//       src={heroPic}
//       alt="Hero Section Picture"
//       width={1000}
//       height={1000}
//       className=" object-cover w-full h-full"
//     />
//   </div>
//   {/* Text Container */}
//   <div className="h-full lg:w-full flex flex-col items-center justify-center flex-wrap">
//     {/* small heading */}
//     <p className="text-transform: uppercase lg:text-left text-[#DEDCDC] gap-4 pb-2">
//       Darko Mihajlovski
//     </p>
//     {/* H1 */}
//     <h1 className="text-4xl md:text-6xl  font-bold items-center break-normal pb-4 md:pb-6 text-center">
//       Creative Designer and Developer
//     </h1>
//     {/* Buttons */}
//     <div className="flex justify-center items-center gap-4 ">
//       <Link href="/projects">
//         <button className="px-6 py-3 md:px-8 md:py-4 rounded-3xl md:rounded-full ring-1 ring-white bg-white text-black hover:bg-[#eee] md:w-full">
//           Projects
//         </button>
//       </Link>
//       <button className="px-6 py-3 md:px-8 md:py-4 rounded-3xl md:rounded-full ring-1 ring-[#a59f9f] bg-black hover:bg-[#0e0d0d] ">
//         Download CV
//       </button>
//     </div>
//     {/* Social Media */}
//     <div className="flex  gap-4">
//       <div className="p-4 text-2xl">
//         <a href="https://github.com/DarkoM996/nextjs-portfolio">
//           <p>
//             <FaGithub />
//           </p>
//         </a>
//       </div>
//       <div className="p-4 text-2xl">
//         <a href="https://dribbble.com/DarkoM_0-10">
//           <p>
//             <FaDribbble />
//           </p>
//         </a>
//       </div>
//       <div className="p-4 text-2xl">
//         <a href="https://www.behance.net/darkomihajlo">
//           <p>
//             <FaBehance />
//           </p>
//         </a>
//       </div>
//       <div className="p-4 text-2xl">
//         <a href="https://www.linkedin.com/in/darko-mihajlovski-1bb4701b7">
//           <p>
//             <FaLinkedinIn />
//           </p>
//         </a>
//       </div>
//     </div>
//   </div>
// </div>
// </motion.div> */}
