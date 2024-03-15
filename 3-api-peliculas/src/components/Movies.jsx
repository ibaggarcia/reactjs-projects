export function Movies({ movies }) {
    
    return(
        movies
        ? <ListOfMovies movies={movies}/>
        : <NoResults/>
    )
}

function ListOfMovies({ movies }) {
    return(
        <ul>
        {
            movies.map(movie => (
            <li key={movie.id}>
                <h2 className='text-title'>{movie.title}</h2>
                <h4 className='text-year'>{movie.year}</h4>
                <img src={movie.poster} alt={`A poster of the ${movie.title} movie`} />
            </li>
            ))
        }
        </ul>
    )
}

function NoResults() {
    return(
        <h2 className='no-movies'>No se encontraron peliculas</h2>
    )
}