import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { FaFilter } from "react-icons/fa";

const Products: React.FC = () => {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();

  // États pour les filtres
  const [categorie, setCategorie] = useState("all");
  const [prixMax, setPrixMax] = useState<number | "">("");
  const [tri, setTri] = useState("");

  // Mobile filter panel
  const [showFilters, setShowFilters] = useState(false);

  // Catégories uniques
  const categories = ["all", ...new Set(products.map((p) => p.categorie))];

  // Filtrage + tri
  const produitsFiltres = products
    .filter((p) => (categorie === "all" ? true : p.categorie === categorie))
    .filter((p) => (prixMax ? p.prixHoraire <= Number(prixMax) : true))
    .sort((a, b) => {
      if (tri === "asc") return a.prixHoraire - b.prixHoraire;
      if (tri === "desc") return b.prixHoraire - a.prixHoraire;
      return 0;
    });

  // Composant filtres
  const Filters = () => (
    <div className="flex flex-col md:flex-row md:items-end md:space-x-6 space-y-4 md:space-y-0 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 shadow-md rounded-lg p-4">
      {/* Catégorie */}
      <div className="flex-1">
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Catégorie
        </label>
        <select
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat === "all" ? "Toutes les catégories" : cat}
            </option>
          ))}
        </select>
      </div>

      {/* Prix max */}
      <div className="flex-1">
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Prix max (€ / heure)
        </label>
        <input
          type="number"
          value={prixMax}
          onChange={(e) =>
            setPrixMax(e.target.value ? Number(e.target.value) : "")
          }
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
          placeholder="Ex: 150"
        />
      </div>

      {/* Tri */}
      <div className="flex-1">
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Trier par
        </label>
        <select
          value={tri}
          onChange={(e) => setTri(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Aucun</option>
          <option value="asc">Prix croissant</option>
          <option value="desc">Prix décroissant</option>
        </select>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-extrabold text-blue-700 mb-6 text-center">
        🚜 Nos matériels disponibles
      </h1>

      {/* Bouton filtres mobile */}
      <div className="md:hidden flex justify-end mb-4">
        <button
          onClick={() => setShowFilters(true)}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
        >
          <FaFilter /> <span>Filtres</span>
        </button>
      </div>

      {/* Filtres desktop */}
      <div className="hidden md:block mb-8">
        <Filters />
      </div>

      {/* Panel mobile */}
      {showFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-end z-50">
          <div className="w-80 bg-white h-full shadow-lg p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-blue-700">Filtres</h2>
              <button
                onClick={() => setShowFilters(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✖
              </button>
            </div>
            <Filters />
            <button
              onClick={() => setShowFilters(false)}
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              ✅ Appliquer
            </button>
          </div>
        </div>
      )}

      {/* Grille des produits */}
      {produitsFiltres.length === 0 ? (
        <p className="text-center text-gray-600 mt-8">
          Aucun produit ne correspond à vos filtres.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {produitsFiltres.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-[1.02]"
            >
              {/* Image */}
              <img
                src={product.images[0]}
                alt={product.titre}
                className="w-full h-48 object-cover"
              />

              {/* Infos */}
              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-800 mb-1">
                  {product.titre}
                </h2>
                <p className="text-blue-600 font-semibold mb-2">
                  {product.prixHoraire} €/heure
                </p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description || "Aucune description"}
                </p>

                {/* Boutons */}
                <div className="flex space-x-3">
                  <Link
                    to={`/product/${product.id}`}
                    className="flex-1 bg-gray-100 text-gray-800 py-2 rounded text-center hover:bg-gray-200 transition"
                  >
                    🔍 Détails
                  </Link>
                  <button
                    onClick={() =>
                      navigate(`/product/${product.id}`, {
                        state: { openReservation: true },
                      })
                    }
                    className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                  >
                    📅 Réserver
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
