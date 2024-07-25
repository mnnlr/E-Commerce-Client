import { createSlice } from "@reduxjs/toolkit";
import { GetWishlist,AddToWishlist,RemoveFromWishlist } from "../actions/WishlistActions";

const initialState = {
    wishlist: [],
    wishlistCount: 0,
    isLoading: false,
    error: null,
};


const WishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    extraReducers: (builder) => {
        // builder to get cart data
        builder.addCase(GetWishlist.pending,(state)=>{
            state.isLoading = true;
        })
        builder.addCase(GetWishlist.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.wishlist = action.payload;
            state.wishlistCount = action.payload.length;
        })
        builder.addCase(GetWishlist.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        })

        // builder to add to cart

        builder.addCase(AddToWishlist.pending,(state)=>{
            state.isLoading = true;
        })
        builder.addCase(AddToWishlist.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.wishlistCount = state.wishlistCount+1;
        })
        builder.addCase(AddToWishlist.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        })

        // remove from cart
        builder.addCase(RemoveFromWishlist.pending,(state)=>{
            state.isLoading = true;
        })
        builder.addCase(RemoveFromWishlist.fulfilled,(state,action) => {
            state.isLoading = false;
            state.wishlist = state.wishlist.filter((item) => item?.productId?._id !== action.payload);
            state.wishlistCount = state.wishlist.length;
        })
        builder.addCase(RemoveFromWishlist.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        })  

    }

});

export default WishlistSlice.reducer;