import { useState } from "react"

export function useMovies({ sort }) {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState()
  
    const refreshData = ({ data }) => {
      if (typeof data == 'string') {
        setError(data)
        setMovies([])
      } else {
        setMovies(data)
        setError()
      }
    }

    const getSortedMovies = movies => {
      return sort
        ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
        : movies
    }
  
    return { movies: getSortedMovies(movies), error, refreshData }
  }