import { createContext, useContext } from "react";
import { useFavoritos } from "../hooks/useFavoritos";

const FavoritosContext = createContext(null);

export const FavoritosProvider = ({ children }) => {
  const favoritosState = useFavoritos();

  return (
    <FavoritosContext.Provider value={favoritosState}>
      {children}
    </FavoritosContext.Provider>
  );
}

export const useFavoritosContext = () => {
  const contexto = useContext(FavoritosContext);

  if (!contexto) {
    throw new Error("useFavoritosContext() debe ser usado dentro de un <FavoritosProvider>");
  }
  return contexto;
};