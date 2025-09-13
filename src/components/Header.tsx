import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo + Nom */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/images/logo.png"
            alt="Loca-Chantier Logo"
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold">Loca-Chantier</span>
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-400">
            Accueil
          </Link>
          <Link to="/about" className="hover:text-blue-400">
            À propos
          </Link>
          <Link to="/contact" className="hover:text-blue-400">
            Contact
          </Link>
          <Link to="/products" className="hover:text-blue-400">
            Matériels
          </Link>
          <Link to="/signup" className="hover:text-blue-400">
            Inscription
          </Link>
          <Link to="/login" className="hover:text-blue-400">
            Connexion
          </Link>
        </nav>

        {/* Bouton hamburger (mobile) */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4">
          <Link
            to="/"
            className="block hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Accueil
          </Link>
          <Link
            to="/about"
            className="block hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            À propos
          </Link>
          <Link
            to="/contact"
            className="block hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/products"
            className="block hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Matériels
          </Link>
          <Link
            to="/signup"
            className="block hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Inscription
          </Link>
          <Link
            to="/login"
            className="block hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Connexion
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
