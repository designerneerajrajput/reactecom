import { createSlice } from '@reduxjs/toolkit';
const initialState = [];
const whislistSlice = createSlice({
    name: 'whishlist',
    initialState,
    reducers: {


        removeCart: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        },
        clearCart: () => {
            return [];
        },


        addWishlist: (state, action) => {
            const newItem = action.payload;
            console.log('teeee', newItem);

            const existingItem = state.find(item => item.id === newItem.id);

            if (existingItem) {


                existingItem.quantity = newItem.quantity ? newItem.quantity : 1;
            } else {
                // Add the item with an initial quantity
                state.push({ ...newItem, quantity: newItem.quantity });
            }
        },


    },
});

export const { removeCart, clearCart, addWishlist } = whislistSlice.actions;
export default whislistSlice.reducer;
