import { useEffect, useState } from "react"
import { FetchMovie } from "../components/Gallery/Gallery";
import {  useLocation, useSearchParams } from "react-router-dom";
import SearchForm from "../components/SearchForm/SearchForm";
import MovieList from "../components/MovieList/MovieList";
import { Vortex } from "react-loader-spinner";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const MoviesPage = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
     const [error, setError] = useState(false);
    const [movies, setMovies] = useState([]);
    const [params] = useSearchParams()
   
    const query = params.get("query") ?? "";
      useEffect(() => {
          if (!query) return ;
            
           const fetchData = async () => {
               try {
                   setLoading(true);
                   setError(false)
                    const data = await FetchMovie(query);
                     if (data.results.length === 0) {
                     setError(true);
        } else {
          setError(false);
          setMovies(data.results);
        }
                } catch (error) {
                    setError(true)
                } finally {
      setLoading(false);
    }
            };
            fetchData(); 
       
    }, [query]);

    return (
        <div>
            <SearchForm />
            {loading && <Vortex />}
             {error && <ErrorMessage />}
             <MovieList  movies={movies} location={ location}/>
          </div>
    )
}
export default MoviesPage