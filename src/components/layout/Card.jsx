import { useFavoritosContext } from "../../context/FavoritosContext";

const Card = ({ manga, irAManga }) => {
  const { agregarFavorito, quitarFavorito, esFavorito } =useFavoritosContext()
  return (
    <div className="flex flex-col border border-black">
      <img
        src={manga.imagen}
        alt={manga.titulo}
        className="aspect-2/3 w-full border-b border-black object-cover"
      />
      <div className="flex flex-1 flex-col gap-1 p-3 text-xs sm:text-sm">
        <h3 className="line-clamp-2 text-sm font-bold sm:text-base">{manga.titulo}</h3>
        <p>Score: {manga.score ?? "N/A"}</p>
        <p>Tipo: {manga.tipo ?? "N/A"}</p>
        <p>Estado: {manga.estado ?? "N/A"}</p>
        <p>Capítulos: {manga.capitulos ?? "N/A"}</p>
        <div className="mt-auto flex flex-col gap-2 pt-3">
          {esFavorito(manga.id) ? (
            <button type="button" className="btn" onClick={() => quitarFavorito(manga.id)}>
              Quitar de Favoritos
            </button>
          ) : (
            <button type="button" className="btn btn-solid" onClick={() => agregarFavorito(manga)}>
              Agregar a Favoritos
            </button>
          )}
          <button type="button" className="btn" onClick={() => irAManga(manga)}>
            Ver Detalles
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card;
