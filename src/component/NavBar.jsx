import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import laptop from "../../public/laptop.png";

export default function NavBar() {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <div className="flex items-center justify-between py-3 ">
      <div className="">
        <span className="text-white  text-2xl">Silver</span>
        <span className="text-2xl italic text-gray-700 font-bold">Dev</span>
        <span>
          <img src={laptop} alt="" className="inline w-7 h-7" />
        </span>
      </div>
      <div>
        <ul className="sm:flex gap-2 text-white hidden ">
          <a href="#project">
            {" "}
            <li className="hover:cursor-pointer hover:bg-gray-800 py-2 px-4 ">
              Projects
            </li>
          </a>
          <a href="#about">
            <li className="hover:cursor-pointer hover:bg-gray-800 py-2 px-4">
              About
            </li>
          </a>
          <a href="#experience">
            <li className="hover:cursor-pointer hover:bg-gray-800 py-2 px-4">
              Experience
            </li>
          </a>
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
            <ul
              onClick={() => setMobileNav(false)}
              className="gap-2 text-white absolute sm:hidden bg-gray-600 w-[180px] h-[100vh] top-[0px] right-0 pt-12"
            >
              <a href="#project">
                <li className="hover:cursor-pointer hover:bg-gray-800 py-2 px-4 mt-3">
                  Projects
                </li>
              </a>
              <a href="#about">
                <li className="hover:cursor-pointer hover:bg-gray-800 py-2 px-4">
                  About
                </li>
              </a>
              <a href="#experience">
                <li className="hover:cursor-pointer hover:bg-gray-800 py-2 px-4">
                  Experience
                </li>
              </a>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
