import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import {RiMovieLine} from "react-icons/ri"
import {FiHome} from "react-icons/fi";
import {MdOutlineAccountCircle} from "react-icons/md";
import logo from "./images/trevmovies.png";
function Nav(){
    const linkStyles = {
        color: "#fff",
        textDecoration: "none",
    };
    return(
        <div className="navbar">
             <img alt="logo" src={logo} />
            <NavLink to="/" exact style={linkStyles}><FiHome /> Home</NavLink>
            <NavLink to="/movies"exact style={linkStyles}><RiMovieLine /> Movies</NavLink>
            <NavLink to ="/login"exact style={linkStyles}><MdOutlineAccountCircle /> Login</NavLink>
        </div>
    )
}
export default Nav;