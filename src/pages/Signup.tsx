import React, { useState } from "react";

const Signup: React.FC = () => {
  const [userType, setUserType] = useState<"particulier" | "professionnel">(
    "particulier"
  );

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    password: "",
    siret: "",
    entreprise: "",
  });

  // ✅ nouvel état pour afficher le message de confirmation
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici tu peux envoyer les données au backend si besoin
    setIsConfirmed(true); // ➡️ active l'affichage du message "Inscription réussie"
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
      <h1 className="text-2xl font-bold mb-6 text-blue-700 text-center">
        Inscription
      </h1>

      {/* ✅ Si déjà confirmé, afficher un message et ne plus montrer le formulaire */}
      {isConfirmed ? (
        <p className="text-green-600 text-center text-lg font-semibold">
          ✅ Inscription réussie !
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nom */}
          <div>
            <label className="block mb-1 font-medium">Nom</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Prénom */}
          <div>
            <label className="block mb-1 font-medium">Prénom</label>
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Type d'utilisateur */}
          <div>
            <label className="block mb-1 font-medium">Je suis :</label>
            <select
              name="userType"
              value={userType}
              onChange={(e) =>
                setUserType(e.target.value as "particulier" | "professionnel")
              }
              className="w-full border rounded p-2"
            >
              <option value="particulier">Un particulier</option>
              <option value="professionnel">Un professionnel</option>
            </select>
          </div>

          {/* Champs spécifiques aux professionnels */}
          {userType === "professionnel" && (
            <>
              <div>
                <label className="block mb-1 font-medium">Numéro SIRET</label>
                <input
                  type="text"
                  name="siret"
                  value={formData.siret}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                  required={userType === "professionnel"}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Nom de l'entreprise</label>
                <input
                  type="text"
                  name="entreprise"
                  value={formData.entreprise}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                  required={userType === "professionnel"}
                />
              </div>
            </>
          )}

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Adresse e-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Téléphone */}
          <div>
            <label className="block mb-1 font-medium">Numéro de téléphone</label>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Mot de passe */}
          <div>
            <label className="block mb-1 font-medium">Mot de passe</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* ✅ Nouveau bouton "Confirmer" */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Confirmer
          </button>
        </form>
      )}
    </div>
  );
};

export default Signup;
