import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import NavbarX from "./components/Header/NavbarX";
import Topbar from "./components/Header/TopBar";
import About from "./components/About";
import SingleProduct from "./components/Products/SingleProduct";

function App() {
  return (
    <Router>
      <header className="bg-transparent">
        <Topbar />
        <NavbarX />
      </header>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/single-product/:product_id" element={<SingleProduct />} />
        {/* Add more routes here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
