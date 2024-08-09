import React from "react";

export default function Footer() {
  return (
    <div className="flex items-center justify-center w-full mt-20 pb-5 pt-2 border-t-2 border-green-600">
      <ul className="sm:flex gap-2 text-white hidden ">
        <a href="#">
          <li className="hover:cursor-pointer hover:underline py-2 px-4 ">
            Home
          </li>
        </a>
        <a href="#project">
          <li className="hover:cursor-pointer hover:underline py-2 px-4 ">
            Projects
          </li>
        </a>
        <a href="#about">
          <li className="hover:cursor-pointer hover:underline py-2 px-4">
            About
          </li>
        </a>
        <a href="#experience">
          <li className="hover:cursor-pointer hover:underline py-2 px-4">
            Experience
          </li>
        </a>
      </ul>
    </div>
  );
}
