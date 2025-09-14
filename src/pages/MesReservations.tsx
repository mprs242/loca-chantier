import React, { useContext } from "react";
import { ReservationContext } from "../context/ReservationContext";

const MesReservations: React.FC = () => {
  const { reservations } = useContext(ReservationContext);

  if (reservations.length === 0) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-700">
          📭 Aucune réservation
        </h1>
        <p className="text-gray-500 mt-2">
          Vous n’avez encore réservé aucun matériel.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        📑 Mes Réservations
      </h1>
      <div className="space-y-4">
        {reservations.map((res, idx) => (
          <div
            key={idx}
            className="bg-white shadow rounded-lg p-4 border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {res.produit}
            </h2>
            <p className="text-gray-600">👤 {res.nom}</p>
            <p className="text-gray-600">
              📅 {res.date} • ⏱ {res.duree}h
            </p>
            <p className="text-gray-600">🏠 {res.adresse}</p>
            <p className="text-gray-600">
              🚚 Mode :{" "}
              {res.livraison === "livraison" ? "Livraison" : "Retrait"}
            </p>
            <p className="text-green-700 font-bold mt-2">
              💰 Total : {res.total} €
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MesReservations;
