import React from 'react';
import Header from "./Header";
import './App.css';
import { Routes, Route} from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import Movies from './Movies';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/movies' element={<Movies />}/>
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
