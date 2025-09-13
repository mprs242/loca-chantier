import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

const Products: React.FC = () => {
  const { products } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState("Tout");

  const categories = ["Tout", ...new Set(products.map((p) => p.categorie))];

  const filteredProducts =
    selectedCategory === "Tout"
      ? products
      : products.filter((p) => p.categorie === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Nos matériels</h1>

      {/* Filtres */}
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

      {/* Liste produits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((p) => (
          <div key={p.id} className="border rounded-lg shadow-md bg-white">
            <img
              src={p.images[0] || "/images/default.jpg"}
              alt={p.titre}
              className="h-40 w-full object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{p.titre}</h2>
              <p className="text-gray-600">{p.prixHoraire} €/h</p>
              <p className="text-sm text-gray-500">{p.adresse}</p>
              <div className="flex justify-between mt-4">
                <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                  Réserver
                </button>
                <button className="bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-700">
                  Contacter
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
