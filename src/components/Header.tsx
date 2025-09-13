import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo + Nom */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/images/logo.png"
            alt="Loca-Chantier Logo"
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold tracking-wide">Loca-Chantier</span>
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center space-x-6 font-medium">
          <Link to="/" className="hover:text-yellow-300 transition">
            Accueil
          </Link>
          <Link to="/products" className="hover:text-yellow-300 transition">
            Matériels
          </Link>
          <Link to="/about" className="hover:text-yellow-300 transition">
            À propos
          </Link>
          <Link to="/contact" className="hover:text-yellow-300 transition">
            Contact
          </Link>
          <div className="flex items-center space-x-4 ml-6">
            <Link to="/login" className="hover:text-yellow-300 transition">
              Connexion
            </Link>
            <Link
              to="/signup"
              className="bg-yellow-400 text-gray-900 px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition"
            >
              Inscription
            </Link>
          </div>
        </nav>

        {/* Bouton hamburger (mobile) */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-gradient-to-b from-blue-700 to-indigo-800 text-white transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-blue-600">
          <span className="text-xl font-bold">Menu</span>
          <button
            className="text-2xl"
            onClick={() => setIsOpen(false)}
            aria-label="Fermer"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="flex flex-col space-y-6 px-6 py-6 text-lg">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Accueil
          </Link>
          <Link to="/products" onClick={() => setIsOpen(false)}>
            Matériels
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            À propos
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>
            Connexion
          </Link>
          <Link
            to="/signup"
            onClick={() => setIsOpen(false)}
            className="bg-yellow-400 text-gray-900 px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition text-center"
          >
            Inscription
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
