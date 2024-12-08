import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const paymentImages = [
    "/versace.png",
    "/zara.png",
    "/gucci.png",
    "/prada.png",
    "/calvinklein.png",
  ];


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

  return (
    <div className="flex flex-col bg-white">
    {/* Hero Section */}
    <div className="bg-white relative">
      <div className="absolute inset-0 flex justify-between items-start pt-20">
        <div className="flex flex-col text-black w-1/2 pl-16 px-3">
          <p className="text-6xl font-bold font-intergralcf text-black py-4">
            FIND CLOTHES THAT MATCH YOUR STYLE
          </p>
          <p className="text-lg text-gray-400 font-satoshi py-4">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="flex items-center justify-center font-medium font-satoshi text-md h-10 bg-black rounded-full my-2 text-white w-1/4">
            Shop Now
          </button>
        </div>
        <Image
          src="/shimmer2.png"
          height={200}
          width={100}
          alt="shimmer"
          className="shimmer-image"
        />
      </div>
  
      <Image
        src="/model.png"
        height={1000}
        width={2000}
        alt="model"
        className="model-image"
      />
  
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
  
    {/* Payment Icons */} {/* New Arrivals Section */}
    <div className="w-full ">
    <div className="text-white body-font bg-white">
        <div className="px-20 bg-black flex">
          {paymentImages.map((image, index) => (
            <Image
            className="mx-20 py-4"
              key={index}
              src={image}
              height={60}
              width={90}
              alt={`Payment Icon ${index + 1}`}
            />
          ))}
        </div>
  
        {/* New Arrivals Section */}
        <p className="text-3xl text-center font-bold font-intergralcf text-black py-5 my-4">
          NEW ARRIVALS
        </p>
        <div className="flex flex-row justify-center gap-24 my-4">
          {clothes.map((item, index) => (
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
                      className={`flex ${
                        isFullStar
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
  
        {/* View All Button */}
        <div className="flex justify-center my-6">
          <button className="font-satoshi font-medium text-black border rounded-full py-2 w-48 text-center">
            View All
          </button>
        </div>
      </div>
    </div>

<hr className="bg-gray-400 h-[1px] py-0.5 my-10"/>


    {/* Payment Icons */} {/* Top Sellings Section */}
    <div className="w-full bg-pink-600">
    <div className="text-white body-font bg-white">
        <div className="px-20 bg-black flex">
          {paymentImages.map((image, index) => (
            <Image
            className="mx-20 py-4"
              key={index}
              src={image}
              height={60}
              width={90}
              alt={`Payment Icon ${index + 1}`}
            />
          ))}
        </div>
  
        {/* New Arrivals Section */}
        <p className="text-3xl text-center font-bold font-intergralcf text-black py-5 my-4">
          NEW ARRIVALS
        </p>
        <div className="flex flex-row justify-center gap-24 my-4">
          {clothes.map((item, index) => (
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
                      className={`flex ${
                        isFullStar
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
  
        {/* View All Button */}
        <div className="flex justify-center my-6">
          <button className="font-satoshi font-medium text-black border rounded-full py-2 w-48 text-center">
            View All
          </button>
        </div>
      </div>
    </div>

















  </div>
  
  );
}
