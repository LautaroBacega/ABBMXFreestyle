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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.png" alt="ABBMX Freestyle Logo" width={60} height={60} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#horarios" className="text-gray-800 hover:text-bmx-blue font-medium transition-colors">
              Horarios
            </Link>
            <Link href="#galeria" className="text-gray-800 hover:text-bmx-blue font-medium transition-colors">
              Galería
            </Link>
            <Link href="#testimonios" className="text-gray-800 hover:text-bmx-blue font-medium transition-colors">
              Testimonios
            </Link>
            <Link href="#contacto" className="text-gray-800 hover:text-bmx-blue font-medium transition-colors">
              Contacto
            </Link>
            <Button className="bg-bmx-pink hover:bg-bmx-pink/80 text-white rounded-full">¡Inscribite!</Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-gray-800" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center py-8 space-y-6">
            <Link
              href="#horarios"
              className="text-gray-800 hover:text-bmx-blue font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Horarios
            </Link>
            <Link
              href="#galeria"
              className="text-gray-800 hover:text-bmx-blue font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Galería
            </Link>
            <Link
              href="#testimonios"
              className="text-gray-800 hover:text-bmx-blue font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonios
            </Link>
            <Link
              href="#contacto"
              className="text-gray-800 hover:text-bmx-blue font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <Button className="bg-bmx-pink hover:bg-bmx-pink/80 text-white rounded-full">¡Inscribite!</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
