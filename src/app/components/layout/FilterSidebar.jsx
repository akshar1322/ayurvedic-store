"use client";
import { useState } from "react";

const FilterSidebar = ({ selectedCategory, setSelectedCategory, priceRange, setPriceRange }) => {
  const categories = ["Aone-Prone Skin", "Aging Skin", "Hydration", "Best Sellers", "Sale"];

  const handleCategoryChange = (category) => {
    setSelectedCategory((prev) =>
      prev.includes(category) ? prev.filter((cat) => cat !== category) : [...prev, category]
    );
  };

  // Reset Filters Function
  const resetFilters = () => {
    setSelectedCategory([]); // Clear selected categories
    setPriceRange([0, 100]); // Reset price range
  };

  return (
    <div className="w-64 border rounded-md p-4 text-white shadow-lg">
      <h2 className="text-lg font-bold mb-4">Filter by</h2>

      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedCategory.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="form-checkbox"
              />
              <span className="ml-2">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Price</h3>
        <div className="flex justify-between">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
          className="w-full"
        />
      </div>

      {/* Reset Filters Button */}
      <button
        onClick={resetFilters}
        className="w-full mt-4 bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
