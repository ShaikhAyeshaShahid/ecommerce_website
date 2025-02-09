"use client";

import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";

const CheckoutPage: React.FC = () => {
  const { cart, removeFromCart } = useCart();
  const router = useRouter();

  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [isProcessing, setIsProcessing] = useState(false);

  const validateForm = () => {
    let newErrors = { name: "", address: "", phone: "", email: "" };
    let isValid = true;

    if (!shippingDetails.name.trim()) {
      newErrors.name = "Full Name is required";
      isValid = false;
    }
    if (!shippingDetails.address.trim()) {
      newErrors.address = "Address is required";
      isValid = false;
    }
    if (!/^\d{10,}$/.test(shippingDetails.phone)) {
      newErrors.phone = "Enter a valid phone number";
      isValid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(shippingDetails.email)) {
      newErrors.email = "Enter a valid email address";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!validateForm()) return;

    setIsProcessing(true);
    setTimeout(() => {
      localStorage.setItem("order", JSON.stringify({
        orderId: Math.floor(Math.random() * 1000000),
        shippingDetails,
        paymentMethod,
        cart,
        total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0) + 15,
      }));
      cart.forEach(item => removeFromCart(item.id));
      router.push("/order-confirmation");
    }, 2000);
  };

  return (
    <div className="p-4 md:p-8 text-black bg-white font-satoshi max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>
      <div className="space-y-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
          <div className="grid gap-4">
            <input type="text" name="name" placeholder="Full Name" onChange={handleChange} className="border p-2 rounded" />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            <input type="text" name="address" placeholder="Address" onChange={handleChange} className="border p-2 rounded" />
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
            <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} className="border p-2 rounded" />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            <input type="email" name="email" placeholder="Email" onChange={handleChange} className="border p-2 rounded" />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
          <select onChange={(e) => setPaymentMethod(e.target.value)} className="w-full border p-2 rounded">
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cash-on-delivery">Cash on Delivery</option>
          </select>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <ul className="space-y-2">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>{item.name} x{item.quantity}</span>
                <span>${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-4 font-bold">
            <span>Total</span>
            <span>${cart.reduce((acc, item) => acc + item.price * item.quantity, 0) + 15}</span>
          </div>
        </div>

        <button onClick={handlePlaceOrder} className="bg-blue-500 text-white w-full p-3 rounded-lg font-semibold text-lg">
          {isProcessing ? "Processing..." : "Place Order"}
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;