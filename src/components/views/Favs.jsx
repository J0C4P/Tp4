import { useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useFavoritosContext } from "../../context/FavoritosContext";
import SearchBar from "../layout/SearchBar";
import CardList from "../layout/CardList";

const Favs = ( {irAManga} ) => {
  const [ busqueda, setBusqueda ] = useState("")
  const busquedaRetrasada = useDebounce(busqueda, 400)
  const { favoritos } = useFavoritosContext()

  const favoritosFiltrados = favoritos.filter((manga) =>
    manga.titulo.toLowerCase().includes(busquedaRetrasada.toLowerCase())
  );

  return (
    <>
      <h2>Mis Favoritos</h2>
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda}></SearchBar>
      <CardList mangas={favoritosFiltrados} irAManga={irAManga}></CardList>
    </>
  )
}

export default Favs;
