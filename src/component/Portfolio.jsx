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
      <div className="w-full h-auto px-10 bg-gradient-to-r from-teal-600 to-teal-800 ">
        <NavBar />
        <Hero />
        <Projects />
        <AboutMe />
        <Technologies />
        <Footer />
      </div>
    </>
  );
}
