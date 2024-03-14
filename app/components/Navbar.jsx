"use client";

import Link from "next/link";
import { useState } from "react";
import NavLink from "./Navlink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/projects", title: "Projects" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Animating the 3 lines into an x with Framer Motion

  const topVariants = {
    closed: {
      rotate: 0,
    },

    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },

    opened: {
      opacity: 0,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },

    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  // Animation for the hamburger menu.. that initial bounce from the right

  const listVariants = {
    closed: {
      x: "100vw",
    },

    opened: {
      x: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Animation for nav link items seperately

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },

    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="border-b  border-[#242323]">
      <h2 className="text-4xl  h-full flex items-center justify-between px-4 py-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 max-w-[1920px] mx-auto ">
        {/* Logo */}
        <div className="flex">
          <Link href="/">
            <h3 className="font-bold text-3xl">DM</h3>
          </Link>
        </div>
        <div className="hidden md:flex gap-4 text-lg text-transform: uppercase text-[#ccccc] ">
          {links.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>
        {/* Responsive Menu */}
        <div className="md:hidden">
          {/* Menu Button */}
          <button
            className="w-10 h-8 flex flex-col justify-between z-50 relative"
            onClick={() => setOpen((prev) => !prev)}
          >
            <motion.div
              variants={topVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-white rounded origin-left"
            ></motion.div>
            <motion.div
              variants={centerVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-white rounded origin-left"
            ></motion.div>
            <motion.div
              variants={bottomVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-white rounded origin-left"
            ></motion.div>
          </button>
          {/* Menu List + later on that motion div is added for the menu animating in from the right */}
          {open && (
            <motion.div
              variants={listVariants}
              initial="closed"
              animate="opened"
              className="absolute top-0 left-0 w-screen h-screen bg-white text-black flex flex-col items-center justify-center gap-8 text-6xl text-transform: uppercase z-20"
            >
              {/* Animating the nav links here with motion div */}
              {links.map((link) => (
                <motion.div
                  variants={listItemVariants}
                  className=""
                  key={link.title}
                >
                  <Link href={link.url} key={link.title}>
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </h2>
    </div>
  );
};

export default Navbar;
