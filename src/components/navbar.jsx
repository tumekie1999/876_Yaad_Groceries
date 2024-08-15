import React from 'react';
import Searchbar from './searchbar';
import logo from "../assets/logo.png";
import './navbar.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" height={50} width={100} /> 
            </div>
            <div className='searchbar'>
                <Searchbar/>
            </div>
            <div className="links">
                <p>Shop</p>
                <p>Hello, sign in</p>
                <p>Contact </p>
            </div>
        </div>
    );
}