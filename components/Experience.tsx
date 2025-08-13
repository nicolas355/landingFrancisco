import React from "react"
import { Badge } from "./ui/badge"
import { Briefcase, Check } from "lucide-react"
const Experience = () => {
  return (
    <div>
      <section
        id="experiencia"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge
                variant="secondary"
                className="bg-yellow-100 text-yellow-800"
              >
                <Briefcase className="h-4 w-4 mr-1" /> Trayectoria
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">
                Mi experiencia profesional
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Más de 5 años de experiencia en ventas técnicas y asesoramiento
                especializado
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-12 space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start border-l-4 border-yellow-500 pl-6 py-2">
              <div className="md:w-1/3">
                <h3 className="text-xl font-bold text-blue-900">
                  E-Commerce Manager
                </h3>
                <p className="text-yellow-600 font-medium">
                  Pinturerías Migliore · 2020 – Presente
                </p>
              </div>
              <div className="md:w-2/3 space-y-4">
                <p className="text-muted-foreground">
                  Gestión integral de la operación en MercadoLibre: publicación,
                  pricing, posicionamiento, logística FULL/FLEX y atención
                  postventa.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Diseño de estrategias comerciales omnicanal para productos
                      técnicos de construcción y automotor.
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Optimización de catálogo técnico, automatización de
                      respuestas frecuentes y desarrollo de piezas
                      publicitarias.
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Posicionamiento de la marca entre el Top 3 del rubro a
                      nivel ecommerce.
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Desarrollo de herramienta interna de cotización dinámica
                      (uso interno, alta adopción).
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start border-l-4 border-yellow-500 pl-6 py-2">
              <div className="md:w-1/3">
                <h3 className="text-xl font-bold text-blue-900">
                  Asistente de eCommerce
                </h3>
                <p className="text-yellow-600 font-medium">
                  MountainFunnel · 2018 – 2020
                </p>
              </div>
              <div className="md:w-2/3 space-y-4">
                <p className="text-muted-foreground">
                  Administración operativa de tienda en MercadoLibre y soporte
                  en la estrategia comercial digital para productos de
                  construcción.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Optimización de publicaciones, estructura de categorías y
                      análisis de pricing frente a competencia.
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Implementación de sistema de seguimiento postventa y
                      gestión de reputación.
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Integración básica con plataformas de gestión y
                      automatización de tareas repetitivas.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience
