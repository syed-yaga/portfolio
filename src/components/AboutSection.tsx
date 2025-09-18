import { Cloud, Code, Server, User } from "lucide-react";

export function AboutSection () {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">  
       <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        About <span className="text-primary"> Me</span>
       </h2>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
       <div className="space-y-6">
        <h3 className="text-2xl font-semibold">Ardent Full-Stack Developer & Tech Architect</h3>
          <p className="text-muted-foreground leading-relaxed">
            I’m a Full-Stack Developer with hands-on experience in building web applications with MERN and modern JavaScript ecosystems.

          </p>
           
          <p className="text-muted-foreground leading-relaxed">
             I thrive on creating elegant solutions to complex problems, and I'm constantly learning new technologies and techniques to stay at the forefront of the ever evolving web landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">
                Get in touch
            </a>
          </div>
       </div>
       <div className="grid grid-cols-1 gap-6">
        <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/10">
               <Code className="h-6 w-6 text-primary"/>
            </div>
            <div className="text-left">
             <h4 className="font-semibold text-lg"> Full-Stack Development</h4>
             <p className="text-muted-foreground">
               Building scalable web applications with modern front-end and back-end technologies.
             </p>
            </div>
            </div>
        </div>
        <div className="gradient-border p-6 card-hover">
             <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/10">
               <Server className="h-6 w-6 text-primary"/>
            </div>
             <div className="text-left">
             <h4 className="font-semibold text-lg"> API & Backend Engineering</h4>
             <p className="text-muted-foreground">
              Designing secure, scalable APIs and managing data with robust server-side logic.
             </p>
            </div>
            </div>
        </div>
        <div className="gradient-border p-6 card-hover">
             <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/10">
               <Cloud className="h-6 w-6 text-primary"/>
            </div>
             <div className="text-left">
             <h4 className="font-semibold text-lg"> Cloud & Deployment</h4>
             <p className="text-muted-foreground">
               Deploying applications to modern cloud platforms with CI/CD pipelines, real-time monitoring, and performance optimization.
             </p>
            </div>
            </div>
        </div>

       </div>
       </div>
        </div>
    </section>
}