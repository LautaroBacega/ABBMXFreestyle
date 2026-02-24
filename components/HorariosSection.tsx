import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function HorariosSection() {
  return (
    <section id="horarios" className="w-full py-20 bg-white bg-dots">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-2 text-center animate-on-scroll section-title">
          HORARIOS <span className="text-bmx-blue">DE CLASES</span>
        </h2>

        <div className="flex justify-center animate-on-scroll">
          <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6 overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-bmx-blue font-bold text-lg">Día</TableHead>
                    <TableHead className="text-bmx-blue font-bold text-lg">Horario</TableHead>
                    <TableHead className="text-bmx-blue font-bold text-lg">Nivel</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="hover:bg-blue-50">
                    <TableCell className="font-bold text-gray-800">Lunes</TableCell>
                    <TableCell>19:00 - 20:30</TableCell>
                    <TableCell>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold inline-block text-center">
                          Iniciantes
                        </span>
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold inline-block text-center">
                          Expertos
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-blue-50">
                    <TableCell className="font-bold text-gray-800">Martes</TableCell>
                    <TableCell>19:00 - 20:30</TableCell>
                    <TableCell>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold inline-block text-center">
                          Avanzados
                        </span>
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold inline-block text-center">
                          Expertos
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-blue-50">
                    <TableCell className="font-bold text-gray-800">Miércoles</TableCell>
                    <TableCell>19:00 - 20:30</TableCell>
                    <TableCell>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold inline-block text-center">
                          Avanzados
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-blue-50">
                    <TableCell className="font-bold text-gray-800">Jueves</TableCell>
                    <TableCell>19:00 - 20:30</TableCell>
                    <TableCell>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold inline-block text-center">
                          Todas las categorias
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-blue-50">
                    <TableCell className="font-bold text-gray-800">Viernes</TableCell>
                    <TableCell>19:00 - 20:30</TableCell>
                    <TableCell>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold inline-block text-center">
                          Iniciantes
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center animate-on-scroll">
          <a
            href="https://forms.gle/ks8rqw71n6CspcYE9" 
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              bg-bmx-green hover:bg-bmx-green/80 
              text-white rounded-full 
              text-lg
              px-8 py-3
              font-semibold
              transition-all duration-300
              hover:scale-105
              focus:outline-none focus:ring-2
              focus:ring-bmx-green focus:ring-opacity-80
              shadow-lg hover:shadow-xl
            "
          >
            ¡RESERVÁ TU LUGAR AHORA!
          </a>
        </div>
      </div>
    </section>
  )
}
