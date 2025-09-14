import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // animations

interface ModalMessageProps {
  type: "error" | "success";
  message: string;
  onClose: () => void;
}

const ModalMessage: React.FC<ModalMessageProps> = ({
  type,
  message,
  onClose,
}) => {
  // Fermeture auto après 4 secondes
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const colors =
    type === "success"
      ? {
          bg: "bg-green-100",
          border: "border-green-400",
          text: "text-green-800",
          button: "bg-green-600 hover:bg-green-700",
          icon: "✅",
          title: "Succès",
        }
      : {
          bg: "bg-red-100",
          border: "border-red-400",
          text: "text-red-800",
          button: "bg-red-600 hover:bg-red-700",
          icon: "⚠️",
          title: "Connexion requise",
        };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className={`max-w-md w-full p-6 rounded-xl shadow-xl border ${colors.bg} ${colors.border} ${colors.text} relative`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Bouton fermer */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
          >
            ✖
          </button>

          {/* Icône + titre */}
          <div className="flex items-center space-x-3 mb-3">
            <span className="text-3xl">{colors.icon}</span>
            <h2 className="text-2xl font-bold">{colors.title}</h2>
          </div>

          {/* Message */}
          <p className="mb-4">{message}</p>

          {/* Bouton */}
          <button
            onClick={onClose}
            className={`w-full py-2 rounded-lg font-semibold text-white transition ${colors.button}`}
          >
            OK
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ModalMessage;
