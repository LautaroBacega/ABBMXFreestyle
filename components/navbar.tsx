"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - 120
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 h-20 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.png" alt="ABBMX Freestyle Logo" width={60} height={60} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#horarios" 
              className="text-gray-800 hover:text-bmx-blue font-medium transition-colors cursor-pointer"
              onClick={(e) => handleNavClick(e, "horarios")}
            >
              Horarios
            </a>
            <a 
              href="#faq" 
              className="text-gray-800 hover:text-bmx-blue font-medium transition-colors cursor-pointer"
              onClick={(e) => handleNavClick(e, "faq")}
            >
              Información
            </a>
            <a 
              href="#galeria" 
              className="text-gray-800 hover:text-bmx-blue font-medium transition-colors cursor-pointer"
              onClick={(e) => handleNavClick(e, "galeria")}
            >
              Galería
            </a>
            <a 
              href="#testimonios" 
              className="text-gray-800 hover:text-bmx-blue font-medium transition-colors cursor-pointer"
              onClick={(e) => handleNavClick(e, "testimonios")}
            >
              Testimonios
            </a>
            <a 
              href="#contacto" 
              className="text-gray-800 hover:text-bmx-blue font-medium transition-colors cursor-pointer"
              onClick={(e) => handleNavClick(e, "contacto")}
            >
              Contacto
            </a>
            <a
              href="https://forms.gle/ks8rqw71n6CspcYE9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-bmx-pink hover:bg-bmx-pink/80 text-white rounded-full px-6 py-3 transition-all duration-300"
            >
              ¡Inscribite!
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-gray-800" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed top-0 left-0 w-full bg-white shadow-lg z-40"
          onClick={() => setIsMenuOpen(false)}
        >
          <nav className="flex flex-col items-center pt-16 pb-8 space-y-6" onClick={(e) => e.stopPropagation()}>
            <div className="absolute top-3 right-4">
              <button
                aria-label="Cerrar menú"
                className="p-2 rounded-md text-gray-800 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <a
              href="#horarios"
              className="text-gray-800 hover:text-bmx-blue font-medium transition-colors cursor-pointer"
              onClick={(e) => handleNavClick(e, "horarios")}
            >
              Horarios
            </a>
            <a
              href="#faq"
              className="text-gray-800 hover:text-bmx-blue font-medium transition-colors cursor-pointer"
              onClick={(e) => handleNavClick(e, "faq")}
            >
              Información
            </a>
            <a
              href="#galeria"
              className="text-gray-800 hover:text-bmx-blue font-medium transition-colors cursor-pointer"
              onClick={(e) => handleNavClick(e, "galeria")}
            >
              Galería
            </a>
            <a
              href="#testimonios"
              className="text-gray-800 hover:text-bmx-blue font-medium transition-colors cursor-pointer"
              onClick={(e) => handleNavClick(e, "testimonios")}
            >
              Testimonios
            </a>
            <a
              href="#contacto"
              className="text-gray-800 hover:text-bmx-blue font-medium transition-colors cursor-pointer"
              onClick={(e) => handleNavClick(e, "contacto")}
            >
              Contacto
            </a>
            <a
              href="https://forms.gle/ks8rqw71n6CspcYE9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-bmx-pink hover:bg-bmx-pink/80 text-white rounded-full px-6 py-3 transition-all duration-300"
            >
              ¡Inscribite!
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
