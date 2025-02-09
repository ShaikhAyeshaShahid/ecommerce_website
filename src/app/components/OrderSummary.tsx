import React, { useState } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
  imageUrl: string;
}

// Define prop types for OrderSummary
interface OrderSummaryProps {
  cartItems: CartItem[];
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  cartItems,
  discount,
  deliveryFee,
  
}) => {
  const [promoCode, setPromoCode] = useState("");
  const [promoDiscount, setPromoDiscount] = useState(0);

  // Calculate subtotal considering quantity
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Sample promo code logic
  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "save10") {
      setPromoDiscount(Math.round(subtotal * 0.1)); // 10% off
    } else {
      setPromoDiscount(0);
      alert("Invalid promo code");
    }
  };

  const tax = Math.round(subtotal * 0.05); // 5% tax
  const finalTotal = subtotal - discount - promoDiscount + tax + deliveryFee;

  return (
    <div className="p-4 border rounded-lg shadow-md w-full lg:w-1/3 text-black font-satoshi bg-gray-50">
      <h2 className="font-bold text-lg mb-4">Order Summary</h2>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-bold">${subtotal}</span>
        </div>
        <div className="flex justify-between text-red-500">
          <span>Discount (-20%)</span>
          <span className="font-bold">-${discount}</span>
        </div>
        {promoDiscount > 0 && (
          <div className="flex justify-between text-blue-500">
            <span>Promo Discount</span>
            <span className="font-bold">-${promoDiscount}</span>
          </div>
        )}
        <div className="flex justify-between">
          <span>Tax (5%)</span>
          <span className="font-bold">${tax}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Delivery Fee</span>
          <span>${deliveryFee}</span>
        </div>
        <div className="border-t pt-2 flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${finalTotal}</span>
        </div>
      </div>

      {/* Promo Code Input */}
      <div className="mt-4 space-y-2">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter promo code"
            className="flex-1 border rounded-full px-4 py-2 bg-gray-200"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
          <button
            onClick={applyPromoCode}
            className="text-white bg-black px-4 py-2 rounded-full"
          >
            Apply
          </button>
        </div>
        <button className="w-full text-white bg-black px-4 py-2 rounded-full mt-4 text-lg">
          Go to Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
