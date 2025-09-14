import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login: React.FC = () => {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"loueur" | "locataire">("locataire");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ role, email }); // simulation connexion
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-20">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-700">
        Connexion
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
        </div>
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
        <div>
          <label className="block text-gray-700 mb-1">Vous êtes :</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as "loueur" | "locataire")}
            className="w-full border rounded px-3 py-2"
          >
            <option value="locataire">Locataire</option>
            <option value="loueur">Loueur</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Confirmer
        </button>
      </form>
    </div>
  );
};

export default Login;
