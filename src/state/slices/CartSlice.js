import { createSlice } from "@reduxjs/toolkit";
import { GetCart,AddToCart,removeFromCart,UpdateCart } from "../actions/CartActions";

const initialState = {
    cart: [],
    cartCount: 0,
    isLoading: false,
    error: null,
};


const CartSlice = createSlice({
    name: "cart",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(GetCart.pending,(state)=>{
            state.isLoading = true;
        })
        builder.addCase(GetCart.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.cart = action.payload;
            state.cartCount = action.payload.length;
        })
        builder.addCase(GetCart.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        })

        // builder to add to cart

        builder.addCase(AddToCart.pending,(state)=>{
            state.isLoading = true;
        })
        builder.addCase(AddToCart.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.cartCount = state.cartCount+1;
        })
        builder.addCase(AddToCart.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        })

        // remove from cart
        builder.addCase(removeFromCart.pending,(state)=>{
            state.isLoading = true;
        })
        builder.addCase(removeFromCart.fulfilled,(state,action) => {
            state.isLoading = false;
            state.cart = state.cart.filter((item) => item?.productId?._id !== action.payload);
            state.cartCount = state.cart.length;
        })
        builder.addCase(removeFromCart.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        })  

        // update cart

        builder.addCase(UpdateCart.pending,(state)=>{
            state.isLoading = true;
        })
        builder.addCase(UpdateCart.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.cart = state.cart.map((item) => {
                if(item?.productId?._id === action.payload.id){
                    return {...item,quantity:action.payload.quantity}
                }
                return item;
            })
        })
        builder.addCase(UpdateCart.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        })
    }

});

export default CartSlice.reducer;