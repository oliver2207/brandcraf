 

function ClientSecctions() {
  return (
     <section className="py-16 bg-muted/10">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="animate-on-scroll text-3xl font-bold mb-4">Confían en nosotros</h2>
            <p className="animate-on-scroll text-muted-foreground">
              Empresas líderes que han transformado su presencia digital con nuestras soluciones.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <div className="animate-on-scroll stagger-item client-logo p-4 grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="Cliente 1"
                width={120}
                height={60}
                className="h-12 object-contain"
              />
            </div>
            <div className="animate-on-scroll stagger-item client-logo p-4 grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="Cliente 2"
                width={120}
                height={60}
                className="h-12 object-contain"
              />
            </div>
            <div className="animate-on-scroll stagger-item client-logo p-4 grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="Cliente 3"
                width={120}
                height={60}
                className="h-12 object-contain"
              />
            </div>
            <div className="animate-on-scroll stagger-item client-logo p-4 grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="Cliente 4"
                width={120}
                height={60}
                className="h-12 object-contain"
              />
            </div>
            <div className="animate-on-scroll stagger-item client-logo p-4 grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="Cliente 5"
                width={120}
                height={60}
                className="h-12 object-contain"
              />
            </div>
            <div className="animate-on-scroll stagger-item client-logo p-4 grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="Cliente 6"
                width={120}
                height={60}
                className="h-12 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

  )
}

export default ClientSecctions
