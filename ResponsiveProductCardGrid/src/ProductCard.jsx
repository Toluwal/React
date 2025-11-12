import React from "react";

function ProductCard({ image, title, price }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-green-600 font-medium mb-3">{price}</p>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md font-medium">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard;