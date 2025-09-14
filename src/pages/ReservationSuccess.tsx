import React from "react";
import { Link } from "react-router-dom";

const ReservationSuccess: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 via-white to-green-50 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-lg w-full text-center border-t-4 border-green-500">
        {/* Icône ✅ */}
        <div className="flex justify-center mb-4">
          <span className="text-6xl">✅</span>
        </div>

        {/* Titre */}
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          Réservation enregistrée avec succès !
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          Merci d’avoir utilisé{" "}
          <span className="font-semibold">Loca-Chantier</span>. Votre
          réservation est confirmée et un récapitulatif est disponible dans
          votre espace.
        </p>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/mes-reservations"
            className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Voir mes réservations
          </Link>
          <Link
            to="/products"
            className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Retour aux matériels
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReservationSuccess;
