"use client"
import { useState } from 'react';
import Image from 'next/image';

const Salebanner = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="text-white body-font bg-black px-20">
      <div className="container mx-auto py-4  flex items-center justify-between">
  <span className="flex pl-96">
    <span className=" font-satoshi text-lg font-normal">
      Sign up and get 20% off to your first order.
    </span>
    <span className="font-satoshi text-lg font-medium underline cursor-pointer pl-2">
      Sign Up Now
    </span>
  </span>

  <Image
    src="/cross_icon.png"
    height={16}
    width={16}
    alt="close icon"
    className="cursor-pointer"
  />
</div>

      </header>
    </div>
  )
}

export default Salebanner
