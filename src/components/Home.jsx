import React, {useState, useEffect} from "react";
import HeroBanner from "./HeroBanner/HeroBanner";
import MovieList from "./MovieList";
import Footer from "./Footer";
import AddMovieForm from "./AddMovieForm";

function Home() {
    const [movies, setMovies] = useState([]);
  

    useEffect(() => {
      fetch('http://localhost:3000/movie')
        .then((response) => response.json())
        .then((data) => setMovies(data))
        .catch((error) => console.log(error));
    }, []);
      // handle adding a new movie
  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
    function handleSearch(event) {
      const query = event.target.value.toLowerCase();
      const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(query) || movie.genre.toLowerCase().includes(query)
      );
      setMovies(filteredMovies);
    }

    
    return (
      <div className="Home">
        <HeroBanner
          handleSearch={handleSearch} 
        />
        <span className="movie-title">Latest Movies</span>
        <MovieList movies={movies} />
        <AddMovieForm onAddMovie={handleAddMovie} />
        <Footer />
      </div>
    );
  }
  
  export default Home;