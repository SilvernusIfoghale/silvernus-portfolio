import React from "react";

function Hero() {
  return (
    <>
      <div className="w-[75%] leading-[3.2rem] my-16">
        <p className="text-3xl font-semibold text-gray-50 py-6">Hello 👋</p>
        <p className="text-[2.8rem] font-bold text-gray-100 ">
          I'm
          <span className="text-gray-800 "> Silvernus Ifoghale. </span>
          😉
        </p>
        <div className="max-w-[500px]">
          <p className="py-5 bg-gradient-to-r from-gray-800  to-white bg-clip-text font-bold text-transparent text-4xl ">
            A Software Engineer. <span className="text-white">😎</span>
          </p>
        </div>
        <p className="text-white font-semibold text-2xl">
          Frontend Enthusiast 👌.
        </p>
        <p className="text-gray-100 text-[0.9rem] leading-5 pt-4 w-[90%]">
          I'm the developer you've been searching for - passionate, driven, and
          ready to bring your projects to life. with a keen eye for detail and a
          commitment to excellence, I'm dedicated to delivering top-notch design
          solutions that exceed expectations. Let's collaborate and turn your
          vision into reality!
        </p>
      </div>
    </>
  );
}

export default Hero;
