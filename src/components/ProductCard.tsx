import React from "react";
import { Link } from "react-router-dom";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600">{product.category}</p>
      <p className="text-lg font-bold mt-2">{product.price} €/jour</p>
      <Link to={`/product/${product.id}`}>
        <button className="bg-blue-600 text-white py-2 px-4 rounded mt-4 w-full hover:bg-blue-700">
          Voir détails
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
