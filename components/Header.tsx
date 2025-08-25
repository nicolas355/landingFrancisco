import React from "react"
import Link from "next/link"
import { Button } from "./ui/button"
import { Linkedin, Menu } from "lucide-react"

const Header = () => {
  return (
    <div className="container mx-auto">
      <header className="sticky top-0 z-50 w-full ">
        <div className="container flex h-16 items-center justify-between">
          <a href="/">
            <div className="flex items-center space-x-2">
              <img
                src="/images/fp-logo.png"
                alt="Francisco Peña Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold text-blue-600">
                Francisco Pena
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#inicio"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="#perfil"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Perfil
            </Link>
            <Link
              href="#operacion-catalogo"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Operación & Catálogo
            </Link>
            <Link
              href="#analisis-automatizacion"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Análisis & Automatización
            </Link>
            <Link
              href="#contacto"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Contacto
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="https://www.linkedin.com/in/francisco-tomas-pena-425630314/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
              >
                LinkedIn
                <Linkedin className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
