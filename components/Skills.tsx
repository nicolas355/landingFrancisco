import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import { Award, Check } from "lucide-react"
import { Badge } from "./ui/badge"
const Skills = () => {
  return (
    <div>
      <section
        id="analisis-automatizacion"
        className="w-full py-12 md:py-16 bg-white"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                <Award className="h-4 w-4 mr-1" /> Competencias
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">
                Mis habilidades clave
              </h2>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-12">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center space-x-4">
                    <Check className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-blue-900">
                      Gestión estratégica de publicaciones y precios en
                      eCommerce
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground mt-2">
                    Optimización integral de listings en MercadoLibre:
                    fotografía, descripciones, SEO, categorización y
                    arquitectura de catálogo. Diseño de estrategias de pricing y
                    promociones basadas en estacionalidad, márgenes y análisis
                    competitivo.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center space-x-4">
                    <Check className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-blue-900">
                      Conocimiento profundo en productos de obra, automotor y
                      hogar
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground mt-2">
                    Especialización técnica en pinturas, revestimientos,
                    impermeabilizantes y productos complementarios. Comprensión
                    de necesidades de cliente profesional, obra y retail.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center space-x-4">
                    <Check className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-blue-900">
                      Seguimiento postventa y fidelización de clientes
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground mt-2">
                    Gestión personalizada de postventa con foco en resolución
                    ágil, asesoramiento técnico y retención. Implementación de
                    sistemas de seguimiento y campañas de recompra orientadas a
                    satisfacción y reputación.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center space-x-4">
                    <Check className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-blue-900">
                      Enfoque en logística y performance en eCommerce
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground mt-2">
                    Administración completa de procesos logísticos en
                    MercadoLibre: desde la publicación hasta la entrega final.
                    Dominio de envíos FULL, FLEX y tercerizados. Diseño de
                    estrategias de stock, catálogo y precios para mejorar
                    conversión, tiempo de entrega y rentabilidad.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
