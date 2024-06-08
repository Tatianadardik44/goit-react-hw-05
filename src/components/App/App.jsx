import { Route, Routes } from "react-router-dom"
import css from "./App.module.css"
import AppBar from "../AppBar/AppBar"
import HomePage from "../../pages/HomePage"
import MoviesPage from "../../pages/MoviesPage"
import NotFoundPage from "../../pages/NotFoundPage"
import MovieDetailsPage from "../../pages/MovieDetailsPage"



function App() {
  

  return (
    <div className={css.appConteiner}>
      <AppBar/>
      <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/movieDetailsPage/:id" element={<MovieDetailsPage/>}/>
        <Route path="/moviesPage" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage/>} />
   </Routes>
    </div>
  )
}

export default App
