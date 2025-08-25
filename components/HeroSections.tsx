import React from "react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ArrowRight, Check, User } from "lucide-react"
const HeroSections = () => {
  return (
    <div className="">
      <section
        id="inicio"
        className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-blue-50 to-yellow-50"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge
                  variant="secondary"
                  className="w-fit bg-yellow-100 text-yellow-800"
                >
                  🚀Especialista en eCommerce y Operación MercadoLibre
                </Badge>
                <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none text-blue-900">
                  Soy Francisco Pena, profesional con más de 5 años potenciando
                  ventas digitales
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Especialista en eCommerce y operación de MercadoLibre para el
                  sector construcción y pinturería. Trabajo con la
                  automatización de procesos y estrategias de pricing. Mi
                  enfoque combina la eficiencia operativa con una mirada
                  comercial, ayudando a destacarse en MercadoLibre.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="h-12 px-8 bg-yellow-500 hover:bg-yellow-600 text-black"
                >
                  <a href="/images/CV.pdf" download="CV.pdf/CV.pdf">
                    Descargar CV
                  </a>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <a href="#operacion-catalogo">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 px-8 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                  >
                    Mis competencias
                  </Button>
                </a>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Gestión eCommerce</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Logística</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Estrategia de catálogo</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-[300px] aspect-square bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center overflow-hidden border-4 border-yellow-500">
                <User className="h-48 w-48 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSections
