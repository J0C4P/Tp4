import { useState } from "react";
import { useMangas } from "../../hooks/useMangas";
import { useDebounce } from "../../hooks/useDebounce";
import { useFavoritosContext } from "../../context/FavoritosContext";
import SearchBar from "../layout/SearchBar";
import CardList from "../layout/CardList";

const Favs = ( {irAManga, irACatalogo} ) => {
  const [ busqueda, setBusqueda ] = useState("")
  const busquedaRetrasada = useDebounce(busqueda, 400)
  const { mangas, loading, error } = useMangas(busquedaRetrasada)
  const { favoritos } = useFavoritosContext()

  const favoritosFiltrados = favoritos.filter((manga) =>
    manga.titulo.toLowerCase().includes(busquedaRetrasada.toLowerCase())
  );

  return (
    <>
      <h2>Mis Favoritos</h2>
      <button type="button" onClick={irACatalogo}>
        Volver al Catalogo
      </button>
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda}></SearchBar>
      <CardList mangas={favoritosFiltrados} loading={loading} error={error} irAManga={irAManga}></CardList>
    </>
  )
}

export default Favs;
