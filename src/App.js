import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import Shop from "./components/Shop";
import Signin from "./components/Login/Signin";
import Signup from "./components/Login/Signup";
import { app } from "./firebase";
import { ToastContainer } from "react-toastify";
import AddProduct from "./components/Products/AddProduct";
const auth = getAuth(app);

function App() {
  return (
    <Router>
      <header className="bg-transparent">
        <Topbar />
        <NavbarX />
      </header>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/single-product/:product_id" element={<SingleProduct />} />
        {/* Add more routes here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
