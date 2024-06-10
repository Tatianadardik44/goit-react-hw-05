
import {  Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { fetchMovieById } from "../components/Gallery/Gallery";
import css from "./MovieDetailsPage.module.css"
import { Vortex } from "react-loader-spinner";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const MovieDetailsPage = () => {
  const location = useLocation();
 const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);
  const backLink = useRef(location.state?.from ?? '/');
  
  useEffect(() => {
    const getData = async () => {
      if (!movieId) return;
      try {
        setLoading(true);
        setError(false);
          const data = await fetchMovieById(movieId);
         
        setMovie(data);
      } catch (error) {
       setError(true)
      } finally {
      setLoading(false);
    }
    };
    getData();
  }, [movieId]);

  if (!movie) return <Vortex />;

  return (
    <div>
      {loading && <Vortex />}
       {error && <ErrorMessage />}
     <Link to={backLink.current}>Go Back</Link>
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
