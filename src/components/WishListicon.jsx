import React, { useEffect } from 'react';
import { Badge } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { FcLike } from "react-icons/fc";

import { useUser } from '../Contexts/UserContext';
import { useDispatch,useSelector } from 'react-redux';
import { GetWishlist } from '../state/actions/WishlistActions';

const WishListicon = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useUser();

    const {wishlistCount,wishlist} = useSelector((state) => state.wishlist);

    useEffect(() => {
      if(user?.token){
        dispatch(GetWishlist(user?.token))
      }
    }, [user,wishlistCount])

 return (
    <Badge badgeContent={wishlistCount} color="primary">
      <FcLike
        className="w-6 h-6 cursor-pointer"
        onClick={() => navigate("/wishlist")}
      />
    </Badge>
  )
}

export default WishListicon;