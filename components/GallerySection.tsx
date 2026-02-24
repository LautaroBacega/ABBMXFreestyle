import { useState } from "react"
import Image from "next/image"
import Lightbox from "@/components/lightbox"
import foto1 from "../public/images/IMG_0810.jpeg"
import foto2 from "../public/images/IMG_2999.jpeg"
import foto3 from "../public/images/IMG_4506.jpeg"
import foto4 from "../public/images/IMG_4936.jpeg"
import foto5 from "../public/images/IMG_6412.jpeg"
import foto6 from "../public/images/IMG_8794.jpeg"

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const galleryImages = [foto1, foto2, foto3, foto4, foto5, foto6]

  return (
    <section id="galeria" className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-2 text-center animate-on-scroll section-title">
          GALERÍA <span className="text-bmx-orange">DE FOTOS</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto animate-on-scroll">
          Mira lo que hacemos en nuestras clases. ¡Vos también podes ser parte!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((foto, index) => (
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
  )
}
