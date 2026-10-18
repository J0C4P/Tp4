import { useState, useEffect } from "react"
import { buscarMangas } from "../api/mangaApi"

export function useMangas(busqueda) {
  const [mangas, setMangas] = useState([])
  const [hayMas, setHayMas] = useState(false)
  const [paginaActual, setPaginaActual] = useState({ busqueda, numero: 1 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const pagina = paginaActual.busqueda === busqueda ? paginaActual.numero : 1

  const cargarMas = () => setPaginaActual({ busqueda, numero: pagina + 1 })

  useEffect(() => {
    const controller = new AbortController()

    async function cargar() {
      setLoading(true)
      setError(null)
      try {
        const resultado = await buscarMangas({
          q: busqueda,
          page: pagina,
          limit: 24,
          signal: controller.signal,
        })
        setMangas((anteriores) => (pagina === 1 ? resultado.items : [...anteriores, ...resultado.items]))
        setHayMas(resultado.hayMas)
      } catch {
        if (controller.signal.aborted) return
        setError("No pudimos cargar los mangas. Revisá tu conexión.")
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    cargar()

    return () => controller.abort()
  }, [busqueda, pagina])

  return {
    mangas,
    hayMas,
    error,
    loading: loading && pagina === 1,
    cargandoMas: loading && pagina > 1,
    cargarMas,
  }
}
