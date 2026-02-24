export default function CampeonatoSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-bmx-pink/10 to-bmx-blue/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll">
          <h2 className="text-4xl font-bold mb-6 text-center section-title">
            CAMPEONATO ARGENTINO DE <span className="text-bmx-blue">BMX FREESTYLE</span>
          </h2>
          <div className="mb-8 flex justify-center">
            <img 
              src="/images/BMX-ABRIL-FEED.png" 
              alt="Campeonato Argentino de BMX Freestyle"
              className="rounded-lg shadow-lg max-w-sm h-auto"
            />
          </div>
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
  )
}
