const SearchBar = ({ busqueda, setBusqueda }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar Manga..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <button type="button" onClick={() => setBusqueda("")}>
        Limpiar
      </button>
    </div>
  )
}

export default SearchBar
