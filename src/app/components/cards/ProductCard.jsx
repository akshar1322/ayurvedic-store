const ProductCard = ({ image, name, price, onAddToCart }) => {
    return (
      <div className="border border-[#8B5D48] bg-white p-4 flex flex-col items-center">
        <img src={image} alt={name} className="w-full h-[200px] object-cover" />
        <h3 className="text-lg font-semibold mt-2 text-[#8B5D48]">{name}</h3>
        <p className="text-md font-medium text-gray-700">${price.toFixed(2)}</p>
        <button
          onClick={onAddToCart}
          className="mt-2 px-4 py-2 border border-[#8B5D48] text-[#8B5D48] hover:bg-[#8B5D48] hover:text-white transition"
        >
          Add to Cart
        </button>
      </div>
    );
  };

  export default ProductCard;
