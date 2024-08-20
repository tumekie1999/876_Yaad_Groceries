import React from 'react';
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import Searchbar from './searchbar';
import logo from "../assets/logo.png";
import './navbar.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="logo" height={50} width={100} /> 
                </Link>
            </div>
            <div className='searchbar'>
                <Searchbar/>
            </div>
            <div className="links">
                <Link to="/"> Shop </Link>
                <Link to="/signin"> Signin </Link>
                <Link to="/contact"> Contact </Link>
                <Link to="/cart">
                    <ShoppingCart size={32} />
                </Link>
            </div>
        </div>
    );
}