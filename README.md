# MangaList — Consumiendo una API

🔗 **Deploy Netlify:** https://tp4mangalist.netlify.app/

## Qué es
Un catálogo de manga que consume una API pública: se ve el listado de los más populares, se puede buscar por texto, ver el detalle de cada manga y guardar favoritos. Los favoritos persisten entre recargas (F5).

## API usada
**Tenrai** (recurso `manga`): API gratuita y no oficial con los datos públicos de MyAnimeList, con el mismo esquema que Jikan v4. No requiere API key.
- Documentación: https://api.tenrai.org/documentation
- Base URL: `https://api.tenrai.org/v1`
- Límite de uso: 4 peticiones por segundo y 120 por minuto por IP.

## Cómo correrlo
```bash
pnpm install && pnpm run dev
```

## Variables de entorno
Copiá `.env.example` a `.env`:
```
VITE_API_BASE_URL=https://api.tenrai.org/v1
```
Se lee en un solo lugar, `src/config/env.js`. Por la excepción de la cursada el `.env` está en el repo; en un proyecto real iría en el `.gitignore`. En Netlify cargué la misma variable en el panel de variables de entorno del deploy.

## Cómo viaja el dato
1. `Catalog` guarda el texto del buscador (`busqueda`) y lo pasa por `useDebounce`, que espera 400 ms sin que el usuario escriba.
2. `useMangas(busquedaRetrasada)` tiene un `useEffect` con `[busqueda, pagina]` como dependencias: cada vez que cambian, llama a `buscarMangas`.
3. `buscarMangas` (en `api/mangaApi.js`) arma la URL con `URLSearchParams`, hace el `fetch`, verifica `res.ok` y devuelve los mangas ya normalizados.
4. El hook guarda `mangas`, `loading` y `error`, y `CardList` decide qué mostrar: cargando, error, vacío o las cards.

## Mis hooks
- **`useLocalStorage(clave, valorInicial)`** — igual que `useState`, pero sincronizado con `localStorage`. Es la base de `useFavoritos`.
- **`useFavoritos()`** — la lógica de favoritos: `agregarFavorito`, `quitarFavorito`, `esFavorito(id)` y los derivados `favoritos` y `total`. Se llama **una sola vez**, dentro de `FavoritosProvider`.
- **`useMangas(busqueda)`** — la petición: maneja `mangas`, `loading`, `error`, `hayMas` y la paginación de "Cargar más". Cancela la petición anterior con `AbortController` si la búsqueda cambia.
- **`useDebounce(valor, demora)`** — devuelve una copia del valor que se actualiza recién cuando pasó la demora sin cambios. Lo uso en el buscador del catálogo y en el de favoritos.

## Mi contexto
**`FavoritosContext`** — expone `favoritos`, `total`, `agregarFavorito`, `quitarFavorito` y `esFavorito`. Lo consumen `Card` y `Manga` (botón de favorito), `Nav` (el contador) y `Favs` (la lista). Es global porque esas ramas del árbol están lejos entre sí.

## Decisiones de estado
Lo que **no** metí en un contexto, y por qué:
- **`busqueda`** — `useState` plano dentro de `Catalog` y de `Favs`. No persiste ni le importa a nadie más.
- **`vista`** (qué pantalla se muestra) y **`mangaSeleccionado`** — `useState` en `App.jsx`. Es routing manual, como en la Tienda. Para ir al detalle paso el objeto manga completo por prop, porque el listado ya trae sinopsis, autores y géneros y no hace falta pedirlos de nuevo.
- **`pagina` de "Cargar más"** — vive dentro de `useMangas` y es un valor derivado: si la página guardada pertenece a otra búsqueda, vale 1.
- **Cantidad de favoritos y `esFavorito(id)`** — se calculan en cada render a partir de la lista, no se guardan aparte.

## Decisiones técnicas
- **`fetch` en lugar de `axios`:** el navegador ya lo trae, no sumo ninguna librería que no vimos. Como `fetch` no falla con un 404 o un 429, verifico `res.ok` y lanzo el error yo.
- **Qué reusé de sprints anteriores:** `useLocalStorage`, el patrón de Context (Provider + hook consumidor con guardia), las vistas como constantes (`VISTAS`) y el `Nav` y `Footer` de layout.
- **Favoritos con el objeto mínimo guardado:** guardo el manga ya normalizado, así la lista de favoritos se ve completa sin pedirle nada a la API (incluso sin conexión).
- **Una sola capa que habla con la API:** los componentes no conocen `fetch` ni la URL. Si la API cambia sus campos, solo se toca `normalizarManga`.
- **Los campos que pueden venir `null`** (`score`, `capitulos`, `sinopsis`, etc.) se muestran como "N/A". Para el título uso `title`, porque `title_english` a veces es `null`.

## Qué generé con IA
Usé Claude y ChatGPT durante todo el desarrollo. Primero para explicarme a profundidad línea por línea lo nuevo (`fetch`, `async/await`, `AbortController`, el cleanup del efecto, el debounce) y consultas tecnicas antes de usarlo. Dejé el estilo para el final a propósito para que lo genere la IA, para entender la lógica sin el ruido de las clases, como en el tp anterior.

## Lo que me costó
La capa de la API fue lo más nuevo: `fetch`, `async/await` y entender por qué `fetch` no falla con un 404. Por eso fui más despacio y pedí que me explicaran cada línea. Lo más delicado fue "Cargar más": qué página se pide y por qué `pagina` va en las dependencias del efecto.
