
import { useEffect, useState } from "react";
import { fetchList } from "../components/Gallery/Gallery";
import MovieList from "../components/MovieList/MovieList";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
const location = useLocation();
  useEffect(() => {
  
      async function getData() {
          try {
              const data = await fetchList();
              setMovies(data.results)
          } catch (error) {
               console.error('Ошибка  данных:', error);
          }
      }
      getData()
  }, []);

  return (
    <div>
      <p>Trending today</p>
      <ul>
        <MovieList movies={movies} location={ location} />
      </ul>
     
    </div>
  );
};

export default HomePage;
