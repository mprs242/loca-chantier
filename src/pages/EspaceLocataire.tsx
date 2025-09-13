import React from "react";

const EspaceLocataire: React.FC = () => {
  // Exemple de réservations du locataire
  const reservations = [
    {
      id: 1,
      materiel: "Pelleteuse 10T",
      date: "2025-09-20",
      prix: 300,
      statut: "Confirmée",
    },
    {
      id: 2,
      materiel: "Chargeuse compacte",
      date: "2025-09-25",
      prix: 200,
      statut: "En attente",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Espace Locataire
      </h1>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="py-3 px-4">Matériel</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Prix total</th>
              <th className="py-3 px-4">Statut</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((r) => (
              <tr key={r.id} className="border-t">
                <td className="py-3 px-4">{r.materiel}</td>
                <td className="py-3 px-4">{r.date}</td>
                <td className="py-3 px-4">{r.prix} €</td>
                <td className="py-3 px-4">{r.statut}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EspaceLocataire;
