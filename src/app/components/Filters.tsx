import React from "react";
import Image from "next/image";

const Filters = () => {
  return (
    <div className="p-4 mx-8 border rounded-2xl w-full lg:w-1/4 font-satoshi text-black">
      <div className="flex justify-between">
        <h2 className="font-semibold text-lg mb-4 border-b-2 border-gray-100 w-full">Filters</h2>

        <Image
          src="/filterIcon.png"
          height={10}
          width={10}
          alt="shimmer"
          className="shimmer-image w-5 h-5"
        />
      </div>
      {/* Category */}
      <div className="mb-6 pb-3 border-b-2 border-gray-100 w-full">
        <ul className="space-y-2">
          {["T-Shirts", "Shirts", "Jeans", "Jackets"].map((category) => (
            <li key={category} className="items-start">
              <div className="flex items-start justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className=" w-12" />
                  {category}

                </label>
                <Image
                  src="/arrow-right.png"
                  height={10}
                  width={10}
                  alt="shimmer"
                  className="shimmer-image w-2 h-2 ml-40"
                />
              </div>

            </li>
          ))}
        </ul>
      </div>
      {/* Price */}
      <div className="my-6 py-3 border-b-2 border-gray-100 w-full">
        <h3 className="font-semibold text-lg mb-2 ">Price</h3>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            placeholder="Min"
            className="border rounded px-2 py-1 w-1/2"
          />
          <input
            type="number"
            placeholder="Max"
            className="border rounded px-2 py-1 w-1/2"
          />
        </div>
      </div>
      {/* Colors */}
      <div className="mb-6 border-b-2 border-gray-100 w-full">
        <h3 className="font-semibold text-lg mb-2">Colors</h3>
        <div className="flex space-x-2">
          {["#000", "#fff", "#f00", "#0f0", "#00f", "#ff0", "#f0f",].map(
            (color) => (
              <span
                key={color}
                className="w-6 h-6 rounded-full border"
                style={{ backgroundColor: color }}
              ></span>
            )
          )}

        </div>
        <div className="flex space-x-2 my-3">
          {["#000", "#fff", "#f00", "#0f0", "#00f", "#ff0", "#f0f",].map(
            (color) => (
              <span
                key={color}
                className="w-6 h-6 rounded-full border"
                style={{ backgroundColor: color }}
              ></span>
            )
          )}

        </div>
      </div>
      {/* Sizes */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Size</h3>
       


        <div className="flex flex-col">
          <div className="flex items-start justify-start m-3 mx-2">
            <div
              className={`rounded-full w-28 h-10 flex items-center justify-center cursor-pointer bg-searchBgColor   text-black'}`}
            >
              <p>XX-Small</p>
            </div>
            <div
              className={`rounded-full w-28 h-10 flex items-center justify-center cursor-pointer bg-searchBgColor   text-black'}`}
            >
              <p>X-Small</p>
            </div>
          </div>
          <div className="flex items-start justify-start m-3 mx-2">
            <div
              className={`rounded-full w-28 h-10 flex items-center justify-center cursor-pointer bg-searchBgColor   text-black'}`}
            >
              <p>Small</p>
            </div>
            <div
              className={`rounded-full w-28 h-10 flex items-center justify-center cursor-pointer bg-searchBgColor   text-black'}`}
            >
              <p>Medium</p>
            </div>
          </div>
          <div className="flex items-start justify-start m-3 mx-2">
            <div
              className={`rounded-full w-28 h-10 flex items-center justify-center cursor-pointer bg-black   text-white'}`}
            >
              <p>Large</p>
            </div>
            <div
              className={`rounded-full w-28 h-10 flex items-center justify-center cursor-pointer bg-searchBgColor   text-black'}`}
            >
              <p>X-Large</p>
            </div>
          </div>
          <div className="flex items-start justify-start m-3 mx-2">
            <div
              className={`rounded-full w-28 h-10 flex items-center justify-center cursor-pointer bg-searchBgColor   text-black'}`}
            >
              <p>XX-Large</p>
            </div>
            <div
              className={`rounded-full w-28 h-10 flex items-center justify-center cursor-pointer bg-searchBgColor   text-black'}`}
            >
              <p>3X-Large</p>
            </div>
          </div>
          <div className="flex items-start justify-start m-3 mx-2">
            <div
              className={`rounded-full w-28 h-10 flex items-center justify-center cursor-pointer bg-searchBgColor   text-black'}`}
            >
              <p>4X-Large</p>
            </div>

          </div>
        </div>
      </div>

       {/* Category */}
      <div>
      <h3 className="font-semibold text-lg mb-2">Dress Style</h3>
      <div className="mb-6 pb-3 border-b-2 border-gray-100 w-full">
        <ul className="space-y-2">
          {["Causual", "Formal", "Party", "Gym"].map((category) => (
            <li key={category} className="items-start">
              <div className="flex items-start justify-between">
                <p>
                  {category}

                </p>
                <Image
                  src="/arrow-right.png"
                  height={10}
                  width={10}
                  alt="shimmer"
                  className="shimmer-image w-2 h-2 ml-40"
                />
              </div>

            </li>
          ))}
        </ul>
      </div>
      </div> 
      {/* Apply Filters */}
      <button className="w-full mt-4 bg-black text-white py-2 rounded-full">
        Apply Filter
      </button>
    </div>
  );
};

export default Filters;
