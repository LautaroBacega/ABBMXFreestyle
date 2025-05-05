"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Send, Bike } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function InscripcionPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    edad: "",
    nivel: "principiante",
    horario: "",
    mensaje: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log(formData)
    alert("¡Formulario enviado con éxito! Nos pondremos en contacto contigo muy pronto.")
    router.push("/")
  }

  return (
    <main className="min-h-screen bg-white pt-20 pb-10 bg-dots">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center text-bmx-blue hover:underline mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a la página principal
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Image
              src="/images/logo.png"
              alt="ABBMX Freestyle Logo"
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h1 className="text-3xl font-bold text-gray-800">¡Únete a la diversión!</h1>
            <p className="text-gray-600">Completa el formulario y comienza tu aventura en BMX Freestyle</p>
          </div>

          <Card className="bg-white shadow-lg border-none rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-bmx-blue to-bmx-pink h-3"></div>
            <CardHeader className="pb-0">
              <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                <Bike className="h-6 w-6 text-bmx-pink" />
                Formulario de Inscripción
                <Bike className="h-6 w-6 text-bmx-blue" />
              </CardTitle>
              <CardDescription className="text-center">
                ¡Completa tus datos y prepárate para la aventura!
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Tu nombre</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="rounded-xl"
                      placeholder="Ej: Juan"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="apellido">Tu apellido</Label>
                    <Input
                      id="apellido"
                      name="apellido"
                      value={formData.apellido}
                      onChange={handleChange}
                      required
                      className="rounded-xl"
                      placeholder="Ej: Pérez"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email de contacto</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="rounded-xl"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      className="rounded-xl"
                      placeholder="Ej: 123456789"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="edad">¿Cuántos años tienes?</Label>
                    <Input
                      id="edad"
                      name="edad"
                      type="number"
                      value={formData.edad}
                      onChange={handleChange}
                      required
                      className="rounded-xl"
                      placeholder="Ej: 12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="horario">¿Qué horario prefieres?</Label>
                    <Select
                      onValueChange={(value) => handleSelectChange("horario", value)}
                      defaultValue={formData.horario}
                    >
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Selecciona un horario" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manana">Mañana (10:00 - 12:00)</SelectItem>
                        <SelectItem value="tarde">Tarde (16:00 - 18:00)</SelectItem>
                        <SelectItem value="sabado-manana">Sábado Mañana (09:00 - 13:00)</SelectItem>
                        <SelectItem value="sabado-tarde">Sábado Tarde (15:00 - 19:00)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>¿Cuál es tu nivel de experiencia?</Label>
                  <RadioGroup
                    defaultValue={formData.nivel}
                    onValueChange={(value) => handleSelectChange("nivel", value)}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="principiante" id="principiante" />
                      <Label htmlFor="principiante" className="font-normal">
                        Principiante (nunca he montado o estoy empezando)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="intermedio" id="intermedio" />
                      <Label htmlFor="intermedio" className="font-normal">
                        Intermedio (ya sé algunos trucos básicos)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="avanzado" id="avanzado" />
                      <Label htmlFor="avanzado" className="font-normal">
                        Avanzado (domino varios trucos y quiero aprender más)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje">¿Algo más que quieras contarnos?</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="rounded-xl min-h-[100px]"
                    placeholder="Cuéntanos si tienes alguna pregunta o necesidad especial..."
                  />
                </div>

                <Button type="submit" className="w-full bg-bmx-pink hover:bg-bmx-pink/80 rounded-xl text-lg">
                  <Send className="mr-2 h-4 w-4" /> ¡Enviar inscripción!
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center text-sm text-gray-500">
              Al enviar este formulario, aceptas nuestros términos y condiciones.
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  )
}
