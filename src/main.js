import React from "react";
import { Routes, Route } from "react-router-dom";
import { Signin } from './pages/signin';
import { Register } from "./pages/register";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import Navbar from "./components/navbar";
// import { Cart } from "./pages/cart/cart";

export default function Main() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/register" element={<Register />} />
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/cart" element={<Cart />} /> */}
            </Routes>
        </div>
        
    );
}