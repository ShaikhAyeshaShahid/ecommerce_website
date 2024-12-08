import React from 'react'
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

const page = () => {
  const products = [
    {
      name: "Gradient Graphic T-Shirt",
      price: 145,
      oldPrice: 180,
      imageUrl: "/image6.png",
      rating: 4,
    },
    {
      name: "Polo with Tipping Details",
      price: 180,
      imageUrl: "/image7.png",
      rating: 5,
    },
    {
      name: "Gradient Graphic T-Shirt",
      price: 145,
      oldPrice: 180,
      imageUrl: "/image8.png",
      rating: 4,
    },
    {
      name: "Polo with Tipping Details",
      price: 180,
      imageUrl: "/image9.png",
      rating: 5,
    },
    {
      name: "Gradient Graphic T-Shirt",
      price: 145,
      oldPrice: 180,
      imageUrl: "/image10.png",
      rating: 4,
    },
    {
      name: "Polo with Tipping Details",
      price: 180,
      imageUrl: "/image11.png",
      rating: 5,
    },
    {
      name: "Polo with Tipping Details",
      price: 180,
      imageUrl: "/image9.png",
      rating: 5,
    },
    {
      name: "Gradient Graphic T-Shirt",
      price: 145,
      oldPrice: 180,
      imageUrl: "/image10.png",
      rating: 4,
    },
    {
      name: "Polo with Tipping Details",
      price: 180,
      imageUrl: "/image11.png",
      rating: 5,
    },
  ];

  return (
    <div className="p-4 md:p-8 bg-white text-black font-satoshi">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6">Casual</h1>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        <Filters />
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default page
