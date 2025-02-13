"use client";
import React, { useState } from "react";
import ProductCard from "../cards/ProductCard";
import productData from "../../data/productdata";

const BestSellingSection = () => {
  const [products, setProducts] = useState(productData);

  return (
    <section className="w-full flex flex-col md:flex-row bg-white p-4 gap-6">
      {/* Left Side Image */}
      <div className="w-full md:w-1/2 h-[50rem] relative">
        <img
          src="/images/Prodct5.png"
          alt="Best Selling Product"
          className="w-full h-full object-fill"
        />
      </div>

      {/* Right Side Product Grid */}
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            onAddToCart={() => console.log(`Added ${product.name} to cart`)}
          />
        ))}
      </div>
    </section>
  );
};

export default BestSellingSection;
