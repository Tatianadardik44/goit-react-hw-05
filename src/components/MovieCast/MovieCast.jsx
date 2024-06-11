import { useEffect, useState } from "react"
import { FetchMovieActors } from "../Gallery/Gallery"
import { useParams } from "react-router-dom"
import Actors from "../Actors/Actors"
import { Vortex } from "react-loader-spinner"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
const MovieCast = () => {
    const [actors, setActors] = useState([]);
    const { movieId } = useParams();
    const [loading, setLoading] = useState(false);
     const [error, setError] = useState(false);
    useEffect(() => {
        setLoading(true);
        setError(false);
        async function getActors() {
            try {
                
                const data = await FetchMovieActors(movieId)
                setActors(data.cast)
                
           }catch  (error) {
               setError(true);
          }  finally {
      setLoading(false);
    }
 }
        getActors()
    },[movieId])
    return (
        <div>
            {loading && <Vortex />}
           {error && <ErrorMessage />}
            <ul>
                <Actors actors={ actors} />
            </ul>
            
       </div>
    )
}
export default MovieCast

          