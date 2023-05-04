import React, { useState, useEffect } from 'react';
import MovieItem from './MovieItem';

function Movies() {
  const [movies, setMovies] = useState([]);
  const[currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;

  useEffect(() => {
    fetch('http://localhost:3000/movie')
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.log(error));
  }, []);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);


  return (
    <div className='Movies'>
    {currentMovies.map((movie)=>(
      <MovieItem key={movie.id} movie={movie}/>
    ))}
    <div className="Pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentMovies.length < moviesPerPage}
        >
          Next
        </button>
      </div>
  </div>
  );
}

export default Movies;