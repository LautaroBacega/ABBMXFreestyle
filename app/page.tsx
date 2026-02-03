"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Phone, MapPin, Clock, ChevronDown, InstagramIcon } from "lucide-react"
import foto1 from "../public/images/IMG_0810.jpeg"
import foto2 from "../public/images/IMG_2999.jpeg"
import foto3 from "../public/images/IMG_4506.jpeg"
import foto4 from "../public/images/IMG_4936.jpeg"
import foto5 from "../public/images/IMG_6412.jpeg"
import foto6 from "../public/images/IMG_8794.jpeg"
import Lightbox from "@/components/lightbox"

export default function Home() {
  const animatedElementsRef = useRef<HTMLElement[]>([])
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const galleryImages = [foto1, foto2, foto3, foto4, foto5, foto6]

  useEffect(() => {
    // Intersection Observer para animaciones al hacer scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    // Seleccionar todos los elementos con la clase animate-on-scroll
    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => {
      observer.observe(el)
      animatedElementsRef.current.push(el as HTMLElement)
    })

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section con video de fondo */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="hero-video">
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-bmx-rider-doing-a-trick-on-a-ramp-32807-large.mp4"
            type="video/mp4"
          />
          Tu navegador no soporta videos HTML5.
        </video>
        <div className="hero-overlay"></div>

        <div className="container mx-auto px-4 z-10 text-center">
          <div className="flex justify-center mb-8 mt-20 sm:mt-8">
            <div className="relative">
              <Image
                src="/images/logo.png"
                alt="ABBMX Freestyle Logo"
                width={200}
                height={200}
                className="animate-float"
              />
              <div className="absolute -top-16 right-0 bg-gradient-to-r from-bmx-pink to-bmx-blue text-white text-sm font-bold px-4 py-2 rounded-full rotate-6 animate-pulse shadow-lg">
                ¡Inscripciones abiertas!
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-800">
            ¡APRENDÉ <span className="text-bmx-blue">BMX</span> Y DIVERTITE!
          </h1>
          {/* <p className="text-xl md:text-2xl mb-8 text-gray-700">
            La escuela más divertida para aprender trucos increíbles
          </p> */}
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
            >
              VER HORARIOS
            </a>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block z-10">
            <ChevronDown className="h-10 w-10 text-gray-800" />
          </div>
        </div>
      </section>

      {/* Campeonato Argentino de BMX Freestyle Section */}
      <section className="w-full py-20 bg-gradient-to-r from-bmx-pink/10 to-bmx-blue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-4xl font-bold mb-6 text-center section-title">
              CAMPEONATO ARGENTINO DE <span className="text-bmx-blue">BMX FREESTYLE</span>
            </h2>
            <p className="text-lg text-gray-700 mb-10">
              ¡Demostrá tus habilidades! Participá en el campeonato argentino y competí con los mejores riders del país. 
              Inscribite ahora y sé parte de esta experiencia increíble.
            </p>
            <a
              href="https://forms.gle/Yo7GNU2AsBqVdUA27"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center
                bg-gradient-to-r from-bmx-pink to-bmx-blue
                hover:from-bmx-pink/80 hover:to-bmx-blue/80
                text-white rounded-full 
                text-lg
                px-10 py-4
                font-bold
                transition-all duration-300 
                hover:scale-105
                focus:outline-none focus:ring-2
                focus:ring-bmx-blue focus:ring-opacity-80
                shadow-xl
                hover:shadow-2xl
              "
            >
              INSCRIBIRSE AL CAMPEONATO
            </a>
          </div>
        </div>
      </section>

      {/* Horarios Section */}
      <section id="horarios" className="w-full py-20 bg-white bg-dots">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-2 text-center animate-on-scroll section-title">
            HORARIOS <span className="text-bmx-blue">DE CLASES</span>
          </h2>
          {/* <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto animate-on-scroll">
            Elige el horario que más te guste y ven a divertirte con nosotros. ¡Tenemos clases para todos los niveles!
          </p> */}

          <div className="flex justify-center animate-on-scroll">
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6 overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-bmx-blue font-bold text-lg">Día</TableHead>
                      <TableHead className="text-bmx-blue font-bold text-lg">Horario</TableHead>
                      <TableHead className="text-bmx-blue font-bold text-lg">Nivel</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="hover:bg-blue-50">
                      <TableCell className="font-bold text-gray-800">Lunes</TableCell>
                      <TableCell>19:00 - 20:30</TableCell>
                      <TableCell>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold inline-block text-center">
                            Iniciantes
                          </span>
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold inline-block text-center">
                            Expertos
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-blue-50">
                      <TableCell className="font-bold text-gray-800">Martes</TableCell>
                      <TableCell>19:00 - 20:30</TableCell>
                      <TableCell>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold inline-block text-center">
                            Avanzados
                          </span>
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold inline-block text-center">
                            Expertos
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-blue-50">
                      <TableCell className="font-bold text-gray-800">Miércoles</TableCell>
                      <TableCell>19:00 - 20:30</TableCell>
                      <TableCell>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold inline-block text-center">
                            Avanzados
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-blue-50">
                      <TableCell className="font-bold text-gray-800">Jueves</TableCell>
                      <TableCell>19:00 - 20:30</TableCell>
                      <TableCell>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold inline-block text-center">
                            Todas las categorias
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-blue-50">
                      <TableCell className="font-bold text-gray-800">Viernes</TableCell>
                      <TableCell>19:00 - 20:30</TableCell>
                      <TableCell>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold inline-block text-center">
                            Iniciantes
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center animate-on-scroll">
            <a
              href="https://forms.gle/ks8rqw71n6CspcYE9" 
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-flex items-center justify-center
              bg-bmx-green hover:bg-bmx-green/80 
              text-white rounded-full 
              text-lg
              px-8 py-3
              font-semibold
              transition-all duration-300
              hover:scale-105
              focus:outline-none focus:ring-2
              focus:ring-bmx-green focus:ring-opacity-80
              shadow-lg hover:shadow-xl
            "
            >
              ¡RESERVÁ TU LUGAR AHORA!
            </a>
          </div>
        </div>
      </section>

      {/* Galería Section */}
      <section id="galeria" className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-2 text-center animate-on-scroll section-title">
            GALERÍA <span className="text-bmx-orange">DE FOTOS</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto animate-on-scroll">
            Mira lo que hacemos en nuestras clases. ¡Vos también podes ser parte!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[foto1, foto2, foto3, foto4, foto5, foto6].map((foto, index) => (
              <div
                key={index}
                className="gallery-card"
                onClick={() => {
                  setCurrentImageIndex(index)
                  setLightboxOpen(true)
                }}
              >
                <div className="relative overflow-hidden rounded-xl shadow-md h-64 sm:h-72 md:h-80 cursor-pointer transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <Image
                    src={foto || "/placeholder.svg"}
                    alt={`BMX Freestyle imagen ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <span className="text-white font-medium">Ver imagen</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {lightboxOpen && (
            <Lightbox
              images={galleryImages.map((img) => img.src)}
              initialIndex={currentImageIndex}
              onClose={() => setLightboxOpen(false)}
            />
          )}

          <div className="mt-10 text-center animate-on-scroll">
            <a
              href="https://www.instagram.com/abbmxescuela?igsh=MXdjMDF4MTdoejA1aw=="
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-flex items-center justify-center
              border border-bmx-orange
              text-bmx-orange
              hover:bg-bmx-orange/20
              rounded-full
              px-5 py-3
              font-medium
              transition-all duration-300
              hover:shadow-md
              focus:outline-none focus:ring-2
              focus:ring-bmx-orange focus:ring-opacity-50
            "
            >
              VER MÁS FOTOS
            </a>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section id="testimonios" className="w-full py-20 bg-bmx-blue/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-2 text-center animate-on-scroll section-title">
            QUE DICEN <span className="text-bmx-blue">NUESTROS ALUMNOS Y SUS PADRES</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto animate-on-scroll">
            Nuestros alumnos son nuestra mejor carta de presentación. ¡Mira lo que opinan de nosotros!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Juanpe, 9 años",
                text: "¡Me encanta venir a clases! Los profes son geniales y he aprendido un montón de trucos nuevos. ¡Es lo más divertido que hago en la semana!",
                level: "Avanzados",
                color: "bg-bmx-blue",
              },
              {
                name: "Sofi, 11 años",
                text: "Al principio tenía miedo, pero los instructores me ayudaron mucho. Ahora puedo hacer trucos que nunca pensé que podría hacer!",
                level: "Iniciantes",
                color: "bg-bmx-pink",
              },
              {
                name: "Gena, 13 años",
                text: "Hace 2 años vengo a la escuela de bmx y es como mi segunda casa. Hice muchos amigos y los profes siempre nos motivan a superarnos.",
                level: "Expertos",
                color: "bg-bmx-green",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-none shadow-lg rounded-2xl card-hover animate-on-scroll">
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold text-lg`}
                      >
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">Nivel: {testimonial.level}</p>
                      </div>
                    </div>
                    <p className="text-gray-700">{testimonial.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa y Contacto Section */}
      <section id="contacto" className="w-full py-20 bg-white bg-zigzag">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-2 text-center animate-on-scroll section-title">
            ¿DÓNDE <span className="text-bmx-green">ESTAMOS?</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto animate-on-scroll">
            Vení a visitarnos y conoce las pistas. ¡Te esperamos con los brazos abiertos!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Mapa Parque de Mayo */}
              <div className="animate-on-scroll">
                <div className="h-[400px] bg-white rounded-2xl shadow-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d389.22728958810825!2d-62.27124697959446!3d-38.69901742923302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbb4fd306ad6d%3A0x813e6f97d0ef782f!2sBahia%20Blanca%20Skate%20Park%20Parque%20de%20Mayo!5e0!3m2!1ses!2sar!4v1746494985962!5m2!1ses!2sar"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa Parque de Mayo"
                  ></iframe>
                </div>
              </div>

              {/* Mapa Skatepark Vieytes */}
              <div className="animate-on-scroll">
                <div className="h-[400px] bg-white rounded-2xl shadow-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1556.8233938963253!2d-62.29350400160522!3d-38.702957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbb0008763df3%3A0xa626446da37f5e0d!2sSkatepark%20Vieytes%20Bahia%20Blanca!5e0!3m2!1ses!2sar!4v1746495009153!5m2!1ses!2sar"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa Skatepark Vieytes"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll">
              <Card className="bg-white border-none shadow-lg rounded-2xl h-full">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">¡Contáctanos!</h3>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-bmx-blue/10 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-bmx-blue" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">Dirección</p>
                        <p className="text-gray-600">Av. Alem 1400 - Sede principal</p>
                        <p className="text-gray-600">Vieytes y Av. Buenos Aires - 17 de Mayo</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-bmx-pink/10 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-bmx-pink" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">Teléfono</p>
                        <a
                          href="tel:+5492914393572"
                          className="text-gray-600 hover:text-bmx-blue transition-colors duration-200"
                          aria-label="Llamar al +54 9 291 439-3572"
                        >
                          +54 9 291 439-3572
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-bmx-green/10 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-bmx-green"
                        >
                          <path d="M17.6 6.8A7.8 7.8 0 0 0 12 4c-4.4 0-8 3.6-8 8 0 1.4.4 2.8 1 4l-1 3 3.2-.8c1.2.6 2.5 1 3.8 1 4.4 0 8-3.6 8-8 0-2.2-.8-4.2-2.4-5.8z" />
                          <path d="m12 17-1.2-1.2a1 1 0 0 0-1.4 0L8 17l-1.8-.7c-.5-.2-.7-.8-.5-1.3l.5-1c.2-.5 0-1-.4-1.2l-1.3-.6c-.5-.2-.8-.8-.6-1.3l1-2A7 7 0 0 1 12 5a7 7 0 0 1 7 7 7 7 0 0 1-7 7v-2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">Whatsapp</p>
                        <a
                          href="https://wa.link/zwm5na"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-bmx-green transition-colors duration-200"
                          aria-label="Enviar mensaje por WhatsApp"
                        >
                          Enviar consulta!
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-bmx-blue/10 flex items-center justify-center">
                        <InstagramIcon className="h-5 w-5 text-bmx-blue" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-blue">Instagram</p>
                        <a
                          href="https://www.instagram.com/abbmxescuela?igsh=MXdjMDF4MTdoejA1aw=="
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-bmx-blue transition-colors duration-200"
                          aria-label="Visitar perfil de Instagram"
                        >
                          @abbmxescuela
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-bmx-orange/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-bmx-orange" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">Horario de clases</p>
                        <p className="text-gray-600">Lunes a viernes: 18:00 - 19:30</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-gradient-to-r from-bmx-blue to-bmx-pink">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">¿LISTO PARA ANDAR EN BICI?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            No esperes más para sumarte a las clases BMX. ¡Inscribite ahora y empezá a pedalear!
          </p>
          <a
            href="https://forms.gle/ks8rqw71n6CspcYE9"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              bg-white text-bmx-pink
              hover:bg-white/90
              rounded-full text-lg
              font-bold
              px-8 py-4
              transition-all duration-300
              shadow-md hover:shadow-lg
              border-2 border-transparent
              focus:outline-none focus:ring-2
              focus:ring-bmx-pink focus:ring-opacity-50
            "
          >
            ¡QUIERO SER PARTE DE ABBMX!
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-10 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Image src="/images/logo.png" alt="ABBMX Freestyle Logo" width={120} height={120} />
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-600 mb-2">
                © {new Date().getFullYear()} ABBMX Freestyle. Todos los derechos reservados.
              </p>
              <div className="flex gap-4 justify-center md:justify-end">
                <p className="text-sm text-gray-500 hover:text-bmx-blue">Términos y Condiciones</p>
                <p className="text-sm text-gray-500 hover:text-bmx-blue">Política de Privacidad</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Botón de WhatsApp flotante */}
      <a
        href="https://wa.link/zwm5na"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button bg-[#25D366] text-white p-2 rounded-full shadow-lg hover:bg-[#20ba5a] transition-colors flex items-center justify-center"
      >
        <Image
          src="/images/icons8-whatsapp.svg"
          alt="WhatsApp"
          width={32}
          height={32}
          className="w-8 h-8"
        />
      </a>
    </main>
  )
}
