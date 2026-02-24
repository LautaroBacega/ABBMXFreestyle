import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="mt-20 mb-10">
      <div className="container mx-auto px-4 z-10 text-center pt-20">
        <div className="flex justify-center mb-8 mt-20 sm:mt-8">
          <div className="relative">
            <Image
              src="/images/logo.png"
              alt="ABBMX Freestyle Logo"
              width={200}
              height={200}
              className="animate-float"
            />
            {/* Badge único: siempre centrado y por encima del logo */}
            <div className="absolute left-1/2 -top-8 transform -translate-x-1/2 bg-gradient-to-r from-bmx-pink to-bmx-blue text-white font-bold px-4 py-2 rounded-full animate-pulse shadow-lg z-20 rotate-6 w-44 text-center text-sm leading-snug break-words whitespace-normal">
              ¡Inscripciones 2026 abiertas!
            </div>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-800">
          ¡APRENDÉ <span className="text-bmx-blue">BMX</span> Y DIVERTITE!
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://forms.gle/ks8rqw71n6CspcYE9"
            target="_blank"
            rel="noopener noreferrer"
            className="
                inline-flex items-center justify-center  // Centrado perfecto como un botón
                bg-bmx-pink hover:bg-bmx-pink/80 
                text-white rounded-full 
                text-lg                                  // Tamaño de texto original
                px-8 py-3                                // Padding típico de size='lg' (ajustar según necesidad)
                font-semibold                            // Grosor de fuente común en botones
                transition-all duration-300 
                hover:scale-105                          // Efecto hover opcional
                focus:outline-none focus:ring-2          // Estilos de focus accesibles
                focus:ring-bmx-pink focus:ring-opacity-80
                shadow-lg                                // Sombra similar a botones
                hover:shadow-xl                          // Efecto hover de sombra
              "
          >
            ¡QUIERO INSCRIBIRME!
          </a>
          <a
            href="#horarios"
            className="
                inline-flex items-center justify-center
                border border-bmx-blue text-bmx-blue
                hover:bg-bmx-blue/20
                rounded-full text-lg
                px-8 py-3
                font-semibold
                transition-all duration-300
                focus:outline-none focus:ring-2
                focus:ring-bmx-blue focus:ring-opacity-50
              "
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("horarios")
              if (element) {
                const elementPosition = element.getBoundingClientRect().top + window.scrollY - 120
                window.scrollTo({
                  top: elementPosition,
                  behavior: "smooth"
                })
              }
            }}
          >
            VER HORARIOS
          </a>
        </div>

      </div>
    </section>
  )
}
