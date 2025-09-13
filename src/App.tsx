import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import EspaceLoueur from "./pages/EspaceLoueur";
import EspaceLocataire from "./pages/EspaceLocataire";
import AjouterAnnonce from "./pages/AjouterAnnonce";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/espace-loueur" element={<EspaceLoueur />} />
        <Route path="/espace-locataire" element={<EspaceLocataire />} />
        <Route path="/ajouter-annonce" element={<AjouterAnnonce />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
