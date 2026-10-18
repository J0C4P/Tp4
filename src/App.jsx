import { useState } from "react";
import { VISTAS } from "./data/vistas.js";
import Catalog from "./components/views/Catalog";
import Manga from "./components/views/Manga";
import Favs from "./components/views/Favs";  

function App() {
  const [vista, setVista] = useState(VISTAS.CATALOGO)
  const [mangaSeleccionado, setMangaSeleccionado] = useState(null)

  const irACatalogo = () => {setVista(VISTAS.CATALOGO)}
  const irAManga = (manga) => {
    setMangaSeleccionado(manga)
    setVista(VISTAS.MANGA)
  }
  const irAFavoritos = () => {setVista(VISTAS.FAVORITOS)}

  return (
    <>
      <main>
        {vista === VISTAS.CATALOGO && <Catalog irAManga={irAManga} irAFavoritos={irAFavoritos}></Catalog>}
        {vista === VISTAS.MANGA && <Manga manga={mangaSeleccionado} irACatalogo={irACatalogo} irAFavoritos={irAFavoritos}></Manga>}
        {vista === VISTAS.FAVORITOS && <Favs irAManga={irAManga} irACatalogo={irACatalogo}></Favs>}
      </main>
    </>
  )
}

export default App
