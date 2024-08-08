import React from "react";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between py-3 ">
      <div className="">
        <span className="text-white italic text-2xl">Silver</span>
        <span className="text-2xl text-gray-700 font-extrabold">#💻</span>
      </div>
      <div>
        <ul className="flex gap-2 text-white ">
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
      </div>
    </div>
  );
}
