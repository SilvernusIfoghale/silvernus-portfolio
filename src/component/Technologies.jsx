import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, 
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, 
  SiGit, SiGithub, SiFlutter, SiDart, SiFirebase,
  SiMongodb, SiSass, SiFramer, SiBootstrap, SiShadcnui
} from "react-icons/si";
import { Bounce } from "react-awesome-reveal";

const techStack = [
  { name: "React Native", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Flutter", icon: SiFlutter, color: "text-[#02569B]" },
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
  { name: "Sass/SCSS", icon: SiSass, color: "text-[#CC6699]" },
  { name: "Framer Motion", icon: SiFramer, color: "text-white" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-[#7952B3]" },
  { name: "Shadcn/UI", icon: SiShadcnui, color: "text-white" },
  { name: "Dart", icon: SiDart, color: "text-[#0175C2]" },
  { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
  { name: "Git", icon: SiGit, color: "text-[#F05032]" },
  { name: "GitHub", icon: SiGithub, color: "text-white" },
];

export default function Technologies() {
  return (
    <div className="py-24 border-t border-white/5" id="experience">
      <div className="max-w-3xl mb-16">
        <Bounce cascade>
          <h2 className="text-4xl font-bold text-white mb-6">
            Tech Stack & Tools
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            I specialize in building high-quality applications across web and mobile platforms. 
            My expertise spans from modern frontend frameworks to cross-platform mobile development 
            and backend integration.
          </p>
        </Bounce>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        <Bounce cascade damping={0.1}>
          {techStack.map((tech, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300 flex flex-col items-center gap-4"
            >
              <tech.icon className={`text-4xl ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
              <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </Bounce>
      </div>
    </div>
  );
}
