"use client";
import Image from "next/image"
import Link from "next/link";
import { useState } from 'react';

const Navbar = () => {
  const [usedCarsDropdown, setUsedCarsDropdown] = useState(false);

  return (
    <div>
      <header className="body-font bg-white text-black">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

            <span className="ml-3 text-3xl font-intergralcf font-bold">SHOP.CO</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-black font-satoshi font-normal">
            <div
              className="hover:text-red-600 cursor-pointer relative flex h-8 w-16 items-center justify-between text-black font-satoshi font-normal text-xl mx-2"
              onMouseEnter={() => setUsedCarsDropdown(true)}
              onMouseLeave={() => setUsedCarsDropdown(false)}
            >
              <p>Shop </p>
              <Image
                src="/arrow_down_icon.png"
                height={5}
                width={10}
                alt="close icon"
                className="cursor-pointer h-3 w-3 "
              />
              {usedCarsDropdown && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md text-gray-800">
                  <a className="block px-4 py-2 hover:bg-gray-200">Latest Models</a>
                  <a className="block px-4 py-2 hover:bg-gray-200">Hybrid</a>
                  <a className="block px-4 py-2 hover:bg-gray-200">Electric</a>
                </div>
              )}
            </div>
            <a className="mx-5 hover:text-black hover:underline text-xl ">On Sale</a>
            <a className="mx-5 hover:text-black hover:underline text-xl ">New Arrivals</a>
            <a className="mx-5 hover:text-black hover:underline text-xl ">Brands</a>
          </nav>


          <div className="bg-searchBgColor rounded-3xl text-gray-400 flex justify-start p-2 border w-96 max-w-md">
            <Image
              src='/search_icon.png'
              alt="Search"
              width={24}
              height={24}
              className="mr-2"
            />

            <span className="text-gray-500">Search for products...</span>

          </div>
          <Image
            src='/cart-icon.png'
            alt="Fav"
            width={30}
            height={30}
            className="mr-2 text-black mx-2"
          />
          <Image
            src='/user_profile_icon.png'
            alt="User Profile"
            width={30}
            height={30}
            className="mr-2 text-black mx-4"
          />




        </div>
      </header>
      <hr />
    </div>
  )
}

export default Navbar
