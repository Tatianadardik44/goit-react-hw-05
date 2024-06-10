
import { useEffect, useState } from "react";
import { fetchList } from "../components/Gallery/Gallery";
import MovieList from "../components/MovieList/MovieList";
import { useLocation } from "react-router-dom";
import { Vortex } from "react-loader-spinner";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
  
      async function getData() {
        try {
          setLoading(true);
          setError(false);
              const data = await fetchList();
              setMovies(data.results)
          } catch (error) {
               setError(true);
          } finally {
      setLoading(false);
    }
      }
      getData()
  }, []);

  return (
    <div>
      <p>Trending today</p>
      {loading && <Vortex />}
       {error && <ErrorMessage />}
      <ul>
        <MovieList movies={movies} location={ location} />
      </ul>
     
    </div>
  );
};

export default HomePage;
