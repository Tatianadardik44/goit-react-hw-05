import { useParams } from "react-router-dom"

import { useEffect, useState } from "react";
import { fetchMovieById } from "../components/Gallery/Gallery";
const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(false);
    useEffect(() => {
      
        const getData = async () => {
            try {
                const data = await fetchMovieById(movieId)
                setMovie(data);
            } catch (error) {
                setError(true)
            }
            
        };
        getData();
    }, [id]);
    return (
        <div>
        
                <h1>{movie.title}</h1>
        
        </div>
    )
   
}
export default MovieDetailsPage