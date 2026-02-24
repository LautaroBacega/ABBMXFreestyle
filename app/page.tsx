"use client"

import { useEffect, useRef } from "react"

// section components
import HeroSection from "@/components/HeroSection"
import CampeonatoSection from "@/components/CampeonatoSection"
import HorariosSection from "@/components/HorariosSection"
import FaqSection from "@/components/FaqSection"
import GallerySection from "@/components/GallerySection"
import TestimonialsSection from "@/components/TestimonialsSection"
import ContactSection from "@/components/ContactSection"
import CtaSection from "@/components/CtaSection"
import FooterSection from "@/components/FooterSection"

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

  // Intentar forzar la reproducción del video en cliente para evitar
  // que el navegador muestre el botón de "play" en móviles cuando
  // la reproducción automática se bloquee.
  useEffect(() => {
    const video = document.querySelector('.hero-video') as HTMLVideoElement | null
    if (video) {
      try {
        video.playsInline = true
        video.muted = true
        const playPromise = video.play()
        if (playPromise && typeof playPromise.catch === 'function') {
          playPromise.catch(() => {
            // Ignorar error si el navegador bloquea la reproducción
          })
        }
      } catch (e) {
        // Ignorar cualquier error de reproducción
      }
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />

      <CampeonatoSection />

      <HorariosSection />

      <FaqSection />

      <GallerySection />

      <TestimonialsSection />

      <ContactSection />

      <CtaSection />

      <FooterSection />
    </main>
  )
}
