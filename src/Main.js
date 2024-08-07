import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { SignIn } from './pages/signin';
import { Register } from "./pages/register";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { Searchpage } from "./pages/shop/searchpage";

const Main = ({ setResults, setIsSearchPerformed, results, isSearchPerformed }) => {
  const location = useLocation();
  const hideNavbarRoutes = ['/signin', '/register'];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar setResults={setResults} setIsSearchPerformed={setIsSearchPerformed} />}
      <Routes>
        <Route 
          path="/" 
          element={
            isSearchPerformed ? (
              <Searchpage results={results} />
            ) : (
              <Shop />
            )
          } 
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default Main;
