"use client";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="sticky top-3 mt-3 bg-white rounded-md md:rounded-full h-14 py-2  w-full max-w-[600px] uppercase pt-4 ">
      <div className="flex justify-between items-center px-2">
        <Link className="font-semibold text-xl ml-3" href={"/"}>
          Dheeraj
        </Link>
        <div className="hidden text-xs text-gray-500 sm:flex justify-around items-center space-x-2 mr-3">
          <Link href={"/blogs"} className="hover:text-black">
            My Blogs
          </Link>
          <Link href={"/#work"} className="hover:text-black">
            Work
          </Link>
          <Link href={"/#faq"} className="hover:text-black">
            About me
          </Link>
          <Link
            href={"https://github.com/dheeraj0007"}
            target="_blank"
            className="border-2 border-black rounded-full py-1 px-2 text-black bg-gray-100 hover:bg-white"
          >
            Github
          </Link>
        </div>
        <div
          className="flex sm:hidden flex-col justify-center items-center space-y-1 mr-3 cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            // X icon
            <div className="relative w-5 h-5">
              <span className="absolute top-2.5 left-0 w-5 h-[2px] bg-gray-400 rotate-45"></span>
              <span className="absolute top-2.5 left-0 w-5 h-[2px] bg-gray-400 -rotate-45"></span>
            </div>
          ) : (
            // Hamburger icon
            <>
              <span className="bg-gray-400 h-[2px] w-5 rounded-full"></span>
              <span className="bg-gray-400 h-[2px] w-5 rounded-full"></span>
              <span className="bg-gray-400 h-[2px] w-5 rounded-full"></span>
            </>
          )}
        </div>
      </div>
      <div
        className={`${
          menuOpen
            ? "flex flex-col items-center justify-center space-y-2"
            : "hidden"
        }
         text-xs sm:hidden text-gray-500 bg-white w-full h-40`}
      >
        <Link href={"/blogs"} className="hover:text-black">
          My Blogs
        </Link>
        <Link href={"/#work"} className="hover:text-black">
          Work
        </Link>
        <Link href={"/#faq"} className="hover:text-black">
          About me
        </Link>
        <Link
          href={"https://github.com/dheeraj0007"}
          target="_blank"
          className="border-2 border-black rounded-full py-1 px-2 text-black bg-gray-100 hover:bg-white"
        >
          Github
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
