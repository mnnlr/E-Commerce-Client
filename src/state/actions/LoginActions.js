import { createAsyncThunk } from "@reduxjs/toolkit";
import { defaultAxios } from "../../CustomAxios/defaultAxios";

export const login = createAsyncThunk(
    "login",
    async (DataToVerify, { rejectWithValue }) => {
        try {
            const {data,status} = await defaultAxios.post("/login", DataToVerify);
            if(status === 200){
                return data.Data;
            }
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);