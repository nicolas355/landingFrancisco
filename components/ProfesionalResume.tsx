import React from "react"
import { Badge } from "./ui/badge"
const ProfesionalResume = () => {
  return (
    <section id="perfil" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              🧠 Acerca de mí
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">
              Resumen personal
            </h2>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12 space-y-6 text-lg">
          <p className="text-muted-foreground">
            Soy vendedor especializado en el rubro de la construcción y
            pinturería, con más de 5 años de experiencia comercializando
            productos tanto en el canal tradicional como en plataformas
            digitales como MercadoLibre.
          </p>
          <p className="text-muted-foreground">
            Me destaco por entender las necesidades del profesional de obra,
            constructoras, pintores y talleres automotor, ofreciendo soluciones
            concretas y seguimiento postventa.
          </p>
          <p className="text-muted-foreground">
            Además, gestioné estrategias de precios, publicaciones y logística
            en plataformas de eCommerce, potenciando la presencia de marca y
            generando ventas sostenidas.
          </p>
          <p className="text-muted-foreground">
            Busco integrarme a una empresa con foco en calidad, servicio y
            crecimiento, donde pueda aportar mi experiencia comercial y seguir
            desarrollándome.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProfesionalResume
