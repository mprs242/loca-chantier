import React from "react";
import ProductList from "../components/ProductList";
import { Product } from "../components/ProductCard";

const Home: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Mini-pelle",
      category: "Terrains",
      price: 50,
      image: "https://via.placeholder.com/400x300",
    },
    {
      id: 2,
      name: "Nacelle élévatrice",
      category: "Hauteur",
      price: 70,
      image: "https://via.placeholder.com/400x300",
    },
    {
      id: 3,
      name: "Compacteur",
      category: "Sol",
      price: 40,
      image: "https://via.placeholder.com/400x300",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Catalogue de matériels</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
