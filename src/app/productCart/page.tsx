import React from 'react'
import OrderSummary from '../components/OrderSummary';
import CartItem from '../components/CartItem';

const pages = () => {
    const cartItems = [
        {
          name: "Gradient Graphic T-shirt",
          price: 145,
          size: "Large",
          color: "White",
          quantity: 1,
          imageUrl: "/image4.png",
        },
        {
          name: "Checkered Shirt",
          price: 180,
          size: "Medium",
          color: "Red",
          quantity: 1,
          imageUrl: "/image8.png",
        },
        {
          name: "Skinny Fit Jeans",
          price: 240,
          size: "Large",
          color: "Blue",
          quantity: 1,
          imageUrl: "/image9.png",
        },
      ];
      const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
      const discount = Math.round(subtotal * 0.2); // 20% discount
      const deliveryFee = 15;
      const total = subtotal - discount + deliveryFee;
        
  return (
    <div className="p-4 md:p-8 text-black bg-white font-satoshi ">
      <h1 className="text-2xl font-bold mb-6 font-intergralcf mx-8">Your Cart</h1>
      <div className="flex flex-col lg:flex-row gap-8 mx-8">
        {/* Cart Items */}
        <div className="flex-1">
          {cartItems.map((item, index) => (
            <CartItem key={index} {...item} />
          ))}
        </div>
        {/* Order Summary */}
        <OrderSummary
          subtotal={subtotal}
          discount={discount}
          deliveryFee={deliveryFee}
          total={total}
        />
      </div>
    </div>
  )
}

export default pages
