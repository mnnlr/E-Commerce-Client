import React, { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../hooks/fetchhook";
const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [{apiData:cartData},,setParams] = useFetch('cart')

  const [wishlist, setWishlist] = useState([]);


    useEffect(() => {
      let isMount = true;
      if (isMount) {
        setCart(cartData?.Data?.products);
      }
      if(cart?.length > cartData?.Data?.products?.length || cart?.length < cartData?.Data?.products?.length){
        console.log('I am here')
        setParams({})
      }
      return () => {
        isMount = false;
      };
    }, [cartData?.Data?.products,setCart,cart?.length]);

  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
  };

  const removeFromWishlist = ({product}) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter(item => item.id !== product?.productId?._id)
    );
  };


  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        setCart,
        addToWishlist,
        setWishlist,
        removeFromWishlist
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
