import { Link } from "react-router-dom"
import css from "./MovieList.module.css"
const MovieList = ({ movies, location }) => {
  
    return (
        <div className={css.list}>
            {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: `${location.pathname}${location.search}` }} className={css.link}>{movie.title}</Link>
            </li>
          ))}
         </div>
    )
}
export default MovieList