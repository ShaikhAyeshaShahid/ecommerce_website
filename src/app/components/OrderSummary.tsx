import React from "react";

type OrderSummaryProps = {
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
};

const OrderSummary: React.FC<OrderSummaryProps> = ({
  subtotal,
  discount,
  deliveryFee,
  total,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-md w-full lg:w-1/3 text-black font-satoshi">
      <h2 className="font-bold text-lg mb-4">Order Summary</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-bold">${subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount (-20%)</span>
          <span className="text-red-500 font-bold">-${discount}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Delivery Fee</span>
          <span>${deliveryFee}</span>
        </div>
        <div className="border-t pt-2 flex justify-between font-bold">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add promo code"
            className="flex-1 border rounded-full px-4 py-2 bg-searchBgColor"
          />
          <button className=" text-white bg-black px-4 py-2 rounded-full items-center justify-center">
            Apply
          </button>
        </div>
        <div className="rounded-full text-white bg-black w-80 h-10 flex items-center justify-center text-lg cursor-pointer">
                  <p> Go to Checkout</p>
                </div>
       
      </div>
    </div>
  );
};

export default OrderSummary;
