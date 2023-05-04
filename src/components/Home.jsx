import React, {useState, useEffect} from "react";
import HeroBanner from "./HeroBanner/HeroBanner";
import MovieList from "./MovieList";

function Home() {
    const [movies, setMovies] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:3000/movie')
        .then((response) => response.json())
        .then((data) => setMovies(data))
        .catch((error) => console.log(error));
    }, []);
  
    const handleSearch = (searchTerm) => {
      const results = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    };
  
    return (
      <div className="Home">
        <HeroBanner
          onSearch={handleSearch}
        />
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        ) : (
         <></>
        )}

        <span className="movie-title">Latest Movies</span>
        <MovieList movies={movies} />
      
      </div>
    );
  }
  
  export default Home;