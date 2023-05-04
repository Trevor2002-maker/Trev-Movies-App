import React from 'react';
import "./App.css";
function MovieItem({ movie }) {
  return (
    <div className="MovieItem">
      <img src={movie.image} alt={movie.title} />
      <div className="details">
        <h2>{movie.title}</h2>
        <p>Release Year: {movie.year}</p>
        <p>Directed By: {movie.director}</p>
        <p>Cast: {movie.starring}</p>
        <p>Genre: {movie.genre}</p>
        <p>Rating: {movie.rating}</p>
        <p>Age: {movie.maturity_rating}</p>
        <p>Duration: {movie.duration}</p>
        <p>Description: {movie.description}</p>
      </div>
    </div>
  );
}

export default MovieItem;