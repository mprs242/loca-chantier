import { Link } from "react-router-dom";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between items-center container mx-auto">
        <Link to="/" className="text-2xl font-bold">
          Loca-Chantier
        </Link>
        <div>
          <Link to="/login" className="mr-4 hover:underline">
            Connexion
          </Link>
          <Link to="/signup" className="hover:underline">
            Inscription
          </Link>
          <Link to="/about" className="hover:underline">
            À propos de nous
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
