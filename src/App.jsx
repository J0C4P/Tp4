import { useState } from "react";
import { VISTAS } from "./data/vistas.js";
import Catalog from "./components/views/Catalog";

function App() {
  const [vista, setVista] = useState(VISTAS.CATALOGO)

  const irACatalogo = () => {setVista(VISTAS.CATALOGO)}
  const irAManga = () => {setVista(VISTAS.MANGA)}

  return (
    <>
      <main>
        {vista === VISTAS.CATALOGO && <Catalog></Catalog>}
      </main>
    </>
  )
}

export default App
