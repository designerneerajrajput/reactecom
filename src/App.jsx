import React from 'react';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import About from './pages/About';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';



function App() {
  return (
    <>


      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tshirt" element={<h1>T-shirt Page</h1>} />
          <Route path="/new-arrival-tshirt" element={<h1>New Arrival T-shirt Page</h1>} />
          <Route path="/contact" element={<h1>Contact Us Page</h1>} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
