import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import {RiMovieLine} from "react-icons/ri"
import logo from "./images/trevmovies.png";
function Nav(){
    const linkStyles = {
        color: "#fff",
        textDecoration: "none",
    };
    return(
        <div className="navbar">
             <img alt="logo" src={logo} />
            <NavLink to="/movies"exact style={linkStyles}><RiMovieLine /> Movies</NavLink>
        </div>
    )
}
export default Nav;