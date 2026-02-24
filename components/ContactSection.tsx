import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin } from "lucide-react"

export default function ContactSection() {
  return (
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
                      <p className="text-gray-800 font-semibold">Parque Alem, Bahía Blanca</p>
                      <p className="text-gray-600 text-sm">(a metros del Skatepark)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-bmx-pink/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-bmx-pink" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold">+54 9 1234 5678</p>
                      <p className="text-gray-600 text-sm">Lunes a viernes, 9–18 hs</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-bmx-green/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5 text-bmx-green"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h18M9 3v2m6-2v2M4 9h16v12H4z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold">info@abbmxfreestyle.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5 text-yellow-600"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold">@abbmxescuela</p>
                      <p className="text-gray-600 text-sm">Instagram oficial</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
