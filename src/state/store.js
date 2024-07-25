import {configureStore,combineReducers} from '@reduxjs/toolkit';

import loginReducer from './slices/loginSlice';
import cartReducer from './slices/CartSlice';
import wishlistReducer from './slices/WishlistSlice';

const rootReducer = combineReducers({
    login: loginReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
})

export const store = configureStore({reducer:rootReducer})