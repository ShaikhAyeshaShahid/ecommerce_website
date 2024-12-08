import React from "react";

type ProductProps = {
  name: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  rating: number;
};

const ProductCard: React.FC<ProductProps> = ({
  name,
  price,
  oldPrice,
  imageUrl,
  rating,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="mt-2 font-medium">{name}</h3>
      <div className="flex items-center space-x-2 mt-1">
        <span className="text-lg font-bold">${price}</span>
        {oldPrice && (
          <span className="text-sm line-through text-gray-500">${oldPrice}</span>
        )}
      </div>
      <div className="flex items-center mt-2">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-sm ${
              i < rating ? "text-yellow-500" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
