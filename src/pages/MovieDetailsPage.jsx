
import {  Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { fetchMovieById } from "../components/Gallery/Gallery";
import css from "./MovieDetailsPage.module.css"
import { Vortex } from "react-loader-spinner";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import { GoArrowLeft } from "react-icons/go";
import clsx from "clsx";
const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active)
}
const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg'

const MovieDetailsPage = () => {
  const location = useLocation();
 const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);
  const backLink = useRef(location.state?.from ?? '/movies');
  
  useEffect(() => {
    const getData = async () => {
      if (!movieId) return;
      setLoading(true);
        setError(false);
      try {
        
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
      <Link to={backLink.current} className={css.linkButton}><GoArrowLeft className={ css.area} /> Go Back</Link>
          <div className={css.poster}>
        <div className={css.posterFoto }> <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : defaultImg} alt={movie.title} height={320} width={200} /></div>
        <div className={css.description}>
          <h2>{movie.title}</h2>
          <p>Vote count: {movie.vote_count} </p>
          <h4>Overview</h4>
          <p>{movie.overview}</p>
          <h4>Release date</h4>
              <p>{movie.release_date}</p>
              </div>
          </div>
          <div className={css.link}>
              <b>Additional information</b>
              <ul>
                  <li>
                      <NavLink to="cast" className={buildLinkClass}>Cast</NavLink>
                      </li>
                  <li> <NavLink to="reviews" className={buildLinkClass}>Reviews</NavLink></li>
              </ul>
              <Outlet/>
    </div>
    </div>
  );
};

export default MovieDetailsPage;
