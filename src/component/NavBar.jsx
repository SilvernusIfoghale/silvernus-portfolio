import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaBars } from "react-icons/fa";

export default function NavBar() {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <div className="flex items-center justify-between py-3 ">
      <div className="">
        <span className="text-white italic text-2xl">Silver</span>
        <span className="text-2xl text-gray-700 font-extrabold">#💻</span>
      </div>
      <div>
        <ul className="sm:flex gap-2 text-white hidden ">
          <li className="hover:cursor-pointer hover:bg-gray-800 py-2 px-4">
            Projects
          </li>
          <li className="hover:cursor-pointer hover:bg-gray-800 py-2 px-4">
            About
          </li>
          <li className="hover:cursor-pointer hover:bg-gray-800 py-2 px-4">
            Experience
          </li>
        </ul>
        <FaBars
          onClick={() => setMobileNav(true)}
          size={25}
          className="fill-white mt-2 sm:hidden hover:cursor-pointer hover:scale-110"
        />

        {mobileNav && (
          <div className=" ">
            <CgClose
              onClick={() => setMobileNav(false)}
              color="white"
              size={30}
              className=" mt-2 sm:hidden z-10 fixed top-3 right-10 hover:cursor-pointer hover:scale-110"
            />
            <ul className="sm:flex gap-2 text-white absolute sm:hidden bg-gray-600 w-[180px] h-[100vh] top-[0px] right-0 pt-12">
              <li className="hover:cursor-pointer hover:bg-gray-800 py-2 px-4 mt-3">
                Projects
              </li>
              <li className="hover:cursor-pointer hover:bg-gray-800 py-2 px-4">
                About
              </li>
              <li className="hover:cursor-pointer hover:bg-gray-800 py-2 px-4">
                Experience
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
