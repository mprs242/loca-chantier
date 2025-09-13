import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { products } = useContext(ProductContext);

  const [showMessageBox, setShowMessageBox] = useState(false);
  const [message, setMessage] = useState("");

  // Chercher le produit
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold text-red-600">Produit introuvable</h1>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Retour
        </button>
      </div>
    );
  }

  const handleSendMessage = () => {
    alert(`Message envoyé au loueur : "${message}"`);
    setMessage("");
    setShowMessageBox(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Images */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {product.images.length > 0 ? (
          product.images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`${product.titre}-${idx}`}
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
          ))
        ) : (
          <img
            src="/images/default.jpg"
            alt="default"
            className="w-full h-80 object-cover rounded-lg shadow-md mb-6"
          />
        )}
      </div>

      {/* Infos principales */}
      <h1 className="text-3xl font-bold text-blue-700 mb-4">{product.titre}</h1>
      <p className="text-gray-600 mb-2">{product.categorie}</p>
      <p className="text-blue-600 text-xl font-semibold mb-4">
        {product.prixHoraire} €/heure
      </p>
      <p className="text-gray-700 mb-4">📍 {product.adresse}</p>

      {/* Caractéristiques */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-lg font-bold mb-2">Caractéristiques</h2>
        <ul className="text-gray-700 space-y-1">
          <li>Âge : {product.caracteristiques.age}</li>
          <li>Puissance : {product.caracteristiques.puissance}</li>
          <li>Poids : {product.caracteristiques.poids}</li>
        </ul>
      </div>

      {/* Description */}
      {product.description && (
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-lg font-bold mb-2">Description</h2>
          <p className="text-gray-700 whitespace-pre-line">
            {product.description}
          </p>
        </div>
      )}

      {/* Loueur */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-bold mb-2">Loueur</h2>
        <p>
          🏢 <strong>{product.entreprise}</strong>
        </p>
      </div>

      {/* Boutons */}
      <div className="flex space-x-4">
        <button
          onClick={() => alert("Réservation en cours...")}
          className="flex-1 bg-green-600 text-white py-3 rounded-lg text-lg hover:bg-green-700"
        >
          📅 Réserver
        </button>
        <button
          onClick={() => setShowMessageBox(true)}
          className="flex-1 bg-blue-600 text-white py-3 rounded-lg text-lg hover:bg-blue-700"
        >
          📩 Contacter le loueur
        </button>
      </div>

      {/* Messagerie interne */}
      {showMessageBox && (
        <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-inner">
          <h3 className="font-bold mb-2">Envoyer un message au loueur</h3>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border rounded p-2 mb-2 h-24"
            placeholder="Écrivez votre message..."
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Envoyer
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
