"use client";
import OrderSummary from "@/app/components/OrderSummary";
import CartItem from "@/app/components/CartItem";
import { useCart } from "@/app/context/CartContext";
import React, { createContext, useContext, useState } from "react";


const ProductCartPage = () => {
  const { cart, removeFromCart, updateCartItemQuantity } = useCart();
  const [showPopup, setShowPopup] = useState(false);


  // Calculate subtotal considering item quantity
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = Math.round(subtotal * 0.2); // 20% discount
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  const handleAddToCart = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Hide after 3 seconds
  };

  return (
    <div className="p-4 md:p-8 text-black bg-white font-satoshi">
      <h1 className="text-2xl font-bold mb-6 font-intergralcf mx-8">Your Cart</h1>
      <div className="flex flex-col lg:flex-row gap-8 mx-8">
        {/* Cart Items */}
        <div className="flex-1">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <CartItem
                key={item.id}
                {...item}
              />
            ))
          )}
        </div>
        {/* Order Summary */}
        <OrderSummary
          subtotal={subtotal}
          discount={discount}
          deliveryFee={deliveryFee}
          total={total}  // ✅ Fixed missing total
          cartItems={cart}
        />
          {/* ✅ Popup Notification */}
      {showPopup && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg transition-opacity duration-500">
          Item added to cart!
        </div>
      )}
      </div>
    </div>
  );
};

export default ProductCartPage;
