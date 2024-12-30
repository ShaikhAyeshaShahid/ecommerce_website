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

  const topSelling = [
    {
      name: 'VERTICAL STRIPED SHIRT',
      price: '$212',
      reviews: 621,
      rating: 5.0,
      imageUrl: '/image5.png',
      total: "5.0/5",
      previous: "$232",
      discount: "-20%"
    },
    {
      name: 'COURAGE GRAPHIC T-SHIRT',
      price: '$145',
      reviews: 199,
      imageUrl: '/image6.png',
      rating: 4.0,
      total: "4.0/5",
    },
    {
      name: 'LOOSE FIT BERMUDA SHORTS',
      price: '$80',
      reviews: 458,
      imageUrl: '/image7.png',
      rating: 3.0,
      total: "3.0/5"
    },
    {
      name: 'FADED SKINNY JEANS',
      price: '$210',
      reviews: 357,
      imageUrl: '/image8.png',
      rating: 4.5,
      total: "4.5/5",
    },
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
{/* 

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

          {/* View All Button */}
          <div className="flex justify-center my-6">
            <button className="font-satoshi font-medium text-black border rounded-full py-2 w-48 text-center">
              View All
            </button>
          </div>
        </div>
      </div>

      <hr className="bg-gray-400 h-[1px] my-10 mx-12" />


      {/* Payment Icons */} {/* Top Sellings Section */}
      <div className="text-white body-font bg-white">

        {/* top selling Section */}
        <p className="text-3xl text-center font-bold font-intergralcf text-black py-5 my-4">
          top selling
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

        {/* View All Button */}
        <div className="flex justify-center my-6">
          <button className="font-satoshi font-medium text-black border rounded-full py-2 w-48 text-center">
            View All
          </button>
        </div>
      </div>



      {/* Browse by dress style */}

      <section className=" bg-searchBgColor rounded-2xl h-1/4 flex flex-col items-center justify-center mx-16 my-10">

        <p className="text-3xl text-center font-bold font-intergralcf text-black py-5 my-4">
          BROWSE BY dress STYLE
        </p>
        <div className="flex flex-col  w-full px-10 py-10">
          <div className="flex w-full">
            {/* Image 1 with text overlay */}

            <div className="relative md:p-2 p-1 w-1/2  m-4 rounded-2xl">
              <Image
                width={800}
                height={50}
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-2xl"
                src="/causal.png"
              />
              <Link
                href="/casualDescription"

              >
                <div className="absolute inset-10 flex items-start justify-start">
                  <p className="text-black font-satoshi font-bold text-2xl">Casual </p>
                </div>
              </Link>

            </div>

            {/* Image 2 with text overlay */}
            <div className="relative md:p-2 p-1 w-full  m-4 ">
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




          <div className="flex w-full">

            {/* Image 2 with text overlay */}
            <div className="relative md:p-2 p-1 w-full  m-4 ">
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

            {/* Image 1 with text overlay */}
            <div className="relative md:p-2 p-1 w-1/2  m-4 rounded-2xl">
              <Image
                width={800}
                height={50}
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-2xl"
                src="/gym.png"
              />
              <div className="absolute inset-10 flex items-start justify-start">
                <p className="text-black font-satoshi font-bold text-2xl">GYM </p>
              </div>
            </div>


          </div>

        </div>


      </section>




      <div className="flex flex-col justify-start items-start my-4 ">
        <div className="flex  w-full items-center justify-between px-4">
          <p className="text-3xl mx-16 text-center font-bold font-intergralcf text-black py-2 my-2 ">
            OUR HAPPY CUSTOMERS
          </p>
          <div className="flex mx-6">
            <Image src={'/arrowleft.png'} height={10} width={10} alt="arrow left " className="w-4 h-4 mx-4" />
            <Image src={'/arrowright.png'} height={10} width={10} alt="arrow left " className="w-4 h-4 mx-4" />
          </div>
        </div>
        <section className="text-gray-600 body-font flex w-full h-[300px] overflow-x-auto">
          <div className="flex w-max">
            {happyCustomer.map((item, index) => (
              <div
                key={index}
                className="w-96 h-56 bg-white p-4 m-4 border-2 rounded-2xl border-gray-200 sm:flex-row"
              >
                {/* Product Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => {
                    const isFullStar = i < Math.floor(item.rating);
                    const isHalfStar = i === Math.floor(item.rating) && item.rating % 1 !== 0;

                    return (
                      <span
                        key={i}
                        className={`flex ${isFullStar ? "text-yellow-500" : isHalfStar ? "text-yellow-500" : "text-gray-300"
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
                </div>

                {/* Comment Title */}
                <div className="flex items-center">
                  <h2 className="text-gray-900 text-lg title-font font-medium px-1">{item.name}</h2>

                  {/* Green Checkmark */}
                  <Image
                    src={"/check_icon.png"}
                    height={10}
                    width={10}
                    alt="check"
                    className="h-5 w-5"
                  />
                </div>

                {/* Comment Text */}
                <p className="leading-relaxed text-base">{item.reviews}</p>
              </div>
            ))}
          </div>
        </section>






      </div>

 */}




    </div>

  );
}
