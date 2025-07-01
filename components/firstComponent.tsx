import React from "react";
import { Product } from "@/types/product.t";



interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }:ProductCardProps) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg p-5 bg-white hover:shadow-2xl transition duration-300">
      <img
        className="w-full h-64 object-contain mb-4"
        src={product.image}
        alt={product.title}
      />
      <div className="mb-2 text-xl font-semibold text-gray-800">{product.title}</div>
      <div className="text-sm text-gray-500 mb-2">{product.category}</div>
      <p className="text-gray-700 text-sm mb-4">{product.description}</p>

      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-green-600">${product.price.toFixed(2)}</span>
        <div className="flex items-center space-x-1">
          <span className="text-yellow-500 font-medium">{product.rating.rate}⭐</span>
          <span className="text-gray-500 text-sm">({product.rating.count})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
