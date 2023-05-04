import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import {RiMovieLine} from "react-icons/ri"
import {FiHome} from "react-icons/fi";

function Nav(){
    return(
        <div className="navbar">
            <NavLink to="/"><FiHome/>Home</NavLink>
            <NavLink to="/movies"><RiMovieLine /></NavLink>
        </div>
    )
}
export default Nav;