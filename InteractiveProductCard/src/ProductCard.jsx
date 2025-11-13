import React from "react";

function ProductCard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white rounded-2xl shadow-md p-6 w-72 text-center transition-transform transform hover:scale-105">
        <img
          src="https://i.pinimg.com/1200x/ba/f2/84/baf2840cd7d20af183b64c92b61b5fad.jpg"
          alt="Product"
          className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-110"
        />
        <h3 className="text-lg font-semibold text-gray-800 hover:text-green-700 transition-colors duration-300">
          Naija Pepper Mix
        </h3>
        <p className="text-green-700 font-bold mt-2">₦6,500</p>
        <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-lg w-full font-medium transition-all duration-300 hover:bg-green-800 active:scale-95">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
