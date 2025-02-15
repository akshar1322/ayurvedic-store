"use client";
import { useState } from "react";
import styled from "styled-components";

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
    <StyledSidebar className="w-64 border rounded-md p-4 text-white shadow-lg">
      <h2 className="text-lg font-bold mb-4">Filter by</h2>

      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center space-x-2">
              <Checkbox checked={selectedCategory.includes(category)} onChange={() => handleCategoryChange(category)} />
              <span>{category}</span>
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
          className="w-full mt-2 text-lime-300"
        />
      </div>

      {/* Reset Filters Button */}
      <button
        onClick={resetFilters}
        className="w-full mt-4 bg-blue-300 text-white py-2 rounded-md hover:bg-red-700 transition"
      >
        Reset Filters
      </button>
    </StyledSidebar>
  );
};

export default FilterSidebar;

const StyledSidebar = styled.div`
  color: white;
  background: #1e1e1e;
  border-radius: 8px;
  padding: 16px;
`;

const Checkbox = ({ checked, onChange }) => {
  return (
    <StyledCheckbox>
      <label className="container">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <svg viewBox="0 0 64 64" height="1em" width="1.5em">
          <path
            d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
            pathLength="575.0541381835938"
            className="path"
          />
        </svg>
      </label>
    </StyledCheckbox>
  );
};

const StyledCheckbox = styled.div`
  .container {
    cursor: pointer;
  }

  .container input {
    display: none;
  }

  .container svg {
    overflow: visible;
  }

  .path {
    fill: none;
    stroke: white;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease;
    stroke-dasharray: 241 9999999;
    stroke-dashoffset: 0;
  }

  .container input:checked ~ svg .path {
    stroke-dasharray: 70.5096664428711 9999999;
    stroke-dashoffset: -262.2723388671875;
  }
`;
