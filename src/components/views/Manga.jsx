import { useFavoritosContext } from "../../context/FavoritosContext";

const Manga = ( {manga, irACatalogo} ) => {
  const { agregarFavorito, quitarFavorito, esFavorito } =  useFavoritosContext();
  return (
    <>
      <button type="button" className="btn mb-6" onClick={irACatalogo}>
        Volver al Catálogo
      </button>
      <div className="flex flex-col gap-6 md:flex-row">
        <img
          src={manga.imagen}
          alt={manga.titulo}
          className="mx-auto w-full max-w-64 self-start border border-black object-cover md:mx-0"
        />
        <div className="flex flex-1 flex-col gap-2 text-sm sm:text-base">
          <h2 className="text-2xl font-black sm:text-3xl">{manga.titulo}</h2>
          <p><strong>Score:</strong> {manga.score ?? "N/A"}</p>
          <p><strong>Tipo:</strong> {manga.tipo ?? "N/A"}</p>
          <p><strong>Estado:</strong> {manga.estado ?? "N/A"}</p>
          <p><strong>Capítulos:</strong> {manga.capitulos ?? "N/A"}</p>
          <p><strong>Generos:</strong> {manga.generos || "N/A"}</p>
          <p><strong>Autores:</strong> {manga.autores || "N/A"}</p>
          <p><strong>Sinopsis:</strong> {manga.sinopsis ?? "N/A"}</p>
          <div className="pt-4">
            {esFavorito(manga.id) ? (
              <button type="button" className="btn" onClick={() => quitarFavorito(manga.id)}>
                Quitar de Favoritos
              </button>
            ) : (
              <button type="button" className="btn btn-solid" onClick={() => agregarFavorito(manga)}>
                Agregar a Favoritos
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Manga;
