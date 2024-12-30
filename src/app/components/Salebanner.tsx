"use client"
import { useState } from 'react';
import Image from 'next/image';

const Salebanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const closeBanner = () => {
    setIsVisible(false); // Hide banner when close icon is clicked
  };

  return (
    <>
      {isVisible && (
        <div>
          <header className="bg-black text-white body-font">
            <div
              className="container mx-auto grid grid-cols-1 sm:grid-cols-[1fr_auto] items-center justify-center py-4 px-4 sm:px-6 md:px-8"
            >
              {/* Text Section */}
              <div className="text-center sm:text-left flex  md:pl-96">
                <span className="font-satoshi text-sm sm:text-base font-normal block mr-2">
                  Sign up and get 20% off your first order.
                </span>
                <span className="font-satoshi text-sm sm:text-base font-medium underline cursor-pointer block sm:inline">
                  Sign Up Now
                </span>
              </div>

              {/* Close Icon */}
              <div className="hidden sm:block">
                <Image
                  src="/cross_icon.png"
                  height={16}
                  width={16}
                  alt="close icon"
                  className="cursor-pointer"
                  onClick={closeBanner}
                />
              </div>
            </div>

            {/* Mobile Close Icon */}
            <div className="block sm:hidden absolute top-4 right-4">
              <Image
                src="/cross_icon.png"
                height={16}
                width={16}
                alt="close icon"
                className="cursor-pointer"
                onClick={closeBanner}
              />
            </div>
          </header>
        </div>
      )}
    </>
  );
};

export default Salebanner;
