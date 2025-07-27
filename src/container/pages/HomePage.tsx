import { ChevronRight, Globe, Palette, Share2, Star, TrendingUp, Users } from "lucide-react"
import HeroSection from "../../components/Home/HeroSections"
import { Card, CardContent } from "../../components/ui/Card"
import { Button } from "../../components/buttons/Buttons"
import { Link } from "react-router-dom"
import ServicesSection from "../../components/services/ServicesSections"
import PortfolioPreview from "../../components/Home/PortFolio"
// import ClientSecctions from "../../components/Home/ClientSecctions"
// import TestimonialsSection from "../../components/Testimonials/TestimonialsSections"
// import BlogPreview from "../../components/blog/BlogPreview"
import CtaSection from "../../components/Home/CtaSections"
import { useEffect } from "react"




function HomePage() {
  useEffect(()=>{
    window.scroll(0,0)
  },[])
  return (
    <>
      <HeroSection />

      <section className="py-20 bg-black px-12">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold mb-4">
              Transformamos tu <span className="text-gradient">visión</span> en una marca poderosa
            </h2>
            <p className="animate-on-scroll text-muted-foreground">
              Nuestro enfoque estratégico combina creatividad y tecnología para crear experiencias de marca memorables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="animate-on-scroll stagger-item benefit-card border-gradient card-gradient">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 ">Diseño Innovador</h3>
                <p className="text-muted-foreground">
                  Creamos diseños únicos que capturan la esencia de tu marca y conectan con tu audiencia.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-on-scroll stagger-item benefit-card border-gradient card-gradient">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Presencia Digital</h3>
                <p className="text-muted-foreground">
                  Desarrollamos estrategias digitales que maximizan tu visibilidad online y generan resultados.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-on-scroll stagger-item benefit-card border-gradient card-gradient">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Share2 className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Engagement Social</h3>
                <p className="text-muted-foreground">
                  Creamos contenido que resuena con tu audiencia y genera conversaciones en torno a tu marca.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-on-scroll stagger-item benefit-card border-gradient card-gradient">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Crecimiento Medible</h3>
                <p className="text-muted-foreground">
                  Implementamos estrategias basadas en datos para impulsar el crecimiento sostenible de tu negocio.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-on-scroll stagger-item benefit-card border-gradient card-gradient">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Experiencia de Usuario</h3>
                <p className="text-muted-foreground">
                  Diseñamos experiencias intuitivas y atractivas que convierten visitantes en clientes leales.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-on-scroll stagger-item benefit-card border-gradient card-gradient">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Calidad Premium</h3>
                <p className="text-muted-foreground">
                  Nos comprometemos con la excelencia en cada proyecto, superando las expectativas de nuestros clientes.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="animate-on-scroll group">
              <Link to="/servicios">
                Explorar todos los servicios
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* card */}
      <ServicesSection />
      {/* portafolio */}
      <PortfolioPreview />
      {/* Client Seccionrt */}
      {/* <ClientSecctions /> */}
      {/* Testimonio */}
      {/* <TestimonialsSection /> */}
      {/* Blog */}
      {/* <BlogPreview /> */}
      {/* Cta */}
   <CtaSection/>
    </>
  )
}

export default HomePage
