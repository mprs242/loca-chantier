import React from "react";
import { Link } from "react-router-dom";

const EspaceLoueur: React.FC = () => {
  // Exemple d'annonces du loueur (à remplacer par de vraies données plus tard)
  const annonces = [
    { id: 1, titre: "Pelleteuse 10T", prix: 75, statut: "Active" },
    { id: 2, titre: "Chargeuse compacte", prix: 50, statut: "Active" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Espace Loueur</h1>

      {/* Bouton ajouter annonce */}
      <div className="flex justify-end mb-6">
        <Link
          to="/ajouter-annonce"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          ➕ Ajouter une annonce
        </Link>
      </div>

      {/* Tableau des annonces */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="py-3 px-4">Titre</th>
              <th className="py-3 px-4">Prix horaire</th>
              <th className="py-3 px-4">Statut</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {annonces.map((a) => (
              <tr key={a.id} className="border-t">
                <td className="py-3 px-4">{a.titre}</td>
                <td className="py-3 px-4">{a.prix} €/h</td>
                <td className="py-3 px-4">{a.statut}</td>
                <td className="py-3 px-4 space-x-2">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                    Modifier
                  </button>
                  <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EspaceLoueur;
