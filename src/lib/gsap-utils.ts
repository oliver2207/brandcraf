"use client"

import { useEffect, useState } from "react"

// Versión simplificada que no depende de la inicialización de GSAP
export function useGSAP() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Proporciona funciones de animación simples que no dependen de GSAP
  return {
    isClient,
    // Función de animación simple para elementos que aparecen con fade
    fadeIn: (element: HTMLElement | null, delay = 0) => {
      if (!element || !isClient) return

      setTimeout(() => {
        element.style.opacity = "0"
        element.style.transform = "translateY(20px)"
        element.style.transition = "opacity 0.6s ease, transform 0.6s ease"

        // Forzar un reflow para que la transición funcione
        void element.offsetWidth

        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }, delay * 1000)
    },

    // Función para animar elementos cuando aparecen en el viewport
    fadeInOnScroll: (elements: NodeListOf<Element> | HTMLElement[] | null) => {
      if (!elements || !isClient) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement
              setTimeout(() => {
                el.style.opacity = "1"
                el.style.transform = "translateY(0)"
              }, index * 100) // Stagger effect

              observer.unobserve(el)
            }
          })
        },
        { threshold: 0.1 },
      )

      Array.from(elements).forEach((el) => {
        const element = el as HTMLElement
        element.style.opacity = "0"
        element.style.transform = "translateY(20px)"
        element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
        observer.observe(element)
      })

      return () => {
        Array.from(elements).forEach((el) => {
          observer.unobserve(el)
        })
      }
    },
  }
}

// Clase de utilidad para agregar a elementos que queremos animar
export const ANIMATE_CLASS = "animate-on-scroll"

// Inicializa las animaciones basadas en scroll para toda la página
export function initScrollAnimations() {
  if (typeof window === "undefined") return

  const animatedElements = document.querySelectorAll(`.${ANIMATE_CLASS}`)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated")
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 },
  )

  animatedElements.forEach((el) => {
    observer.observe(el)
  })
}
