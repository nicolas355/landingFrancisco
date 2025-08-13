import React from "react"
import { Check } from "lucide-react"
import { Badge } from "./ui/badge"
import Image from "next/image"
const Conocimiento = () => {
  return (
    <div>
      {/* Conocimiento experto del catálogo técnico Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge
                variant="secondary"
                className="bg-yellow-100 text-yellow-800"
              >
                📚 Conocimiento Técnico
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">
                Conocimiento experto del catálogo técnico
              </h2>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-12">
            <div className="flex justify-center items-center gap-8 mb-8 flex-wrap">
              <img
                src="/images/ALBA.png"
                alt="ALBA Logo"
                className="h-16 object-contain"
              />
              <img
                src="/images/VENIER.svg"
                alt="VENIER Logo"
                className="h-16 object-contain"
              />
              <img
                src="/images/SIKA.png"
                alt="SIKA Logo"
                className="h-16 object-contain"
              />

              <img
                src="/images/SINTEPLAST.png"
                alt="SIKA Logo"
                className="h-16 object-contain"
              />
            </div>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start space-x-3">
                <Check className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                <span>
                  Identificación de productos según presentación comercial y
                  rendimiento por m²
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                <span>Dominio de las compatibilidades de productos</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                <span>
                  Distinción entre usos profesionales y de hogar, adaptando la
                  carga según el público objetivo
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                <span>
                  Análisis de equivalencias entre marcas líderes, ampliando la
                  oferta sin perder coherencia técnica ni calidad percibida
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                <span>
                  Traducción de fichas técnicas complejas en contenidos claros,
                  SEO-optimizado y orientado a la conversión
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Conocimiento
