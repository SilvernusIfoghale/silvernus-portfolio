import React from "react";
import profile from "../../public/profile.jpg";
import linkedin from "../../public/linkedin-circle.png";
import x from "../../public/x-circle.png";
import github from "../../public/github-circular.png";

export default function AboutMe() {
  return (
    <>
      <div
        className="grid  sm:grid-cols-2 place-content-center items-center text-gray-100 gap-10 my-20  pt-10"
        id="about"
      >
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
            <div className="border-2 border-gray-400 w-[40px] h-[40px] rounded-full flex justify-center items-center">
              <div className=" rounded-full overflow-hidden border-transparent border-2 w-[40px] h-[40px] hover:shadow-lg hover:shadow-gray-500">
                <a
                  href="https://www.linkedin.com/in/silvernus-ifoghale-012652262/"
                  target="_blank"
                >
                  <img
                    className=" object-cover w-full h-full rounded-full"
                    src={linkedin}
                    alt="linkedin"
                  />
                </a>
              </div>
            </div>
            <div className="border-2 hover:shadow-lg hover:shadow-gray-500 border-gray-400 w-[40px] h-[40px] rounded-full flex justify-center items-center ">
              <div className=" rounded-full overflow-hidden border-transparent border-2 w-[38px] h-[38px]">
                <a href="https://x.com/SilvernusSilver" target="_blank">
                  <img
                    className=" object-cover w-full h-full rounded-full"
                    src={x}
                    alt="linkedin"
                  />
                </a>
              </div>
            </div>
            <div className="border-2 border-gray-400 w-[40px] h-[40px] rounded-full flex justify-center items-center hover:shadow-lg hover:shadow-gray-500">
              <div className=" rounded-full overflow-hidden border-transparent border-2 w-[40px] h-[40px]">
                <a href="https://github.com/SilvernusIfoghale" target="_blank">
                  {" "}
                  <img
                    className=" object-cover w-full h-full rounded-full"
                    src={github}
                    alt="linkedin"
                  />
                </a>
              </div>
            </div>
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
