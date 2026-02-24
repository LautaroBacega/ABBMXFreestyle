import Image from "next/image"

export default function FooterSection() {
  return (
    <footer className="w-full py-10 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Image src="/images/logo.png" alt="ABBMX Freestyle Logo" width={80} height={80} />
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-600 mb-2">
              © 2026 ABBMX Freestyle. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 justify-center md:justify-end">
              <a href="https://www.instagram.com/abbmxescuela" target="_blank" rel="noopener noreferrer">
                <Image src="/images/icons8-instagram.svg" alt="Instagram" width={24} height={24} />
              </a>
              <a href="https://wa.link/zwm5na" target="_blank" rel="noopener noreferrer">
                <Image src="/images/icons8-whatsapp.svg" alt="WhatsApp" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
