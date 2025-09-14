import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { AuthContext } from "../context/AuthContext";
import { ReservationContext } from "../context/ReservationContext"; // ✅ ajout
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ModalMessage from "../components/ModalMessage";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { products } = useContext(ProductContext);
  const { user } = useContext(AuthContext);
  const { addReservation } = useContext(ReservationContext); // ✅ ajout

  const [showMessageBox, setShowMessageBox] = useState(false);
  const [showReservation, setShowReservation] = useState(
    location.state?.openReservation || false
  );
  const [message, setMessage] = useState("");

  // Champs réservation
  const [reservation, setReservation] = useState({
    nom: "",
    email: "",
    adresse: "",
    date: "",
    duree: "",
    livraison: "retrait",
  });

  const [modal, setModal] = useState<{
    type: "error" | "success";
    message: string;
  } | null>(null);

  const product = products.find((p) => p.id === Number(id));

  // Pré-remplissage si réservation en attente
  useEffect(() => {
    const pending = localStorage.getItem("pendingReservation");
    if (pending) {
      const { reservation: savedReservation, productId } = JSON.parse(pending);
      if (productId === Number(id)) {
        setReservation(savedReservation);
        setShowReservation(true);
        localStorage.removeItem("pendingReservation");
      }
    }
  }, [id]);

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
    if (!user) {
      setModal({
        type: "error",
        message: "❌ Vous devez être connecté pour envoyer un message.",
      });
      navigate("/login");
      return;
    }
    setModal({
      type: "success",
      message: `Votre message a été envoyé au loueur : "${message}"`,
    });
    setMessage("");
    setShowMessageBox(false);
  };

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      localStorage.setItem(
        "pendingReservation",
        JSON.stringify({ productId: product.id, reservation })
      );
      setModal({
        type: "error",
        message: "❌ Vous devez être connecté pour réserver.",
      });
      navigate("/login");
      return;
    }

    // ✅ Sauvegarde dans le contexte
    addReservation({
      ...reservation,
      productId: product.id,
      produit: product.titre,
      prixHoraire: product.prixHoraire,
      total: prixTotal,
    });

    // ✅ Redirection vers la page succès
    navigate("/reservation-success");

    // Reset form
    setShowReservation(false);
    setReservation({
      nom: "",
      email: "",
      adresse: "",
      date: "",
      duree: "",
      livraison: "retrait",
    });
  };

  const prixTotal =
    reservation.duree && !isNaN(Number(reservation.duree))
      ? Number(reservation.duree) * product.prixHoraire
      : 0;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Carrousel images */}
      {product.images.length > 1 ? (
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="rounded-lg shadow-md mb-6"
        >
          {product.images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <Zoom>
                <img
                  src={img}
                  alt={`${product.titre}-${idx}`}
                  className="w-full h-80 object-cover rounded-lg"
                />
              </Zoom>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Zoom>
          <img
            src={product.images[0]}
            alt={product.titre}
            className="w-full h-80 object-cover rounded-lg shadow-md mb-6"
          />
        </Zoom>
      )}

      {/* Infos principales */}
      <h1 className="text-3xl font-bold text-blue-700 mb-4">{product.titre}</h1>
      <p className="text-gray-600 mb-2">{product.categorie}</p>
      <p className="text-blue-600 text-xl font-semibold mb-4">
        {product.prixHoraire} €/heure
      </p>
      <p className="text-gray-700 mb-4">📍 {product.adresse}</p>

      {/* Description */}
      {product.description && (
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-lg font-bold mb-2">Description</h2>
          <p className="text-gray-700">{product.description}</p>
        </div>
      )}

      {/* Loueur */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-bold mb-2">Loueur</h2>
        <p>
          👷 <strong>{product.entreprise}</strong>
        </p>
      </div>

      {/* Actions */}
      <div className="flex space-x-4">
        <button
          onClick={() =>
            !user ? navigate("/login") : setShowReservation(true)
          }
          className="flex-1 bg-green-600 text-white py-3 rounded-lg text-lg hover:bg-green-700"
        >
          📅 Réserver
        </button>
        <button
          onClick={() => (!user ? navigate("/login") : setShowMessageBox(true))}
          className="flex-1 bg-blue-600 text-white py-3 rounded-lg text-lg hover:bg-blue-700"
        >
          📩 Contacter le loueur
        </button>
      </div>

      {/* Modal réservation */}
      {showReservation && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-lg w-full relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setShowReservation(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
            >
              ✖
            </button>

            <form onSubmit={handleReservationSubmit} className="space-y-5">
              <h2 className="text-2xl font-bold text-green-700 mb-4">
                ⚡ Réservez en quelques clics !
              </h2>

              <input
                type="text"
                placeholder="Nom complet"
                value={reservation.nom}
                onChange={(e) =>
                  setReservation({ ...reservation, nom: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={reservation.email}
                onChange={(e) =>
                  setReservation({ ...reservation, email: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
                required
              />
              <input
                type="text"
                placeholder="Adresse"
                value={reservation.adresse}
                onChange={(e) =>
                  setReservation({ ...reservation, adresse: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
                required
              />
              <input
                type="date"
                value={reservation.date}
                onChange={(e) =>
                  setReservation({ ...reservation, date: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
                required
              />
              <input
                type="number"
                min="1"
                placeholder="Durée (heures)"
                value={reservation.duree}
                onChange={(e) =>
                  setReservation({ ...reservation, duree: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
                required
              />

              <div className="flex items-center space-x-6">
                <label>
                  <input
                    type="radio"
                    value="livraison"
                    checked={reservation.livraison === "livraison"}
                    onChange={(e) =>
                      setReservation({
                        ...reservation,
                        livraison: e.target.value,
                      })
                    }
                  />{" "}
                  🚚 Livraison
                </label>
                <label>
                  <input
                    type="radio"
                    value="retrait"
                    checked={reservation.livraison === "retrait"}
                    onChange={(e) =>
                      setReservation({
                        ...reservation,
                        livraison: e.target.value,
                      })
                    }
                  />{" "}
                  📦 Retrait
                </label>
              </div>

              {reservation.date && reservation.duree && reservation.adresse && (
                <div className="bg-green-50 border p-4 rounded-lg mt-4">
                  <h3 className="font-bold text-green-700 mb-2">Résumé</h3>
                  <p>📅 {reservation.date}</p>
                  <p>⏱️ {reservation.duree} heures</p>
                  <p>🏠 {reservation.adresse}</p>
                  <p>
                    🚚 Mode :{" "}
                    {reservation.livraison === "livraison"
                      ? "Livraison"
                      : "Retrait"}
                  </p>
                  <p className="font-semibold text-green-700 mt-2">
                    💰 Total : {prixTotal} €
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-bold hover:bg-green-700"
              >
                ✅ Confirmer ma réservation
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Messagerie */}
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

      {/* ModalMessage */}
      {modal && (
        <ModalMessage
          type={modal.type}
          message={modal.message}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
};

export default ProductDetail;
