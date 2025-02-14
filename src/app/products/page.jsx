"use client";
import { useState } from "react";
import Link from "next/link";
import { products } from "../data/productdata";
import FilterSidebar from "../components/layout/FilterSidebar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100]);

  const filteredProducts = products.filter((product) => {
    const inCategory =
      selectedCategory.length === 0 ||
      product.category.some((cat) => selectedCategory.includes(cat));
    const inPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];

    return inCategory && inPriceRange;
  });

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 flex gap-6">
        {/* Sidebar Filter */}
        <FilterSidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
          {filteredProducts.map((product) => (
            <Link key={product.slug} href={product.link} passHref>
              <div className="border p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition">
                <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-md" />
                <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
                <p className="text-gray-700">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
