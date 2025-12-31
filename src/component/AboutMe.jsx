import React from "react";
import profile from "../../public/profile.jpg";
import linkedin from "../../public/linkedin-circle.png";
import x from "../../public/x-circle.png";
import github from "../../public/github-circular.png";
import { Slide } from "react-awesome-reveal";

export default function AboutMe() {
  return (
    <div className="py-24 border-t border-white/5" id="about">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <Slide direction="left">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10">
              <img
                src={profile}
                alt="Silvernus Ifoghale"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl -z-10" />
          </div>
        </Slide>

        <div className="flex flex-col gap-6">
          <Slide direction="right">
            <h2 className="text-4xl font-bold text-white">About Me</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              I am a passionate Software Engineer with a strong foundation in Full-Stack Web Development. 
              My journey began with crafting immersive web experiences using React and Next.js, 
              but my curiosity has led me to the world of <span className="text-white font-semibold">Mobile Development</span>.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Currently, I am deep-diving into <span className="text-blue-400 font-semibold">React Native</span> and 
              <span className="text-purple-400 font-semibold"> Flutter</span> to build high-performance, 
              cross-platform mobile applications. I believe in writing clean, maintainable code 
              and creating user-centric designs that solve real-world problems.
            </p>

            <div className="flex gap-4 mt-4">
              <a href="https://www.linkedin.com/in/silvernus-ifoghale-012652262/" target="_blank" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                <img src={linkedin} alt="LinkedIn" className="w-6 h-6 opacity-70 hover:opacity-100" />
              </a>
              <a href="https://github.com/SilvernusIfoghale" target="_blank" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/20 hover:border-white/50 transition-all duration-300">
                <img src={github} alt="GitHub" className="w-6 h-6 opacity-70 hover:opacity-100" />
              </a>
              <a href="https://x.com/SilvernusSilver" target="_blank" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-400/20 hover:border-blue-400/50 transition-all duration-300">
                <img src={x} alt="X" className="w-6 h-6 opacity-70 hover:opacity-100" />
              </a>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
}
