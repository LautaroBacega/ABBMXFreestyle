import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function FaqSection() {
  return (
    <section id="faq" className="w-full py-20 bg-gradient-to-r from-bmx-pink/5 to-bmx-blue/5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-2 text-center animate-on-scroll section-title">
          INFORMACIÓN / <span className="text-bmx-pink">PREGUNTAS FRECUENTES</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto animate-on-scroll">
          Resolvemos tus dudas sobre nuestras clases, requisitos y todo lo que necesitas saber
        </p>

        <div className="max-w-3xl mx-auto animate-on-scroll">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-gray-300 rounded-lg px-6 py-2 bg-white">
              <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-bmx-blue">
                ¿Cuáles son las categorías disponibles?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 mt-4">
                Contamos con tres categorías: <strong>Iniciantes</strong>, <strong>Avanzados</strong> y <strong>Expertos</strong>. Cada categoría tiene horarios asignados para optimizar el aprendizaje según el nivel de experiencia.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-300 rounded-lg px-6 py-2 bg-white">
              <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-bmx-blue">
                ¿Cuál es el horario de clases?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 mt-2">
                <strong>Desde febrero:</strong>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Iniciantes:</strong> Miércoles, jueves y viernes (19:00-20:30 hs en verano, 18:00-19:30 hs desde marzo)</li>
                  <li><strong>Avanzados:</strong> Martes, miércoles y jueves (19:00-20:30 hs en verano, 18:00-19:30 hs desde marzo)</li>
                  <li><strong>Expertos:</strong> Lunes, martes y jueves (19:00-20:30 hs en verano, 18:00-19:30 hs desde marzo)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-300 rounded-lg px-6 py-2 bg-white">
              <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-bmx-blue">
                ¿Cuántas clases semanales hay y cuánto duran?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 mt-4">
                Dictamos <strong>tres clases semanales por categoría</strong>, con una duración de <strong>90 minutos cada una</strong>. Las clases se desarrollan utilizando las tres pistas disponibles: Dirt (Alem), Skatepark (Alem) y Bowl (Vieytes).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-300 rounded-lg px-6 py-2 bg-white">
              <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-bmx-blue">
                ¿Cuál es el costo de la cuota mensual?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 mt-4">
                <strong>Desde febrero 2026:</strong> $20.000
                <br />
                <br />
                La cuota incluye el acceso a las clases y participación gratuita en el Campeonato Bahiense de BMX Freestyle (para socios con cuota al día).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-300 rounded-lg px-6 py-2 bg-white">
              <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-bmx-blue">
                ¿Hay opciones para riders no asociados?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 mt-4">
                Sí. Los riders no pertenecientes a la Escuela pueden utilizar la pista de Dirt mediante el pago de un bono de contribución:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Bono diario:</strong> $2.000 por rider</li>
                  <li><strong>Bono mensual:</strong> $20.000</li>
                </ul>
                <br />
                El pago habidita el uso respetando normas de seguridad y convivencia.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-gray-300 rounded-lg px-6 py-2 bg-white">
              <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-bmx-blue">
                ¿Qué eventos se realizarán en 2026?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 mt-4">
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Campeonato Argentino de BMX Freestyle:</strong> 4 y 5 de abril (fin de semana largo)</li>
                  <li><strong>Campeonato Bahiense:</strong> Febrero a noviembre (10 fechas, una por mes)</li>
                  <li><strong>Torneo Regional Skatepark:</strong> Fecha a confirmar</li>
                  <li><strong>Torneo Regional Bowl:</strong> Fecha a confirmar</li>
                  <li><strong>Bahía Night Sess 2026:</strong> 6-7 de diciembre (torneo nocturno regional)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border border-gray-300 rounded-lg px-6 py-2 bg-white">
              <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-bmx-blue">
                ¿Dónde se ubica la Escuela?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 mt-4">
                Estamos ubicados en <strong>Bahía Blanca</strong>, con acceso a tres pistas:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Pista Dirt Alem:</strong> Nuestra sede principal</li>
                  <li><strong>Parque Alem:</strong> Skatepark</li>
                  <li><strong>Bowl Vieytes:</strong> Pista para modalidad Bowl</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border border-gray-300 rounded-lg px-6 py-2 bg-white">
              <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-bmx-blue">
                ¿Qué mejoras se planean para 2026?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 mt-4">
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Cantina y Sala de Reuniones:</strong> Completaremos el cierre durante el primer cuatrimestre</li>
                  <li><strong>Vestuarios</strong> </li>
                  <li><strong>Foampit y Pump Track:</strong> Trasladaremos el Foampit y construiremos un nuevo Pump Track en la segunda mitad del año</li>
                  <li><strong>Parque Olímpico:</strong> Avanzaremos al menos el 50% del proyecto</li>
                  <li><strong>Mantenimiento general:</strong> Mejoras de iluminación, reparación de caminos y mantenimiento de instalaciones</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border border-gray-300 rounded-lg px-6 py-2 bg-white">
              <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-bmx-blue">
                ¿Hay ayuda para quienes tienen dificultades económicas?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 mt-4">
                Sí. Entendemos que la economía puede ser un impedimento. Si tienes dificultades económicas para abonar la cuota mensual, te invitamos a comunicarte con nosotros. Podremos evaluar cada situación particular y brindarte el acompañamiento necesario.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
