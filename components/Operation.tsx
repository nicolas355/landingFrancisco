import React from "react"
import { Badge } from "./ui/badge"
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card"
import { Check } from "lucide-react"
const Operation = () => {
  return (
    <div>
      <div id="operacion-catalogo">
        {/* Grid de especialidades */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800"
                >
                  🛠️ Especialidades
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">
                  Mis especialidades en eCommerce
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-7xl items-center gap-4 py-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-2 hover:border-yellow-300 transition-colors">
                <CardHeader className="bg-blue-50 pb-2">
                  <CardTitle className="text-blue-900 text-sm">
                    🛒 Publicaciones que venden
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground text-sm">
                    Optimización de catálogo: títulos, palabras clave, imágenes
                    y descripciones pensadas para convertir.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-yellow-300 transition-colors">
                <CardHeader className="bg-blue-50 pb-2">
                  <CardTitle className="text-blue-900 text-sm">
                    📦 Logística FULL & FLEX
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground text-sm">
                    Carga y gestión de stock en CD de MercadoLibre. Coordinación
                    de envíos FLEX en AMBA con eficiencia operativa.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-yellow-300 transition-colors">
                <CardHeader className="bg-blue-50 pb-2">
                  <CardTitle className="text-blue-900 text-sm">
                    🎯 Contenido que convierte (Clips + Ads)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground text-sm">
                    Desarrollo de piezas visuales y textos comerciales
                    orientados a captar atención y generar acción.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-yellow-300 transition-colors">
                <CardHeader className="bg-blue-50 pb-2">
                  <CardTitle className="text-blue-900 text-sm">
                    📊 Toma de decisiones con datos (KPIs)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground text-sm">
                    Monitoreo de ventas, posicionamiento y performance con
                    herramientas de análisis integradas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-yellow-300 transition-colors">
                <CardHeader className="bg-blue-50 pb-2">
                  <CardTitle className="text-blue-900 text-sm">
                    🙌 Gestión postventa MercadoLibre
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground text-sm">
                    Atención integral, resolución de reclamos y cuidado de la
                    reputación del canal. Exclusiones estratégicas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-yellow-300 transition-colors">
                <CardHeader className="bg-blue-50 pb-2">
                  <CardTitle className="text-blue-900 text-sm">
                    🧩 Integración con sistemas de gestión (ERPs)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground text-sm">
                    Experiencia con plataformas de gestión conectadas a
                    ecommerce. Adaptación ágil y técnica.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-yellow-300 transition-colors">
                <CardHeader className="bg-blue-50 pb-2">
                  <CardTitle className="text-blue-900 text-sm">
                    🧠 Análisis de mercado y competencia
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground text-sm">
                    Herramientas de desglose de precios y performance.
                    Benchmarking para toma de decisiones rentable.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-yellow-300 transition-colors">
                <CardHeader className="bg-blue-50 pb-2">
                  <CardTitle className="text-blue-900 text-sm">
                    🗂️ Catalogación técnica profesional
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground text-sm">
                    Carga masiva optimizada, estructura por categorías, análisis
                    de producto y detección de gaps.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-yellow-300 transition-colors">
                <CardHeader className="bg-blue-50 pb-2">
                  <CardTitle className="text-blue-900 text-sm">
                    🤖 Automatización de procesos y atención
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground text-sm">
                    Respuestas inteligentes integradas a MercadoLibre. Fichas
                    técnicas accesibles y árboles de decisión que mejoran
                    conversión.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Operation
