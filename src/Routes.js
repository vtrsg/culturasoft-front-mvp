import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";

const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/produto/:id" element={<Product />} />
        </Routes>
    );
}

export default Rotas;

