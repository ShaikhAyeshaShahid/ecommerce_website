import { sanityFetch } from "@/sanity/lib/fetch";
import { allProducts, fourProducts } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";


type Product ={
  _id : string,
  name : string,
  description : string,
  price : string,
  image: string,
  discount?: string;
  rating?: number;
  reviews?: number;
  total?: string;
  previous?: string;
}

export default async function Home() {
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

  const products : Product[] = await sanityFetch({query : fourProducts})

  const allProducts = products.map((productFromAPI, index) => {
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

  const reviewUrl = await fetch("https://dummyjson.com/comments");
  const reviewResponse = await reviewUrl.json(); 

  const paymentImages = [
    "/versace.png",
    "/zara.png",
    "/gucci.png",
    "/prada.png",
    "/calvinklein.png",
  ];



  const happyCustomer = [
    {
      name: 'Sarah M.',
      price: '$212',
      reviews: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      rating: 5.0,
      imageUrl: '/image5.png',
      total: "5.0/5",
      previous: "$232",
      discount: "-20%"
    },
    {
      name: 'Alex K.',
      price: '$145',
      reviews: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      imageUrl: '/image6.png',
      rating: 4.0,
      total: "4.0/5",
    },
    {
      name: 'James L.',
      price: '$80',
      reviews: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      imageUrl: '/image7.png',
      rating: 3.0,
      total: "3.0/5"
    },
    {
      name: 'Alex K.',
      price: '$145',
      reviews: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      imageUrl: '/image6.png',
      rating: 4.0,
      total: "4.0/5",
    },
    {
      name: 'James L.',
      price: '$80',
      reviews: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      imageUrl: '/image7.png',
      rating: 3.0,
      total: "3.0/5"
    },
    {
      name: 'Alex K.',
      price: '$145',
      reviews: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      imageUrl: '/image6.png',
      rating: 4.0,
      total: "4.0/5",
    },
    {
      name: 'James L.',
      price: '$80',
      reviews: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      imageUrl: '/image7.png',
      rating: 3.0,
      total: "3.0/5"
    },

  ];

  return (
    <div className="flex flex-col bg-white">
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

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-4 mx-20">
        {allProducts.map((product) => (
      
          <div
            key={product._id}
            className="flex flex-col sm:px-4 sm:mx-2 mx-4 p-2 rounded-lg  items-start"
          >

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
                const isFullStar = i < Math.floor(product.rating);
                const isHalfStar =
                  i === Math.floor(product.rating) && product.rating % 1 !== 0;

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

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-4 mx-20">
        {allProducts.map((product) => (
      
          <div
            key={product._id}
            className="flex flex-col sm:px-4 sm:mx-2 mx-4 p-2 rounded-lg  items-start"
          >

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
                const isFullStar = i < Math.floor(product.rating);
                const isHalfStar =
                  i === Math.floor(product.rating) && product.rating % 1 !== 0;

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

{/*  {response.map((user: { id: number; name: string }) => (
          <div key={user.id}>
            <Link href={`/user/${user.id}`}>
              {user.name}
            </Link>
          </div>
        ))}
 */}
       <section className="text-gray-600 body-font flex w-full h-[300px] overflow-x-auto">
  <div className="flex w-max">
    {reviewResponse.comments.map((reviews: { id: number; body: string; user: { fullName: string }; }) => (
      <div
        key={reviews.id}
        className="w-96 h-56 bg-white p-4 m-4 border-2 rounded-2xl border-gray-200 sm:flex-row"
      >
        {/* Product Rating */}
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => {
            const isFullStar = i < 3; // Adjust this as needed for your rating
            const isHalfStar = false; // Since no half star is present in the data

            return (
              <span
                key={i}
                className={`flex ${isFullStar ? "text-yellow-500" : "text-gray-300"}`}
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

        {/* Comment Title */}
        <div className="flex items-center">
          <h2 className="text-gray-900 text-lg title-font font-medium px-1">
            {reviews.user.fullName}
          </h2>
          {/* Green Checkmark */}
          <Image
            src="/check_icon.png"
            height={10}
            width={10}
            alt="check"
            className="h-5 w-5"
          />
        </div>

        {/* Comment Text */}
        <p className="leading-relaxed text-base">{reviews.body}</p>
      </div>
    ))}
  </div>
</section>


      </div>

    </div>
































  );
}
