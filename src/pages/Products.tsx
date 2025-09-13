import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Products: React.FC = () => {
  const { products } = useContext(ProductContext);

  // États des filtres
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [sortBy, setSortBy] = useState("none");

  // Extraire les catégories
  const categories = ["Tous", ...new Set(products.map((p) => p.categorie))];

  // Filtrer produits
  let filteredProducts = products.filter((p) => {
    const matchCategory =
      selectedCategory === "Tous" || p.categorie === selectedCategory;
    const matchMin = minPrice === "" || p.prixHoraire >= Number(minPrice);
    const matchMax = maxPrice === "" || p.prixHoraire <= Number(maxPrice);
    return matchCategory && matchMin && matchMax;
  });

  // Trier produits
  if (sortBy === "price-asc") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.prixHoraire - b.prixHoraire
    );
  } else if (sortBy === "price-desc") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.prixHoraire - a.prixHoraire
    );
  } else if (sortBy === "title") {
    filteredProducts = [...filteredProducts].sort((a, b) =>
      a.titre.localeCompare(b.titre)
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-10 text-center">
        🚜 Nos matériels disponibles
      </h1>

      {/* Filtres */}
      <div className="bg-white shadow-md p-6 rounded-lg mb-10">
        <h2 className="text-xl font-bold mb-4 text-gray-800">🎯 Filtres</h2>

        {/* Catégories */}
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Prix + Tri */}
        <div className="flex flex-wrap items-end gap-6">
          <div>
            <label className="block text-sm text-gray-600">Prix min (€)</label>
            <input
              type="number"
              value={minPrice}
              onChange={(e) =>
                setMinPrice(e.target.value ? Number(e.target.value) : "")
              }
              className="w-32 border rounded px-3 py-2 focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Prix max (€)</label>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(e.target.value ? Number(e.target.value) : "")
              }
              className="w-32 border rounded px-3 py-2 focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Trier par</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded px-3 py-2 focus:ring focus:ring-blue-300"
            >
              <option value="none">Aucun</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="title">Nom (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Produits */}
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">
          Aucun produit trouvé avec ces filtres.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              {/* Images avec carrousel si plusieurs */}
              {p.images.length > 1 ? (
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  className="h-48 w-full"
                >
                  {p.images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <Zoom>
                        <img
                          src={img}
                          alt={`${p.titre}-${idx}`}
                          className="h-48 w-full object-cover"
                        />
                      </Zoom>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : p.images.length === 1 ? (
                <Zoom>
                  <img
                    src={p.images[0]}
                    alt={p.titre}
                    className="h-48 w-full object-cover"
                  />
                </Zoom>
              ) : (
                <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                  Pas d’image
                </div>
              )}

              {/* Infos */}
              <div className="p-5">
                <h2 className="text-lg font-bold text-gray-800">{p.titre}</h2>

                <div className="flex items-center justify-between mt-2">
                  <span className="text-blue-700 font-bold text-lg">
                    {p.prixHoraire} €/h
                  </span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                    {p.categorie}
                  </span>
                </div>

                <p className="text-sm text-gray-500 mt-1">📍 {p.adresse}</p>
                <p className="text-sm text-gray-700 font-medium mt-1">
                  🏢 {p.entreprise}
                </p>

                {/* Aperçu description */}
                {p.description && (
                  <p className="text-gray-600 text-sm mt-3">
                    {p.description.length > 100
                      ? p.description.slice(0, 100) + "..."
                      : p.description}
                  </p>
                )}

                {/* Boutons */}
                <div className="flex justify-between mt-5">
                  <Link
                    to={`/product/${p.id}`}
                    className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm hover:bg-blue-700 transition"
                  >
                    Voir détails
                  </Link>
                  <button className="bg-green-600 text-white px-3 py-2 rounded-md text-sm hover:bg-green-700 transition">
                    Réserver
                  </button>
                  <button className="bg-gray-600 text-white px-3 py-2 rounded-md text-sm hover:bg-gray-700 transition">
                    Contacter
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
