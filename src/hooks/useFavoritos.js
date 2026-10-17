import { useLocalStorage } from "./useLocalStorage";

export function useFavoritos() {
  const [favoritos, setFavoritos] = useLocalStorage("tutienda:favoritos", []);

  const agregarFavorito = (item) => {
    const yaEsta = favoritos.some((i) => i.id === item.id);

    if (!yaEsta) {
      setFavoritos((prev) => [...prev, item]);
    }
  };

  const quitarFavorito = (id) => {
    setFavoritos((prev) => prev.filter((item) => item.id !== id));
  };

  const total = favoritos.length;

  return {
    favoritos,
    total,
    agregarFavorito,
    quitarFavorito,
  };
}
