import React from "react"
import { Badge } from "./ui/badge"
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card"
import { Check } from "lucide-react"
const Rentabilidad = () => {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge
                variant="secondary"
                className="bg-yellow-100 text-yellow-800"
              >
                📊 Análisis Financiero
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">
                Especialista en Rentabilidad y P&L
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Dominio avanzado en análisis de rentabilidad con herramientas
                especializadas
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-12">
            <div className="flex justify-center">
              <Card className="border-2 hover:border-yellow-300 transition-colors max-w-2xl w-full">
                <CardHeader className="bg-blue-50 pb-4">
                  <CardTitle className="text-blue-900 flex items-center gap-2">
                    📈 Análisis P&L - 🔧 Herramientas Especializadas
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <Check className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>Análisis detallado de márgenes por producto</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Optimización de costos operativos y logísticos
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Looker Studio</strong>
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Resultados Comprobados
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-600">+25%</div>
                  <p className="text-muted-foreground">
                    Mejora en rentabilidad promedio
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-600">-15%</div>
                  <p className="text-muted-foreground">
                    Reducción en costos operativos
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-600">100%</div>
                  <p className="text-muted-foreground">
                    Visibilidad en tiempo real
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Rentabilidad
