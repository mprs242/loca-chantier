import React, { createContext, useState, useEffect, ReactNode } from "react";

type Reservation = {
  productId: number;
  produit: string;
  nom: string;
  email: string;
  adresse: string;
  date: string;
  duree: string;
  livraison: string;
  prixHoraire: number;
  total: number;
};

type ReservationContextType = {
  reservations: Reservation[];
  addReservation: (reservation: Reservation) => void;
};

export const ReservationContext = createContext<ReservationContextType>({
  reservations: [],
  addReservation: () => {},
});

export const ReservationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  // Charger les réservations depuis localStorage au démarrage
  useEffect(() => {
    const stored = localStorage.getItem("reservations");
    if (stored) {
      setReservations(JSON.parse(stored));
    }
  }, []);

  // Sauvegarder à chaque mise à jour
  useEffect(() => {
    localStorage.setItem("reservations", JSON.stringify(reservations));
  }, [reservations]);

  const addReservation = (reservation: Reservation) => {
    setReservations((prev) => [...prev, reservation]);
  };

  return (
    <ReservationContext.Provider value={{ reservations, addReservation }}>
      {children}
    </ReservationContext.Provider>
  );
};
