import { useState } from "react";
import { useMangas } from "../../hooks/useMangas";
import SearchBar from "../layout/SearchBar";
import CardList from "../layout/CardList";

const Catalog = () => {
  const [busqueda, setBusqueda] = useState("")
  const { mangas, loading, error } = useMangas(busqueda)

  return (
    <>
      <h2>Catalogo de Manga</h2>
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda}></SearchBar>
      <CardList mangas={mangas} loading={loading} error={error}></CardList>
    </>
  )
}

export default Catalog;
