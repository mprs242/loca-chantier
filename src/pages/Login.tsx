import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"loueur" | "locataire" | "">("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!role) {
      alert("Veuillez sélectionner votre rôle (loueur ou locataire).");
      return;
    }

    // Simulation login réussi
    if (role === "loueur") {
      navigate("/espace-loueur");
    } else {
      navigate("/espace-locataire");
    }
  };

  return (
    <div className="max-w-md mx-auto px-6 py-10 bg-white shadow-md rounded-lg mt-20">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-700">
        Connexion
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-gray-700">Adresse email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
        </div>

        {/* Mot de passe */}
        <div>
          <label className="block text-gray-700">Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
        </div>

        {/* Rôle */}
        <div>
          <label className="block text-gray-700 mb-2">Vous êtes :</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="loueur"
                checked={role === "loueur"}
                onChange={() => setRole("loueur")}
                className="mr-2"
              />
              Loueur
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="locataire"
                checked={role === "locataire"}
                onChange={() => setRole("locataire")}
                className="mr-2"
              />
              Locataire
            </label>
          </div>
        </div>

        {/* Bouton */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;
