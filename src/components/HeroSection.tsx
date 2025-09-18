import { ArrowDown } from "lucide-react";

export function HeroSection() {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">

            <div className="space-y-6">
                 <h1 className="text-2x md:text-4xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hello, I'm</span>
                    <span className="text-gradient opacity-0 animate-fade-in-delay-1"> Syed</span>
                    <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2"> Saqib</span>

                 </h1>
                 <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    I'm a passionate Full-Stack Developer with expertise in the MERN stack (MongoDB, Express, React, Node.js). I enjoy building clean, user-friendly interfaces and robust backends, turning ideas into functional applications. I specialize in creating solutions that are impactful, reliable, and scalable helping businesses and individuals bring their visions to life.
                 </p>
                 <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                  <a href="#projects" className="cosmic-button">
                    View my Work
                  </a>
                 </div>
            </div>

        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
    </section>
}