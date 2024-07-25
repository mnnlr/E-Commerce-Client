import React, { useState } from "react";
import { useCart } from '../../Contexts/CartContext';
import { useLocation } from "react-router-dom";
import { useUser } from "../../Contexts/UserContext";
import MakePayment from "./MakePayment";

const CheckoutForm = () => {
  const location = useLocation();
  const { totalAmount, totalItems } = location.state || { totalAmount: 0, totalItems: 0 };
  console.log('total ites and total amount', totalAmount, totalItems)
  const { cart } = useCart();
  const { user } = useUser();

  console.log('this is user', user);
  console.log('this is cart', cart);
  const { name, email, _id } = user;
  const [formData, setFormData] = useState({
    id: _id,
    name: name,
    country: "India",
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: email
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8 space-y-6">
        <div className="flex justify-between items-center">
          <div className="w-full">
            <h2 className="text-2xl font-semibold">Billing Details</h2>
            <form className="mt-4 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Country</label>
                <input type="text" name="country" value={formData.country} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Town/City</label>
                <input type="text" name="city" value={formData.city} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Country/State</label>
                  <input type="text" name="state" value={formData.state} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Postcode / ZIP</label>
                  <input type="text" name="zip" value={formData.zip} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
              </div>
            </form>
          </div>
          <MakePayment totalAmount={totalAmount} totalItems={totalItems} formData={formData}/>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
