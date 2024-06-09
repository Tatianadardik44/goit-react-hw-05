import { useEffect, useState } from "react"
import { FetchMovieActors } from "../Gallery/Gallery"
import { useParams } from "react-router-dom"
import Actors from "../Actors/Actors"

const MovieCast = () => {
    const [actors, setActors] = useState([])
    const {movieId } = useParams()
    useEffect(() => {
        async function getActors() {
            try {
                const data = await FetchMovieActors(movieId)
                setActors(data.cast)
                
           }catch  (error) {
               console.error('Ошибка при получении данных:', error);
          }

        }
        getActors()
    },[])
    return (
        <div>
            
            <ul>
                <Actors actors={ actors} />
            </ul>
            
       </div>
    )
}
export default MovieCast

          