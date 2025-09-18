import { useState } from "react"
import { cn } from "../lib/utils"
import { FaJs, FaReact, FaNode, FaDocker, FaAws, FaGithub } from "react-icons/fa";
import { 
  SiTypescript, SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiPostgresql, 
  SiPrisma, SiRedis, SiVercel, SiPostman,
  SiCloudflare,
} from "react-icons/si";
import { MdOutlineCookie, MdSecurity, MdSettingsEthernet, MdOutlineCastConnected } from "react-icons/md";
import { BiGitBranch } from "react-icons/bi";
import { VscodeIcon } from "../logo/VsCodeLog";

const skills = [
    // Frontend
    { name: "Javascript", level: 90, category: "frontend", icon: <FaJs className="h-6 w-6 text-yellow-400" />},
    { name: "React", level: 90, category: "frontend", icon: <FaReact className="h-6 w-6 text-cyan-400" /> },
    { name: "TypeScript", level: 90, category: "frontend", icon: <SiTypescript className="h-6 w-6 text-blue-500" />  },
    { name: "Tailwind CSS", level: 85, category: "frontend", icon: <SiTailwindcss className="h-6 w-6 text-sky-400" />},
    { name: "Next.js", level: 80, category: "frontend", icon: <SiNextdotjs className="h-6 w-6 text-white" /> },
    { name: "DOM", level: 90, category: "frontend", icon: <MdSettingsEthernet className="h-6 w-6 text-green-400" /> },

    //Backend
    { name: "Node.js", level: 85, category: "backend", icon: <FaNode className="h-6 w-6 text-green-500" /> },
    { name: "Express", level: 80, category: "backend", icon: <SiExpress className="h-6 w-6 text-gray-300" /> },
    { name: "REST", level: 80, category: "backend",  icon: <MdSettingsEthernet className="h-6 w-6 text-blue-400" />},
    { name: "Hono", level: 80, category: "backend",  icon: <MdSecurity className="h-6 w-6 text-purple-400" />},
    { name: "CloudFlare Workers", level: 80, category: "backend", icon: <SiCloudflare className="h-6 w-6 text-orange-500" />  },
    { name: "NextAuth", level: 85, category: "backend", icon: <MdSecurity className="h-6 w-6 text-red-400" />  },
    { name: "Session Management", level: 80, category: "backend", icon: <MdSecurity className="h-6 w-6 text-teal-400" />  },
    { name: "Cookie-based Auth", level: 80, category: "backend", icon: <MdOutlineCookie className="h-6 w-6 text-yellow-500" /> },
    { name: "MongoDB", level: 75, category: "backend",  icon: <SiMongodb className="h-6 w-6 text-green-400" />},
    { name: "PostgreSQL", level: 70, category: "backend", icon: <SiPostgresql className="h-6 w-6 text-sky-600" />  },
    { name: "Prisma ORM", level: 80, category: "backend",  icon: <SiPrisma className="h-6 w-6 text-violet-400" />  },
    { name: "Redis", level: 75, category: "backend",  icon: <SiRedis className="h-6 w-6 text-red-500" />  },
    { name: "WebSocket", level: 75, category: "backend",  icon: <MdOutlineCastConnected className="h-6 w-6 text-blue-400" />},
    { name: "AWS", level: 85, category: "backend", icon: <FaAws className="h-6 w-6 text-orange-400" /> },
    { name: "Vercel", level: 80, category: "backend", icon: <SiVercel className="h-6 w-6 text-white" /> },


    // Tools
    { name: "Git/GitHub", level: 90, category: "tools", icon: <FaGithub className="h-6 w-6 text-gray-300" /> },
    { name: "Docker", level: 70, category: "tools", icon: <FaDocker className="h-6 w-6 text-blue-400" /> },
    { name: "Postman", level: 90, category: "tools",  icon: <SiPostman className="h-6 w-6 text-orange-500" />  },
    { name: "MongoDB Compass", level: 90, category: "tools", icon: <SiMongodb className="h-6 w-6 text-green-400" /> },
    { name: "CORS", level: 85, category: "tools", icon: <MdSettingsEthernet className="h-6 w-6 text-yellow-400" />},
    { name: "VS Code", level: 95, category: "tools", icon: <VscodeIcon/>  },
    



]

const categories = ["all", "frontend", "backend", "tools",]


export function SkillsSection() {
      const [activeCategory, setActiveCategory] = useState("all")
      const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
     <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
           My <span className="text-primary"> Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
             {categories.map((category, key ) => (
                <button key={key} onClick={() => setActiveCategory(category)} className={cn(
                    "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                    activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                    )}>
                    {category}
                </button>
             ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
  
  <div className="transition-transform duration-300 group-hover:scale-110">
    {skill.icon}
    <h3 className="font-semibold text-lg">{skill.name}</h3>
  </div>
                     <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
    <div
      className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
      style={{ width: skill.level + "%" }}
    />
  </div>
                       <div className="text-right mt-1">
    <span className="text-sm text-muted-foreground">{skill.level}%</span>
  </div>
</div>
                ))}
        </div>

     </div>
    </section>
}