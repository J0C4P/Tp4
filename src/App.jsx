import { useState } from "react";
import { VISTAS } from "./data/vistas.js";
import Catalog from "./components/views/Catalog";
import Manga from "./components/views/Manga";  

function App() {
  const [vista, setVista] = useState(VISTAS.CATALOGO)
  const [mangaSeleccionado, setMangaSeleccionado] = useState(null)

  const irACatalogo = () => {setVista(VISTAS.CATALOGO)}
  const irAManga = (manga) => {
    setMangaSeleccionado(manga)
    setVista(VISTAS.MANGA)
  }

  return (
    <>
      <main>
        {vista === VISTAS.CATALOGO && <Catalog irAManga={irAManga}></Catalog>}
        {vista === VISTAS.MANGA && <Manga manga={mangaSeleccionado} irACatalogo={irACatalogo}></Manga>}
      </main>
    </>
  )
}

export default App
