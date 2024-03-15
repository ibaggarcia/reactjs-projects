import './App.css'
import { getMovies } from './logic/Movies.js'
import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/Movies.jsx'
import { useState, useRef } from 'react'
import debounce from 'just-debounce-it'

function App() {

  const [sort, setSort] = useState(false)
  const { movies, error, refreshData } = useMovies({ sort })
  const lastSearch = useRef()

  const debounceSearch = debounce((query) => {
    getMovies({ search: query })
      .then(movies => refreshData({ data: movies }))
  }, 750)

  const handleSubmit = (eve) => {
    eve.preventDefault()

    const { search } = Object.fromEntries(new window.FormData(eve.target))
    if (search === lastSearch.current) return
    lastSearch.current = search

    getMovies({ search })
      .then(movies => refreshData({ data: movies }))
  }

  const handleSort = () => {
    const newSort = !sort
    setSort(newSort)
  }

  const handleChange = eve => {
    const query = eve.target.value
    debounceSearch(query)
  }

  return (
    <>
      <header>
        <h1>Buscador de Películas</h1>
        <form className='search' onSubmit={handleSubmit}>
          <input className='search-input' name='search' onChange={handleChange} type="text" placeholder='Star Wars, Marvel, etc...' required/>
          <input type="checkbox" onChange={handleSort} name="sort" />
          <button className='search-button' type='submit'>Buscar</button>
        </form>
        { error && (<h4 className='error'>{error}</h4>) }
      </header>
      <main>
        <Movies movies={movies}/>
      </main>
    </>
  )
}

export default App
