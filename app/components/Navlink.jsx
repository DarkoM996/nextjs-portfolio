"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  console.log(pathName);
  return (
    <Link
      className={` ${
        pathName === link.url ? " text-red-500 " : "text-[#6d6b6bcc]"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
