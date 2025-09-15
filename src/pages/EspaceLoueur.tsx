import React, { useState } from "react";

type Annonce = {
  id: number;
  titre: string;
  categorie: string;
  prixHoraire: number;
  adresse: string;
};

const EspaceLoueur: React.FC = () => {
  const [activeTab, setActiveTab] = useState("entreprise");
  const [type, setType] = useState<"pro" | "particulier">("particulier");

  // --- Annonces ---
  const [annonces, setAnnonces] = useState<Annonce[]>([
    {
      id: 1,
      titre: "Pelleteuse Caterpillar",
      categorie: "Pelleteuse",
      prixHoraire: 120,
      adresse: "Nantes",
    },
  ]);
  const [newAnnonce, setNewAnnonce] = useState<Annonce>({
    id: Date.now(),
    titre: "",
    categorie: "",
    prixHoraire: 0,
    adresse: "",
  });
  const [editingAnnonce, setEditingAnnonce] = useState<Annonce | null>(null);

  const handleAddAnnonce = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingAnnonce) {
      setAnnonces(
        annonces.map((a) =>
          a.id === editingAnnonce.id ? { ...editingAnnonce } : a
        )
      );
      setEditingAnnonce(null);
    } else {
      setAnnonces([...annonces, { ...newAnnonce, id: Date.now() }]);
      setNewAnnonce({
        id: Date.now(),
        titre: "",
        categorie: "",
        prixHoraire: 0,
        adresse: "",
      });
    }
  };

  const handleDelete = (id: number) => {
    setAnnonces(annonces.filter((a) => a.id !== id));
  };

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
          {[
            { key: "entreprise", label: "🏢 Entreprise" },
            { key: "annonces", label: "📢 Annonces" },
            { key: "finances", label: "💰 Finances" },
            { key: "factures", label: "📄 Factures" },
            { key: "paiements", label: "✅ Paiements" },
            { key: "paiement-info", label: "💳 Infos paiement" },
            { key: "reservations", label: "📅 Réservations" },
            { key: "conversations", label: "💬 Conversations" },
          ].map((tab) => (
            <option key={tab.key} value={tab.key}>
              {tab.label}
            </option>
          ))}
        </select>
      </div>

      {/* Onglets desktop */}
      <div className="hidden md:flex space-x-2 border-b border-gray-200 mb-6">
        {[
          { key: "entreprise", label: "🏢 Entreprise" },
          { key: "annonces", label: "📢 Annonces" },
          { key: "finances", label: "💰 Finances" },
          { key: "factures", label: "📄 Factures" },
          { key: "paiements", label: "✅ Paiements" },
          { key: "paiement-info", label: "💳 Infos paiement" },
          { key: "reservations", label: "📅 Réservations" },
          { key: "conversations", label: "💬 Conversations" },
        ].map((tab) => (
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
        {/* --- ENTREPRISE --- */}
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

        {/* --- ANNONCES --- */}
        {activeTab === "annonces" && (
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Mes annonces
            </h2>

            {/* Liste annonces */}
            <div className="grid gap-4 mb-6 sm:grid-cols-2 lg:grid-cols-3">
              {annonces.map((annonce) => (
                <div
                  key={annonce.id}
                  className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-gray-50 flex flex-col"
                >
                  <h3 className="font-semibold text-lg text-blue-700 mb-1">
                    {annonce.titre}
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">
                    📂 {annonce.categorie}
                  </p>
                  <p className="text-gray-600 text-sm mb-1">
                    📍 {annonce.adresse}
                  </p>
                  <p className="text-green-700 font-bold mb-3">
                    {annonce.prixHoraire} €/h
                  </p>
                  <div className="mt-auto flex space-x-2">
                    <button
                      onClick={() => setEditingAnnonce(annonce)}
                      className="flex-1 bg-yellow-400 text-gray-900 py-1 rounded hover:bg-yellow-300 text-sm"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleDelete(annonce.id)}
                      className="flex-1 bg-red-500 text-white py-1 rounded hover:bg-red-600 text-sm"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Formulaire ajout / édition */}
            <form
              onSubmit={handleAddAnnonce}
              className="space-y-4 bg-gray-50 p-4 rounded-lg shadow"
            >
              <h3 className="font-semibold text-lg text-gray-700">
                {editingAnnonce
                  ? "Modifier l’annonce"
                  : "Ajouter une nouvelle annonce"}
              </h3>
              <input
                type="text"
                placeholder="Titre"
                value={editingAnnonce ? editingAnnonce.titre : newAnnonce.titre}
                onChange={(e) =>
                  editingAnnonce
                    ? setEditingAnnonce({
                        ...editingAnnonce,
                        titre: e.target.value,
                      })
                    : setNewAnnonce({ ...newAnnonce, titre: e.target.value })
                }
                className="w-full border rounded px-3 py-2"
                required
              />
              <input
                type="text"
                placeholder="Catégorie"
                value={
                  editingAnnonce ? editingAnnonce.categorie : newAnnonce.categorie
                }
                onChange={(e) =>
                  editingAnnonce
                    ? setEditingAnnonce({
                        ...editingAnnonce,
                        categorie: e.target.value,
                      })
                    : setNewAnnonce({ ...newAnnonce, categorie: e.target.value })
                }
                className="w-full border rounded px-3 py-2"
                required
              />
              <input
                type="number"
                placeholder="Prix horaire"
                value={
                  editingAnnonce
                    ? editingAnnonce.prixHoraire
                    : newAnnonce.prixHoraire
                }
                onChange={(e) =>
                  editingAnnonce
                    ? setEditingAnnonce({
                        ...editingAnnonce,
                        prixHoraire: Number(e.target.value),
                      })
                    : setNewAnnonce({
                        ...newAnnonce,
                        prixHoraire: Number(e.target.value),
                      })
                }
                className="w-full border rounded px-3 py-2"
                required
              />
              <input
                type="text"
                placeholder="Adresse"
                value={
                  editingAnnonce ? editingAnnonce.adresse : newAnnonce.adresse
                }
                onChange={(e) =>
                  editingAnnonce
                    ? setEditingAnnonce({
                        ...editingAnnonce,
                        adresse: e.target.value,
                      })
                    : setNewAnnonce({ ...newAnnonce, adresse: e.target.value })
                }
                className="w-full border rounded px-3 py-2"
                required
              />

              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                {editingAnnonce ? "Enregistrer" : "Ajouter"}
              </button>
            </form>
          </div>
        )}

        {/* --- AUTRES ONGLET (vides pour l'instant) --- */}
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
            💳 Renseignez vos informations bancaires pour recevoir vos paiements.
          </p>
        )}
        {activeTab === "reservations" && (
          <p className="text-gray-600">📅 Gestion des réservations ici.</p>
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
