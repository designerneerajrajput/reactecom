import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './Slice';
import whislistSlice from './Whislist';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        whislist: whislistSlice
    },

});

export default store;