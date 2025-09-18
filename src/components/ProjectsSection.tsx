import { ArrowRight } from "lucide-react"

const projects = []

export function ProjectSection() {
 return <section id="projects" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects </span></h2>
        <div className="text-center mt-12">
            <a href="https://github.com/syed-yaga" target="_blank" className="cosmic-button w-fit flex items-center mx-auto">
                Check My Github <ArrowRight size={16}/>
            </a>
        </div>
    </div>
 </section>
}