
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border px-8">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gradient">BrandCraft</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Transformamos negocios a través del branding estratégico y el marketing digital innovador.
            </p>
            <div className="flex space-x-4">
              <Link to="https://www.facebook.com/profile.php?id=61576469619228"
                className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to="https://www.instagram.com/brandcraftcreate8?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Servicios
                </span>
              </li>
              <li>
                <span className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Portafolio
                </span>
              </li>
              <li>
                <span className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Nosotros
                </span>
              </li>
              <li>
                <span className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Blog
                </span>
              </li>
              <li>
                <span className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Precios
                </span>
              </li>
              <li>
                <span className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contacto
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <span
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Diseño Web
                </span>
              </li>
              <li>
                <span
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Branding
                </span>
              </li>
              <li>
                <span
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Redes Sociales
                </span>
              </li>
              <li>
                <span
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Publicidad Digital
                </span>
              </li>
              <li>
                <span
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Consultoría
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Suscríbete</h3>
            <p className="text-muted-foreground text-sm mb-4">Recibe nuestras últimas noticias y ofertas especiales.</p>
            <div className="space-y-2">
              <input type="email" placeholder="Tu correo electrónico" className="bg-muted/30" />
              <button className="w-full btn-gradient">Suscribirse</button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} BrandCraft Studio. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Términos y Condiciones
            </span>
            <span className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Política de Privacidad
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
