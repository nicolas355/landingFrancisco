import React from "react"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
const Cta = () => {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                ¿Necesitás sumar a un especialista en eCommerce técnico y
                estratégico?
              </h2>
              <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center mx-auto">
                Contame sobre tu proyecto o equipo. Estoy listo para aportar
                valor con experiencia comprobada en ventas digitales, catálogo
                técnico y operación MercadoLibre.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="h-12 px-8 bg-yellow-500 hover:bg-yellow-600 text-black"
              >
                Enviar mensaje
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 border-white text-white hover:bg-white hover:text-blue-800 bg-transparent"
              >
                Descargar CV
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-blue-100">
              <div className="flex items-center space-x-1">
                <Check className="h-4 w-4 text-yellow-400" />
                <span> Respuesta rápida garantizada</span>
              </div>
              <div className="flex items-center space-x-1">
                <Check className="h-4 w-4 text-yellow-400" />
                <span> Disponibilidad inmediata para entrevistas</span>
              </div>
              <div className="flex items-center space-x-1">
                <Check className="h-4 w-4 text-yellow-400" />
                <span>
                  {" "}
                  Conocimiento técnico del rubro construcción y retail
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cta
