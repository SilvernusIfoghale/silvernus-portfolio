import Card from "./Card";
import { Bounce, Slide } from "react-awesome-reveal";

export default function Projects() {
  return (
    <div className="py-24 border-t border-white/5" id="project">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <Slide direction="left">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">Featured Projects</h2>
            <p className="text-gray-400 text-lg">
              A collection of my recent work, ranging from complex web platforms 
              to my latest explorations in mobile development.
            </p>
          </div>
        </Slide>
        <Slide direction="right">
          <div className="flex gap-4">
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
              Web Development
            </span>
            <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium">
              Mobile Apps
            </span>
          </div>
        </Slide>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Bounce cascade damping={0.1}>
          <Card
            num="01"
            title="KonfirmTech Africa"
            desc="A cutting-edge platform that leverages technology to streamline and enhance the process of verifying academic and professional credentials across Africa."
            liveUrl="https://konfirmtechafrica.com/"
            gitHubUrl="https://github.com/SilvernusIfoghale"
          />
          <Card
            num="02"
            title="Certificate Access Portal"
            desc="A security-first digital credential platform designed for the Techyjaunt alumni community. Features robust verification and tamper-proof access."
            liveUrl="https://alumni.techyjaunt.com/"
            gitHubUrl="https://github.com/Techy-Jaunt/certificate-verification-system"
          />
          <Card
            num="03"
            title="Nestify"
            desc="Property listing website enabling landlords to list properties and tenants to pay rent. Integrated with social login for seamless access."
            liveUrl="https://nestify-one.vercel.app/"
            gitHubUrl="https://github.com/SilvernusIfoghale/TechyJaunt-Project"
          />
          <Card
            num="04"
            title="Movie Discovery"
            desc="A full-featured discovery platform allowing movie enthusiasts to search global databases and manage personal collections."
            liveUrl="https://movie-app-ivory-theta.vercel.app/"
            gitHubUrl="https://github.com/SilvernusIfoghale/movie-app"
          />
          <Card
            num="05"
            title="Note App"
            desc="Productivity tool with powerful search, light/dark modes, and local storage integration for seamless note-taking."
            liveUrl="https://note-application-livid.vercel.app/"
            gitHubUrl="https://github.com/SilvernusIfoghale/note-app"
          />
          <div className="group relative bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-6 border border-blue-500/20 flex flex-col justify-center items-center text-center min-h-[350px]">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
              <span className="text-2xl animate-pulse">📱</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Mobile Project</h3>
            <p className="text-gray-400 text-sm">
              Currently building something amazing with React Native. Stay tuned!
            </p>
          </div>
        </Bounce>
      </div>
    </div>
  );
}
