import React, { useState, useEffect } from "react";
import movieListData from "../data/movieListData.json";
import "./MovieList.css";
import MovieCard from "./MovieCard";

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
          title={movie.title}
          posterPath={`${IMAGE_BASE_URL}${movie.poster_path}`}
          voteAverage={movie.vote_average}
        />
      ))}
    </div>
  );
};

export default MovieList;
