import React from "react";
import { useUser } from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";

import { useSelector,useDispatch } from "react-redux";
import { RemoveFromWishlist } from "../state/actions/WishlistActions";

const Wishlist = () => {

  const dispatch = useDispatch();
  const { user } = useUser();
  const navigate = useNavigate();

  const { wishlist } = useSelector((state) => state.wishlist);


  const handleRemoveFromWishlist = async (e, productId) => {
    e.stopPropagation();
    dispatch(RemoveFromWishlist({productId,token:user?.token}))
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-center">My Wishlist</h2>
          {wishlist?.length === 0 ? (
            <div className="text-center mt-6">
              <p className="text-gray-600 mb-4 text-center">
                Total items in wishlist: {wishlist?.length}
              </p>
              <h3 className="text-2xl text-gray-700">
                Your Wishlist is Empty Now
              </h3>
              <button
                className="bg-blue-500 text-white w-48 h-12 rounded-lg mt-6 hover:bg-blue-600"
                onClick={() => navigate("/shop")}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {wishlist?.map((item, index) => (
                <div
                key={index}
                className="border border-gray-300 rounded-lg relative overflow-hidden shadow-lg flex items-center p-4"
              >
                <img
                  src={item.productId.images[0]}
                  alt={item.productId.name}
                  className="w-32 h-32 object-cover mr-4"
                />
                <div className="flex-grow">
                  <div className="flex items-start mt-2 flex-col">
                  <h3 className="text-lg font-bold mr-2">{item.productId.name}</h3>
                    <span className="text-green-600 font-bold mr-2">
                      ₹{item.productId.price}
                    </span>
                  </div>
                </div>
                <button
                  className="p-2 text-gray-500 hover:text-red-600"
                  onClick={(e) => handleRemoveFromWishlist(e, item.productId._id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
