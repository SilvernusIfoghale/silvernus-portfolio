import React, { useState, useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { FaBars } from "react-icons/fa";

export default function NavBar() {
  const [mobileNav, setMobileNav] = useState(false);

  // Prevent scrolling when mobile nav is open
  useEffect(() => {
    if (mobileNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileNav]);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#project" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
  ];

  return (
    <nav className="flex items-center justify-between py-5 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-50 px-6 sm:px-12 border-b border-white/5">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer group">
        <div className="flex items-center justify-center w-10 h-10 transition-transform duration-300 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl group-hover:rotate-12">
          <span className="text-xl font-bold text-white">S</span>
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-xl font-bold tracking-tight text-white">
            Silver<span className="text-blue-500">Dev</span>
          </span>
          <span className="text-[10px] text-gray-500 font-medium tracking-[0.2em] uppercase">
            Portfolio
          </span>
        </div>
      </div>

      {/* Desktop Nav */}
      <ul className="items-center hidden gap-8 text-sm font-medium text-gray-400 md:flex">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="transition-colors duration-200 hover:text-white"
            >
              {link.name}
            </a>
          </li>
        ))}
        <li>
          <a
            href="mailto:silvernusifoghale@gmail.com"
            className="px-5 py-2 text-black transition-all duration-300 bg-white rounded-full hover:bg-blue-500 hover:text-white"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <FaBars
          onClick={() => setMobileNav(true)}
          size={24}
          className="text-white transition-colors cursor-pointer hover:text-blue-500"
        />
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${
          mobileNav ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileNav(false)}
      />

      {/* Mobile Nav Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#0f0f0f] z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileNav ? "translate-x-0" : "translate-x-full"
        } border-l border-white/10`}
      >
        <div className="flex flex-col h-full p-8 ">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                <span className="text-lg font-bold text-white">S</span>
              </div>
              <span className="text-lg font-bold text-white">SilverDev</span>
            </div>
            <CgClose
              onClick={() => setMobileNav(false)}
              size={28}
              className="text-gray-400 transition-colors cursor-pointer hover:text-white"
            />
          </div>

          <ul className="flex flex-col gap-6 bg-[#0f0f0f]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMobileNav(false)}
                  className="block text-xl font-semibold text-gray-300 transition-colors hover:text-blue-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="pt-2 bg-[#0f0f0f]">
            <a
              href="mailto:silvernusifoghale@gmail.com"
              onClick={() => setMobileNav(false)}
              className="block w-full py-4 font-bold text-center text-white transition-colors bg-blue-600 rounded-xl hover:bg-blue-700"
            >
              Get in Touch
            </a>
            <p className="mt-6 text-xs text-center text-gray-500">
              © 2024 SilverDev. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
