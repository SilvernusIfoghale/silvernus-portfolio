import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.png";
import js from "../../public/javascript.png";
import react from "../../public/react.png";
import node from "../../public/node.png";
import bootstrap from "../../public/bootstrap.png";
import tailwind from "../../public/tailwind.png";
import git from "../../public/git.png";
import github from "../../public/github.png";

export default function Technologies() {
  return (
    <>
      <div className="pt-10">
        <div className="my-10 w-[95%]">
          <p className="text-white font-bold text-3xl">
            Technologies I'm Familiar With
          </p>
          <p className="text-[0.9rem] text-gray-200 font-semibold py-5">
            I specialize in frontend technologies like HTML, CSS, and
            JavaScript, alone with libraries like React. With expertise in
            design and usability, I create responsive websites for seamless user
            experiences. I'm also proficient in Git for efficient code
            management.
          </p>
        </div>
        <div className="flex flex-wrap gap-7 mb-10 justify-center items-center">
          <div className="w-[70px] h-[70px] border-2 border-gray-400  rounded-full flex justify-center items-center ">
            <div className="w-[55px] h-[55px] rounded-full bg-white overflow-hidden">
              <img
                src={html}
                alt=""
                className="w-full h-full object-contain "
              />
            </div>
          </div>
          <div className="w-[70px] h-[70px] border-2 border-gray-400  rounded-full flex justify-center items-center ">
            <div className="w-[55px] h-[55px] rounded-full bg-white overflow-hidden">
              <img src={css} alt="" className="w-full h-full object-contain " />
            </div>
          </div>
          <div className="w-[70px] h-[70px] border-2 border-gray-400  rounded-full flex justify-center items-center ">
            <div className="w-[55px] h-[55px] rounded-full bg-white overflow-hidden">
              <img src={js} alt="" className="w-full h-full object-contain " />
            </div>
          </div>
          <div className="w-[70px] h-[70px] border-2 border-gray-400  rounded-full flex justify-center items-center ">
            <div className="w-[55px] h-[55px] rounded-full bg-white overflow-hidden">
              <img
                src={bootstrap}
                alt=""
                className="w-full h-full object-contain "
              />
            </div>
          </div>
          <div className="w-[70px] h-[70px] border-2 border-gray-400  rounded-full flex justify-center items-center ">
            <div className="w-[55px] h-[55px] rounded-full bg-white overflow-hidden">
              <img
                src={tailwind}
                alt=""
                className="w-full h-full object-contain "
              />
            </div>
          </div>
          <div className="w-[70px] h-[70px] border-2 border-gray-400  rounded-full flex justify-center items-center ">
            <div className="w-[55px] h-[55px] rounded-full bg-white overflow-hidden">
              <img
                src={react}
                alt=""
                className="w-full h-full object-contain "
              />
            </div>
          </div>
          <div className="w-[70px] h-[70px] border-2 border-gray-400  rounded-full flex justify-center items-center ">
            <div className="w-[55px] h-[55px] rounded-full bg-white overflow-hidden">
              <img
                src={node}
                alt=""
                className="w-full h-full object-contain "
              />
            </div>
          </div>
          <div className="w-[70px] h-[70px] border-2 border-gray-400  rounded-full flex justify-center items-center ">
            <div className="w-[55px] h-[55px] rounded-full bg-white overflow-hidden">
              <img src={git} alt="" className="w-full h-full object-contain " />
            </div>
          </div>
          <div className="w-[70px] h-[70px] border-2 border-gray-400  rounded-full flex justify-center items-center ">
            <div className="w-[55px] h-[55px] rounded-full bg-white overflow-hidden">
              <img
                src={github}
                alt=""
                className="w-full h-full object-contain "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
