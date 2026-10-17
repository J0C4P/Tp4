import { useLocalStorage } from "./useLocalStorage";

export function useFavoritos() {
  const [favoritos, setFavoritos] = useLocalStorage("tutienda:favoritos", []);

  const esFavorito = (id) => {
    return favoritos.some((item) => item.id === id);
  }

  const agregarFavorito = (item) => {
    if (!esFavorito(item.id)) {
      setFavoritos((prev) => [...prev, item]);
    }
  };

  const quitarFavorito = (id) => {
    setFavoritos((prev) => prev.filter((item) => item.id !== id));
  };

  const total = favoritos.length;

  return {
    esFavorito,
    favoritos,
    total,
    agregarFavorito,
    quitarFavorito,
  };
}
