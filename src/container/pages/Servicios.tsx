"use client"

import { useEffect, useRef } from "react"
 
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
 
import { Palette, Globe, Share2, TrendingUp, Users,   CheckCircle } from "lucide-react"
// import { Button } from "../../components/buttons/Buttons"
import { Card, CardContent } from "../../components/ui/Card"
import CtaSection from "../../components/Home/CtaSections"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ServiciosPage() {
    useEffect(()=>{
    window.scroll(0,0)
  },[])
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero animations
    if (heroRef.current) {
      const title = heroRef.current.querySelector(".hero-title")
      const description = heroRef.current.querySelector(".hero-description")

      gsap.fromTo(title, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" })

      gsap.fromTo(
        description,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power3.out" },
      )
    }

    // Services animations
    if (servicesRef.current) {
      const services = servicesRef.current.querySelectorAll(".service-card")

      gsap.fromTo(
        services,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
          },
        },
      )
    }
  }, [])

  return (
    <div className="px-5 md:px-12">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden ">
        {/* Background shapes */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] rounded-full bg-primary/10 blur-[100px]"></div>
          <div className="absolute bottom-1/3 left-1/3 w-[25rem] h-[25rem] rounded-full bg-secondary/10 blur-[100px]"></div>
        </div>

        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nuestros <span className="text-gradient">Servicios</span>
            </h1>

            <p className="hero-description text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Soluciones integrales de branding y marketing digital diseñadas para impulsar tu negocio y conectar con tu
              audiencia.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" ref={servicesRef}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <div className="sticky top-32">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Diseño Web</h2>
                <p className="text-muted-foreground mb-6">
                  Creamos sitios web atractivos, funcionales y optimizados que convierten visitantes en clientes.
                  Nuestro enfoque combina diseño innovador, experiencia de usuario intuitiva y optimización técnica.
                </p>
                {/* <Button asChild className=" ">
                  <Link href="/servicios/diseno-web" className="flex items-center">
                    Más información
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button> */}
              </div>
            </div>

            <div>
              <Card className="service-card border-gradient card-gradient overflow-hidden mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Sitios web responsive</h3>
                  <p className="text-muted-foreground mb-4">
                    Diseñamos sitios web que se adaptan perfectamente a cualquier dispositivo, garantizando una
                    experiencia óptima para todos tus usuarios.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Adaptación a móviles, tablets y escritorio</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Tiempo de carga optimizado</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Diseño intuitivo y fácil navegación</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="service-card border-gradient card-gradient overflow-hidden mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Optimización SEO</h3>
                  <p className="text-muted-foreground mb-4">
                    Implementamos las mejores prácticas de SEO para mejorar tu visibilidad en los motores de búsqueda y
                    atraer tráfico cualificado.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Investigación de palabras clave</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Optimización técnica y de contenido</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Mejora de la velocidad de carga</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="service-card border-gradient card-gradient overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">E-commerce</h3>
                  <p className="text-muted-foreground mb-4">
                    Desarrollamos tiendas online completas y personalizadas que maximizan las conversiones y ofrecen una
                    experiencia de compra excepcional.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Integración con pasarelas de pago</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Gestión de inventario</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Proceso de compra optimizado</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="md:order-2">
              <div className="sticky top-32">
                <div className="h-16 w-16 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                  <Palette className="h-8 w-8 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Branding</h2>
                <p className="text-muted-foreground mb-6">
                  Creamos identidades de marca memorables que conectan con tu audiencia y comunican tus valores. Nuestro
                  enfoque estratégico combina investigación, creatividad y estrategia para desarrollar marcas con
                  propósito.
                </p>
                {/* <Button asChild className="group">
                  <Link href="/servicios/branding" className="flex items-center">
                    Más información
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button> */}
              </div>
            </div>

            <div className="md:order-1">
              <Card className="service-card border-gradient card-gradient overflow-hidden mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Diseño de logos</h3>
                  <p className="text-muted-foreground mb-4">
                    Creamos logos únicos y memorables que capturan la esencia de tu marca y conectan con tu audiencia.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                      <span>Conceptualización estratégica</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                      <span>Múltiples propuestas creativas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                      <span>Versiones adaptadas a diferentes usos</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="service-card border-gradient card-gradient overflow-hidden mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Identidad visual</h3>
                  <p className="text-muted-foreground mb-4">
                    Desarrollamos sistemas visuales completos que garantizan la coherencia de tu marca en todos los
                    puntos de contacto.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                      <span>Paleta de colores y tipografía</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                      <span>Elementos gráficos y patrones</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                      <span>Aplicaciones en diferentes soportes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="service-card border-gradient card-gradient overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Manual de marca</h3>
                  <p className="text-muted-foreground mb-4">
                    Creamos guías completas que establecen las normas de uso de tu marca para garantizar su correcta
                    aplicación.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                      <span>Normas de uso del logotipo</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                      <span>Aplicaciones correctas e incorrectas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                      <span>Tono de voz y mensajes clave</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <div className="sticky top-32">
                <div className="h-16 w-16 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                  <Share2 className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Redes Sociales</h2>
                <p className="text-muted-foreground mb-6">
                  Desarrollamos estrategias de redes sociales que generan engagement, construyen comunidad y aumentan la
                  visibilidad de tu marca. Nuestro enfoque se centra en crear contenido relevante y de valor para tu
                  audiencia.
                </p>
                {/* <Button asChild className="group">
                  <Link href="/servicios/redes-sociales" className="flex items-center">
                    Más información
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button> */}
              </div>
            </div>

            <div>
              <Card className="service-card border-gradient card-gradient overflow-hidden mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Gestión de redes sociales</h3>
                  <p className="text-muted-foreground mb-4">
                    Administramos tus perfiles en redes sociales para construir una comunidad activa y comprometida con
                    tu marca.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 shrink-0 mt-0.5" />
                      <span>Planificación de contenido</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 shrink-0 mt-0.5" />
                      <span>Creación y publicación de posts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 shrink-0 mt-0.5" />
                      <span>Interacción con la comunidad</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="service-card border-gradient card-gradient overflow-hidden mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Creación de contenido</h3>
                  <p className="text-muted-foreground mb-4">
                    Desarrollamos contenido atractivo y relevante que conecta con tu audiencia y refuerza los valores de
                    tu marca.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 shrink-0 mt-0.5" />
                      <span>Diseño de posts y stories</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 shrink-0 mt-0.5" />
                      <span>Producción de videos y reels</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 shrink-0 mt-0.5" />
                      <span>Copywriting estratégico</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="service-card border-gradient card-gradient overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Análisis y reportes</h3>
                  <p className="text-muted-foreground mb-4">
                    Monitorizamos el rendimiento de tus redes sociales para optimizar la estrategia y maximizar los
                    resultados.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 shrink-0 mt-0.5" />
                      <span>Seguimiento de métricas clave</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 shrink-0 mt-0.5" />
                      <span>Informes mensuales de rendimiento</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 shrink-0 mt-0.5" />
                      <span>Recomendaciones de mejora</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="md:order-2">
              <div className="sticky top-32">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Publicidad Digital</h2>
                <p className="text-muted-foreground mb-6">
                  Diseñamos y gestionamos campañas publicitarias efectivas que generan leads, ventas y reconocimiento de
                  marca. Nuestro enfoque basado en datos garantiza la optimización continua y el máximo retorno de
                  inversión.
                </p>
                {/* <Button asChild className="group">
                  <Link href="/servicios/publicidad-digital" className="flex items-center">
                    Más información
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button> */}
              </div>
            </div>

            <div className="md:order-1">
              <Card className="service-card border-gradient card-gradient overflow-hidden mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Facebook & Instagram Ads</h3>
                  <p className="text-muted-foreground mb-4">
                    Creamos campañas publicitarias en Facebook e Instagram que conectan con tu audiencia y generan
                    resultados.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Segmentación avanzada de audiencia</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Diseño de anuncios atractivos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Optimización continua de campañas</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="service-card border-gradient card-gradient overflow-hidden mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Google Ads</h3>
                  <p className="text-muted-foreground mb-4">
                    Desarrollamos campañas en Google Ads que captan a usuarios con intención de compra y maximizan las
                    conversiones.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Investigación de palabras clave</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Creación de anuncios persuasivos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Seguimiento y optimización de conversiones</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="service-card border-gradient card-gradient overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Landing Pages</h3>
                  <p className="text-muted-foreground mb-4">
                    Diseñamos páginas de aterrizaje optimizadas para convertir visitantes en leads o clientes.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Diseño centrado en conversión</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Copywriting persuasivo</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>A/B testing para optimización</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="sticky top-32">
                <div className="h-16 w-16 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Consultoría</h2>
                <p className="text-muted-foreground mb-6">
                  Ofrecemos asesoramiento estratégico para ayudarte a definir y alcanzar tus objetivos de marketing y
                  branding. Nuestro enfoque personalizado se adapta a las necesidades específicas de tu negocio.
                </p>
                {/* <Button asChild className="group">
                  <Link href="/servicios/consultoria" className="flex items-center">
                    Más información
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button> */}
              </div>
            </div>

            <div>
              <Card className="service-card border-gradient card-gradient overflow-hidden mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Diagnóstico de marca</h3>
                  <p className="text-muted-foreground mb-4">
                    Analizamos el estado actual de tu marca para identificar fortalezas, debilidades y oportunidades de
                    mejora.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                      <span>Análisis de identidad visual</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                      <span>Evaluación de posicionamiento</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                      <span>Identificación de áreas de mejora</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="service-card border-gradient card-gradient overflow-hidden mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Estrategia digital</h3>
                  <p className="text-muted-foreground mb-4">
                    Desarrollamos planes estratégicos para optimizar tu presencia digital y alcanzar tus objetivos de
                    negocio.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                      <span>Definición de objetivos SMART</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                      <span>Planificación de acciones</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                      <span>Indicadores de seguimiento</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="service-card border-gradient card-gradient overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Formación y workshops</h3>
                  <p className="text-muted-foreground mb-4">
                    Impartimos sesiones formativas para que tu equipo adquiera las habilidades necesarias para gestionar
                    tu marca.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                      <span>Talleres de branding</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                      <span>Formación en redes sociales</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                      <span>Sesiones de estrategia digital</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-muted/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para <span className="text-gradient">transformar</span> tu marca?
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos de negocio.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="btn-gradient text-lg px-8 py-6">Agenda tu cita</Button>

              <Button variant="outline" className="text-lg px-8 py-6">
                Solicita tu propuesta
              </Button>
            </div>
          </div>
        </div>
      </section> */}
      <CtaSection/>
    </div>
  )
}
