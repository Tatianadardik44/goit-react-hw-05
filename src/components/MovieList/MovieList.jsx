import { Link } from "react-router-dom"

const MovieList = ({ movies, location }) => {
  
    return (
        <div>
            {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: `${location.pathname}${location.search}` }}>{movie.title}</Link>
            </li>
          ))}
         </div>
    )
}
export default MovieList