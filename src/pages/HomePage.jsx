import { useEffect, useState } from "react"
import { fetchList } from "../components/Gallery/Gallery";
import { Link } from "react-router-dom";
const HomePage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        
        fetchList()
            .then(data => {
                if (data && data.results) {
                    setMovies(data.results);
                   
                    
                }
            }).catch();
        
    },[]) 
    return (
        <div>
            <p>Trending today</p>
            <div>
                <ul>
                    {movies.map(movie => (
                        <li key={movie.id}>
                                <Link to={`${movie.id}`}>{movie.title}</Link>
                                </li>
                    ))}
                    </ul>
            </div>
        </div>
    )
}
export default HomePage