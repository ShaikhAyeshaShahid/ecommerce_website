"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";


const Navbar = () => {
  const { cart } = useCart();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const [shopDropdown, setShopDropdown] = useState(false);
  const [menDropdown, setMenDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
   <div className="bg-white">
     <div className=" flex sm:p-0 sm:mx-0 md:py-5 flex-col md:flex-row  bg-white md:mx-20">
          <div className="flex items-center justify-between ">
           <div className="flex justify-start">
             {/* Mobile Menu Button */}
             <button
              className="inline-flex items-center md:hidden ml-auto"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <Image
                src="/menu-icon.png"
                alt="Menu"
                width={20}
                height={20}
                className="text-black w-8 h-8 mx-2"
              />
            </button>
            {/* Logo */}
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span className="ml-3 text-3xl font-intergralcf font-bold">SHOP.CO</span>
            </a>
           </div>

          <div className=" md:hidden flex justify-end">
              {/* Icons */}
              <Image
              src="/search_icon.png"
              alt="search"
              width={20}
              height={20}
              className="w-8 h-8 mx-2"
              style={{ filter: "brightness(0) saturate(100%) invert(0)" }}
            />
              <Link href="/productCart" className="relative">
            <Image src="/cart-icon.png" alt="Cart" width={30} height={30} className="w-8 h-8 mx-2" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2 py-1">
                {cartCount}
              </span>
            )}
          </Link>
            <Image
              src="/user_profile_icon.png"
              alt="User Profile"
              width={20}
              height={20}
              className="w-8 h-8 mx-2"
            />
           
          </div>

          </div>




          {/* Navigation Links */}
          <nav
            className={`${mobileMenu ? "block" : "hidden"
              } md:flex flex-col md:flex-row md:ml-auto md:mr-auto items-center text-base text-black font-satoshi font-normal`}
          >
            {/* Shop Dropdown */}
            <div
              className="hover:text-red-600 cursor-pointer relative flex items-center text-black font-satoshi font-normal text-xl mx-2"
              onMouseEnter={() => setShopDropdown(true)}
              onMouseLeave={() => {
                setShopDropdown(false);
                setMenDropdown(false); // Close nested dropdown when parent is closed
              }}
            >
              <p>Shop</p>
              <Image
                src="/arrow_down_icon.png"
                height={5}
                width={10}
                alt="arrow down"
                className="cursor-pointer h-3 w-3 ml-1"
              />
              {shopDropdown && (
                <div
                  className="absolute left-0 mt-2 bg-white shadow-lg rounded-md text-gray-800 z-10"
                  onMouseEnter={() => setShopDropdown(true)} // Keep dropdown open on hover
                  onMouseLeave={() => setShopDropdown(false)} // Close dropdown when mouse leaves
                >
                  {/* Men Dropdown */}
                  <div
                    className="block px-4 py-2 hover:bg-gray-200 cursor-pointer relative"
                    onMouseEnter={() => setMenDropdown(true)} // Open nested dropdown
                    onMouseLeave={() => setMenDropdown(false)} // Close nested dropdown
                  >
                    Men
                    {menDropdown && (
                      <div
                        className="absolute left-full top-0 ml-2 bg-white shadow-lg rounded-md text-gray-800 z-20"
                        onMouseEnter={() => setMenDropdown(true)} // Keep nested dropdown open
                        onMouseLeave={() => setMenDropdown(false)} // Close nested dropdown
                      >
                      
                        <Link
                          href="/productDescription"
                          className="block px-4 py-2 hover:bg-gray-200"
                          onMouseDown={(e) => e.stopPropagation()} 
                        >
                          Shirts
                        </Link>
                        <Link
                          href="/men/pants"
                          className="block px-4 py-2 hover:bg-gray-200"
                        >
                          Pants
                        </Link>
                      </div>
                    )}
                  </div>
                  {/* Other Categories */}
                  <Link
                    href="/women"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Women
                  </Link>
                  <Link
                    href="/kids"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Kids
                  </Link>
                </div>
              )}

            </div>
            <a className="mx-5 hover:text-black hover:underline text-xl">On Sale</a>
            <a className="mx-5 hover:text-black hover:underline text-xl">New Arrivals</a>
            <a className="mx-5 hover:text-black hover:underline text-xl">Brands</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex bg-gray-100 rounded-3xl text-gray-400 items-center p-2 border w-full max-w-md">
            <Image
              src="/search_icon.png"
              alt="Search"
              width={24}
              height={24}
              className="mr-2"
            />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent focus:outline-none text-gray-500 w-full"
            />
          </div>

          {/* Icons */}
          <div className="hidden lg:flex items-center mt-4 md:mt-0">
            <Link href="/productCart">
              <Image
                src="/cart-icon.png"
                alt="Cart"
                width={30}
                height={30}
                className="mx-2"
              />
            </Link>
            <Image
              src="/user_profile_icon.png"
              alt="User Profile"
              width={30}
              height={30}
              className="mx-2"
            />
          </div>
        </div>
   </div>
  );
};

export default Navbar;
