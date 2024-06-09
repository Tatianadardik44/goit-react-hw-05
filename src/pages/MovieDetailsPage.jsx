// import { useParams } from "react-router-dom"

// import { useEffect, useState } from "react";
// import { fetchMovieById } from "../components/Gallery/Gallery";
// const MovieDetailsPage = () => {
//     const  {movieId }= useParams();
//     console.log(movieId);
//     const [movie, setMovie] = useState(null);
   
//     useEffect(() => {
      
//         const getData = async () => {
//             try {
//                 const data = await fetchMovieById(movieId)
//                 setMovie(data);
//             } catch (error) {
//                console.log("error");
//             }
            
//         };
//         getData();
//     },[movieId]);
//     return (
//         <div>
        
//                 <h1>{movie.title}</h1>
//         <p>hello</p>
//         </div>
//     )
   
// }
// export default MovieDetailsPage
// src/pages/MovieDetailsPage.js
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieById } from "../components/Gallery/Gallery";


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
          <img src={ `https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} height={280} width={180}/>
      <h4>{movie.title}</h4>
    
    </div>
  );
};

export default MovieDetailsPage;
