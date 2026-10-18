import Card from "./Card";

const CardList = ({ mangas, loading, error, irAManga }) => {
  if (loading) return <p>Cargando...</p>
  if (error) return <p>{error}</p>

  return (
    <div>
      {mangas.length === 0 ? (
        <p>No hay mangas disponibles.</p>
      ) : (
        <div>
          {mangas.map((manga) => (
            <Card key={manga.id} manga={manga} irAManga={irAManga}/>
          ))}
        </div>
      )}
    </div>
  )
}

export default CardList;
