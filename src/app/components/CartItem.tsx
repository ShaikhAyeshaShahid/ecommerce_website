import React from "react";
import Image from "next/image";

interface CartItemProps {
  name: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
  imageUrl: string;
}

const CartItem: React.FC<CartItemProps> = ({
  name,
  price,
  size,
  color,
  quantity,
  imageUrl,
}) => {
  return (
    <div className="flex items-center gap-4 border-b pb-4 mb-4">
      {/* Image */}
      <div className="w-24 h-24 relative">
        <Image
          src={imageUrl}
          alt={`Image of ${name}`}
          width={96} // Set the width (in pixels)
          height={96} // Set the height (in pixels)
          className="rounded-md object-cover"
        />
      </div>
      {/* Details */}
      <div className="flex-1">
        <h2 className="font-semibold text-lg">{name}</h2>
        <p className="text-sm text-gray-500">
          Size: {size}
        </p>
        <p className="text-sm text-gray-500"> Color: {color}</p>
        {/* Price */}
        <p className="font-semibold text-lg">${price}</p>
      </div>

      <div className='rounded-full text-black bg-gray-200 w-40 h-10 flex items-center justify-between px-5'>
        <p className='text-3xl cursor-pointer'>-</p>
        <p>{quantity}</p>
        <p className='text-3xl cursor-pointer' >+</p>
      </div>
    </div>
  );
};

export default CartItem;
