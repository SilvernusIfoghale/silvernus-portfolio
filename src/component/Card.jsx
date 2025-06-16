import github from "../../public/github-circular.png";
import { LiaLinkSolid } from "react-icons/lia";

export default function Card({ num, title, desc, liveUrl, gitHubUrl }) {
  return (
    <div className="group relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/20 hover:-translate-y-1 ">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative z-10">
        {/* Project number */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {num}
          </span>
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-300 leading-relaxed mb-6 text-sm">{desc}</p>

        {/* Action buttons */}
        <div className="flex gap-3">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1 w-fit px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 active:scale-95"
          >
            <LiaLinkSolid size={22} />
            <span>Live Demo</span>
          </a>

          <a
            href={gitHubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-slate-500 text-slate-200 hover:text-white font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-slate-700/25 hover:scale-105 active:scale-95"
          >
            <img src={github} alt="GitHub" className="w-6" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </div>
  );
}
