import React from "react";
import profile from "../../public/profile.jpg";

export default function AboutMe() {
  return (
    <>
      <div className="grid  sm:grid-cols-2 place-content-center items-center text-gray-100 gap-10 my-14 ">
        <div className="mb-5">
          <p className="font-bold text-3xl pb-9">About Me</p>
          <p className="text-sm">
            I'm the developer you've been searching for - passionate, driven,
            and ready to bring your projects to life. with a keen eye for detail
            and a commitment to excellence, I'm dedicated to delivering
            top-notch design solutions that exceed expectations. Let's
            collaborate and turn your vision into reality!{" "}
          </p>
          <div className="flex my-6 gap-5">
            <p>Linkin</p>
            <p>X</p>
            <p>GitHub</p>
          </div>
        </div>

        <div className="flex md:justify-end justify-center">
          <div className="w-[390px]  h-[390px]   sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] rounded-[50%] overflow-hidden border-2 border-teal-500 shadow-lg shadow-gray-700">
            <img
              src={profile}
              alt="author-picture"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
