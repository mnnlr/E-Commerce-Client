import { createAsyncThunk } from "@reduxjs/toolkit";
import { defaultAxios } from "../../CustomAxios/defaultAxios";

export const GetCart = createAsyncThunk(
    "GetCart",
    async (token, { rejectWithValue }) => {
        try {
            const {data,status} = await defaultAxios.get("/cart", {
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

export const AddToCart = createAsyncThunk(
    "AddToCart",
    async (ProductToAdd, { rejectWithValue }) => {
        try {
            const {productId,quantity,token} = ProductToAdd;
            const {data,status} = await defaultAxios.post("/cart",
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

export const UpdateCart = createAsyncThunk(
    "UpdateCart",
    async (ProductToUpdate, { rejectWithValue }) => {
        try {
            console.log('this is product to update',ProductToUpdate)
            const {id,quantity,token} = ProductToUpdate;
            const {data,status} = await defaultAxios.put("/cart",
            {},
            { 
                params: { id, quantity:quantity }, 
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }, 
            });
            if(status === 200){
                return {id,quantity};
            }
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const removeFromCart = createAsyncThunk(
    "removeFromCart",
    async (ProductToRemove, { rejectWithValue }) => {
        try {
            const {productId,token} = ProductToRemove;
            const {data,status} = await defaultAxios.delete("/cart",
            {
                params: { productId },
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }, 
            });
            if(status === 200){
                console.log('this is data in remove card',data)
                return productId;
            }
        } catch (error) {
            console.log('message in the remove card',error.response.data)
            return rejectWithValue(error.response.data.message);
        }
    }
);