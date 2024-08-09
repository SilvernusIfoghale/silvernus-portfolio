import React from "react";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import wave from "../../public/wave.png";
import ok from "../../public/ok.png";
import smile from "../../public/smile.png";

function Hero() {
  return (
    <>
      <div className=" leading-[3.2rem] my-16">
        <Fade cascade damping={0.2}>
          <p className="text-3xl font-bold text-gray-50 py-6">
            Hello <img src={wave} alt="" className="inline w-9 h-9 mb-2" />
          </p>
          <p className="text-6xl font-bold text-gray-100 ">
            I'm
            <span className="text-gray-800 ">
              {" "}
              <Typewriter
                words={["Silvernus", "Ifoghale."]}
                loop={0}
                typeSpeed={70}
                deleteSpeed={50}
              />{" "}
              <img
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f609/512.gif"
                alt="😉"
                width="60"
                height="60"
                className="inline"
              />
            </span>
          </p>
          <div className="max-w-[600px]">
            <p className="py-5 bg-gradient-to-r from-gray-800  to-white bg-clip-text font-bold text-transparent text-5xl leading-[3.5rem] ">
              A Software Engineer.{" "}
              <img src={smile} alt="" className="w-16 h-16 inline" />
              <span className="text-white"></span>
            </p>
          </div>
          <p className="text-white font-semibold text-3xl">
            Frontend Enthusiast{" "}
            <img src={ok} alt="" className="inline w-9 h-9" />.
          </p>
          <p className="text-gray-100 text-[0.95rem] leading-6 pt-4  sm:max-w-[60%]">
            <Typewriter
              words={[
                `I'm the developer you've been searching for - passionate, driven,
            and ready to bring your projects to life. with a keen eye for detail
            and a commitment to excellence, I'm dedicated to delivering
            top-notch design solutions that exceed expectations. Let's
            collaborate and turn your vision into reality!`,
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={40}
              deleteSpeed={50}
            />
          </p>
        </Fade>
      </div>
    </>
  );
}

export default Hero;
