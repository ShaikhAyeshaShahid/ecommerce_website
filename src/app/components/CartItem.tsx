import React from "react";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";

type CartItemProps = {
  id: string;
  name: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
  imageUrl: string;
};

const CartItem: React.FC<CartItemProps> = ({ id, name, price, size, color, quantity, imageUrl }) => {
  const { removeFromCart, updateCartItemQuantity } = useCart();

  return (
    <div className="flex items-center gap-4 border-b pb-4 mb-4">
      {/* Image */}
      <div className="w-24 h-24 relative">
        <Image
          src={imageUrl}
          alt={`Image of ${name}`}
          width={96}
          height={96}
          className="rounded-md object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1">
        <h2 className="font-semibold text-lg">{name}</h2>
        <p className="text-sm text-gray-500">Size: {size}</p>
        <p className="text-sm text-gray-500">Color: {color}</p>
        <p className="font-semibold text-lg">${price}</p>
      </div>

      {/* Quantity Controls */}
      <div className="rounded-full text-black bg-gray-200 w-40 h-10 flex items-center justify-between px-5">
        <button
          className="text-3xl cursor-pointer"
          onClick={() => updateCartItemQuantity(id, quantity - 1)}
          disabled={quantity <= 1}
        >
          -
        </button>
        <p>{quantity}</p>
        <button
          className="text-3xl cursor-pointer"
          onClick={() => updateCartItemQuantity(id, quantity + 1)}
        >
          +
        </button>
      </div>

      <button onClick={() => removeFromCart(id)} className="text-red-500">
        Remove
      </button>
    </div>
  );
};

export default CartItem;
