import { useFavoritosContext } from "../../context/FavoritosContext";

const Card = ({ manga, irAManga }) => {
  const { agregarFavorito, quitarFavorito, esFavorito } =useFavoritosContext()
  return (
    <div>
      <h3>{manga.titulo}</h3>
      <img src={manga.imagen} alt={manga.titulo} />
      <p>Score: {manga.score}</p>
      <p>Tipo: {manga.tipo}</p>
      <p>Estado: {manga.estado}</p>
      <p>Capítulos: {manga.capitulos}</p>
      {esFavorito(manga.id) ? (
        <button type="button" onClick={() => quitarFavorito(manga.id)}>
          Quitar de Favoritos
        </button>
      ) : (
        <button type="button" onClick={() => agregarFavorito(manga)}>
          Agregar a Favoritos
        </button>
      )}
      <button type="button" onClick={() => irAManga(manga)}>
        Ver Detalles
      </button>
    </div>
  )
}

export default Card;