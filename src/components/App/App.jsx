import { Route, Routes } from "react-router-dom"
import css from "./App.module.css"
import AppBar from "../AppBar/AppBar"
import HomePage from "../../pages/HomePage"
import MoviesPage from "../../pages/MoviesPage"
import NotFoundPage from "../../pages/NotFoundPage"
import MovieDetailsPage from "../../pages/MovieDetailsPage"
import MovieCast from "../MovieCast/MovieCast"
import MovieReviews from "../MovieReviews/MovieReviews"



function App() {
  

  return (
    <div className={css.appConteiner}>
      <AppBar/>
      <Routes>
        <Route path="/" element={< HomePage />} />
       
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast/>} />
          <Route path="reviews" element={<MovieReviews/>} />
          </Route >
        <Route path="*" element={<NotFoundPage/>} />
   </Routes>
    </div>
  )
}

export default App
