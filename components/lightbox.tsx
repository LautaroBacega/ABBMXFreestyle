"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface LightboxProps {
  images: string[]
  initialIndex?: number
  onClose: () => void
}

export default function Lightbox({ images, initialIndex = 0, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Prevenir scroll cuando el lightbox está abierto
    document.body.style.overflow = "hidden"

    // Manejar teclas para navegación
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowRight") {
        nextImage()
      } else if (e.key === "ArrowLeft") {
        prevImage()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    // Precargar la imagen actual usando el objeto HTMLImageElement nativo
    const imgElement = document.createElement("img")
    imgElement.src = images[currentIndex]
    imgElement.onload = () => setIsLoading(false)

    return () => {
      document.body.style.overflow = "auto"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [currentIndex, images, onClose])

  const nextImage = () => {
    setIsLoading(true)
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setIsLoading(true)
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      <button
        className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 z-[60]"
        onClick={onClose}
        aria-label="Cerrar"
      >
        <X className="h-6 w-6" />
      </button>

      <div className="relative w-full h-full max-w-5xl max-h-[90vh] mx-auto px-4 flex items-center justify-center">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-[55]">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        <div className="relative w-full h-[70vh] md:h-[80vh]">
          <img
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`Imagen ${currentIndex + 1}`}
            className={`w-full h-full object-contain transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
            onLoad={() => setIsLoading(false)}
          />
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full z-[60]">
          {currentIndex + 1} / {images.length}
        </div>

        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white z-[60]"
          onClick={prevImage}
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white z-[60]"
          onClick={nextImage}
          aria-label="Imagen siguiente"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
