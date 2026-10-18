import { useState } from "react";
import { VISTAS } from "./data/vistas.js";
import Catalog from "./components/views/Catalog";
import Manga from "./components/views/Manga";
import Favs from "./components/views/Favs";  
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

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
    <div className="flex min-h-screen flex-col">
      <Nav irACatalogo={irACatalogo} irAFavoritos={irAFavoritos}></Nav>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">
        {vista === VISTAS.CATALOGO && <Catalog irAManga={irAManga}></Catalog>}
        {vista === VISTAS.MANGA && <Manga manga={mangaSeleccionado} irACatalogo={irACatalogo}></Manga>}
        {vista === VISTAS.FAVORITOS && <Favs irAManga={irAManga}></Favs>}
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
