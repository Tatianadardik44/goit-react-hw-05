import { Link } from "react-router-dom"

const MovieList = ({movies}) => {
    return (
        <div>
            {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
         </div>
    )
}
export default MovieList