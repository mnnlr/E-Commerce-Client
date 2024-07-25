import React, { useEffect } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useUser } from "../Contexts/UserContext";
import { Badge } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { GetCart } from "../state/actions/CartActions";
import { useDispatch,useSelector } from "react-redux";

const CartIcon = () => {
  const dispatch = useDispatch();
  const {cartCount} = useSelector((state) => state.cart);

  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if(user?.token){
      dispatch(GetCart(user?.token))
    }
  }, [user,cartCount])
  return (
    <Badge badgeContent={cartCount} color="primary">
      <AddShoppingCartIcon
        className="cursor-pointer"
        onClick={() => navigate("/cart")}
      />
    </Badge>
  );
};

export default CartIcon;
