import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { useCart } from "../Contexts/CartContext";
import { useUser } from "../Contexts/UserContext";
import { handleAddToWishlist } from "../utils/handleAddToWishlist";

import { AddToCart } from "../state/actions/CartActions";
// import { AddToWishlist } from "../state/actions/WishlistActions";
import { useDispatch } from "react-redux";
import { AddToWishlist } from "../state/actions/WishlistActions";

const Product = ({Datum}) => {

  const dispatch = useDispatch();

  const [hovered, setHovered] = useState(false);
  const [favorited, setFavorited] = useState(false);
  const [notification, setNotification] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const {  removeFromWishlist,setCart, cart, wishlist, setWishlist } = useCart();
  const { user } = useUser();

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

  const toggleFavorite = async (e, productid, setNotification, user) => {
    e.stopPropagation();
    if (!user) {
      setNotification('User not login')
      return;
    }
    if (!favorited) {
      dispatch(AddToWishlist({productId:productid.id,token:user?.token}))
    } else {
      try {
        removeFromWishlist({productid});
        setNotification("Item removed from wishlist!");
      } catch (error) {
        setNotification('user Not login')
      }
    }

    setFavorited(!favorited);
  };

  const handleAddToCart = (e, datum, setNotification) => {
    e.stopPropagation();
    if (!user) {
      setNotification('User not login')
      return;
    }

    dispatch(AddToCart({productId:datum._id,quantity:1,token:user?.token}))

  }

  return (
    <div
      className="border border-gray-300 rounded-lg overflow-hidden relative h-96 w-64"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {showPopup && (
        <div className="bg-green-500 text-white text-sm px-4 py-2 rounded-md absolute top-4 right-4 z-50">
          {notification}
        </div>
      )}
      <div className="h-3/5">
        <img
          src={Datum?.images[0]}
          alt={Datum.name}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-4 relative h-2/5 flex flex-col justify-between">
        <h3 className="text-lg font-bold relative">
          {Datum.name}
          {hovered && (
            <div className="absolute top-24 right-1 flex justify-between gap-3">
              <button
                className="bg-blue-500 text-white text-xs uppercase px-2 py-1 rounded-lg"
                onClick={(e) => handleAddToCart(e, Datum, setNotification, user,setCart)}
              >
                Add to Cart
              </button>
              <FontAwesomeIcon
                icon={favorited ? solidHeart : regularHeart}
                className={`w-6 h-6 ${favorited ? "text-red-500" : "text-gray-500"} cursor-pointer`}
                onClick={(e) => toggleFavorite(e, {id:Datum?._id}, setNotification, user)}
              />
            </div>
          )}
        </h3>
        <span className="text-lg font-bold">{Datum?.price}</span>
      </div>
    </div>
  );
};

export default Product;
