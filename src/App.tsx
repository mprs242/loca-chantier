import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"; // <--- ajout
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About"; // <-- import
import Signup from "./pages/Signup"; // <--- nouvel import
import Login from "./pages/Login"; // <--- nouvel import
import Contact from "./pages/Contact"; // <--- nouvel import

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* <-- nouvelle route */}
        <Route path="/signup" element={<Signup />} />{" "}
        {/* <--- nouvelle route */}
        <Route path="/login" element={<Login />} /> {/* <--- nouvelle route */}
        <Route path="/contact" element={<Contact />} /> {/* nouvelle route */}
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer /> {/* <--- le footer sera toujours affiché */}
    </Router>
  );
};

export default App;
