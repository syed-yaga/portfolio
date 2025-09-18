import { useEffect, useState } from "react"
import { cn } from "../lib/utils"
import { Menu, X } from "lucide-react"


const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
]


export function Navbar () {

      console.log("navItems inside component:", navItems);

    const [isScrolled, setIsScrolled] = useState(false)  
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return <nav className = {cn("fixed top-0 left-0 w-full z-40 transition-all duration-300",
        isScrolled ? " bg-background/80 backdrop-blur-md shadow-xs" : "bg-transparent"
    )}>
     <div className="container flex items-center justify-between py-6">
        <a href="#hero" className="text-xl font-bold text-primary flex items-center">
            <span className="relative z-10">
                <span className="text-glow text-foreground">
                    SyedTech
                </span>
                Portfolio
            </span>
        </a>
     {/* desktop */}
      <div className=" hidden md:flex space-x-8">
        {navItems.map((items, key) => (
            <a key ={key} href={items.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">{items.name}</a>
        ))}
      </div>

     {/* mobile */}

         <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className=" md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center ",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
     </div>
    </nav>
}