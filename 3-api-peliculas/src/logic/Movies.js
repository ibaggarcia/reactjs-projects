import { API_KEY, OMDBAPI_ENDPOINT } from "../source/api"
import { getMappedMovies } from "./MappedMovies"

export const getMovies = async ({ search }) => {
    const res = await fetch(`${OMDBAPI_ENDPOINT}${API_KEY}&s=${search}`)
    const data = await res.json()
    const movies = data?.Search

    return movies ? getMappedMovies({ movies }) : 'No se encontraron resultados con esa búsqueda.'
  }