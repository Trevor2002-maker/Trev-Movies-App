import React from "react";

function MovieList({movies}){
    return(
        <div>
            <ul className="MovieList">
      {movies.map((movie) => (
        <li key={movie.id} className="Movie">
          <img src={movie.image} alt={movie.title} />
          <p>{movie.title}</p>
        </li>
      ))}
    </ul>
        </div>
    )
}
export default MovieList;