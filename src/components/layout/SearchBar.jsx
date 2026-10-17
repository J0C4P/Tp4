const SearchBar = ({ busqueda, setBusqueda }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar Manga..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
