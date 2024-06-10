import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FetchMovieReviews } from "../Gallery/Gallery"
import ReviewsCard from "../ReviewsCard/ReviewsCard"
import { Vortex } from "react-loader-spinner"
import ErrorMessage from "../ErrorMessage/ErrorMessage"

const MovieReviews = () => {
    const { movieId } = useParams();
    const [review, setReview] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        async function getReview() {
            try {
                setLoading(true);
                setError(false);
                const data = await FetchMovieReviews(movieId)
               setReview(data.results)
                
                
          }catch (error) {
                setError(true);
          } finally {
      setLoading(false);
    }

        }
        getReview()
    },[movieId])
    return (
        <div>
            {loading && <Vortex />}
              {error && <ErrorMessage />}
            <ReviewsCard review={review } />
        </div>
)
}
export default MovieReviews