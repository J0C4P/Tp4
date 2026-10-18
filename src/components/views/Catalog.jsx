import { useState } from "react";
import { useMangas } from "../../hooks/useMangas";
import { useDebounce } from "../../hooks/useDebounce";
import SearchBar from "../layout/SearchBar";
import CardList from "../layout/CardList";

const Catalog = ( {irAManga} ) => {
  const [ busqueda, setBusqueda ] = useState("")
  const busquedaRetrasada = useDebounce(busqueda, 400)
  const { mangas, loading, error, hayMas, cargandoMas, cargarMas } = useMangas(busquedaRetrasada)

  return (
    <>
      <h2 className="mb-4 text-2xl font-black">Catalogo de Manga</h2>
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda}></SearchBar>
      <CardList mangas={mangas} loading={loading} error={error} irAManga={irAManga}></CardList>
      {hayMas && !loading && !error && (
        <button
          type="button"
          className="btn btn-solid mx-auto mt-6 block"
          onClick={cargarMas}
          disabled={cargandoMas}
        >
          {cargandoMas ? "Cargando..." : "Cargar más"}
        </button>
      )}
    </>
  )
}

export default Catalog;
