
import { useEffect, useState } from "react";
import { fetchList } from "../components/Gallery/Gallery";
import MovieList from "../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

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
       <MovieList movies={movies } />
      </ul>
     
    </div>
  );
};

export default HomePage;
