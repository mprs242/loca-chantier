import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login: React.FC = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [role, setRole] = useState("locataire");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Connexion simulée
    login({ role: role as "loueur" | "locataire", email: "test@mail.com" });

    // Vérifier s’il y a une réservation en attente
    const pending = localStorage.getItem("pendingReservation");
    if (pending) {
      const { productId } = JSON.parse(pending);
      localStorage.removeItem("pendingReservation");
      navigate(`/product/${productId}`, { state: { openReservation: true } });
    } else {
      navigate(role === "loueur" ? "/espace-loueur" : "/espace-locataire");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded mt-20">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Connexion</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Je suis :</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
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
          Se connecter
        </button>
      </form>

      {/* Lien vers l'inscription */}
      <p className="mt-6 text-center text-gray-600">
        Pas encore de compte ?{" "}
        <Link
          to="/signup"
          className="text-blue-600 font-semibold hover:underline"
        >
          Inscrivez-vous ici
        </Link>
      </p>
    </div>
  );
};

export default Login;
