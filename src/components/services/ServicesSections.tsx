"use client"
 
import { Palette, Globe, Share2, TrendingUp, Users, ArrowRight } from "lucide-react"
import { Button } from "../buttons/Buttons"
import { Link } from "react-router-dom"
import { Card, CardContent } from "../ui/Card"

export default function ServicesSection() {
  return (
    <section className="py-20 px-5 md:px-12">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="animate-on-scroll section-title text-3xl md:text-4xl font-bold mb-4">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="animate-on-scroll section-description text-muted-foreground">
            Ofrecemos soluciones integrales de branding y marketing digital para impulsar tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="animate-on-scroll stagger-item service-card border-gradient card-gradient overflow-hidden group">
            <CardContent className="p-0">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Diseño Web"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <Globe className="h-8 w-8 text-primary mb-2" />
                  <h3 className="text-xl font-bold">Diseño Web</h3>
                </div>
              </div>
              <div className="p-6 pt-4">
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                    Sitios web responsive
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                    Optimización SEO
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                    Integración con redes sociales
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                    Formularios y automatizaciones
                  </li>
                </ul>
                <Button variant="ghost" size="sm" asChild className="group">
                  <Link to="/servicios/diseno-web" className="flex items-center">
                    Ver más
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-on-scroll stagger-item service-card border-gradient card-gradient overflow-hidden group">
            <CardContent className="p-0">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Branding"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <Palette className="h-8 w-8 text-secondary mb-2" />
                  <h3 className="text-xl font-bold">Branding</h3>
                </div>
              </div>
              <div className="p-6 pt-4">
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary mr-2"></span>
                    Diseño de logos
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary mr-2"></span>
                    Manual de marca
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary mr-2"></span>
                    Paleta de colores
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary mr-2"></span>
                    Tipografía y elementos gráficos
                  </li>
                </ul>
                <Button variant="ghost" size="sm" asChild className="group">
                  <Link to="/servicios/branding" className="flex items-center">
                    Ver más
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-on-scroll stagger-item service-card border-gradient card-gradient overflow-hidden group">
            <CardContent className="p-0">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Redes Sociales"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <Share2 className="h-8 w-8 text-accent mb-2" />
                  <h3 className="text-xl font-bold">Redes Sociales</h3>
                </div>
              </div>
              <div className="p-6 pt-4">
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></span>
                    Contenido mensual
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></span>
                    Plantillas personalizadas
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></span>
                    Reels y videos
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></span>
                    Gestión de comunidad
                  </li>
                </ul>
                <Button variant="ghost" size="sm" asChild className="group">
                  <Link to="/servicios/redes-sociales" className="flex items-center">
                    Ver más
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-on-scroll stagger-item service-card border-gradient card-gradient overflow-hidden group">
            <CardContent className="p-0">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Publicidad Digital"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <TrendingUp className="h-8 w-8 text-primary mb-2" />
                  <h3 className="text-xl font-bold">Publicidad Digital</h3>
                </div>
              </div>
              <div className="p-6 pt-4">
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                    Facebook Ads
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                    Google Ads
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                    Landing pages
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                    Análisis y optimización
                  </li>
                </ul>
                <Button variant="ghost" size="sm" asChild className="group">
                  <Link to="/servicios/publicidad-digital" className="flex items-center">
                    Ver más
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-on-scroll stagger-item service-card border-gradient card-gradient overflow-hidden group">
            <CardContent className="p-0">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Consultoría"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <Users className="h-8 w-8 text-secondary mb-2" />
                  <h3 className="text-xl font-bold">Consultoría</h3>
                </div>
              </div>
              <div className="p-6 pt-4">
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary mr-2"></span>
                    Diagnóstico de marca
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary mr-2"></span>
                    Estrategia digital
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary mr-2"></span>
                    Análisis de competencia
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary mr-2"></span>
                    Plan de acción personalizado
                  </li>
                </ul>
                <Button variant="ghost" size="sm" asChild className="group">
                  <Link to="/servicios/consultoria" className="flex items-center">
                    Ver más
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button asChild className="animate-on-scroll">
            <Link to="/servicios">Ver todos los servicios</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
