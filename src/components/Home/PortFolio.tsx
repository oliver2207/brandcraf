 

import { useEffect, useRef, useState } from "react"
 
import { useGSAP } from "../../lib/gsap-utils"
import gsap from "gsap"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "../ui/Card"
import { Button } from "../buttons/Buttons"
import { Link } from "react-router-dom"

const categories = ["Todos", "Branding", "Web", "Redes Sociales", "Publicidad"]

const portfolioItems = [
  {
    id: 1,
    title: "Rediseño de marca para Eco Solutions",
    category: "Branding",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    title: "Sitio web para Tech Innovations",
    category: "Web",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    title: "Campaña en redes para Fashion Store",
    category: "Redes Sociales",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 4,
    title: "Campaña publicitaria para Healthy Foods",
    category: "Publicidad",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 5,
    title: "Identidad corporativa para Finance Pro",
    category: "Branding",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 6,
    title: "E-commerce para Artisan Crafts",
    category: "Web",
    image: "/placeholder.svg?height=600&width=800",
  },
]
export default function PortfolioPreview() {
  const [activeCategory, setActiveCategory] = useState<string>("Todos")
  const sectionRef = useRef<HTMLDivElement>(null)
  useGSAP()

  const filteredItems =
    activeCategory === "Todos" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  useEffect(() => {
    if (gsap && sectionRef.current) {
      try {
        const title = sectionRef.current.querySelector(".section-title")
        const filters = sectionRef.current.querySelector(".filters")
        const items = sectionRef.current.querySelectorAll(".portfolio-item")

        if (title) {
          gsap.fromTo(
            title,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
              },
            },
          )
        }

        if (filters) {
          gsap.fromTo(
            filters,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: 0.2,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
              },
            },
          )
        }

        if (items.length) {
          gsap.fromTo(
            items,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.1,
              duration: 0.6,
              scrollTrigger: {
                trigger: items[0],
                start: "top 85%",
              },
            },
          )
        }
      } catch (error) {
        console.error("Animation error in PortfolioPreview:", error)
      }
    }
  }, [])

  // Animation when category changes
  useEffect(() => {
    try {
      const items = document.querySelectorAll(".portfolio-item")
      if (items.length) {
        gsap.fromTo(
          items,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            stagger: 0.1,
            duration: 0.4,
            ease: "power2.out",
          },
        )
      }
    } catch (error) {
      console.error("Animation error on category change:", error)
    }
  }, [activeCategory])

  return (
    <section className="py-20 bg-muted/10 px-5 md:px-12" ref={sectionRef}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">
            Nuestro <span className="text-gradient">Portafolio</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Explora algunos de nuestros proyectos más destacados y descubre cómo hemos ayudado a nuestros clientes a
            alcanzar sus objetivos.
          </p>

          <div className="filters flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "btn-gradient" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="portfolio-item border-gradient card-gradient overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <span className="inline-block text-xs font-medium bg-primary/20 text-primary px-2 py-1 rounded-full mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <Button variant="ghost" size="sm" asChild className="mt-2 group">
                        <Link to={`/portafolio/${item.id}`} className="flex items-center">
                          Ver proyecto
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link to="/portafolio">Ver portafolio completo</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
