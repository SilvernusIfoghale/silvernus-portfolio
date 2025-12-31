import React from "react";
import { SiK3S } from "react-icons/si";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Technologies from "./Technologies";
import Footer from "./Footer";

export default function Portfolio() {
  return (
    <>
      <div className="w-full h-auto bg-[#0a0a0a] text-white selection:bg-blue-500/30">
        <NavBar />
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <Hero />
          <Projects />
          <AboutMe />
          <Technologies />
          <Footer />
        </div>
      </div>
    </>
  );
}
