import React from "react";
import { SiK3S } from "react-icons/si";
import NavBar from "./NavBar";
import Hero from "./Hero";

export default function Portfolio() {
  //Introduction/About Me -Briefly introduce yourself and your background.✔️
  //Projects -Title, -Description, -Technologies used, -Link to the live demo,-Link to the GitHub repository
  //Skills- list skills you have acquired and improved upon during the challenge.
  //Experience/Reflections: Share your experience and any reflection of what you have learned and achieved.
  //

  return (
    <>
      <div className="w-full h-auto bg-gradient-to-r from-cyan-500 to-blue-500 ">
        <NavBar />
        <Hero />
      </div>
    </>
  );
}
