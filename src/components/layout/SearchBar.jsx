const SearchBar = ({ busqueda, setBusqueda }) => {
  return (
    <div className="mb-6 flex gap-2">
      <input
        type="text"
        placeholder="Buscar Manga..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="min-w-0 flex-1 border border-black px-3 py-2 text-sm focus:outline-2 focus:outline-offset-2 focus:outline-black"
      />
      <button type="button" className="btn" onClick={() => setBusqueda("")}>
        Limpiar
      </button>
    </div>
  )
}

export default SearchBar
