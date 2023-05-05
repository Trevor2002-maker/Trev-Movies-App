import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieItem from './MovieItem';
import Footer from './Footer';

function Movies() {
  const [movies, setMovies] = useState([]);
  const {id} = useParams();
  const[currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;


  const handleDeleteMovie = (id) => {
    fetch(`http://localhost:3000/movie/${id}`, { method: 'DELETE' })
      .then(() => setMovies(movies.filter(movie => movie.id !== id)))
      .catch(error => console.error(error));
  };
  useEffect(() => {
    fetch('http://localhost:3000/movie')
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.log(error));
  }, [id]);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  if(!movies){
    return<div>Loading...</div>;
  }
 
  return (
    <div className='Movies'>
    {currentMovies.map((movie)=>(
      <MovieItem key={movie.id} movie={movie} onDeleteMovie={handleDeleteMovie}/>
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
      <Footer />
  </div>
  );
}

export default Movies;