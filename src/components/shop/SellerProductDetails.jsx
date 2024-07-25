import React, { useState } from 'react';

const SellerProductDetails = ({ products, girls, mans, woman, boys }) => {
  const initializeStock = (items) =>
    items.map((item) => ({
      ...item,
      pendingStock: 0,
      addAmount: 0,
      buyAmount: 0,
      actualPrice: item.cost || 10, // Actual price
      sellingPrice: item.price, // Selling price (initially set to price)
      profit: 0, // Initial profit is zero
    }));

  const [productStock, setProductStock] = useState(initializeStock(products));
  const [girlsStock, setGirlsStock] = useState(initializeStock(girls));
  const [mansStock, setMansStock] = useState(initializeStock(mans));
  const [womanStock, setWomanStock] = useState(initializeStock(woman));
  const [boysStock, setBoysStock] = useState(initializeStock(boys));

  const handleInputChange = (index, setStock, items, field, value) => {
    setStock(
      items.map((product, i) =>
        i === index
          ? { ...product, [field]: (field === 'sellingPrice' || field === 'actualPrice') ? parseFloat(value) : parseInt(value) || 0 }
          : product
      )
    );
  };

  const handleAddStock = (index, setStock, items) => {
    setStock(
      items.map((product, i) =>
        i === index
          ? {
              ...product,
              stock: product.stock + (product.addAmount || 0),
              pendingStock: product.pendingStock + (product.addAmount || 0),
              addAmount: 0
            }
          : product
      )
    );
  };

  const handleBuyNow = (index, setStock, items) => {
    const updatedItems = items.map((product, i) => {
      if (i === index) {
        const remainingStock = product.stock - (product.buyAmount || 0);
        if (remainingStock < 0) {
          alert(`Stock for ${product.title} is empty!`);
          return product;
        }
        const profit = product.buyAmount * (product.sellingPrice - product.actualPrice);
        return {
          ...product,
          stock: remainingStock,
          pendingStock: product.pendingStock - (product.buyAmount || 0),
          profit: product.profit + profit,
          buyAmount: 0
        };
      } else {
        return product;
      }
    });

    setStock(updatedItems);
  };

  const renderProduct = (product, index, stockSetter, stockArray) => (
    <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-4 mr-4 w-72">
      <h2 className="text-xl font-bold mb-4">{product.title}</h2>
      <div className="flex items-center mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-24 h-24 object-cover rounded-lg mr-4"
        />
        <div>
          <p className="text-gray-700 mb-2">Selling Price: ₹{product.sellingPrice}</p>
          <p className="text-gray-700 mb-2">Actual Price: ₹{product.actualPrice}</p>
          <p className="text-gray-700 mb-2">Total Stock: {product.stock}</p>
          <p className="text-gray-700 mb-2">Pending Stock: {product.pendingStock}</p>
          <p className="text-gray-700 mb-2">Profit: ₹{product.profit}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4">Description: {product.description}</p>
      <div className="flex flex-col">
        <div className="flex items-center mb-2 space-x-28">
          <input
            type="number"
            className="border border-gray-300 rounded-lg p-2 w-16 mr-2"
            placeholder="Add"
            value={product.addAmount || ''}
            onChange={(e) => handleInputChange(index, stockSetter, stockArray, 'addAmount', e.target.value)}
          />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            onClick={() => handleAddStock(index, stockSetter, stockArray)}
          >
            Add
          </button>
        </div>
        <div className="flex items-center mb-2 space-x-28">
          <input
            type="number"
            className="border border-gray-300 rounded-lg p-2 w-16 mr-2"
            placeholder="Buy"
            value={product.buyAmount || ''}
            onChange={(e) => handleInputChange(index, stockSetter, stockArray, 'buyAmount', e.target.value)}
          />
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
            onClick={() => handleBuyNow(index, stockSetter, stockArray)}
          >
            Buy
          </button>
        </div>
        <div className="flex items-center mb-2 space-x-10">
          <p>Set the Selling Price</p>
          <input
            type="number"
            className="border border-gray-300 rounded-lg p-2 w-16 mr-2"
            placeholder="Set Price"
            value={product.sellingPrice || ''}
            onChange={(e) => handleInputChange(index, stockSetter, stockArray, 'sellingPrice', e.target.value)}
          />
        </div>
        <div className="flex items-center mb-2 space-x-10">
          <p>Set the Actual Price</p>
          <input
            type="number"
            className="border border-gray-300 rounded-lg p-2 w-16 mr-2"
            placeholder="Set Price"
            value={product.actualPrice || ''}
            onChange={(e) => handleInputChange(index, stockSetter, stockArray, 'actualPrice', e.target.value)}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-row flex-wrap justify-between">
      {productStock.map((product, index) =>
        renderProduct(product, index, setProductStock, productStock)
      )}
      {girlsStock.map((product, index) =>
        renderProduct(product, index, setGirlsStock, girlsStock)
      )}
      {mansStock.map((product, index) =>
        renderProduct(product, index, setMansStock, mansStock)
      )}
      {womanStock.map((product, index) =>
        renderProduct(product, index, setWomanStock, womanStock)
      )}
      {boysStock.map((product, index) =>
        renderProduct(product, index, setBoysStock, boysStock)
      )}
    </div>
  );
};

export default SellerProductDetails;
