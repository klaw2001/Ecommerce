import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import './App.css'
import Products from './components/Products';
import Cart from './components/Cart';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add more routes here */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
