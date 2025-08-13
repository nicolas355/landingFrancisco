import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  ArrowRight,
  Menu,
  Linkedin,
  Mail,
  Phone,
  User,
  Briefcase,
  Award,
} from "lucide-react"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Header from "@/components/Header"
import HeroSections from "@/components/HeroSections"
import ProfesionalResume from "@/components/ProfesionalResume"
import Operation from "@/components/Operation"
import Experience from "@/components/Experience"
import Conocimiento from "@/components/Conocimiento"
import Skills from "@/components/Skills"
import Rentabilidad from "@/components/Rentabilidad"
import Cta from "@/components/Cta"
import Footer from "@/components/Footer"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen ">
      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}

        <HeroSections />

        {/* Acerca de mí Section */}

        <ProfesionalResume />

        {/* Operación & Catálogo Section */}
        <Operation />

        <Conocimiento />

        {/* Experiencia Section */}
        <Experience />

        {/* Habilidades Expandidas */}
        <Skills />

        {/* Rentabilidad y P&L Section */}
        <Rentabilidad />

        {/* CTA Final Section */}

        <Cta />
      </main>

      {/* Footer */}

      <Footer />
    </div>
  )
}
