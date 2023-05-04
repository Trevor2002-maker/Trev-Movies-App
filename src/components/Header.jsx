import React from "react";
import "./App.css"
import logo from "./images/trevmovies.png";

function Header(){
    return (
        <div className="header">    
            <img alt="logo" src={logo} />
        </div>
    )
}
export default Header;