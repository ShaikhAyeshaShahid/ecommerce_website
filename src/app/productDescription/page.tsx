"use client"
import React, { useState } from 'react';
import Image from "next/image";
import Reviews from '../components/Reviews';

const Page = () => {

  const topSelling = [
    {
      name: 'Polo with Contrast Trims',
      price: '$212',
      reviews: 621,
      rating: 4.0,
      imageUrl: '/image9.png',
      total: "4.0/5",
      previous: "$242",
      discount: "-20%"
    },
    {
      name: 'Gradient Graphic T-shirt',
      price: '$145',
      reviews: 199,
      imageUrl: '/image10.png',
      rating: 3.5,
      total: "3.5/5",
    },
    {
      name: 'Polo with Tipping Details',
      price: '$180',
      reviews: 458,
      imageUrl: '/image11.png',
      rating: 4.5,
      total: "4.5/5"
    },
    {
      name: 'Black Striped T-shirt',
      price: '$120',
      reviews: 357,
      imageUrl: '/image12.png',
      rating: 5.0,
      total: "5.0/5",
      previous: "$150",
      discount: "-30%"
    },
  ];

  const clothes = {
    name: 'One Life Graphic T-shirt',
    price: '$260',
    reviews: 199,
    imageUrl: '/pd1.png',
    rating: 4.5,
    total: "4.5/5",
    previous: "$300",
    discount: "-40%",
    description: 'This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    colors: ['#3e2723', '#1b5e20', '#1a237e'], // Hex colors for buttons
    sizes: ['Small', 'Medium', 'Large', 'X-Large']
  };

  const [selectedImage, setSelectedImage] = useState(clothes.imageUrl);
  const [selectedColor, setSelectedColor] = useState(clothes.colors[0]);
  const [selectedSize, setSelectedSize] = useState(clothes.sizes[2]); 
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type: string) => {
    setQuantity((prev) => (type === 'increment' ? prev + 1 : prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className='bg-white'>
      <section className="text-gray-600 body-font overflow-hidden bg-white font-satoshi">
        {/* Breadcrumb Section */}
        <div className='mx-16 my-8'>
          <Image height={5} width={400} alt="Route" src="/route.png" className='h-5 w-90' />
        </div>

        {/* Main Content Section */}
        <div className="container px-5 py-15 mx-auto">
          <div className="lg:w-4/5 mx-auto flex">
            {/* Product Images */}
            <div className="flex flex-col space-y-4 mr-4">
              {['/pd1.png', '/pd2.png', '/pd3.png'].map((image, index) => (
                <Image
                  key={index}
                  alt="Thumbnail"
                  height={100}
                  width={100}
                  className={`object-cover rounded-lg cursor-pointer ${selectedImage === image ? 'border-2 border-black' : ''}`}
                  src={image}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>

            {/* Main Product Image */}
            <div className="flex-1">
              <Image alt="Selected Product" height={550} width={400} className="object-cover rounded-lg" src={selectedImage} />
            </div>

            {/* Product Details */}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-3xl font-bold text-black font-intergralcf">{clothes.name}</h1>

              {/* Rating and Price Section */}
              <div className="flex flex-col bg-white my-4">
                <div className="flex items-center my-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`flex ${i < Math.floor(clothes.rating) ? 'text-yellow-500' : 'text-gray-300'}`}>★</span>
                  ))}
                  <p className="font-normal text-lg text-black ml-2">{clothes.total}</p>
                </div>
                <div className="flex items-center gap-3 font-bold my-2">
                  <p className="text-xl text-black">{clothes.price}</p>
                  <span className="text-xl text-gray-400 line-through">{clothes.previous}</span>
                  <p className="rounded-2xl p-1 bg-red-200 text-red-500 text-md">{clothes.discount}</p>
                </div>
              </div>

              {/* Description */}
              <p className="leading-relaxed my-2">{clothes.description}</p>
              <hr />

              {/* Color Selection */}
              <div className="mt-6">
                <span className="mr-3">Select Colors</span>
                <div className='flex'>
                  {clothes.colors.map((color, index) => (
                    <button
                      key={index}
                      className={`border-2 rounded-full w-8 h-8 focus:outline-none mr-2 ${selectedColor === color ? 'border-black' : ''}`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mt-6">
                <span className="mr-3">Choose Size</span>
                <div className='flex gap-2 py-2'>
                  {clothes.sizes.map((size, index) => (
                    <div
                      key={index}
                      className={`rounded-full w-28 h-10 flex items-center justify-center cursor-pointer ${selectedSize === size ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      <p>{size}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex gap-4 mt-6 bg-white">
                <div className='rounded-full text-black bg-gray-200 w-40 h-10 flex items-center justify-between px-5'>
                  <p className='text-3xl cursor-pointer' onClick={() => handleQuantityChange('decrement')}>-</p>
                  <p>{quantity}</p>
                  <p className='text-3xl cursor-pointer' onClick={() => handleQuantityChange('increment')}>+</p>
                </div>
                <div className="rounded-full text-white bg-black w-80 h-10 flex items-center justify-center text-lg cursor-pointer">
                  <p>Add to Cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Reviews/>









 {/* Payment Icons */} {/* You might also like Section */}
 <div className="text-white body-font bg-white">

{/* You might also like Section */}
<p className="text-3xl text-center font-bold font-intergralcf text-black py-5 my-4">
  You might also like
</p>
<div className="flex flex-row justify-center gap-24 my-4">
  {topSelling.map((item, index) => (
    <div key={index} className="flex flex-col bg-white">
      {/* Product Image */}
      <Image
        alt="Logo"
        src={item.imageUrl}
        width={140}
        height={100}
        className="bg-searchBgColor rounded-xl h-72 w-60"
      />

      {/* Product Name */}
      <p className="font-satoshi font-bold text-black text-lg items-center my-2">
        {item.name}
      </p>

      {/* Product Rating */}
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => {
          const isFullStar = i < Math.floor(item.rating);
          const isHalfStar =
            i === Math.floor(item.rating) && item.rating % 1 !== 0;

          return (
            <span
              key={i}
              className={`flex ${isFullStar
                ? "text-yellow-500"
                : isHalfStar
                  ? "text-yellow-500"
                  : "text-gray-300"
                }`}
            >
              {isHalfStar ? (
                <Image
                  src="/Star_half.png"
                  height={20}
                  width={20}
                  alt="rating"
                  className="h-3 w-3 pr-1"
                />
              ) : (
                "★"
              )}
            </span>
          );
        })}
        <p className="font-satoshi font-normal text-black ml-2">{item.total}</p>
      </div>

      {/* Product Pricing */}
      <div className="flex justify-start items-center gap-3 font-satoshi font-bold my-2">
        <p className="text-lg text-black">{item.price}</p>
        {item.previous && (
          <span className="text-lg text-gray-400 line-through">
            {item.previous}
          </span>
        )}
        {item.discount && (
          <p className="border-none rounded-2xl p-1 bg-red-200 text-red-500 text-sm">
            {item.discount}
          </p>
        )}
      </div>
    </div>
  ))}
</div>

</div>

    </div>
  );
};

export default Page;
