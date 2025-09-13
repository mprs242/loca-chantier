import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = {
    id,
    name: "Mini-pelle",
    description: "Location d'une mini-pelle idéale pour vos chantiers.",
    price: 50,
    image: "https://via.placeholder.com/600x400",
  };

  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full lg:w-1/2 rounded-md"
      />
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="mt-2 text-gray-700">{product.description}</p>
        <p className="text-xl font-semibold mt-4">{product.price} €/jour</p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700">
          Réserver
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
