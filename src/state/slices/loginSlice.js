import { createSlice } from "@reduxjs/toolkit";
import { login } from "../actions/LoginActions";

const initialState = {
    user: {},
    isLoading: false,
    error: null,
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { updateUser } = loginSlice.actions;
export default loginSlice.reducer;