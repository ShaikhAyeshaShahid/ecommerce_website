'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { sanityFetch } from '@/sanity/lib/fetch';
import { singleProduct } from '@/sanity/lib/queries';
import Reviews from '@/app/components/Reviews';
import { useCart } from "@/app/context/CartContext";


type Product = {
  _id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  discount?: string;
  rating?: number;
  reviews?: number;
  total?: string;
  previous?: string;
  colors?: string[];
  sizes?: string[];
};

const Page = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);


  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select a color and size.");
      return;
    }

    addToCart({
      id: product?._id ?? "",
      name: product?.name ?? "",
      price: Number(product?.price) || 0,
      size: selectedSize,
      color: selectedColor,
      quantity,
      imageUrl: product?.image ?? "",
    });
    
  };


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log('Navigated to product page with ID:', params.id);
  
        const productData = await sanityFetch({
          query: singleProduct,
          params: { id: params.id },
        });
  
        console.log('Fetched product data:', productData);
  
        if (productData) {
          setProduct(productData);
        } else {
          console.error('No product found for this ID.');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
  
    fetchProduct();
  }, [params.id]);
  
  

  if (!product) {
    return (
      <div className="text-center mt-20">
        <p>Product not found. Please check the ID or try a different product.</p>
      </div>
    );
  }
  

  const handleQuantityChange = (type: string) => {
    setQuantity((prev) => (type === 'increment' ? prev + 1 : Math.max(1, prev - 1)));
  };

  return (
    <div className="bg-white">
      <section className="text-gray-600 body-font overflow-hidden bg-white font-satoshi">
        <div className="container px-5 py-15 mx-auto">
          <div className="lg:w-4/5 mx-auto flex">
            {/* Product Images */}
            <div className="flex-1">
              <Image
                alt={product.name}
                height={550}
                width={400}
                className="object-cover rounded-lg"
                src={product.image || '/default-image.png'}
              />
            </div>

            {/* Product Details */}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-3xl font-bold text-black">{product.name}</h1>
              <p className="leading-relaxed my-4">{product.description}</p>

              {/* Price and Discount */}
              <div className="flex items-center gap-3 font-bold my-2">
                <p className="text-xl text-black">{product.price}</p>
                {product.previous && <span className="text-xl text-gray-400 line-through">{product.previous}</span>}
                {product.discount && <p className="rounded-2xl p-1 bg-red-200 text-red-500 text-md">{product.discount}</p>}
              </div>

              {/* Color Selection */}
              <div className="mt-6">
                <span className="mr-3">Select Colors</span>
                <div className="flex">
                  {product.colors?.map((color, index) => (
                    <button
                      key={index}
                      className={`border-2 rounded-full w-8 h-8 mr-2 ${
                        selectedColor === color ? 'border-black' : ''
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mt-6">
                <span className="mr-3">Choose Size</span>
                <div className="flex gap-2">
                  {product.sizes?.map((size, index) => (
                    <button
                      key={index}
                      className={`rounded-full px-4 py-2 ${
                        selectedSize === size ? 'bg-black text-white' : 'bg-gray-200 text-black'
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <button onClick={() => handleQuantityChange('decrement')} className="px-4 py-2 bg-gray-200 rounded-full">
                    -
                  </button>
                  <span>{quantity}</span>
                  <button onClick={() => handleQuantityChange('increment')} className="px-4 py-2 bg-gray-200 rounded-full">
                    +
                  </button>
                </div>
                <button onClick={handleAddToCart} className="bg-black text-white px-6 py-2 rounded-full">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reviews />
    </div>
  );
};

export default Page;
