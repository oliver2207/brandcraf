"use client"
"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "../buttons/Buttons"
import { Link } from "react-router-dom"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function CtaSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (gsap && sectionRef.current) {
      try {
        // Registrar el plugin (es seguro llamarlo varias veces)
        gsap.registerPlugin(ScrollTrigger)
        const elements = sectionRef.current.querySelectorAll(".animate-item")
        if (elements.length) {
          gsap.fromTo(
            elements,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.1,
              duration: 0.8,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
              },
            },
          )
        }
      } catch (error) {
        console.error("Animation error in CtaSection:", error)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <section ref={sectionRef} className="py-20 relative overflow-hidden">
        {/* Background shapes */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] rounded-full bg-primary/10 blur-[100px]"></div>
          <div className="absolute bottom-1/3 left-1/3 w-[25rem] h-[25rem] rounded-full bg-secondary/10 blur-[100px]"></div>
        </div>

        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="animate-item text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              ¿Listo para <span className="text-gradient">transformar</span> tu marca?
            </h2>

            <p className="animate-item text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos de negocio.
            </p>

            <div className="animate-item flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* <Button className="btn-gradient text-lg px-8 py-6">Agenda tu cita</Button> */}

              <Button variant="outline" className="text-lg px-8 py-6">
                <a
                  href="https://wa.me/+50762301894?text=Hola%2C%20me%20interesa%20más%20información%20sobre%20tus%20servicios"
                  rel="noopener noreferrer"

                >
                  Solicita tu propuesta

                </a>
              </Button>

              <Button variant="ghost" className="text-lg" asChild>
                <Link to="/contacto" className="flex items-center">
                  Contáctanos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>    </section>
  )
}
