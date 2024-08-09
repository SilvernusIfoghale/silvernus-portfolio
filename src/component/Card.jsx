import React from "react";
import github from "../../public/github-circular.png";
import { LiaLinkSolid } from "react-icons/lia";
import { Bounce } from "react-awesome-reveal";

export default function Card({ num, title, desc, liveUrl, gitHubUrl }) {
  return (
    <div>
      <p className="text-gray-300 font-semibold text-5xl py-4">{num}</p>
      <p className="text-xl text-yellow-300 font-bold py-2">{title}</p>
      <p className="py-2 text-gray-200 font-semibold text-sm">{desc}</p>
      <div className="flex justify-between mt-7 px-1 sm:pr-4 lg:pr-1">
        <div className="flex items-center border-2 border-gray-300 w-32 rounded-full h-8 hover:shadow-lg">
          <a
            href={liveUrl}
            className="flex items-center gap-2 font-semibold text-gray-50 px-1"
            target="_blank"
          >
            <LiaLinkSolid size={22} /> <span>Live Demo</span>
          </a>
        </div>
        <div className="text-gray-50  flex items-center border-yellow-500 border-2 h-8 w-32 rounded-full text-sm hover:shadow-lg">
          <a
            href={gitHubUrl}
            className="flex items-center gap-2 px-1 font-semibold"
            target="_blank"
          >
            <img src={github} alt="" className="w-6" />
            <p>See GitHub</p>
          </a>
        </div>
      </div>
    </div>
  );
}
