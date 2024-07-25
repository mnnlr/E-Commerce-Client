import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
    const navigate = useNavigate();
  const products = [
    { img: "", name: "sdfs", price: 34, trackingNumver: "RU05902078IN"},
    { img: "", name: "sdfs", price: 34, trackingNumver: "449044304137821"},
    { img: "", name: "sdfs", price: 34, trackingNumver: "713062653486"},
    { img: "", name: "sdfs", price: 34, trackingNumver: "34523566"},
    { img: "", name: "sdfs", price: 34, trackingNumver: "020207021381215"},

  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={product.img}
              alt={product.name}
              className="h-48 w-full object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
              <p className="text-xl font-semibold text-gray-800 mb-4">
                ${product.price}
              </p>
            </div>
            <div className="flex justify-center mt-8">
              <button className="bg-green-500 text-white py-2 px-4 rounded" onClick={()=> navigate(`/track/${product.trackingNumver}`)}>
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
