const products = [
  {
    id: 1,
    titre: "Pelleteuse 10T",
    categorie: "Pelleteuse",
    prixHoraire: 75,
    adresse: "Rue de la Gare, Nantes",
    caracteristiques: {
      age: "2 ans",
      puissance: "100 CV",
      poids: "10 tonnes",
    },
    image: "/images/pelleteuse.jpg",
    loueur: {
      nom: "Entreprise TP Ouest",
      telephone: "06 12 34 56 78", // masqué dans l'affichage
    },
  },
  {
    id: 2,
    titre: "Chargeuse compacte",
    categorie: "Chargeuse",
    prixHoraire: 50,
    adresse: "Boulevard Victor Hugo, Rennes",
    caracteristiques: {
      age: "3 ans",
      puissance: "75 CV",
      poids: "3 tonnes",
    },
    image: "/images/chargeuse.jpg",
    loueur: {
      nom: "LocaMat Services",
      telephone: "06 98 76 54 32", // masqué dans l'affichage
    },
  },
  {
    id: 3,
    titre: "Camion benne 15m³",
    categorie: "Camion benne",
    prixHoraire: 90,
    adresse: "Zone industrielle, Angers",
    caracteristiques: {
      age: "4 ans",
      puissance: "150 CV",
      poids: "12 tonnes",
    },
    image: "/images/camion-benne.jpg",
    loueur: {
      nom: "Transport & BTP",
      telephone: "07 55 44 33 22", // masqué dans l'affichage
    },
  },
];

export default products;
