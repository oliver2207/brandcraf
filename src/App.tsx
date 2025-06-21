import { useEffect, useState } from "react"
 
import { cn } from "./lib/utils"

 

function App() {
 
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // Set initial scroll state
    handleScroll()

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true })
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

 

  return (
   <header
      className={cn(
        "header fixed top-0 w-full z-[100] transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg py-2   " : "bg-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gradient">BrandCraft</span>
        </a>
      </div>
    </header>
  )
}

export default App
