"use client"

import type React from "react"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { initScrollAnimations } from "../../lib/gsap-utils"

declare global {
  interface Window {
    ScrollTrigger?: {
      getAll?: () => Array<{ kill: () => void }>
    }
  }
}

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation()

  useEffect(() => {
    // Limpia triggers de GSAP si usas ScrollTrigger
    if (window.ScrollTrigger && typeof window.ScrollTrigger.getAll === "function") {
      window.ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }

    // Inicializar animaciones basadas en scroll
    initScrollAnimations()

    // Animar elementos del hero y header inmediatamente
    const animateInitialElements = () => {
      document.querySelectorAll(".hero-title, .hero-subtitle, .hero-cta, .header").forEach((el) => {
        el.classList.add("animated")
      })
    }

    setTimeout(animateInitialElements, 100)

    // Calculate and set header height as a CSS variable for proper content spacing
    const updateHeaderHeight = () => {
      const header = document.querySelector(".header")
      if (header) {
        const headerHeight = header.getBoundingClientRect().height
        document.documentElement.style.setProperty("--header-offset", `${headerHeight}px`)
      }
    }

    updateHeaderHeight()
    window.addEventListener("resize", updateHeaderHeight)

    return () => {
      window.removeEventListener("resize", updateHeaderHeight)
    }
  }, [location])

  return <>{children}</>
}