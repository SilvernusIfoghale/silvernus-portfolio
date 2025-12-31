import github from "../../public/github-circular.png";
import { LiaLinkSolid } from "react-icons/lia";

export default function Card({ num, title, desc, liveUrl, gitHubUrl }) {
  return (
    <div className="group relative bg-[#111] rounded-3xl p-8 border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full overflow-hidden">
      {/* Hover Glow Effect */}
      <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-8">
          <span className="text-5xl font-black text-white/5 group-hover:text-blue-500/20 transition-colors duration-500">
            {num}
          </span>
          <div className="flex gap-2">
            <a
              href={gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300"
            >
              <img src={github} alt="GitHub" className="w-5 h-5 opacity-60 group-hover:opacity-100" />
            </a>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center hover:bg-blue-500 transition-all duration-300"
            >
              <LiaLinkSolid size={20} className="text-blue-400 group-hover:text-white" />
            </a>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
          {desc}
        </p>

        <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          View Project Details
          <span className="text-lg">→</span>
        </div>
      </div>
    </div>
  );
}
