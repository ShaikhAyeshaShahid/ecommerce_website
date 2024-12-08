import React from "react";
import Image from "next/image";
import DottedHeader from "./DottedHeader";

type Product = {
  id: number;
  image: string;
  discount: string;
  price: string;
  rating: number;
};

const products: Product[] = [
  { id: 1, image: "/product1.png", discount: "-40%", price: "$120", rating: 4 },
  { id: 2, image: "/product2.png", discount: "-35%", price: "$80", rating: 5 },
  { id: 3, image: "/product3.png", discount: "-30%", price: "$370", rating: 4 },
  { id: 4, image: "/product4.png", discount: "-25%", price: "$375", rating: 5 },
];

const ProductCarousel: React.FC = () => {
  return (
    <div className="mx-12 py-5 bg-red-400">
        <div className="flex bg-yellow-300 justify-start items-center">
            <div className="bg-redColor h-10 w-4 rounded"></div>
        <h2 className="text-lg font-semibold font-poppins text-redColor pl-4">Today&apos;s</h2>

        </div>

        <div className="flex bg-yellow-900 my-4">
        <h2 className="text-3xl font-extrabold font-poppins text-black pr-8">Flash Sales</h2>

            <DottedHeader/>
             {/* Left Arrow */}
        <button className="text-2xl bg-gray-800 text-white p-2 rounded-full">
          &#8592;
        </button>
        </div>

      <div className="flex space-x-4 items-center">
        {/* Left Arrow */}
        <button className="text-2xl bg-gray-800 text-white p-2 rounded-full">
          &#8592;
        </button>

        {/* Products */}
        <div className="flex overflow-x-auto space-x-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white text-black rounded-lg p-4 w-48"
            >
              <div className="relative">
                <Image
                  src={product.image}
                  alt={`Product ${product.id}`}
                  width={200}
                  height={100}
                  className="w-full rounded-lg"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
                  {product.discount}
                </span>
                <div className="absolute top-2 right-2 space-y-2">
                  <button className="bg-white p-2 rounded-full shadow">
                    ❤️
                  </button>
                  <button className="bg-white p-2 rounded-full shadow">
                    👁️
                  </button>
                </div>
              </div>
              <p className="text-center mt-2 font-bold">{product.price}</p>
              <div className="flex justify-center text-yellow-500 text-sm">
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="text-2xl bg-gray-800 text-white p-2 rounded-full">
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
