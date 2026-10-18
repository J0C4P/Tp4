import { useState, useEffect } from "react"
import { buscarMangas } from "../api/mangaApi"

export function useMangas(busqueda) {
  const [mangas, setMangas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    async function cargar() {
      setLoading(true)
      setError(null)
      try {
        const { items } = await buscarMangas({
          q: busqueda,
          page: 1,
          limit: 24,
          signal: controller.signal,
        })
        setMangas(items)
      } catch {
        if (controller.signal.aborted) return
        setError("No pudimos cargar los mangas. Revisá tu conexión.")
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    cargar()

    return () => controller.abort()
  }, [busqueda])

  return { mangas, loading, error }
}
