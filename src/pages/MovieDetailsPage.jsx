
import { NavLink, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieById } from "../components/Gallery/Gallery";
import css from "./MovieDetailsPage.module.css"

const MovieDetailsPage = () => {
    
   
    const { movieId } = useParams();
    
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
          const data = await fetchMovieById(movieId);
         
        setMovie(data);
      } catch (error) {
        console.error( error);
      }
    };
    getData();
  }, [movieId]);

  if (!movie) return <p>Загрузка...</p>;

  return (
      <div>
          <div className={css.poster}>
              <div> <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} height={320} width={200} /></div>
         <div> <h4>{movie.title}</h4>
          <p>Vote count: {movie.vote_count} </p>
          <h4>Overview</h4>
          <p>{movie.overview}</p>
          <h4>Release date</h4>
              <p>{movie.release_date}</p>
              </div>
          </div>
          <div>
              <p>Additional information</p>
              <ul>
                  <li>
                      <NavLink to="cast">Cast</NavLink>
                      </li>
                  <li> <NavLink to="reviews">Reviews</NavLink></li>
              </ul>
              <Outlet/>
    </div>
    </div>
  );
};

export default MovieDetailsPage;
