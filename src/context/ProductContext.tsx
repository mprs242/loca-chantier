import React, { createContext, useState, ReactNode } from "react";
import productsData from "../data/products"; // 👈 nos produits de départ

// ✅ Type produit
type Product = {
  id: number;
  titre: string;
  categorie: string;
  prixHoraire: number;
  adresse: string;
  caracteristiques: {
    age: string;
    puissance: string;
    poids: string;
  };
  entreprise: string;
  description: string; // 👈 champ libre ajouté
  images: string[];
};

type ProductContextType = {
  products: Product[];
  addProduct: (product: Product) => void;
};

// ✅ Contexte
export const ProductContext = createContext<ProductContextType>({
  products: [],
  addProduct: () => {},
});

// ✅ Provider
export const ProductProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>(productsData);

  const addProduct = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
