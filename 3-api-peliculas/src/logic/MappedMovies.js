export const getMappedMovies = ({ movies }) => {
    const mappedMovies = []

    movies.map(movie => {
      mappedMovies.push({
        id: movie.imdbID,
        title: getShortTitle(movie.Title),
        year: movie.Year,
        poster: movie.Poster
      })
    }) 

    return mappedMovies
  }

const getShortTitle = title => {

  const shortTitle = title.split('', 22).join('') + '...'

  return shortTitle
}