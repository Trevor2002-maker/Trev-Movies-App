import React, {useState}  from 'react';
import "./App.css";
import RatingStars from './RatingStars';

function MovieItem({ movie, onDeleteMovie, onUpdate }) {
  const [title, setTitle] = useState(movie.title);
  const [genre, setGenre] = useState(movie.genre);

  const handleUpdateClick = () => {
    const updatedMovie = {
      id: movie.id,
      title,
      genre,
    };
    onUpdate(updatedMovie);
  };
  return (
    <div className="MovieItem">
      <div className="movie-img">
      <img src={movie.image} alt={movie.title} />
      <p>Rating: <RatingStars rating={movie.rating}/></p>
      </div>
      <div className="details">
        <h2>{movie.title}</h2>
        <p>Release Year: {movie.year}</p>
        <p>Directed By: {movie.director}</p>
        <p>Cast: {movie.starring}</p>
        <p>Genre: {movie.genre}</p>
        
        <p>Age: {movie.maturity_rating}</p>
        <p>Duration: {movie.duration}</p>
        <p>Description: {movie.description}</p>
        <button onClick={()=> onDeleteMovie(movie.id)}>Delete</button>
      </div>
      <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <input value={genre} onChange={(e) => setGenre(e.target.value)} />
      <button onClick={handleUpdateClick}>Update</button>
      </div>
    </div>
    
  );
}

export default MovieItem;