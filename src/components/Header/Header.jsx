import React from "react";
import "./Header.css";
import logo from "../images/trevmovies.png";
import {FiHome} from "react-icons/fi";
import {MdFlashOn} from"react-icons/md";
import {MdLiveTv} from"react-icons/md";
import { FiSearch } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";

function Header(){
    return (
        <div className="header">
            <div className="header-icons">
                <div className="header-icon header-icon-active">
                    <FiHome />
                    <p>Home</p>
                </div>
                <div className="header-icon">
                    <MdFlashOn />
                    <p>Trending</p>
                </div>
                <div className="header-icon">
                    <MdLiveTv />
                    <p>Verified</p>
                </div>
                <div className="header-icon">
                    <FiSearch />
                    <p>Search</p>
                </div>
                <div className="header-icon">
                    <MdPersonOutline />
                    <p>Account</p>
                </div>
            </div>
            <img alt="logo" src={logo} />
        </div>
    )
}
export default Header;