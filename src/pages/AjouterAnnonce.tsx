import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

const AjouterAnnonce: React.FC = () => {
  const { addProduct } = useContext(ProductContext);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const [form, setForm] = useState({
    id: Date.now(),
    titre: "",
    categorie: "",
    prixHoraire: 0,
    adresse: "",
    caracteristiques: { age: "", puissance: "", poids: "" },
    entreprise: "",
    description: "", // 👈 champ libre
    images: [] as string[],
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    if (["age", "puissance", "poids"].includes(name)) {
      setForm({
        ...form,
        caracteristiques: { ...form.caracteristiques, [name]: value },
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const fileArray = Array.from(files).slice(0, 5);
    const urls = fileArray.map((file) => URL.createObjectURL(file));

    setForm({ ...form, images: urls });
    setPreviewImages(urls);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProduct(form);
    alert("Annonce créée avec succès !");
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-10 bg-white shadow-md rounded-lg mt-20">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-700">
        Ajouter une annonce
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Titre */}
        <div>
          <label className="block text-gray-700">Titre</label>
          <input
            type="text"
            name="titre"
            value={form.titre}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
        </div>

        {/* Catégorie */}
        <div>
          <label className="block text-gray-700">Catégorie</label>
          <select
            name="categorie"
            value={form.categorie}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          >
            <option value="">-- Sélectionnez --</option>
            <option value="Pelleteuse">Pelleteuse</option>
            <option value="Chargeuse">Chargeuse</option>
            <option value="Camion benne">Camion benne</option>
            <option value="Nacelle">Nacelle</option>
            <option value="Autre">Autre</option>
          </select>
        </div>

        {/* Prix */}
        <div>
          <label className="block text-gray-700">Prix horaire (€)</label>
          <input
            type="number"
            name="prixHoraire"
            value={form.prixHoraire}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
        </div>

        {/* Adresse */}
        <div>
          <label className="block text-gray-700">Adresse</label>
          <input
            type="text"
            name="adresse"
            value={form.adresse}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
        </div>

        {/* Nom de l'entreprise */}
        <div>
          <label className="block text-gray-700">Nom de l'entreprise</label>
          <input
            type="text"
            name="entreprise"
            value={form.entreprise}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
        </div>

        {/* Caractéristiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700">Âge</label>
            <input
              type="text"
              name="age"
              value={form.caracteristiques.age}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Puissance</label>
            <input
              type="text"
              name="puissance"
              value={form.caracteristiques.puissance}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Poids</label>
            <input
              type="text"
              name="poids"
              value={form.caracteristiques.poids}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
              required
            />
          </div>
        </div>

        {/* Description libre */}
        <div>
          <label className="block text-gray-700">
            Description (max 300 mots)
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            maxLength={2000} // ≈ 300 mots
            className="w-full border rounded px-3 py-2 mt-1 h-32"
            placeholder="Ajoutez une description technique ou des informations complémentaires..."
          />
        </div>

        {/* Upload images */}
        <div>
          <label className="block text-gray-700 mb-2">Photos (max 5)</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
          />
          {previewImages.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3">
              {previewImages.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`preview-${idx}`}
                  className="h-24 w-full object-cover rounded"
                />
              ))}
            </div>
          )}
        </div>

        {/* Bouton */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Créer l'annonce
        </button>
      </form>
    </div>
  );
};

// 👇 très important pour éviter l’écran blanc
export default AjouterAnnonce;
