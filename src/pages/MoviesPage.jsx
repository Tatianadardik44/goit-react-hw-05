import { useEffect, useState } from "react"
import { FetchMovie } from "../components/Gallery/Gallery";
import { Link, useSearchParams } from "react-router-dom";

const MoviesPage = () => {
    //     const [inputValue, setInputValue] = useState("")
    //     const [movies, setMovies] = useState([]);
    //     const handleChange = (event) => {
    //         setInputValue(event.target.value)
    //     }
    //     const handleSearch = async () => {
    //       if (inputValue.trim() === "") {
    //             alert("Введите название фильма для поиска");
    //             return;
    //         }
    //         try {
    //             const data = await FetchMovie(inputValue)
    //             setMovies(data.results)
    //         } catch(error) {
    //         console.error( error);
    //         } finally {
    //             setInputValue("")
    //         }
    //   }
    const [movies, setMovies] = useState([]);
    const [params, setParams] = useSearchParams()
   const [inputValue, setInputValue] = useState("")
    const titleFilter = params.get("title") ?? "";
   
    const handleChange = (event) => {
        const targetValue = event.target.value;
        // params.set("title", targetValue);
        // setParams(params);
           setInputValue(targetValue)
    }
    const handleSearch =  () => {
        if (inputValue.trim() === "") {
            alert("Введите название фильма для поиска");
            return;
        }
          params.set("title", inputValue);
        setParams(params);
        setInputValue(""); 
        // } try {
        //     const data = await FetchMovie(titleFilter)
        //     setMovies(data.results)
        // } catch (error) {
        //     console.error("Ошибка при поиске фильмов:", error);
        // }
    };
     useEffect(() => {
        if (titleFilter) {
            // handleSearch();
           const fetchData = async () => {
                try {
                    const data = await FetchMovie(titleFilter);
                    setMovies(data.results);
                } catch (error) {
                    console.error("Ошибка при поиске фильмов:", error);
                }
            };
            fetchData(); 
        }
    }, [titleFilter]);

    return (
        <div>
            
                <input
                type="text"
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