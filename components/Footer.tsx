import { Mail, Linkedin, ExternalLink, MapPin } from "lucide-react"
import Link from "next/link"
type FooterProps = {
  variant?: "landing" | "tool" // landing = tu web v0, tool = cotizador oscuro
  email?: string
  accentFrom?: string // tailwind color token, ej: "from-emerald-500"
  accentVia?: string // ej: "via-teal-500"
  accentTo?: string // ej: "to-cyan-500"
}

export default function Footer({
  variant = "landing",
  email = "contacto@franciscopena.com.ar",
  accentFrom = "from-emerald-500",
  accentVia = "via-teal-500",
  accentTo = "to-cyan-500",
}: FooterProps) {
  const year = new Date().getFullYear()
  const isLight = variant === "landing"
  return (
    <footer
      className={
        isLight
          ? "mt-16 bg-neutral-50 text-neutral-800"
          : "mt-24 bg-neutral-950 text-neutral-200"
      }
    >
      {/* Top border / accent */}
      <div
        className={`h-1 w-full bg-[#2446A6] ${accentFrom} ${accentVia} ${accentTo}`}
      />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-5 md:gap-8">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div
              className={
                isLight
                  ? "grid h-10 w-10 place-items-center rounded-2xl bg-white ring-1 ring-black/10"
                  : "grid h-10 w-10 place-items-center rounded-2xl bg-neutral-900 ring-1 ring-white/10"
              }
            >
              <span className="text-lg font-semibold tracking-tight">FP</span>
            </div>
            <div>
              <p className="text-base font-semibold leading-tight">
                Francisco Tomás Pena
              </p>
              <p
                className={
                  isLight
                    ? "text-sm text-neutral-600"
                    : "text-sm text-neutral-400"
                }
              >
                E-commerce & Marketplaces · Catalogación
              </p>
            </div>
          </div>
          <p
            className={
              isLight
                ? "mt-4 max-w-md text-sm text-neutral-600"
                : "mt-4 max-w-md text-sm text-neutral-400"
            }
          >
            Más de 5 años optimizando catálogos, descripciones irresistibles y
            estrategias de venta online.
          </p>

          <p
            className={
              isLight
                ? "mt-4 max-w-md text-sm text-neutral-600"
                : "mt-4 max-w-md text-sm text-neutral-400"
            }
          >
            Dominio total de fichas técnicas, SEO para productos y atención
            integral a clientes
          </p>

          <p
            className={
              isLight
                ? "mt-4 max-w-md text-sm text-neutral-600"
                : "mt-4 max-w-md text-sm text-neutral-400"
            }
          >
            Desde el catálogo técnico hasta la entrega final: optimizo y mejoro
            todo el circuito en MercadoLibre.
          </p>

          <div
            className={
              isLight
                ? "mt-5 flex items-center gap-3 text-sm text-neutral-700"
                : "mt-5 flex items-center gap-3 text-sm text-neutral-300"
            }
          >
            <MapPin className="h-4 w-4" /> Buenos Aires, Argentina
          </div>
        </div>

        {/* Navegación */}
        <div>
          <h3
            className={
              isLight
                ? "text-sm font-semibold uppercase tracking-wide text-neutral-500"
                : "text-sm font-semibold uppercase tracking-wide text-neutral-400"
            }
          >
            Sitios
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                href="/tools"
                className={
                  isLight
                    ? "group inline-flex items-center gap-2 hover:text-neutral-900"
                    : "group inline-flex items-center gap-2 hover:text-white"
                }
              >
                Cotizador de Precios
                <ExternalLink className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100" />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className={
                  isLight
                    ? "group inline-flex items-center gap-2 hover:text-neutral-900"
                    : "group inline-flex items-center gap-2 hover:text-white"
                }
              >
                Portfolio / Landing
                <ExternalLink className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Expertise */}
        <div>
          <h3
            className={
              isLight
                ? "text-sm font-semibold uppercase tracking-wide text-neutral-500"
                : "text-sm font-semibold uppercase tracking-wide text-neutral-400"
            }
          >
            Expertise
          </h3>
          <ul
            className={
              isLight
                ? "mt-3 space-y-2 text-sm text-neutral-700"
                : "mt-3 space-y-2 text-sm text-neutral-300"
            }
          >
            <li>MercadoLibre · Ads · Full/Flex</li>
            <li>SEO de fichas · Fotografías</li>
            <li>Pricing & rentabilidad</li>
            <li>Catálogo: ALBA · VENIER · SIKA</li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3
            className={
              isLight
                ? "text-sm font-semibold uppercase tracking-wide text-neutral-500"
                : "text-sm font-semibold uppercase tracking-wide text-neutral-400"
            }
          >
            Contacto
          </h3>
          <div className="mt-3 space-y-3 text-sm">
            <a
              href={`mailto:${email}`}
              className={
                isLight
                  ? "group inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 ring-1 ring-black/10 transition hover:bg-white/70"
                  : "group inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10 transition hover:bg-white/10"
              }
            >
              <Mail className="h-4 w-4" /> {email}
            </a>
            <a
              href="https://www.linkedin.com/in/francisco-tomas-pena-425630314/"
              target="_blank"
              rel="noreferrer"
              className={
                isLight
                  ? "group inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 ring-1 ring-black/10 transition hover:bg-white/70"
                  : "group inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10 transition hover:bg-white/10"
              }
            >
              <Linkedin className="h-4 w-4" /> Conectá en LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className={
          isLight ? "border-t border-black/10" : "border-t border-white/10"
        }
      >
        <div
          className={
            isLight
              ? "mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-neutral-600 md:flex-row"
              : "mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-neutral-400 md:flex-row"
          }
        >
          <p>© {year} Francisco Tomás Pena</p>
          <div className="flex items-center gap-4">
            <a
              href="/privacy"
              className={
                isLight ? "hover:text-neutral-900" : "hover:text-neutral-200"
              }
            >
              Privacidad
            </a>
            <span className={isLight ? "text-neutral-300" : "text-neutral-600"}>
              ·
            </span>
            <a
              href="/terms"
              className={
                isLight ? "hover:text-neutral-900" : "hover:text-neutral-200"
              }
            >
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
