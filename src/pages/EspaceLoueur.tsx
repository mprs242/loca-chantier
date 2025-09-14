import React, { useState } from "react";

const EspaceLoueur: React.FC = () => {
  const [activeTab, setActiveTab] = useState("entreprise");
  const [type, setType] = useState<"pro" | "particulier">("particulier");

  const tabs = [
    { key: "entreprise", label: "🏢 Entreprise" },
    { key: "annonces", label: "📢 Annonces" },
    { key: "finances", label: "💰 Finances" },
    { key: "factures", label: "📄 Factures" },
    { key: "paiements", label: "✅ Paiements" },
    { key: "paiement-info", label: "💳 Infos paiement" },
    { key: "reservations", label: "📅 Réservations" }, // 🆕
    { key: "conversations", label: "💬 Conversations" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">
        Tableau de bord loueur
      </h1>

      {/* Menu déroulant mobile */}
      <div className="md:hidden mb-6">
        <select
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="w-full border rounded px-3 py-2"
        >
          {tabs.map((tab) => (
            <option key={tab.key} value={tab.key}>
              {tab.label}
            </option>
          ))}
        </select>
      </div>

      {/* Onglets desktop */}
      <div className="hidden md:flex space-x-2 border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-t-md text-sm font-medium transition-colors ${
              activeTab === tab.key
                ? "bg-blue-600 text-white shadow"
                : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Contenu des onglets */}
      <div className="bg-white shadow rounded-lg p-6 min-h-[400px]">
        {activeTab === "entreprise" && (
          <form className="space-y-4 max-w-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Informations de l’entreprise
            </h2>
            <div className="flex space-x-6 mb-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="type"
                  value="particulier"
                  checked={type === "particulier"}
                  onChange={() => setType("particulier")}
                />
                <span>Je suis un particulier</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="type"
                  value="pro"
                  checked={type === "pro"}
                  onChange={() => setType("pro")}
                />
                <span>Je suis un professionnel</span>
              </label>
            </div>
            <input
              type="text"
              placeholder="Nom de l’entreprise"
              className="w-full border rounded px-3 py-2"
            />
            {type === "pro" && (
              <input
                type="text"
                placeholder="Numéro SIRET"
                className="w-full border rounded px-3 py-2"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="tel"
              placeholder="Téléphone"
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="Adresse"
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="file"
              accept="image/*"
              className="w-full border rounded px-3 py-2"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Enregistrer
            </button>
          </form>
        )}

        {activeTab === "annonces" && (
          <p className="text-gray-600">📢 Gestion des annonces ici.</p>
        )}
        {activeTab === "finances" && (
          <p className="text-gray-600">💰 Vue d’ensemble de vos finances.</p>
        )}
        {activeTab === "factures" && (
          <p className="text-gray-600">📄 Liste de vos factures.</p>
        )}
        {activeTab === "paiements" && (
          <p className="text-gray-600">✅ Suivi de vos paiements.</p>
        )}
        {activeTab === "paiement-info" && (
          <p className="text-gray-600">
            💳 Renseignez vos informations bancaires pour recevoir vos
            paiements.
          </p>
        )}

        {/* 🆕 Onglet Réservations */}
        {activeTab === "reservations" && (
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Mes réservations
            </h2>
            <ul className="space-y-3">
              <li className="p-3 border rounded flex justify-between items-center">
                <div>
                  <p className="font-semibold">Pelleteuse Caterpillar</p>
                  <p className="text-sm text-gray-600">
                    Client : Jean Dupont — 12/03/2025 (3h)
                  </p>
                </div>
                <span className="px-3 py-1 rounded text-sm bg-yellow-100 text-yellow-700">
                  En attente
                </span>
              </li>
              <li className="p-3 border rounded flex justify-between items-center">
                <div>
                  <p className="font-semibold">Chargeuse Volvo</p>
                  <p className="text-sm text-gray-600">
                    Client : Marie Curie — 10/03/2025 (5h)
                  </p>
                </div>
                <span className="px-3 py-1 rounded text-sm bg-green-100 text-green-700">
                  Confirmée
                </span>
              </li>
            </ul>
          </div>
        )}

        {activeTab === "conversations" && (
          <p className="text-gray-600">
            💬 Messagerie interne avec vos clients.
          </p>
        )}
      </div>
    </div>
  );
};

export default EspaceLoueur;
