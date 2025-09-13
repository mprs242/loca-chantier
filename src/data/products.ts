const products = [
  {
    id: 1,
    titre: "Pelleteuse 10T",
    categorie: "Pelleteuse",
    prixHoraire: 75,
    adresse: "Nantes",
    caracteristiques: { age: "2 ans", puissance: "150 ch", poids: "10T" },
    entreprise: "Chantiers Ouest",
    description:
      "Pelleteuse robuste et performante, idéale pour les gros travaux de terrassement.",
    images: ["/images/pelleteuse.jpg"],
  },
  {
    id: 2,
    titre: "Chargeuse compacte",
    categorie: "Chargeuse",
    prixHoraire: 50,
    adresse: "Rennes",
    caracteristiques: { age: "1 an", puissance: "80 ch", poids: "5T" },
    entreprise: "BTP Services",
    description:
      "Parfaite pour les petits chantiers et zones difficiles d’accès.",
    images: ["/images/chargeuse.jpg"],
  },
  {
    id: 3,
    titre: "Camion benne",
    categorie: "Camion benne",
    prixHoraire: 65,
    adresse: "Angers",
    caracteristiques: { age: "3 ans", puissance: "200 ch", poids: "12T" },
    entreprise: "Transport Ouest",
    description: "Camion benne puissant pour le transport de matériaux lourds.",
    images: ["/images/camion-benne.jpg"],
  },
];

export default products;
