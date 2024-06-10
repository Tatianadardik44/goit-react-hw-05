import { useEffect, useState } from "react"
import { FetchMovie } from "../components/Gallery/Gallery";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import SearchForm from "../components/SearchForm/SearchForm";

const MoviesPage = () => {
    const location = useLocation();
    
    const [movies, setMovies] = useState([]);
    const [params] = useSearchParams()
   
    const query = params.get("query") ?? "";
      useEffect(() => {
        if (!query) return
            
           const fetchData = async () => {
                try {
                    const data = await FetchMovie(query);
                    setMovies(data.results);
                } catch (error) {
                    console.error("Ошибка при поиске фильмов:", error);
                }
            };
            fetchData(); 
       
    }, [query]);

    return (
        <div>
             <SearchForm/>
            <div>
                <ul>
                    {movies.map(movie => (
                        <li key={movie.id}><Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link></li>)
                         )}
                </ul>
            </div>
          </div>
    )
}
export default MoviesPage