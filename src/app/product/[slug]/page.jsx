"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { products } from "../../data/productdata";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import { useCart } from "@/app/context/cartContext";

const ProductDetail = () => {
  const { slug } = useParams();
  const router = useRouter(); // ✅ Used for navigation
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (slug) {
      const foundProduct = products.find((p) => p.slug === slug);
      setProduct(foundProduct);
    }
  }, [slug]);

  if (!product) {
    return (
      <div className="container mx-auto p-4 text-center">
        <p className="text-red-500">Product not found!</p>
      </div>
    );
  }

  const handleBuyNow = () => {
    router.push(`/payment?product=${encodeURIComponent(JSON.stringify(product))}`);
  };

  return (
    <>
      <Navbar />
      <div className="container text-white mx-auto p-4">
        <nav className="text-sm text-yellow-50 mb-4">
          <a href="/" className="hover:underline">Home</a> &gt;
          <a href="/product" className="hover:underline">All Products</a> &gt;
          <span className="font-semibold">{product.name}</span>
        </nav>

        <div className="flex flex-col text-white md:flex-row gap-8">
          <div className="md:w-1/2">
            <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl text-gray-300 mb-6">₹,{product.price.toFixed(2)}</p>
            <div className="mb-6 text-black">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-300">Quantity</label>
              <input type="number" id="quantity" min="1" defaultValue="1" className="mt-1 block w-20 p-2 border rounded-md" />
            </div>
            <div className="flex gap-4 mb-6">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
              onClick={() => addToCart(product)}>Add to Cart</button>
              <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
              onClick={handleBuyNow}>Buy Now</button>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Product Details</h2>
              <p className="text-gray-300">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
