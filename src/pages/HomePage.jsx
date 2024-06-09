// import { useEffect, useState } from "react"
// import { fetchList } from "../components/Gallery/Gallery";
// import { Link } from "react-router-dom";
// const HomePage = () => {
//     const [movies, setMovies] = useState([]);
//     useEffect(() => {
//         fetchList()
//             .then(data => {
//                 if (data && data.results) {
//                     setMovies(data.results);
//                    }
//             }).catch();
        
//     },[])
//     return (
//         <div>
//             <p>Trending today</p>
//             <div>
//                 <ul>
//                     {movies.map(movie => (
//                         <li key={movie.id}>
//                                  <Link to={`${movie.id}`}>{movie.title}</Link>
//                                 </li>
//                     ))}
//                     </ul>
//             </div>
//         </div>
//     )
// }
// export default HomePage
// src/pages/HomePage.js
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { fetchList } from "../components/Gallery/Gallery";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchList()
      .then(data => {
        if (data && data.results) {
          setMovies(data.results);
        }
      })
      .catch(error => {
        console.error('Ошибка при получении данных:', error);
      });
  }, []);

  return (
    <div>
      <p>Популярное сегодня</p>
      <div>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
