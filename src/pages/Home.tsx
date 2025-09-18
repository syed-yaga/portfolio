import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import {  AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";


export function Home() {
    return <div className="min-h-screen flex flex-col items-center justify-center 
                    bg-[hsl(var(--background))] text-[hsl(var(--foreground))] 
                    transition-colors duration-300">
        
        <ThemeToggle/>

        <StarBackground/>

        <Navbar/>

        <main>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectSection/>
            <ContactSection/>
        </main>
         
           <Footer/>
   
    </div>
}