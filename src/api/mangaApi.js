import { API_BASE_URL } from "../config/env"

const normalizarManga = (manga) => ({
  id: manga.mal_id,
  titulo: manga.title,
  imagen: manga.images.jpg.image_url,
  score: manga.score,
  tipo: manga.type,
  estado: manga.status,
  capitulos: manga.chapters,
})

export async function buscarMangas({ q, page, limit, signal }) {
  const params = new URLSearchParams({ page, limit, sfw: true })

  params.set("order_by", "popularity")
  params.set("sort", "asc")
  if (q) {
    params.set("q", q)
  }

  const res = await fetch(`${API_BASE_URL}/manga?${params}`, { signal })

  const { data, pagination } = await res.json()

  return {
    items: data.map(normalizarManga),
    hayMas: pagination.has_next_page,
    total: pagination.items.total,
  }
}