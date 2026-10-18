import { useFavoritosContext } from "../../context/FavoritosContext";

const Manga = ( {manga, irACatalogo, irAFavoritos} ) => {
  const { agregarFavorito, quitarFavorito, esFavorito } =  useFavoritosContext();
  return (
    <>
      <button type="button" onClick={irACatalogo}>
        Volver al Catálogo
      </button>
      <button type="button" onClick={irAFavoritos}>
        Ir a Favoritos
      </button>
      <h2>Detalles</h2>
      <h3>{manga.titulo}</h3>
      <img src={manga.imagen} alt={manga.titulo} />
      <p>Score: {manga.score}</p>
      <p>Tipo: {manga.tipo}</p>
      <p>Estado: {manga.estado}</p>
      <p>Sinopsis: {manga.sinopsis}</p>
      <p>Capítulos: {manga.capitulos}</p>
      <p>Generos: {manga.generos}</p>
      <p>Autores: {manga.autores}</p>
      {esFavorito(manga.id) ? (
        <button type="button" onClick={() => quitarFavorito(manga.id)}>
          Quitar de Favoritos
        </button>
      ) : (
        <button type="button" onClick={() => agregarFavorito(manga)}>
          Agregar a Favoritos
        </button>
      )}
    </>
  )
}

export default Manga;
