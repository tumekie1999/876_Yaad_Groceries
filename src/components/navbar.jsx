import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import logo from "../assets/products/logo.png";
import SearchBar from './searchbar.jsx';

export const Navbar = ({ setResults, setIsSearchPerformed }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/"> 
          <img src={logo} alt="logo" height={50} width={100} /> 
        </Link>
      </div>
      <div>
        <SearchBar setResults={setResults} setIsSearchPerformed={setIsSearchPerformed} />
      </div>
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/signin"> Hello, sign in </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
