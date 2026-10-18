import { useState } from "react";
import { useMangas } from "../../hooks/useMangas";
import { useDebounce } from "../../hooks/useDebounce";
import SearchBar from "../layout/SearchBar";
import CardList from "../layout/CardList";

const Catalog = ( {irAManga} ) => {
  const [ busqueda, setBusqueda ] = useState("")
  const busquedaRetrasada = useDebounce(busqueda, 400)
  const { mangas, loading, error } = useMangas(busquedaRetrasada)

  return (
    <>
      <h2 className="mb-4 text-2xl font-black">Catalogo de Manga</h2>
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda}></SearchBar>
      <CardList mangas={mangas} loading={loading} error={error} irAManga={irAManga}></CardList>
    </>
  )
}

export default Catalog;
