import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FetchMovieReviews } from "../Gallery/Gallery"
import ReviewsCard from "../ReviewsCard/ReviewsCard"

const MovieReviews = () => {
    const { movieId } = useParams()
    const [review, setReview] = useState([])
    useEffect(() => {
        async function getReview() {
            try {
                const data = await FetchMovieReviews(movieId)
               setReview(data.results)
                
                
          }catch (error) {
               console.error('Ошибка при получении данных:', error);
          }

        }
        getReview()
    },[])
    return (
        <div>
            <ReviewsCard review={review } />
        </div>
)
}
export default MovieReviews