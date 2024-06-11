import { Route, Routes } from "react-router-dom"
import css from "./App.module.css"
import { lazy, Suspense } from "react";
import MovieCast from "../MovieCast/MovieCast"
import MovieReviews from "../MovieReviews/MovieReviews"
import Navigation from "../Navigation/Navigation"
const HomePage = lazy(() => import("../../pages/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"))


function App() {
  return (
    <div className={css.appConteiner}>
     <Navigation />
      <Suspense fallback={<div>Loading page..</div>}>
           <Routes>
        <Route path="/" element={< HomePage />} />
       
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast/>} />
          <Route path="reviews" element={<MovieReviews/>} />
          </Route >
        <Route path="*" element={<NotFoundPage/>} />
   </Routes>
   </Suspense>
    </div>
  )
}

export default App
