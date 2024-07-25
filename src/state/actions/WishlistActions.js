import { createAsyncThunk } from "@reduxjs/toolkit";
import { defaultAxios } from "../../CustomAxios/defaultAxios";

export const GetWishlist = createAsyncThunk(
    "GetWishlist",
    async (token, { rejectWithValue }) => {
        try {
            const {data,status} = await defaultAxios.get("/wishlist", {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });
            if(status === 200){
                return data.Data.products;
            }
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const AddToWishlist = createAsyncThunk(
    "AddToWishlist",
    async (ProductToAdd, { rejectWithValue }) => {
        try {
            const {productId,quantity,token} = ProductToAdd;
            const {data,status} = await defaultAxios.put("/wishlist",
            {},
            { 
                params: { id: productId, quantity:quantity }, 
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }, 
            });
            if(status === 200){
                return data.Data;
            }
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);



export const RemoveFromWishlist = createAsyncThunk(
    "RemoveFromWishlist",
    async (ProductToRemove, { rejectWithValue }) => {
        try {
            const {productId,token} = ProductToRemove;
            const {data,status} = await defaultAxios.delete("/wishlist",
            {
                params: { productId },
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }, 
            });
            if(status === 200){
                return productId;
            }
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);