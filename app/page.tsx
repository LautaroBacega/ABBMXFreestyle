"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube, ChevronDown, MessageCircle } from "lucide-react"

export default function Home() {
  const animatedElementsRef = useRef<HTMLElement[]>([])

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
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Image
                src="/images/logo.png"
                alt="ABBMX Freestyle Logo"
                width={200}
                height={200}
                className="animate-float"
              />
              <div className="absolute -top-5 -right-5 bg-bmx-pink text-white text-sm font-bold px-3 py-1 rounded-full rotate-12 animate-pulse">
                ¡Inscripciones abiertas!
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-800">
            ¡APRENDE <span className="text-bmx-blue">BMX</span> Y DIVIÉRTETE!
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            La escuela más divertida para aprender trucos increíbles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-bmx-pink hover:bg-bmx-pink/80 text-white rounded-full text-lg">
              ¡QUIERO INSCRIBIRME!
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-bmx-blue text-bmx-blue hover:bg-bmx-blue/20 rounded-full text-lg"
            >
              VER CLASES
            </Button>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-10 w-10 text-gray-800" />
          </div>
        </div>
      </section>

      {/* Horarios Section */}
      <section id="horarios" className="w-full py-20 bg-white bg-dots">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-2 text-center animate-on-scroll section-title">
            HORARIOS <span className="text-bmx-pink">SUPER COOL</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto animate-on-scroll">
            Elige el horario que más te guste y ven a divertirte con nosotros. ¡Tenemos clases para todos los niveles!
          </p>

          <div className="overflow-x-auto animate-on-scroll">
            <div className="bg-white rounded-2xl shadow-lg p-6 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-bmx-blue font-bold text-lg">Día</TableHead>
                    <TableHead className="text-bmx-blue font-bold text-lg">Mañana</TableHead>
                    <TableHead className="text-bmx-blue font-bold text-lg">Tarde</TableHead>
                    <TableHead className="text-bmx-blue font-bold text-lg">Nivel</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="hover:bg-blue-50">
                    <TableCell className="font-bold text-gray-800">Lunes</TableCell>
                    <TableCell>10:00 - 12:00</TableCell>
                    <TableCell>16:00 - 18:00</TableCell>
                    <TableCell>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                        Principiantes
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-blue-50">
                    <TableCell className="font-bold text-gray-800">Martes</TableCell>
                    <TableCell>10:00 - 12:00</TableCell>
                    <TableCell>16:00 - 18:00</TableCell>
                    <TableCell>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
                        Intermedio
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-blue-50">
                    <TableCell className="font-bold text-gray-800">Miércoles</TableCell>
                    <TableCell>10:00 - 12:00</TableCell>
                    <TableCell>16:00 - 18:00</TableCell>
                    <TableCell>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                        Avanzado
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-blue-50">
                    <TableCell className="font-bold text-gray-800">Jueves</TableCell>
                    <TableCell>10:00 - 12:00</TableCell>
                    <TableCell>16:00 - 18:00</TableCell>
                    <TableCell>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                        Principiantes
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-blue-50">
                    <TableCell className="font-bold text-gray-800">Viernes</TableCell>
                    <TableCell>10:00 - 12:00</TableCell>
                    <TableCell>16:00 - 18:00</TableCell>
                    <TableCell>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                        Todos los niveles
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-blue-50">
                    <TableCell className="font-bold text-gray-800">Sábado</TableCell>
                    <TableCell>09:00 - 13:00</TableCell>
                    <TableCell>15:00 - 19:00</TableCell>
                    <TableCell>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                        Todos los niveles
                      </span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="mt-10 text-center animate-on-scroll">
            <Link href="/inscripcion">
              <Button className="bg-bmx-green hover:bg-bmx-green/80 text-white rounded-full text-lg">
                ¡RESERVA TU LUGAR AHORA!
              </Button>
            </Link>
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
            Mira lo que hacemos en nuestras clases. ¡Tú también puedes ser parte de esto!
          </p>

          <div className="gallery-grid animate-on-scroll">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="gallery-item aspect-square">
                <Image
                  src={`/placeholder.svg?height=400&width=400&text=BMX+${item}`}
                  alt={`BMX Freestyle imagen ${item}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center animate-on-scroll">
            <Button variant="outline" className="border-bmx-orange text-bmx-orange hover:bg-bmx-orange/20 rounded-full">
              VER MÁS FOTOS INCREÍBLES
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section id="testimonios" className="w-full py-20 bg-bmx-blue/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-2 text-center animate-on-scroll section-title">
            LO QUE DICEN <span className="text-bmx-blue">NUESTROS RIDERS</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto animate-on-scroll">
            Nuestros alumnos son nuestra mejor carta de presentación. ¡Mira lo que opinan de nosotros!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Carlos, 12 años",
                text: "¡Me encanta venir a ABBMX! Los profes son geniales y he aprendido un montón de trucos nuevos. ¡Es lo más divertido que hago en la semana!",
                level: "Intermedio",
                color: "bg-bmx-blue",
              },
              {
                name: "Laura, 14 años",
                text: "Al principio tenía miedo, pero los instructores me ayudaron mucho. Ahora puedo hacer trucos que nunca pensé que podría hacer. ¡Es increíble!",
                level: "Principiante",
                color: "bg-bmx-pink",
              },
              {
                name: "Miguel, 16 años",
                text: "Llevo 2 años en la escuela y es como mi segunda casa. He hecho muchos amigos y los profes siempre nos motivan a superarnos. ¡100% recomendado!",
                level: "Avanzado",
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
                    <div className="flex text-yellow-400">
                      {"★★★★★".split("").map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </div>
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
            Ven a visitarnos y conoce nuestras instalaciones. ¡Te esperamos con los brazos abiertos!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="animate-on-scroll">
              <div className="h-[400px] bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Aquí iría el mapa de Google Maps */}
                <div className="w-full h-full flex items-center justify-center bg-gray-100 text-center p-4 rounded-2xl">
                  <p className="text-gray-500">Mapa de Google Maps (Se requiere API Key para la integración)</p>
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
                        <p className="text-gray-600">Av. Principal 123, Ciudad</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-bmx-pink/10 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-bmx-pink" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">Teléfono</p>
                        <p className="text-gray-600">+123 456 7890</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-bmx-green/10 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-bmx-green" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">Email</p>
                        <p className="text-gray-600">info@abbmxfreestyle.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-bmx-orange/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-bmx-orange" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">Horario de Atención</p>
                        <p className="text-gray-600">Lunes a Sábado: 9:00 - 20:00</p>
                      </div>
                    </div>

                    <div className="flex gap-4 mt-6">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-bmx-blue text-bmx-blue hover:bg-bmx-blue/10"
                      >
                        <Instagram className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-bmx-pink text-bmx-pink hover:bg-bmx-pink/10"
                      >
                        <Facebook className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-bmx-orange text-bmx-orange hover:bg-bmx-orange/10"
                      >
                        <Youtube className="h-5 w-5" />
                      </Button>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">¿LISTO PARA LA AVENTURA?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            No esperes más para unirte a la comunidad BMX más divertida. ¡Inscríbete ahora y comienza a vivir la
            experiencia!
          </p>
          <Button size="lg" className="bg-white text-bmx-pink hover:bg-white/90 rounded-full text-lg font-bold px-8">
            ¡QUIERO SER PARTE DE ABBMX!
          </Button>
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
                © {new Date().getFullYear()} ABBMX Freestyle. ¡Todos los derechos reservados!
              </p>
              <div className="flex gap-4 justify-center md:justify-end">
                <Link href="/terminos" className="text-sm text-gray-500 hover:text-bmx-blue">
                  Términos y Condiciones
                </Link>
                <Link href="/privacidad" className="text-sm text-gray-500 hover:text-bmx-blue">
                  Política de Privacidad
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Botón de WhatsApp flotante */}
      <a
        href="https://wa.me/123456789?text=Hola,%20me%20interesa%20información%20sobre%20las%20clases%20de%20BMX"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button bg-[#25D366] text-white p-3 rounded-full shadow-lg"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </main>
  )
}
