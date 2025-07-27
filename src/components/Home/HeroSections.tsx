 
import { Link } from "react-router-dom"
import { Button } from "../buttons/Buttons"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
       <section className="relative min-h-[90vh] flex items-center pt-1 overflow-hidden">
      {/* Background shapes */}
  <div className="absolute inset-0 -z-10 overflow-hidden">
  <div className="animate-on-scroll absolute top-1/4 right-1/4 w-[30rem] h-[30rem] rounded-full bg-primary/10 blur-[100px]"></div>
  <div className="animate-on-scroll absolute bottom-1/3 left-1/3 w-[25rem] h-[25rem] rounded-full bg-secondary/10 blur-[100px]"></div>
  <div className="animate-on-scroll absolute top-1/2 left-1/4 w-[20rem] h-[20rem] rounded-full bg-accent/10 blur-[100px]"></div>
</div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            Creamos <span className="text-gradient">marcas</span> que <br className="hidden md:block" />
            <span className="text-gradient">transforman</span> negocios
          </h1>

          <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agencia de branding y marketing digital especializada en crear experiencias de marca memorables.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* <Button className="hero-cta btn-gradient text-lg px-8 py-6">Agenda tu cita</Button> */}

            <Button className="hero-cta bg-black border border-amber-50 variant-outline text-lg px-8 py-6" variant="outline">
                   <a
              href="https://wa.me/+50762301894?text=Hola%2C%20me%20interesa%20más%20información%20sobre%20tus%20servicios"
               rel="noopener noreferrer"

            >
                             Solicita tu propuesta

            </a>
            </Button>

            <Button className="hero-cta variant-ghost text-lg" variant="ghost" asChild>
              <Link to="/servicios" className="flex items-center">
                Conoce nuestros servicios
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
