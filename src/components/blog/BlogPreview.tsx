"use client"

import { useEffect, useRef } from "react"

import { ArrowRight, Calendar } from "lucide-react"
import { Card, CardContent } from "../ui/Card"
import { Button } from "../buttons/Buttons"
import { useGSAP } from "../../lib/gsap-utils"
import { Link } from "react-router-dom"
import gsap from "gsap"

const blogPosts = [
  {
    id: 1,
    title: "10 tendencias de diseño web para 2023",
    excerpt: "Descubre las tendencias de diseño web que dominarán este año y cómo implementarlas en tu sitio.",
    image: "/placeholder.svg?height=400&width=600",
    date: "15 Mar 2023",
    category: "Diseño Web",
  },
  {
    id: 2,
    title: "Cómo crear una estrategia de branding efectiva",
    excerpt: "Aprende los pasos clave para desarrollar una estrategia de branding que conecte con tu audiencia.",
    image: "/placeholder.svg?height=400&width=600",
    date: "28 Feb 2023",
    category: "Branding",
  },
  {
    id: 3,
    title: "Guía completa de SEO para principiantes",
    excerpt: "Todo lo que necesitas saber para mejorar el posicionamiento de tu sitio web en los motores de búsqueda.",
    image: "/placeholder.svg?height=400&width=600",
    date: "10 Feb 2023",
    category: "SEO",
  },
]
export default function BlogPreview() {
  useGSAP()

  const sectionRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (sectionRef.current) {
      try {
        const title = sectionRef.current.querySelector(".section-title")
        const description = sectionRef.current.querySelector(".section-description")
        const posts = sectionRef.current.querySelectorAll(".blog-post")
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

        if (description) {
          gsap.fromTo(
            description,
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

        if (posts.length) {
          gsap.fromTo(
            posts,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.1,
              duration: 0.6,
              scrollTrigger: {
                trigger: posts[0],
                start: "top 85%",
              },
            },
          )
        }
      } catch (error) {
        console.error("Animation error in BlogPreview:", error)
      }
    }
  }, [])
  return (
    <section className="py-20 bg-muted/10" ref={sectionRef}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">
            Nuestro <span className="text-gradient">Blog</span>
          </h2>
          <p className="section-description text-muted-foreground">
            Consejos, tendencias y recursos para ayudarte a mejorar tu presencia digital y estrategia de marca.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="blog-post border-gradient card-gradient overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block text-xs font-medium bg-primary/20 text-primary px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="ghost" size="sm" asChild className="group">
                    <Link to={`/blog/${post.id}`} className="flex items-center">
                      Leer más
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link to="/blog">Ver todos los artículos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
