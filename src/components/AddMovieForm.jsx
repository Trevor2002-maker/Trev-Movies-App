import React, { useState } from 'react';
import "./App.css";

function AddMovieForm({ onAddMovie }) {
  const [newMovie, setNewMovie] = useState({
    title: '',
    director: '',
    year: '',
    image: '',
    genre: '',
    rating: '',
  });

  // handle input changes
  const handleInputChange = (event) => {
    setNewMovie({
      ...newMovie,
      [event.target.name]: event.target.value,
    });
  };

  // handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // send POST request to server
    fetch('http://localhost:3001/movie', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMovie),
    })
      .then((response) => response.json())
      .then((data) => {
        // update Movies component with new movie data
        onAddMovie(data);
      })
      .catch((error) => console.error(error));

    // reset form fields
    setNewMovie({
        title: '',
        director: '',
        year: '',
        image: '',
        genre: '',
        rating: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className='movie-form'>
        <label> Title:
      <input type="text" name="title" value={newMovie.title} onChange={handleInputChange} />
      </label>
      <label> Director:
      <input type="text" name="director" value={newMovie.director} onChange={handleInputChange} />
      </label>
      <label>  Year: 
      <input type="text" name="year" value={newMovie.year} onChange={handleInputChange} />
      </label>
      <label> Genre:
      <input type="text" name="genre" value={newMovie.genre} onChange={handleInputChange} />
      </label>
      <label> Rating:
      <input type="number" name="rating" value={newMovie.rating} onChange={handleInputChange} />
      </label>
      <label> Poster:
      <input type="url" name="image" value={newMovie.image} onChange={handleInputChange} />
      </label>
      <button type="submit">Add Movie</button>
    </form>
  );
}
export default AddMovieForm;