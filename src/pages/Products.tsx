import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tout");

  // Extraire les catégories uniques
  const categories = ["Tout", ...new Set(products.map((p) => p.categorie))];

  // Filtrer selon la catégorie choisie
  const filteredProducts =
    selectedCategory === "Tout"
      ? products
      : products.filter((p) => p.categorie === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-blue-700">
        Matériels disponibles
      </h1>

      {/* Barre de filtres */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === cat
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille de produits */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Image */}
              <img
                src={product.image}
                alt={product.titre}
                className="w-full h-48 object-cover"
              />

              {/* Infos */}
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{product.titre}</h2>
                <p className="text-gray-600 mb-2">{product.categorie}</p>
                <p className="text-blue-600 font-semibold mb-4">
                  {product.prixHoraire} €/heure
                </p>
                <p className="text-gray-700 text-sm mb-2">
                  📍 {product.adresse}
                </p>

                {/* Loueur */}
                <p className="text-sm text-gray-700 mb-4">
                  Loueur : <strong>{product.loueur.nom}</strong>
                </p>

                {/* Bouton voir détails */}
                <Link
                  to={`/product/${product.id}`}
                  className="block mt-2 bg-blue-600 text-white py-2 px-4 rounded text-center hover:bg-blue-700"
                >
                  Voir détails
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">Aucun produit dans cette catégorie.</p>
      )}
    </div>
  );
};

export default Products;
