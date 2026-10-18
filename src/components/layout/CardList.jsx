import Card from "./Card";

const CardList = ({ mangas, loading, error, irAManga, mensajeVacio = "No hay mangas disponibles." }) => {
  if (loading) return <p className="py-10 text-center">Cargando...</p>
  if (error) return <p className="border border-black p-4 text-center font-semibold">{error}</p>

  return (
    <div>
      {mangas.length === 0 ? (
        <p className="py-10 text-center">{mensajeVacio}</p>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {mangas.map((manga) => (
            <Card key={manga.id} manga={manga} irAManga={irAManga}/>
          ))}
        </div>
      )}
    </div>
  )
}

export default CardList;
