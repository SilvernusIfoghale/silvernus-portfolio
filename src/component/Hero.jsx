import { Fade } from "react-awesome-reveal";

function Hero() {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center py-20">
      <Fade cascade damping={0.1}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 w-fit">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for new opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Building the future of <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Mobile & Web Apps
          </span>
        </h1>

        <div className="text-xl md:text-2xl text-gray-400 font-medium mb-8 max-w-2xl leading-relaxed">
          I&apos;m <span className="text-white font-bold">Silvernus Ifoghale</span>, a Full-Stack Developer 
          transitioning into <span className="text-blue-400">Mobile Development</span> with 
          <span className="text-purple-400"> React Native</span> and <span className="text-pink-400"> Flutter</span>.
        </div>

        <div className="flex flex-wrap gap-4 mb-12">
          <a href="#project" className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-white/5">
            View My Work
          </a>
          <a href="#about" className="px-8 py-4 bg-white/5 text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95">
            About Me
          </a>
        </div>

        <div className="flex items-center gap-8 pt-8 border-t border-white/5">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">2+</span>
            <span className="text-sm text-gray-500 uppercase tracking-wider">Years Exp.</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">20+</span>
            <span className="text-sm text-gray-500 uppercase tracking-wider">Projects</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">10+</span>
            <span className="text-sm text-gray-500 uppercase tracking-wider">Happy Clients</span>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Hero;
