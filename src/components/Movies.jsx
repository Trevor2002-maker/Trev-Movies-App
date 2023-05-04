import React, { useState, useEffect } from 'react';

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movie')
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
    {movies.map((movie)=>(
        <div className="MovieItem" key={movie.id}>
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
    ))}
  </div>
  );
}

export default Movies;