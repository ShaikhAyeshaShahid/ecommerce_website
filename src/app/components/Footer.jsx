import React from 'react'
import Image from 'next/image'

const Footer = () => {
    const paymentImages = [
        "/visa_icon.png",
        "/master_icon.png",
        "/paypal_icon.png",
        "/apple_pay_icon.png",
        "/g-pay_icon.png",
    ];
    return (
        <div>
            <footer className="text-black body-font bg-searchBgColor ">
{/* Front Div */}
                <div className='bg-black rounded-lg flex justify-between py-7 mx-16 px-6'>
                    <div className='text-3xl font-intergralcf font-bold text-white w-1/2'>
                        <p >STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>

                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="email"
                            className="text-gray-700 font-normal font-satoshi text-md h-10 w-96 bg-white rounded-2xl flex items-center px-2"
                        >
                            <Image

                                src='/email_icon.png'
                                height={32} 
                                width={64} 
                                alt="email"
                                className="h-6 w-8 p-1 my-1"
                            />
                            Enter your email address
                        </label>

                        <button className="flex items-center justify-center font-medium font-satoshi text-md h-10 w-96 bg-white rounded-2xl my-2 text-black">
  Subscribe to Newsletter
</button>
                       
                    </div>

                </div>

{/* Behind div */}
                <div className="text-black body-font bg-searchBgColor">
                    <div className="container px-5 py-4 mx-auto ">
                        <div className="flex  md:text-left text-center -mb-10 -mx-4">
                            <div className="lg:w-1/2 mx-3 md:w-1/5 w-full px-4">
                                <h2 className="text-3xl font-intergralcf font-bold">SHOP.CO</h2>
                                <nav className="list-none mb-10 my-3">
                                    <li className='py-2'>
                                        <a className="text-sm font-satoshi font-normal">We have clothes that suits your style and which you’re proud to wear. From  women to men.</a>
                                    </li>
                                    <li>
                                        <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto text-black">
                                            <a className="text-black my-4">
                                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-3 text-black my-4">
                                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-3 text-black my-4">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-3 text-black my-4">
                                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                                </svg>
                                            </a>
                                        </span>                                </li>


                                </nav>
                            </div>

                            <div className="lg:w-1/2 mx-3 md:w-1/2 font-satoshi w-full px-4 text-black">
                                <h2 className="text-xl py-2 font-medium">Company</h2>
                                <nav className="list-none mb-10 font-normal">
                                    <li className='py-2'>
                                        <a className="text-sm font-light">About</a>
                                    </li>

                                    <li className='py-2'>
                                        <a className="text-sm font-light">Features</a>
                                    </li>
                                    <li className='py-2'>
                                        <a className="text-sm font-light">Works          </a>
                                    </li>
                                    <li className='py-2'>
                                        <a className="text-sm font-light">Career          </a>
                                    </li>
                                </nav>
                            </div>

                            <div className="lg:w-1/2 mx-3 md:w-1/2 font-satoshi w-full px-4 text-black">
                                <h2 className="text-xl py-2 font-medium">Help</h2>
                                <nav className="list-none mb-10 font-normal">
                                    <li className='py-2'>
                                        <a className="text-sm font-light">Customer Support</a>
                                    </li>

                                    <li className='py-2'>
                                        <a className="text-sm font-light">Delivery Details</a>
                                    </li>
                                    <li className='py-2'>
                                        <a className="text-sm font-light">Terms & Conditions          </a>
                                    </li>
                                    <li className='py-2'>
                                        <a className="text-sm font-light">Privacy Policy          </a>
                                    </li>
                                </nav>
                            </div>

                            <div className="lg:w-1/2 mx-3 md:w-1/2 font-satoshi w-full px-4 text-black">
                                <h2 className="text-xl py-2 font-medium">FAQ</h2>
                                <nav className="list-none mb-10 font-normal">
                                    <li className='py-2'>
                                        <a className="text-sm font-light">Account</a>
                                    </li>

                                    <li className='py-2'>
                                        <a className="text-sm font-light">Manage Deliveries</a>
                                    </li>
                                    <li className='py-2'>
                                        <a className="text-sm font-light">Orders          </a>
                                    </li>
                                    <li className='py-2'>
                                        <a className="text-sm font-light">Payments          </a>
                                    </li>
                                </nav>
                            </div>

                            <div className="lg:w-1/2 mx-3 md:w-1/2 font-satoshi w-full px-4 text-black">
                                <h2 className="text-xl py-2 font-medium">Resources</h2>
                                <nav className="list-none mb-10 font-normal">
                                    <li className='py-2'>
                                        <a className="text-sm font-light">Free eBooks</a>
                                    </li>

                                    <li className='py-2'>
                                        <a className="text-sm font-light">Development Tutorial</a>
                                    </li>
                                    <li className='py-2'>
                                        <a className="text-sm font-light">How to - Blog          </a>
                                    </li>
                                    <li className='py-2'>
                                        <a className="text-sm font-light">Youtube Playlist          </a>
                                    </li>
                                </nav>
                            </div>

                        </div>
                    </div>
                    <div className='h-px bg-gray-400 opacity-5py-4 my-4'></div>

                    <div className="container mx-auto px-5 flex flex-row items-center justify-between text-center">
                        <p className="text-gray-500 text-sm font-satoshi font-normal">
                            Shop.co © 2000-2023, All Rights Reserved

                        </p>

                        <div className="flex w-96">
                            {paymentImages.map((image, index) => (
                                <Image
                                    key={index}
                                    src={image}
                                    height={32} // Adjust height as needed
                                    width={64} // Adjust width as needed
                                    alt={`Payment Icon ${index + 1}`}
                                    className="h-10 w-auto"
                                />
                            ))}
                        </div>
                    </div>

                </div>


                
            </footer>

        </div>
    )
}

export default Footer
