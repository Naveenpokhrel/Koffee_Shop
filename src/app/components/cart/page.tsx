"use client";

import { useCart } from "@/app/context/CardContext";
import Image from "next/image";

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold text-center mb-6">
        Your <span className="text-teal-500">Cart</span>
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cart.map((item, i) => (
            <div
              key={i}
              className="p-4 border rounded-md flex flex-col items-center"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
                className="object-contain"
              />
              <h1 className="mt-2 text-lg font-medium">{item.name}</h1>
              <p className="text-red-500 text-xl font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
