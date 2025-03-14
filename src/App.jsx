import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import movieListData from "../data/movieListData.json";
import NavBar from "../components/NavBar";
import { Route, Routes } from 'react-router-dom'; // 라우터를 추가
import Detail from '../src/pages/Detail';
import './App.scss';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(movieListData.results);
  }, []);

  return (
    <div className="movie-list-container">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          posterPath={`${IMAGE_BASE_URL}${movie.poster_path}`}
          voteAverage={movie.vote_average}
        />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </>
  );
};

export default App;
