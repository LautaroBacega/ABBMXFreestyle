import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Juanpe, 9 años",
      text: "¡Me encanta venir a clases! Los profes son geniales y he aprendido un montón de trucos nuevos. ¡Es lo más divertido que hago en la semana!",
      level: "Avanzados",
      color: "bg-bmx-blue",
    },
    {
      name: "Sofi, 11 años",
      text: "Al principio tenía miedo, pero los instructores me ayudaron mucho. Ahora puedo hacer trucos que nunca pensé que podría hacer!",
      level: "Iniciantes",
      color: "bg-bmx-pink",
    },
    {
      name: "Gena, 13 años",
      text: "Hace 2 años vengo a la escuela de bmx y es como mi segunda casa. Hice muchos amigos y los profes siempre nos motivan a superarnos.",
      level: "Expertos",
      color: "bg-bmx-green",
    },
  ]

  return (
    <section id="testimonios" className="w-full py-20 bg-bmx-blue/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-2 text-center animate-on-scroll section-title">
          QUE DICEN <span className="text-bmx-blue">NUESTROS ALUMNOS Y SUS PADRES</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto animate-on-scroll">
          Nuestros alumnos son nuestra mejor carta de presentación. ¡Mira lo que opinan de nosotros!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-none shadow-lg rounded-2xl card-hover animate-on-scroll">
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold text-lg`}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">Nivel: {testimonial.level}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{testimonial.text}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
