import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaBars } from "react-icons/fa";

export default function NavBar() {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-50 px-6 sm:px-12 border-b border-white/5">
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
          <span className="text-white font-bold text-xl">S</span>
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-white font-bold text-xl tracking-tight">Silver<span className="text-blue-500">Dev</span></span>
          <span className="text-[10px] text-gray-500 font-medium tracking-[0.2em] uppercase">Portfolio</span>
        </div>
      </div>
      <div>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors duration-200">
            <li>Home</li>
          </a>
          <a href="#project" className="hover:text-white transition-colors duration-200">
            <li>Projects</li>
          </a>
          <a href="#about" className="hover:text-white transition-colors duration-200">
            <li>About</li>
          </a>
          <a href="#experience" className="hover:text-white transition-colors duration-200">
            <li>Experience</li>
          </a>
          <a href="mailto:silvernusifoghale@gmail.com" className="bg-white text-black px-5 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
            <li>Contact</li>
          </a>
        </ul>
        <div className="md:hidden">
          <FaBars
            onClick={() => setMobileNav(true)}
            size={24}
            className="text-white cursor-pointer hover:text-blue-500 transition-colors"
          />
        </div>

        {mobileNav && (
          <div className="fixed inset-0 bg-black/95 z-[60] flex flex-col items-center justify-center animate-in fade-in duration-300">
            <CgClose
              onClick={() => setMobileNav(false)}
              size={32}
              className="absolute top-6 right-6 text-white cursor-pointer hover:rotate-90 transition-transform duration-300"
            />
            <ul className="flex flex-col items-center gap-8 text-2xl font-bold text-white">
              <a href="#" onClick={() => setMobileNav(false)} className="hover:text-blue-500 transition-colors">
                <li>Home</li>
              </a>
              <a href="#project" onClick={() => setMobileNav(false)} className="hover:text-blue-500 transition-colors">
                <li>Projects</li>
              </a>
              <a href="#about" onClick={() => setMobileNav(false)} className="hover:text-blue-500 transition-colors">
                <li>About</li>
              </a>
              <a href="#experience" onClick={() => setMobileNav(false)} className="hover:text-blue-500 transition-colors">
                <li>Experience</li>
              </a>
              <a href="mailto:silvernusifoghale@gmail.com" onClick={() => setMobileNav(false)} className="mt-4 bg-blue-600 px-8 py-3 rounded-full">
                <li>Contact Me</li>
              </a>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
