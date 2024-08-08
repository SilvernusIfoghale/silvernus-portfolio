import React from "react";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between py-3 px-10">
      <div className="">
        <span className="text-white italic text-2xl">Silver</span>
        <span className="text-2xl text-gray-700 font-extrabold">#💻</span>
      </div>
      <div>
        <ul className="flex gap-2 text-white ">
          <li className="hover:cursor-pointer hover:bg-gray-700 py-2 px-4">
            Experience
          </li>
          <li className="hover:cursor-pointer hover:bg-gray-700 py-2 px-4">
            Work
          </li>
          <li className="hover:cursor-pointer hover:bg-gray-700 py-2 px-4">
            Training
          </li>
          <li className="hover:cursor-pointer hover:bg-gray-700 py-2 px-4">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}
