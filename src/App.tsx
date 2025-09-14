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
import ReservationSuccess from "./pages/ReservationSuccess";
import MesReservations from "./pages/MesReservations"; // ✅ import ajouté
import { ReservationProvider } from "./context/ReservationContext";

const App: React.FC = () => {
  return (
    <ReservationProvider>
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
        <Route path="/reservation-success" element={<ReservationSuccess />} />
        <Route path="/mes-reservations" element={<MesReservations />} />{" "}
        {/* ✅ nouvelle route */}
      </Routes>
      <Footer />
    </ReservationProvider>
  );
};

export default App;
