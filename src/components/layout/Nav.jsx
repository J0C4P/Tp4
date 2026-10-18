import { useFavoritosContext } from "../../context/FavoritosContext";

const Nav = ({ irACatalogo, irAFavoritos }) => {
  const { total } = useFavoritosContext()

  return (
    <nav>
      <h1>MangaList</h1>
      <button type="button" onClick={irACatalogo}>
        Catálogo
      </button>
      <button type="button" onClick={irAFavoritos}>
        Favoritos ({total})
      </button>
    </nav>
  )
}

export default Nav
