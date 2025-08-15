"use client"

import { useState, useEffect } from "react"
import Footer from "@/components/Footer"
import Logo from "@/components/Logo"
import { Poppins, Inter } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

export default function MainPageCheckPrice() {
  const [price, setPrice] = useState<number>(0)
  const [cuotas, setCuotas] = useState<string>("Sin cuotas")
  const [envioTipo, setEnvioTipo] = useState<string>("3")
  const [peso, setPeso] = useState<string>("De 5 a 10 Kg")
  const [envioTipo1, setEnvioTipo1] = useState<number>(0)
  const [showEdit, setShowEdit] = useState<boolean>(false)

  // Porcentajes de cuotas (en formato decimal)
  const [cuotasPorcentajes, setCuotasPorcentajes] = useState<
    Record<string, number>
  >({
    "Cuota promocionada": 0.04,
    "3 cuotas": 0.095,
    "6 cuotas": 0.154,
    "9 cuotas": 0.215,
    "12 cuotas": 0.274,
  })

  const [sinEnvioOpcion, setSinEnvioOpcion] = useState<string>("Hasta $15.000")

  const sinEnvioCostos: Record<string, number> = {
    "Hasta $15.000": 1095,
    "$15.000 y $25.000": 2190,
    "$25.000 y $33.000": 2628,
  }

  // Cargar configuración de cuotas desde localStorage (si existe)
  useEffect(() => {
    const savedData = localStorage.getItem("cuotasPorcentajes")
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData)
        setCuotasPorcentajes(parsed)
      } catch (error) {
        console.error("Error al parsear los porcentajes guardados:", error)
      }
    }
  }, [])

  const handlePercentageChange = (key: string, value: number) => {
    setCuotasPorcentajes((prev) => ({ ...prev, [key]: value }))
  }

  const guardarCambios = () => {
    localStorage.setItem("cuotasPorcentajes", JSON.stringify(cuotasPorcentajes))
    alert("Los cambios se han guardado permanentemente.")
  }

  const calcularResultado = () => {
    // Comisión base del 14%
    const comision = price * 0.14
    // Comisión adicional según cuotas (si las hubiera)
    const cuotaComision = price * (cuotasPorcentajes[cuotas] || 0)

    // Envíos: para Envío Tipo 2 se usan estos rangos:
    const envioTipo2Costos: Record<string, number> = {
      "De 0,3 a 0,5 Kg": 5736,
      "De 0,5 a 1 Kg": 6431,
      "De 1 a 2 Kg": 6862,
      "De 2 a 5 Kg": 9127,
      "De 5 a 10 Kg": 10840,
      "De 10 a 15 Kg": 12544,
      "De 15 a 20 Kg": 14985.5,
      "De 20 a 25 Kg": 17879.5,
      "De 25 a 30 Kg": 24540.5,
    }

    // Determinar costo de envío según el tipo seleccionado
    const envio =
      envioTipo === "3"
        ? 8000
        : envioTipo === "1"
        ? envioTipo1
        : envioTipo === "2"
        ? envioTipo2Costos[peso]
        : envioTipo === "4"
        ? sinEnvioCostos[sinEnvioOpcion]
        : 0

    // Total final = precio - comisión base - envío - comisión por cuotas
    return price - comision - envio - cuotaComision
  }

  const resultado = calcularResultado()

  // Formateo del resultado, por ejemplo 46000 se mostrará como "46.000,00"
  const resultadoFormateado = resultado.toLocaleString("de-DE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return (
    <>
      <section className={`${poppins.variable} ${inter.variable} antialiased`}>
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
          <header className="bg-[#2446A6] text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
              <Logo />
            </div>
          </header>

          <main className="flex flex-col items-center    p-8 bg-gray-100">
            <h1 className=" text-3xl md:text-4xl text-[#353535] font-bold mb-4">
              Simulador de ventas
            </h1>
            <h2 className="text-[16px] mb-6 text-[#353535] sm:max-w-[470px] text-center font-medium">
              Permite calcular ingresos netos en función del precio, costos y
              tipo de envío
            </h2>

            <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6 space-y-4">
              {/* Precio de Venta */}
              <div>
                <label
                  htmlFor="price"
                  className="block text-[#353535] font-medium"
                >
                  Precio de Venta Producto
                </label>
                <input
                  type="number"
                  id="price"
                  className="w-full mt-1 p-2 border rounded"
                  value={price}
                  onChange={(e) => setPrice(parseFloat(e.target.value))}
                />
              </div>

              {/* Cuotas y botón de edición */}
              <div className="flex items-end gap-4">
                <div className="flex-1">
                  <label className="block font-medium text-[#353535]">
                    Cuotas
                  </label>
                  <select
                    className="w-full mt-1 p-2 border rounded"
                    value={cuotas}
                    onChange={(e) => setCuotas(e.target.value)}
                  >
                    {/* Colocamos "Sin cuotas" primero */}
                    <option value="Sin cuotas">
                      Sin cuotas | Pagás{" "}
                      {((cuotasPorcentajes["Sin cuotas"] || 0) * 100).toFixed(
                        2
                      )}
                      %
                    </option>
                    <option value="Cuota promocionada">
                      Cuota promocionada | Pagás{" "}
                      {(cuotasPorcentajes["Cuota promocionada"] * 100).toFixed(
                        2
                      )}
                      %
                    </option>
                    <option value="3 cuotas">
                      3 cuotas | Pagás{" "}
                      {(cuotasPorcentajes["3 cuotas"] * 100).toFixed(2)}%
                    </option>
                    <option value="6 cuotas">
                      6 cuotas | Pagás{" "}
                      {(cuotasPorcentajes["6 cuotas"] * 100).toFixed(2)}%
                    </option>
                    <option value="9 cuotas">
                      9 cuotas | Pagás{" "}
                      {(cuotasPorcentajes["9 cuotas"] * 100).toFixed(2)}%
                    </option>
                    <option value="12 cuotas">
                      12 cuotas | Pagás{" "}
                      {(cuotasPorcentajes["12 cuotas"] * 100).toFixed(2)}%
                    </option>
                  </select>
                </div>
                <button
                  className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 whitespace-nowrap"
                  onClick={() => setShowEdit(!showEdit)}
                >
                  {showEdit
                    ? "Ocultar edición"
                    : "Editar porcentajes de cuotas"}
                </button>
              </div>

              {/* Tipo de Envío */}
              <div>
                <label className="block font-medium text-[#353535]">
                  Tipo de Envío
                </label>
                <select
                  className="w-full mt-1 p-2 border rounded"
                  value={envioTipo}
                  onChange={(e) => setEnvioTipo(e.target.value)}
                >
                  <option value="3">Envío Flex ($8000)</option>
                  <option value="1">Envío (editable)</option>
                  <option value="2">Envío Colecta (Según peso)</option>
                  <option value="4">Sin envío (Cargo fijo)</option>
                </select>
              </div>

              {/* Envío Tipo 1 */}
              {envioTipo === "1" && (
                <div>
                  <label htmlFor="envioTipo1" className="block font-medium">
                    Costo de Envío Tipo 1
                  </label>
                  <input
                    type="number"
                    id="envioTipo1"
                    className="w-full mt-1 p-2 border rounded"
                    value={envioTipo1}
                    onChange={(e) => setEnvioTipo1(parseFloat(e.target.value))}
                  />
                </div>
              )}

              {/* Envío Tipo 2: Rangos indicados */}
              {envioTipo === "2" && (
                <div>
                  <label className="block font-medium">Peso del Envío</label>
                  <select
                    className="w-full mt-1 p-2 border rounded"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                  >
                    <option value="De 0,3 a 0,5 Kg">
                      De 0,3 a 0,5 Kg ($5.736)
                    </option>
                    <option value="De 0,5 a 1 Kg">
                      De 0,5 a 1 Kg ($6.431)
                    </option>
                    <option value="De 1 a 2 Kg">De 1 a 2 Kg ($6.862)</option>
                    <option value="De 2 a 5 Kg">De 2 a 5 Kg ($9.127)</option>
                    <option value="De 5 a 10 Kg">De 5 a 10 Kg ($10.840)</option>
                    <option value="De 10 a 15 Kg">
                      De 10 a 15 Kg ($12.544)
                    </option>
                    <option value="De 15 a 20 Kg">
                      De 15 a 20 Kg ($14.985,50)
                    </option>
                    <option value="De 20 a 25 Kg">
                      De 20 a 25 Kg ($17.879,50)
                    </option>
                    <option value="De 25 a 30 Kg">
                      De 25 a 30 Kg ($24.540,50)
                    </option>
                  </select>
                </div>
              )}

              {envioTipo === "4" && (
                <div>
                  <label className="block font-medium">Rango de precio</label>
                  <select
                    className="w-full mt-1 p-2 border rounded"
                    value={sinEnvioOpcion}
                    onChange={(e) => setSinEnvioOpcion(e.target.value)}
                  >
                    <option value="Hasta $15.000">
                      Hasta $15.000 ($1.095)
                    </option>
                    <option value="$15.000 y $25.000">
                      $15.000 y $25.000 ($2.190)
                    </option>
                    <option value="$25.000 y $33.000">
                      $25.000 y $33.000 ($2.628)
                    </option>
                  </select>
                </div>
              )}

              {/* Resultado */}
              <div className="mt-4 p-4 bg-gray-200 rounded">
                <p className="text-lg font-bold">
                  Ganancia Neta Estimada: ${resultadoFormateado}
                </p>
              </div>

              {/* Panel de edición de porcentajes */}
              {showEdit && (
                <div className="mt-4 space-y-2 border-t pt-4">
                  {Object.keys(cuotasPorcentajes).map((key) => (
                    <div
                      key={key}
                      className="flex items-center space-x-2 w-full"
                    >
                      <label className="w-48 font-medium">{key} (%):</label>
                      <input
                        type="number"
                        className="flex-1 p-1 border rounded"
                        value={(cuotasPorcentajes[key] * 100).toFixed(2)}
                        onChange={(e) => {
                          const newVal = parseFloat(e.target.value) / 100
                          if (!isNaN(newVal)) {
                            handlePercentageChange(key, newVal)
                          }
                        }}
                      />
                    </div>
                  ))}
                  <button
                    className="w-full mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    onClick={guardarCambios}
                  >
                    Aplicar cambios permanentemente
                  </button>
                </div>
              )}
            </div>
          </main>

          <Footer />
        </div>
      </section>
    </>
  )
}
