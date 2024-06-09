import { useState } from "react"
import { FetchMovie } from "../components/Gallery/Gallery";
import { Link } from "react-router-dom";

const MoviesPage = () => {
    const [inputValue, setInputValue] = useState("")
    const [movies, setMovies] = useState([]);
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }
    const handleSearch = async () => {
      if (inputValue.trim() === "") {
            alert("Введите название фильма для поиска");
            return;
        }
        try {
            const data = await FetchMovie(inputValue)
            setMovies(data.results)
        } catch(error) {
        console.error( error);
      }
  }
    return (
        <div>
            
                <input
                type="text"
                placeholder="Введите название фильма"
                value={inputValue}
                onChange={handleChange}
                />
            <button onClick={handleSearch}>Serch</button>
            <div>
                <ul>
                    {movies.map(movie => (
                        <li key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.title}</Link></li>
                    )
                        
                    )}
                </ul>
            </div>
          
        </div>
    )
}
export default MoviesPage