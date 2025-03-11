import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import movieListData from "../data/movieListData.json";

const Search = () => {
  const [query, setQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movieListData.results);
  const [sortType, setSortType] = useState("rating");
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setQuery(searchTerm);
    filterAndSortMovies(searchTerm, sortType, selectedGenre);
  };

  const handleSortChange = (event) => {
    const sortValue = event.target.value;
    setSortType(sortValue);
    filterAndSortMovies(query, sortValue, selectedGenre);
  };

  const handleGenreChange = (event) => {
    const genre = event.target.value;
    setSelectedGenre(genre);
    filterAndSortMovies(query, sortType, genre);
  };

  const filterAndSortMovies = (searchTerm, sortValue, genre) => {
    let filtered = movieListData.results.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm)
    );
    
    if (genre) {
      filtered = filtered.filter((movie) => movie.genre_ids.includes(Number(genre)));
    }
    
    if (sortValue === "rating") {
      filtered.sort((a, b) => b.vote_average - a.vote_average);
    } else if (sortValue === "release_date") {
      filtered.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    }
    
    setFilteredMovies(filtered);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="영화 제목 검색..."
        value={query}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="filter-container">
        <select onChange={handleSortChange} value={sortType}>
          <option value="rating">평점 높은 순</option>
          <option value="release_date">최신 개봉 순</option>
        </select>
        <select onChange={handleGenreChange} value={selectedGenre}>
          <option value="">장르 선택</option>
          <option value="28">액션</option>
          <option value="35">코미디</option>
          <option value="18">드라마</option>
          <option value="27">공포</option>
        </select>
      </div>
      <div className="movie-list-container">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            posterPath={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            voteAverage={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
