import React from 'react';
import Image from 'next/image';

const Footer = () => {
    const paymentImages = [
        "/visa_icon.png",
        "/master_icon.png",
        "/paypal_icon.png",
        "/apple_pay_icon.png",
        "/g-pay_icon.png",
    ];

    return (
        <div className="bg-white">
            <footer className="text-black body-font bg-searchBgColor">
                {/* Front Div */}
                <div>
                    <div className="bg-black rounded-lg flex flex-col md:flex-row justify-between items-center py-7 mx-4 md:mx-16 px-6">
                        <div className="text-xl md:text-3xl font-intergralcf font-bold text-white md:w-1/2 text-center md:text-left">
                            <p>STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
                        </div>

                        <div className="flex flex-col mt-4 md:mt-0 w-full md:w-auto">
                            <label
                                htmlFor="email"
                                className="text-gray-700 font-normal font-satoshi text-sm md:text-md h-12 md:h-10 bg-white rounded-2xl flex items-center px-4 w-full md:w-96"
                            >
                                <Image
                                    src="/email_icon.png"
                                    height={24}
                                    width={24}
                                    alt="email"
                                    className="mr-2"
                                />
                                Enter your email address
                            </label>

                            <button className="mt-3 flex items-center justify-center font-medium font-satoshi text-sm md:text-md h-12 md:h-10 bg-white rounded-2xl text-black w-full md:w-96">
                                Subscribe to Newsletter
                            </button>
                        </div>
                    </div>
                </div>

                {/* Behind Div */}
                <div className="bg-searchBgColor py-8">
                    <div className="container mx-auto px-4 md:px-5">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                            {/* SHOP.CO Section */}
                            <div className="text-center md:text-left">
                                <h2 className="text-3xl font-intergralcf font-bold">SHOP.CO</h2>
                                <p className="mt-4 text-sm font-satoshi">
                                    We have clothes that suit your style and which you’re proud to wear. From women to men.
                                </p>
                                <div className="flex justify-center md:justify-start space-x-4 mt-4">
                                    <a className="text-black">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-black">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-black">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Links Sections */}
                            {["Company", "Help", "FAQ", "Resources"].map((section, idx) => (
                                <div key={idx} className="text-center md:text-left">
                                    <h2 className="text-xl font-medium mb-4">{section}</h2>
                                    <nav className="space-y-2">
                                        {["About", "Features", "Work", "Career"].map((link, linkIdx) => (
                                            <a
                                                key={linkIdx}
                                                className="text-sm font-light block hover:text-gray-700 transition duration-300"
                                            >
                                                {link}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="border-t border-gray-300 mt-8 py-4">
                        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-5">
                            <p className="text-gray-500 text-sm font-satoshi font-normal text-center">
                                Shop.co © 2000-2023, All Rights Reserved
                            </p>
                            <div className="flex space-x-4 mt-4 md:mt-0">
                                {paymentImages.map((image, index) => (
                                    <Image
                                        key={index}
                                        src={image}
                                        height={32}
                                        width={48}
                                        alt={`Payment Icon ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
