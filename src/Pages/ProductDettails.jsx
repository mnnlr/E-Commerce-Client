import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useFetch from "../hooks/fetchhook";
import { useCart } from "../Contexts/CartContext";
import { useUser } from "../Contexts/UserContext";
import { defaultAxios } from "../CustomAxios/defaultAxios";

const ProductDetails = () => {
  const { id } = useParams();
  const [{ apiData }] = useFetch(`clothing/${id}`, { skip: !id });
  const [mainImage, setMainImage] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const [notification, setNotification] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showMoreImages, setShowMoreImages] = useState(false);

  useEffect(() => {
    if (apiData?.images) {
      setMainImage(apiData.images[0]);
    }
  }, [apiData]);

  useEffect(() => {
    if (notification) {
      setShowPopup(true);

      const timer = setTimeout(() => {
        setShowPopup(false);
        setNotification("");
      }, 3000); // Popup disappears after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleAddToCart = async () => {
    if (!user) {
      setNotification("Please log in to add items to your cart");
      return;
    }

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user?.token}`,
    };

    try {
      await defaultAxios.put(
        `/cart`,
        {},
        { params: { id }, headers }
      );
      addToCart({
        id: apiData._id,
        title: apiData.name,
        price: apiData.price,
        image: mainImage,
        sale: apiData.sale,
        rating: apiData.rating,
      });
      setNotification("Item added to cart!");
    } catch (error) {
      setNotification(error?.response?.data?.message);
    }
  };

  // Toggle show more images
  const handleShowMoreImages = () => {
    setShowMoreImages(!showMoreImages);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {showPopup && (
        <div className="bg-green-500 text-white text-sm px-4 py-2 rounded-md absolute top-4 left-1/2 transform -translate-x-1/2 z-50">
          {notification}
        </div>
      )}
      {apiData?._id ? (
        <div className="max-w-8xl mx-auto bg-white p-4 sm:p-8 rounded-lg shadow-lg">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 flex flex-col lg:flex-row mb-4 lg:mb-0">
              <div className="flex justify-center items-center lg:justify-start lg:flex-col lg:items-start">
                {/* Show only first 3 images initially */}
                {apiData?.images.slice(0, 7).map((src, index) => (
                  <div
                    key={index}
                    className="m-2 cursor-pointer"
                    onClick={() => setMainImage(src)}
                  >
                    <img
                      src={src}
                      alt={`Image ${index + 1}`}
                      className="w-20 h-20 sm:w-32 sm:h-32 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
                {/* Show more images button */}
                {apiData?.images.length > 3 && (
                  <button
                    className="text-blue-500 mt-2 focus:outline-none"
                    onClick={handleShowMoreImages}
                  >
                    {showMoreImages ? "" : "Show more"}
                  </button>
                )}
                {/* Dropdown to show all images */}
                {showMoreImages && (
                  <div className="mt-2">
                    {apiData?.images.slice(3).map((src, index) => (
                      <div
                        key={index + 3}
                        className="m-2 cursor-pointer"
                        onClick={() => setMainImage(src)}
                      >
                        <img
                          src={src}
                          alt={`Image ${index + 4}`}
                          className="w-20 h-20 sm:w-32 sm:h-32 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative ml-4 lg:ml-8">
                <img
                  src={mainImage}
                  alt="Selected Product"
                  className="flex h-auto rounded-lg object-cover mb-4 cursor-pointer transform transition-transform duration-300 hover:scale-110"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
                {isHovered && (
                  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <img
                      src={mainImage}
                      alt="Hovered Product"
                      className="sm:w-3/4 lg:w-1/2 object-cover rounded-lg"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="lg:w-1/2 mt-4 lg:mt-0 lg:ml-8">
              <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
                {apiData?.name}
              </h2>
              <p className="text-xl font-semibold text-gray-800 mb-4 text-center lg:text-left">
                Product Price
                <span className="text-gray-600"> {apiData?.price}</span>{" "}
              </p>
              <div className="mb-4 text-center lg:text-left">
                <h3 className="text-lg font-semibold mb-2">Available offers</h3>
                <ul className="list-disc list-inside">
                  <li>Offer</li>
                </ul>
              </div>
              <button
                className="bg-yellow-500 text-white py-2 px-4 rounded w-full mt-4"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              {/* <button className="bg-green-500 text-white py-2 px-4 rounded w-full mt-4 mb-14">
                Pre Order
              </button> */}
              <div className="mb-4 text-center lg:text-left">
                <div className="mb-4 flex flex-row gap-96">
                  <h3
                    className="text-lg font-semibold mb-2 cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    Product Details
                  </h3>
                  <span
                    className="cursor-pointer text-lg ml-auto"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {isOpen ? "-" : "+"}{" "}
                  </span>
                </div>
                {isOpen && (
                  <ul className="grid grid-cols-1 mb-12">
                    {Object.entries(apiData?.attributes).map(
                      ([key, value]) => (
                        <li key={key} className="flex justify-between">
                          <span>{value}</span>
                          <span className="font-semibold">{key}</span>
                        </li>
                      )
                    )}
                  </ul>
                )}
                <h2 className="text-lg font-semibold mb-2">Description</h2>
                <ul className="list-none list-inside">
                  <li>{apiData?.description}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ProductDetails;
