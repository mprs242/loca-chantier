import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About"; // <-- import

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} /> {/* <-- nouvelle route */}
      </Routes>
    </Router>
  );
};

export default App;
