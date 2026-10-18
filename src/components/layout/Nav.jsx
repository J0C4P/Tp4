import { useFavoritosContext } from "../../context/FavoritosContext";

const Nav = ({ irACatalogo, irAFavoritos }) => {
  const { total } = useFavoritosContext()

  return (
    <nav className="sticky top-0 z-10 border-b border-black bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3">
        <h1 className="text-lg font-black tracking-tight sm:text-2xl">MangaList</h1>
        <div className="flex gap-2">
          <button type="button" className="btn" onClick={irACatalogo}>
            Catálogo
          </button>
          <button type="button" className="btn btn-solid" onClick={irAFavoritos}>
            Favoritos ({total})
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
