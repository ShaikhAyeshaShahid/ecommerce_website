import React from "react";
import Image from "next/image";

const reviews = [
  {
    name: "Samantha D.",
    date: "August 14, 2023",
    rating: 5,
    comment: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It’s become my favorite go-to shirt.",
  },
  {
    name: "Alex M.",
    date: "August 15, 2023",
    rating: 5,
    comment: "This t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I’m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
  },
  {
    name: "Ethan R.",
    date: "August 16, 2023",
    rating: 5,
    comment: "This t-shirt is a must-have for anyone who appreciates good design. The minimalist-yet-stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt.",
  },
  {
    name: "Olivia P.",
    date: "August 17, 2023",
    rating: 5,
    comment: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It’s evident that the designer poured their creativity into making this t-shirt stand out.",
  },
  {
    name: "Liam K.",
    date: "August 18, 2023",
    rating: 4,
    comment: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer’s skill. It’s like wearing a piece of art that reflects their passion for both design and fashion.",
  },
  {
    name: "Ava H.",
    date: "August 19, 2023",
    rating: 4,
    comment: "I’m not just wearing a t-shirt; I’m wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
  },
];

const Reviews = () => {
  return (
    <div className="md:p-8 max-w-7xl mx-auto font-satoshi bg-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0 text-black">All Reviews (451)</h2>
        <div className="flex gap-4 items-center">

            
           <Image
             src="/filter.png"
             height={10}
             width={35}
             alt="arrow down"
             className="cursor-pointer h-30 w-30"
           />
           <div className="flex  bg-searchBgColor rounded-full items-center px-2 justify-center align-middle">
           <button className="text-lg font-medium px-4 py-2 text-black h-10 w-50 items-center ">Latest </button>

           <Image
             src="/arrow_down_icon.png"
             height={5}
             width={10}
             alt="arrow down"
             className="cursor-pointer h-3 w-3"
           />

           </div>

          <button className="text-lg font-medium bg-black rounded-full text-white px-4 py-2 ">
            Write a Review 
          </button>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`p-4 shadow-sm  border-2 rounded-2xl border-gray-200${"border-gray-200"
            }`}
          >
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`w-4 h-4 ${
                    i < review.rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}

<Image
            src={"/dots.png"}
            height={10}
            width={10}
            alt="check"
            className="h-1 w-5 ml-[450px]"
          />

            </div>
            <div className="flex items-center my-2">
            <h3 className="text-lg font-semibold text-gray-900 title-font px-1">{review.name}</h3>

            <Image
            src={"/check_icon.png"}
            height={10}
            width={10}
            alt="check"
            className="h-5 w-5"
          />
                </div>
           
            <p className="text-sm text-gray-700 mt-2">&quot; {review.comment} &quot;</p>
            <p className="text-sm text-gray-500 mt-1 font-medium">Posted on {review.date}</p>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-8 text-center ">
        <button className="bg-searchBgColor text-black text-sm font-medium px-6 py-2 rounded-full border">
          Load More Reviews
        </button>
      </div>
    </div>
  );
};

export default Reviews;
