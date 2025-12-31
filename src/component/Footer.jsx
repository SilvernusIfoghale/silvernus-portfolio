import React from "react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-white font-bold text-lg tracking-tight">Silver<span className="text-blue-500">Dev</span></span>
          </div>
          <p className="text-gray-500 text-sm">Building digital experiences that matter.</p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-6 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#project" className="hover:text-white transition-colors">Projects</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          </div>
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Silvernus Ifoghale. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
