import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaCalendarAlt } from "react-icons/fa";

const Contact: React.FC = () => {
  const [userType, setUserType] = useState<"particulier" | "professionnel">(
    "particulier"
  );

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    ville: "",
    codePostal: "",
    message: "",
    entreprise: "",
  });

  const [isSent, setIsSent] = useState(false);
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Message envoyé :", { ...formData, userType });
    setIsSent(true);
  };

  useEffect(() => {
    if (isSent) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSent, navigate]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Formulaire */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-blue-700 text-center">
          Nous contacter
        </h1>

        {isSent ? (
          <p className="text-green-600 text-center text-lg font-semibold">
            ✅ Votre message a été envoyé avec succès ! <br />
            Redirection vers l’accueil...
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

            {/* Type d’utilisateur */}
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

            {/* Nom entreprise si pro */}
            {userType === "professionnel" && (
              <div>
                <label className="block mb-1 font-medium">
                  Nom de l'entreprise
                </label>
                <input
                  type="text"
                  name="entreprise"
                  value={formData.entreprise}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                  required={userType === "professionnel"}
                />
              </div>
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
              <label className="block mb-1 font-medium">
                Numéro de téléphone
              </label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="w-full border rounded p-2"
                required
              />
            </div>

            {/* Ville */}
            <div>
              <label className="block mb-1 font-medium">Ville</label>
              <input
                type="text"
                name="ville"
                value={formData.ville}
                onChange={handleChange}
                className="w-full border rounded p-2"
                required
              />
            </div>

            {/* Code postal */}
            <div>
              <label className="block mb-1 font-medium">Code postal</label>
              <input
                type="text"
                name="codePostal"
                value={formData.codePostal}
                onChange={handleChange}
                className="w-full border rounded p-2"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded p-2 h-32"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Envoyer
            </button>
          </form>
        )}
      </div>

      {/* Informations entreprise */}
      <div className="flex flex-col items-center bg-blue-50 p-6 rounded-lg shadow-md">
        {/* Placeholder image */}
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg mb-6">
          <span className="text-gray-500 italic">Image ici</span>
        </div>

        <h2 className="text-2xl font-bold text-blue-700 mb-6">
          Loca - Chantier
        </h2>

        <div className="space-y-4 text-gray-700 w-full">
          <p className="flex items-center">
            <FaMapMarkerAlt className="text-blue-600 mr-2" />
            Rue Yves Kartel, 44100 Nantes
          </p>
          <p className="flex items-center">
            <FaPhoneAlt className="text-blue-600 mr-2" />
            06 44 03 72 16
          </p>
          <p className="flex items-center">
            <FaClock className="text-blue-600 mr-2" />
            7h - 20h
          </p>
          <p className="flex items-center">
            <FaCalendarAlt className="text-blue-600 mr-2" />
            Du lundi au samedi
          </p>
        </div>

        <div className="mt-6 bg-white rounded-lg p-4 shadow-inner border-l-4 border-blue-600">
          <p className="text-gray-600 italic text-center">
            Notre équipe est disponible pour répondre à vos questions et vous
            accompagner dans vos projets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
