import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/logo.png"
            alt="Loca-Chantier Logo"
            className="h-10 w-auto"
          />
          <span className="text-lg font-bold">Loca-Chantier</span>
        </div>

        {/* Liens */}
        <div className="mt-4 md:mt-0 flex space-x-6 items-center">
          <Link to="/contact" className="hover:underline">
            Nous contacter
          </Link>

          {/* Icônes réseaux sociaux */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600"
          >
            <FaYoutube size={20} />
          </a>
        </div>
      </div>

      {/* Mentions légales en bas */}
      <div className="mt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Loca-Chantier. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
