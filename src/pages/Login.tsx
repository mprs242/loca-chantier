import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 👉 Ici tu mettras plus tard la vraie logique de vérification (API / Supabase / Firebase…)
    // Pour l'instant on simule une connexion réussie :
    console.log("Tentative de connexion avec :", { email, password });
    setIsLogged(true);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
      <h1 className="text-2xl font-bold mb-6 text-blue-700 text-center">
        Connexion
      </h1>

      {isLogged ? (
        <p className="text-green-600 text-center text-lg font-semibold">
          ✅ Connexion réussie !
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Adresse e-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Mot de passe */}
          <div>
            <label className="block mb-1 font-medium">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Se connecter
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
