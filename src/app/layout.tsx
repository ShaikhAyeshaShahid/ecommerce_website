"use client"

import { useState, useEffect } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';
import Salebanner from "./components/Salebanner";
import Footer from "./components/Footer";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allProducts, fourProducts } from "@/sanity/lib/queries";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";


const inter = Inter({ subsets: ["latin"] });



type Product = {
  _id: string,
  name: string,
  description: string,
  price: string,
  image: string,
  discount?: string;
  rating?: number;
  reviews?: number;
  total?: string;
  previous?: string;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const clothes = [
    {
      name: 'T-SHIRT WITH TAPE DETAILS',
      price: '$120',
      reviews: 621,
      rating: 4.5,
      imageUrl: '/image1.png',
      total: "4.5/5"
    },
    {
      name: 'SKINNY FIT JEANS',
      price: '$240',
      reviews: 199,
      imageUrl: '/image2.png',
      rating: 3.5,
      total: "3.5/5",
      previous: "$260",
      discount: "-20%"
    },
    {
      name: 'CHECKERED SHIRT',
      price: '$180',
      reviews: 458,
      imageUrl: '/image3.png',
      rating: 4.5,
      total: "4.5/5"
    },
    {
      name: 'SLEEVE STRIPED T-SHIRT',
      price: '$130',
      reviews: 357,
      imageUrl: '/image4.png',
      rating: 4.5,
      total: "4.5/5",
      previous: "$160",
      discount: "-30%"
    },
  ];

  useEffect(() => {

    const fetchData = async () => {
      try {
        const products: Product[] = await sanityFetch({ query: fourProducts });

        const combinedProducts = products.map((productFromAPI, index) => {
          const fallback = clothes[index] || {};
          return {
            ...productFromAPI,
            discount: productFromAPI.discount || fallback.discount,
            rating: fallback.rating,
            reviews: fallback.reviews,
            total: fallback.total,
            previous: fallback.previous,
            image: productFromAPI.image || fallback.imageUrl,
          };
        });

        setAllProducts(combinedProducts);
        setFilteredProducts(combinedProducts); // Set initial value for filtered products
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <html lang="en">
      <body className='bg-white'>
      <CartProvider>
      <Salebanner />
        <Navbar    />
        {children}
        <Toaster /> 
        <Footer />
    </CartProvider>
       
      </body>
    </html>
  );
}
