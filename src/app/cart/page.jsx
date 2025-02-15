"use client";
import { useCart } from "@/app/context/cartContext";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cart.map((item) => (
              <div key={item.slug} className="border p-4 rounded-lg shadow-md">
                <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-md" />
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-700">${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <button
                  onClick={() => removeFromCart(item.slug)}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
