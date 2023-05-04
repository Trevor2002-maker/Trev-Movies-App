import React, {useState, useEffect} from 'react';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import Movies from './Movies';
import Login from './Login';

function App() {
    const[movies,setMovies] = useState([]);

    useEffect(()=>{
      fetch('http://localhost:3000/movie')
      .then((response)=> response.json())
      .then(data => setMovies(data))
      .catch((error)=> console.error(error));
    }, [])
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/movies' element={<Movies movies={movies}/>}/>
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
