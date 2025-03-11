// MovieCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MovieCard({ id, title, posterPath, voteAverage }) {
    return (
        <div className="movie-card-container">
            <Link to={`/movie/${id}`}> 
                <div className="poster-image">
                    <img src={posterPath} alt={title} />
                </div>
                <div className="poster-title">{title}</div>
                <div className="poster-vote">{voteAverage}</div>
            </Link>
        </div>
    );
}

MovieCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    posterPath: PropTypes.string.isRequired,
    voteAverage: PropTypes.number.isRequired,
};

export default MovieCard;
