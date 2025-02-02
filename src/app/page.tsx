"use client"

import { sanityFetch } from "@/sanity/lib/fetch";
import { allProducts, fourProducts } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import SearchFilter from "./components/SearchFilter";


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

export default function Home() {


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

  const [reviewResponse, setReviewResponse] = useState<any>(null);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

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

    const fetchReviews = async () => {
      try {
        const reviewUrl = 'https://jsonplaceholder.typicode.com/comments';
        const response = await fetch(reviewUrl);
        const data = await response.json();
        setReviewResponse(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };


    fetchReviews(),fetchData();
  }, []);


  const paymentImages = [
    "/versace.png",
    "/zara.png",
    "/gucci.png",
    "/prada.png",
    "/calvinklein.png",
  ];



  return (
    <div className="flex flex-col bg-white">

      {/* Search and Filter Component */}
      <SearchFilter
        products={allProducts}
        setFilteredProducts={setFilteredProducts}
      />
      {/* Hero Section */}



      {/* Visible on `md` and above */}
      <div className="hidden md:block bg-searchBgColor relative">
        {/* Main Wrapper */}
        <div className="absolute  inset-0 flex flex-col lg:flex-row justify-between items-center lg:items-start pt-20 pl-8">
          {/* Text Section */}
          <div className="flex flex-col text-black w-full lg:w-1/2 px-6 lg:pl-16">
            <p className="text-4xl sm:text-5xl lg:text-6xl font-bold font-intergralcf text-black py-4">
              FIND CLOTHES THAT MATCH YOUR STYLE
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 font-satoshi py-4">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            <button className="flex items-center justify-center font-medium font-satoshi text-sm sm:text-md h-10 bg-black rounded-full my-2 text-white w-1/2 lg:w-1/4">
              Shop Now
            </button>
          </div>

          {/* Left Shimmer Image */}
          <div className="hidden lg:block">
            <Image
              src="/shimmer2.png"
              height={200}
              width={100}
              alt="shimmer"
              className="shimmer-image"
            />
          </div>
        </div>

        {/* Model Image */}
        <div className="flex justify-center">
          <Image
            src="/model.png"
            height={1000}
            width={2000}
            alt="model"
            className="model-image max-w-full h-auto"
          />
        </div>

        {/* Centered Shimmer Image */}
        <div className="absolute inset-0 flex justify-center items-center">
          <Image
            src="/shimmer2.png"
            height={50}
            width={50}
            alt="shimmer"
            className="shimmer-image"
          />
        </div>
      </div>

      {/* Visible only on `sm` devices */}
      <div className="md:hidden flex flex-col bg-searchBgColor px-3 font-satoshi">
        <p className="text-4xl sm:text-5xl lg:text-6xl font-bold font-intergralcf text-black py-4">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </p>

        <p className="text-sm sm:text-base lg:text-lg text-gray-400 font-satoshi py-4">
          Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>

        <button className="flex items-center justify-center font-medium font-satoshi text-sm sm:text-md h-10 bg-black rounded-full my-2 text-white w-full lg:w-1/4">
          Shop Now
        </button>

        <div className="flex justify-center py-4">
          <div className="border-r-slate-500 px-2">
            <p className="text-black text-2xl font-bold">200 +</p>
            <p className="text-gray-400 font-normal">International Brands</p>
          </div>

          <div className="border-r-2 bg-gray-400"></div>

          <div className="border-r-slate-500 px-2">
            <p className="text-black text-2xl font-bold">2,000 +</p>
            <p className="text-gray-400 font-normal">High-Quality Products</p>
          </div>
        </div>

        <div className="">
          <p className="text-black text-2xl font-bold text-center">30,000 +</p>
          <p className="text-gray-400 font-normal text-center">Happy Customers</p>
        </div>

        <div className="bg-white relative">
          {/* Main Wrapper */}
          <div className="absolute inset-0 flex flex-col lg:flex-row justify-between items-center lg:items-start pt-20">
            {/* Left Shimmer Image */}
            <div className="absolute inset-0 flex justify-end items-start">
              <Image
                src="/shimmer2.png"
                height={200}
                width={100}
                alt="shimmer"
                className="shimmer-image"
              />
            </div>
          </div>

          {/* Model Image */}
          <div className="flex justify-center">
            <Image
              src="/model2.png"
              height={1000}
              width={2000}
              alt="model"
              className="model-image max-w-full h-auto"
            />
          </div>

          {/* Centered Shimmer Image */}
          <div className="absolute inset-0 flex justify-start items-center">
            <Image
              src="/shimmer2.png"
              height={50}
              width={50}
              alt="shimmer"
              className="shimmer-image"
            />
          </div>
        </div>
      </div>

      {/* Brand Icons */}
      <div className="bg-black flex flex-wrap sm:gap-14 md:gap-36 px-4 sm:px-10 md:px-20 justify-center sm:justify-start ">
        {paymentImages.map((image, index) => (
          <Image
            className="sm:p-4"
            key={index}
            src={image}
            height={70} // Smaller height for mobile
            width={100}  // Smaller width for mobile
            alt={`Payment Icon ${index + 1}`}
          />
        ))}
      </div>



      {/* New Arrivals Section */}
      <p className="text-3xl text-center font-bold font-intergralcf text-black py-5 mt-4 mb-1">
        NEW ARRIVALS
      </p>




      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-4 mx-20 items-start justify-start">
        {filteredProducts.map((product) => (
          <div key={product._id} className="flex flex-col sm:px-4 sm:mx-2 mx-4 p-2 rounded-lg items-start">
            <Link
              href={`/productDescription/${product._id}`}>
              {/* Product Image */}
              <Image
                alt={product.name}
                src={product.image}
                width={140}
                height={100}
                className="bg-searchBgColor rounded-xl h-64 sm:h-40 w-full sm:w-48 object-cover "
              />

              {/* Product Name */}
              <p className="font-satoshi font-bold text-black text-lg  my-2 text-start">
                {product.name}
              </p>

              {/* Product Rating */}
              <div className="flex justify-center items-center">
                {[...Array(5)].map((_, i) => {
                  const isFullStar = i < Math.floor(product.rating ?? 0);
                  const isHalfStar =
                    i === Math.floor(product.rating ?? 0) && (product.rating ?? 0) % 1 !== 0;

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
                <p className="font-satoshi font-normal text-black ml-2">
                  {product.total}
                </p>
              </div>

              {/* Product Pricing */}
              <div className="flex justify-center items-center gap-3 font-satoshi font-bold my-2">
                <p className="text-lg text-black">${product.price}</p>
                {product.previous && (
                  <span className="text-lg text-gray-400 line-through">
                    {product.previous}
                  </span>
                )}
                {product.discount && (
                  <p className="border-none rounded-2xl px-2 py-1 bg-red-200 text-red-500 text-sm">
                    {product.discount}
                  </p>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>






      {/* View All Button */}
      <div className="flex justify-center my-6 mx-4 border-b-2 pb-8">
        <button className="font-satoshi font-medium text-black border w-full   md:w-48 rounded-full py-2 text-center ">
          View All
        </button>
      </div>




      {/* TOP SELLING Section */}
      <p className="text-3xl text-center font-bold font-intergralcf text-black py-5 mt-4 mb-1">
        TOP SELLING
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-4 mx-20 items-start justify-start">
        {filteredProducts.map((product) => (
          <div key={product._id} className="flex flex-col sm:px-4 sm:mx-2 mx-4 p-2 rounded-lg items-start">
            <Link
              href={`/productDescription/${product._id}`}>
              {/* Product Image */}
              <Image
                alt={product.name}
                src={product.image}
                width={140}
                height={100}
                className="bg-searchBgColor rounded-xl h-64 sm:h-40 w-full sm:w-48 object-cover "
              />

              {/* Product Name */}
              <p className="font-satoshi font-bold text-black text-lg  my-2 text-start">
                {product.name}
              </p>

              {/* Product Rating */}
              <div className="flex justify-center items-center">
                {[...Array(5)].map((_, i) => {
                  const isFullStar = i < Math.floor(product.rating ?? 0);
                  const isHalfStar =
                    i === Math.floor(product.rating ?? 0) && (product.rating ?? 0) % 1 !== 0;

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
                <p className="font-satoshi font-normal text-black ml-2">
                  {product.total}
                </p>
              </div>

              {/* Product Pricing */}
              <div className="flex justify-center items-center gap-3 font-satoshi font-bold my-2">
                <p className="text-lg text-black">${product.price}</p>
                {product.previous && (
                  <span className="text-lg text-gray-400 line-through">
                    {product.previous}
                  </span>
                )}
                {product.discount && (
                  <p className="border-none rounded-2xl px-2 py-1 bg-red-200 text-red-500 text-sm">
                    {product.discount}
                  </p>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>


      {/* View All Button */}
      <div className="flex justify-center my-6 mx-4 ">
        <button className="font-satoshi font-medium text-black border w-full   md:w-48 rounded-full py-2 text-center ">
          View All
        </button>
      </div>







      {/* Browse by Dress Style */}
      <div className=" justify-items-center">
        <div className="bg-searchBgColor rounded-3xl flex flex-col  w-10/12   my-10 sm:mx-2 ">
          <p className="text-3xl sm:text-2xl text-center font-bold font-intergralcf text-black py-5 sm:py-10">
            BROWSE BY DRESS STYLE
          </p>
          {/* Row 1 */}
          <div className="flex ">
            {/* Image 1 with Text Overlay */}
            <div className="relative md:p-2 p-1 w-1/2 m-4 rounded-2xl">
              <Image
                width={800}
                height={50}
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-2xl"
                src="/causal.png"
              />
              <Link href="/casualDescription">
                <div className="absolute inset-10 flex items-start justify-start">
                  <p className="text-black font-satoshi font-bold text-2xl">Casual</p>
                </div>
              </Link>
            </div>

            {/* Image 2 with Text Overlay */}
            <div className="relative md:p-2 p-1 w-full m-4">
              <Image
                width={800}
                height={50}
                alt="gallery"
                className="w-full h-full object-cover object-center block rounded-2xl"
                src="/formal.png"
              />
              <div className="absolute inset-10 flex items-start justify-start">
                <p className="text-black font-satoshi font-bold text-2xl">Formal</p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex ">
            {/* Image 3 with Text Overlay */}
            <div className="relative md:p-2 p-1 w-full m-4">
              <Image
                width={800}
                height={50}
                alt="gallery"
                className="w-full h-full object-cover object-center block rounded-2xl"
                src="/party.png"
              />
              <div className="absolute inset-10 flex items-start justify-start">
                <p className="text-black font-satoshi font-bold text-2xl">Party</p>
              </div>
            </div>

            {/* Image 4 with Text Overlay */}
            <div className="relative md:p-2 p-1 w-1/2 m-4 rounded-2xl">
              <Image
                width={800}
                height={50}
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-2xl"
                src="/gym.png"
              />
              <div className="absolute inset-10 flex items-start justify-start">
                <p className="text-black font-satoshi font-bold text-2xl">GYM</p>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Our Happy Customers */}
      <div className="flex flex-col justify-start items-start ">
        <div className="flex flex-col sm:flex-row w-full items-center justify-between px-6 sm:px-20">
          {/* Text Section */}
          <p className="text-xl sm:text-3xl mx-2 sm:mx-16 text-center font-bold font-intergralcf text-black py-2 my-2 sm:my-0">
            OUR HAPPY CUSTOMERS
          </p>

          {/* Arrows Section */}
          <div className="flex items-center mx-0 sm:mx-6">
            <Image
              src="/arrowleft.png"
              height={10}
              width={10}
              alt="arrow left"
              className="w-6 h-6 sm:w-4 sm:h-4 mx-2"
            />
            <Image
              src="/arrowright.png"
              height={10}
              width={10}
              alt="arrow right"
              className="w-6 h-6 sm:w-4 sm:h-4 mx-2"
            />
          </div>
        </div>

    
        <section className=" text-gray-600 body-font flex w-full h-[400px] overflow-x-auto p-10 gap-4">
        {reviewResponse ? (
        reviewResponse.slice(0, 5).map((review: any) => (
          <div
            key={review.id}
            className="w-full sm:w-1/2 md:w-1/3 bg-gray-100 p-4 rounded-xl shadow-md"
          >
            {/* Rating Section */}
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => {
                const isFullStar = i < Math.floor(review.rating ?? 0);
                const isHalfStar =
                  i === Math.floor(review.rating ?? 0) && (review.rating ?? 0) % 1 !== 0;

                return (
                  <span
                    key={i}
                    className={`flex ${isFullStar ? "text-yellow-500" : isHalfStar ? "text-yellow-500" : "text-gray-300"}`}
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
            </div>

            {/* Review Details */}
            <div className="flex flex-row">
            <p className="font-semibold text-xl">{review.user?.fullName}</p>
            <Image
            src="/check_icon.png"
            height={10}
            width={10}
            alt="check"
            className="flex h-5 w-5"
          />
            </div>
            
            <p className="text-gray-600">{review.user?.email}</p>
            <p className="mt-2 text-gray-800">{review.body}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">Loading reviews...</p>
      )}
</section>




      </div>

    </div>

  );
}
