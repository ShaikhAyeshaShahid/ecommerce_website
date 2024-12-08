"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [shopDropdown, setShopDropdown] = useState(false);
  const [menDropdown, setMenDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div>
      <header className="body-font bg-white text-black shadow-md">
        <div className="container mx-auto flex flex-wrap p-4 md:p-5 flex-col md:flex-row items-center">
          {/* Logo */}
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-3xl font-intergralcf font-bold">SHOP.CO</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="inline-flex items-center md:hidden ml-auto"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <Image
              src="/menu-icon.png"
              alt="Menu"
              width={30}
              height={30}
              className="text-black"
            />
          </button>

          {/* Navigation Links */}
          <nav
            className={`${
              mobileMenu ? "block" : "hidden"
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
                  onMouseEnter={() => setShopDropdown(true)}
                  onMouseLeave={() => setShopDropdown(false)}
                >
                  {/* Men Dropdown */}
                  <div
                    className="block px-4 py-2 hover:bg-gray-200 cursor-pointer relative"
                    onMouseEnter={() => setMenDropdown(true)}
                    onMouseLeave={() => setMenDropdown(false)}
                  >
                    Men
                    {menDropdown && (
                      <div
                        className="absolute left-full top-0 ml-2 bg-white shadow-lg rounded-md text-gray-800 z-20"
                        onMouseEnter={() => setMenDropdown(true)}
                        onMouseLeave={() => setMenDropdown(false)}
                      >
                        <Link
                          href="/productDescription"
                          className="block px-4 py-2 hover:bg-gray-200"
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
          <div className="hidden lg:flex bg-gray-100 rounded-3xl text-gray-400 items-center p-2 border w-full lg:w-96 max-w-md">
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
          <div className="flex items-center mt-4 md:mt-0">
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
      </header>
      <hr />
    </div>
  );
};

export default Navbar;
