import { useState } from "react";
import { useMangas } from "../../hooks/useMangas";
import { useDebounce } from "../../hooks/useDebounce";
import SearchBar from "../layout/SearchBar";
import CardList from "../layout/CardList";

const Catalog = ( {irAManga, irAFavoritos} ) => {
  const [ busqueda, setBusqueda ] = useState("")
  const busquedaRetrasada = useDebounce(busqueda, 400)
  const { mangas, loading, error } = useMangas(busquedaRetrasada)

  return (
    <>
      <h2>Catalogo de Manga</h2>
      <button type="button" onClick={irAFavoritos}>
        Ir a Favoritos
      </button>
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda}></SearchBar>
      <CardList mangas={mangas} loading={loading} error={error} irAManga={irAManga}></CardList>
    </>
  )
}

export default Catalog;
