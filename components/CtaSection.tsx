export default function CtaSection() {
  return (
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
  )
}
