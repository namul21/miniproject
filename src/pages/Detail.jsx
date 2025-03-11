import React from 'react';
import { useNavigate } from 'react-router-dom';
import movieDetailData from '/coding/miniproject/data/movieDetailData.json';

const Detail = () => {
  const navigate = useNavigate();
  const {
    backdrop_path,
    poster_path,
    title,
    vote_average,
    genres,
    overview,
  } = movieDetailData;

  return (
    <div className="movie-detail-container">
      <div
        className="backdrop"
        style={{ backgroundImage: `url(${backdrop_path})` }}
      >
        <button className="back-button" onClick={() => navigate("/")}>뒤로 가기</button>
      </div>
      <div className="detail-content">
        <img className="poster" src={poster_path} alt={title} />
        <div className="info">
          <h1>{title}</h1>
          <p className="rating">평점: {vote_average}</p>
          <p className="genres">장르: {genres.map((g) => g.name).join(", ")}</p>
          <p className="overview">{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
