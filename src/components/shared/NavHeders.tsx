 
import { Link } from 'react-router-dom';
 
 import  bandcraft from '../../assets/img/Brandcraft_LETRAS+TEXTO.png';
import { cn } from '../../lib/utils';
 import {  Menu, X } from 'lucide-react';
 import { useEffect, useState } from 'react';
import { Button } from '../buttons/Buttons';

// const navigation = [
//     { id: 'home', title: 'Home', href: '/', current: true },
//     // { id: 'services2', title: 'services2', href: '/services2', current: false },
//     // { id: 'about', title: 'About Us', href: '/about', current: false },
//     // { id: 'paquetes', title: 'Paquetes', href: '/services2', current: false },
//     // { id: 'Price', title: 'Blog', current: false },
//     // { id: 'Presentecion', title: 'Contact', href: '/', current: false },
     

// ]
 
function NavHeaders() {
      const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // Set initial scroll state
    handleScroll()

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true })
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  
    return (

       <header
      className={cn(
        "header fixed top-0 w-full z-[100] transition-all duration-300 md:px-12",
        scrolled ? "bg-gray-900 bg-opacity-20 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 mx-3">
        <img src={bandcraft}  className=' w-36 h-14 md:w-28 md:h-12' alt="" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Inicio
          </Link>

          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                Servicios <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48">
              <DropdownMenuItem asChild>
                <Link to="/servicios/diseno-web">Diseño Web</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/servicios/branding">Branding</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/servicios/redes-sociales">Redes Sociales</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/servicios/publicidad-digital">Publicidad Digital</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/servicios/consultoria">Consultoría</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}

          <Link to="/Servicios" className="text-sm font-medium hover:text-primary transition-colors">
            Servicios
          </Link>
          {/* <Link to="/nosotros" className="text-sm font-medium hover:text-primary transition-colors">
            Nosotros
          </Link> */}
{/* 
          <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">
            Blog
          </Link> */}

          <Link to="/precios" className="text-sm font-medium hover:text-primary transition-colors">
            Precios
          </Link>

          <Link to="/contacto" className="text-sm font-medium hover:text-primary transition-colors">
            Contacto
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button className="btn-gradient">Agenda tu cita</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-14 mt-10 z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="flex flex-col p-6 space-y-4  bg-black text-white  ">
          <Link to="/" className="text-lg font-medium py-2 hover:text-primary transition-colors" onClick={toggleMenu}>
            Inicio
          </Link>

          {/* <div className="py-2 border-b border-border">
            <h3 className="text-lg font-medium mb-2">Servicios</h3>
            <div className="pl-4 space-y-2">
              <Link
                to="/servicios/diseno-web"
                className="block text-sm hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Diseño Web
              </Link>
              <Link
                to="/servicios/branding"
                className="block text-sm hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Branding
              </Link>
              <Link
                to="/servicios/redes-sociales"
                className="block text-sm hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Redes Sociales
              </Link>
              <Link
                to="/servicios/publicidad-digital"
                className="block text-sm hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Publicidad Digital
              </Link>
              <Link
                to="/servicios/consultoria"
                className="block text-sm hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Consultoría
              </Link>
            </div>
          </div> */}

          <Link
            to="/servicios"
            className="text-lg font-medium py-2 hover:text-primary transition-colors"
            onClick={toggleMenu}
          >
            Servicios
          </Link>

          {/* <Link
            to="/nosotros"
            className="text-lg font-medium py-2 hover:text-primary transition-colors"
            onClick={toggleMenu}
          >
            Nosotros
          </Link>

          <Link
            to="/blog"
            className="text-lg font-medium py-2 hover:text-primary transition-colors"
            onClick={toggleMenu}
          >
            Blog
          </Link> */}

          {/* <Link
            to="/precios"
            className="text-lg font-medium py-2 hover:text-primary transition-colors"
            onClick={toggleMenu}
          >
            Precios
          </Link> */}

          <Link
            to="/contacto"
            className="text-lg font-medium py-2 hover:text-primary transition-colors"
            onClick={toggleMenu}
          >
            Contacto
          </Link>

          <Button className="btn-gradient mt-4 w-full">Agenda tu cita</Button>
        </nav>
      </div>
    </header>

    )
}
 

export default   NavHeaders
 