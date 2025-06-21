"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import { Input } from "../../components/ui/Input"
import { Label } from "@radix-ui/react-dropdown-menu"
import { Card, CardContent } from "../../components/ui/Card"
import { Textarea } from "../../components/ui/textarea"
import { Button } from "../../components/buttons/Buttons"
import { Select, SelectContent, SelectItem, SelectValue } from "../../components/ui/Select"
import { SelectTrigger } from "@radix-ui/react-select"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ContactoPage() {
  const [formState, setFormState] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const heroRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, servicio: value }))
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://formspree.io/f/mjkreooy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setFormState({
          nombre: "",
          email: "",
          telefono: "",
          servicio: "",
          mensaje: "",
        });

        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert("Error al enviar el mensaje. Inténtalo más tarde.");
      }
    } catch (error) {
      console.error("Error al enviar:", error);
    }

    setIsSubmitting(false);
  };


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

    // Form animations
    if (formRef.current) {
      const formCard = formRef.current.querySelector(".form-card")

      gsap.fromTo(
        formCard,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
          },
        },
      )
    }

    // Info animations
    if (infoRef.current) {
      const infoCard = infoRef.current.querySelector(".info-card")
      const infoItems = infoRef.current.querySelectorAll(".info-item")

      gsap.fromTo(
        infoCard,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        infoItems,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          delay: 0.3,
          scrollTrigger: {
            trigger: infoRef.current,
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
              <span className="text-gradient">Contáctanos</span>
            </h1>

            <p className="hero-description text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Cuéntanos sobre tu proyecto y nos pondremos en contacto contigo lo antes
              posible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20" ref={formRef}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="form-card border-gradient card-gradient">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>

                  {isSubmitted ? (
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                      <h3 className="text-xl font-medium text-green-500 mb-2">¡Mensaje enviado!</h3>
                      <p className="text-muted-foreground">
                        Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} method="post" className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label >Nombre completo</Label>
                          <Input
                            id="nombre"
                            name="nombre"
                            value={formState.nombre}
                            onChange={handleChange}
                            placeholder="Tu nombre"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label  >Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="tu@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label  >Teléfono</Label>
                          <Input
                            id="telefono"
                            name="telefono"
                            value={formState.telefono}
                            onChange={handleChange}
                            placeholder="Tu teléfono"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label  >Servicio de interés</Label>
                          <Select value={formState.servicio} onValueChange={handleSelectChange}>
                            <SelectTrigger id="servicio">
                              <SelectValue placeholder="Selecciona un servicio" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="branding">Branding</SelectItem>
                              <SelectItem value="web">Diseño Web</SelectItem>
                              <SelectItem value="social">Redes Sociales</SelectItem>
                              <SelectItem value="ads">Publicidad Digital</SelectItem>
                              <SelectItem value="consultoria">Consultoría</SelectItem>
                              <SelectItem value="otro">Otro</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label  >Mensaje</Label>
                        <Textarea
                          id="mensaje"
                          name="mensaje"
                          value={formState.mensaje}
                          onChange={handleChange}
                          placeholder="Cuéntanos sobre tu proyecto o consulta"
                          rows={5}
                          required
                        />
                      </div>
                      <input type="hidden" name="_subject" value="Nuevo mensaje desde BandCraft 📥" />
                      <input type="hidden" name="_next" value="https://tu-sitio.com/gracias" />
                      <input type="hidden" name="_replyto" value={formState.email} />

                      <Button type="submit" className="w-full btn-gradient" disabled={isSubmitting}>
                        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div ref={infoRef}>
              <Card className="info-card border-gradient card-gradient h-full">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>

                  <div className="space-y-6">
                    <div className="info-item flex items-start">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Email</h3>
                        <p className="text-muted-foreground mb-1">Para consultas generales:</p>
                        <a href="mailto:info@brandcraft.com" className="text-primary hover:underline">
                          bandcraft.digital@gmail.com
                        </a>
                        <p className="text-muted-foreground mt-2 mb-1">Para soporte técnico:</p>
                        <a href="mailto:soporte@brandcraft.com" className="text-primary hover:underline">
                          bandcraft.digital@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="info-item flex items-start">
                      <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center mr-4 shrink-0">
                        <Phone className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Teléfono</h3>
                        <p className="text-muted-foreground mb-1">Oficina principal:</p>
                        <a href="tel:+50762301894" className="text-secondary hover:underline">
                          +507 6230 1894
                        </a>
                        <p className="text-muted-foreground mt-2 mb-1">WhatsApp:</p>
                        <a href="https://wa.me/50762301894" className="text-secondary hover:underline">
                          +507 6230 1894
                        </a>
                      </div>
                    </div>

                    <div className="info-item flex items-start">
                      <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center mr-4 shrink-0">
                        <MapPin className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        {/* <h3 className="font-medium mb-1">Dirección</h3>
                        <p className="text-muted-foreground mb-1">Oficina central:</p>
                        <p>
                          Calle Gran Vía 123
                          <br />
                          28013 Madrid, España
                        </p> */}
                        <p className="text-muted-foreground mt-2 mb-1">Horario de atención:</p>
                        <p>Lunes a Domingo</p>
                      </div>
                    </div>

                    <div className="info-item">
                      <h3 className="font-medium mb-3">Síguenos en redes sociales</h3>
                      <div className="flex space-x-4">
                        <a
                          href="https://www.facebook.com/profile.php?id=61576469619228"
                          className="h-10 w-10 rounded-full bg-muted/30 flex items-center justify-center hover:bg-primary/20 transition-colors"
                        >
                          <Facebook className="h-5 w-5" />

                          <span className="sr-only">Facebook</span>
                        </a>
                        <a
                          href="https://www.instagram.com/brandcraftcreate8?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                          className="h-10 w-10 rounded-full bg-muted/30 flex items-center justify-center hover:bg-primary/20 transition-colors"
                        >
                          <Instagram className="h-5 w-5" />
                          <span className="sr-only">Instagram</span>
                        </a>
                        <a
                          href="#"
                          className="h-10 w-10 rounded-full bg-muted/30 flex items-center justify-center hover:bg-primary/20 transition-colors"
                        >
                          <Twitter className="h-5 w-5" />
                          <span className="sr-only">Twitter</span>
                        </a>
                        <a
                          href="#"
                          className="h-10 w-10 rounded-full bg-muted/30 flex items-center justify-center hover:bg-primary/20 transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/10">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Encuéntranos</h2>
            <p className="text-muted-foreground">Visita nuestra oficina central en el corazón de Madrid.</p>
          </div>

          <div className="border-gradient card-gradient rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0357265159115!2d-79.51986938542977!3d8.982379993569486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8b24a40d9f9%3A0x3320426d1b39d98a!2sCiudad%20de%20Panam%C3%A1!5e0!3m2!1ses-419!2spa!4v1717767848000!5m2!1ses-419!2spa"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de BrandCraft Studio"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Prefieres que te <span className="text-gradient">llamemos</span>?
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Agenda una llamada con uno de nuestros expertos para discutir tu proyecto sin compromiso.
            </p>

            <Button className="btn-gradient text-lg px-8 py-6">Agendar una llamada</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
