import { createSlice } from '@reduxjs/toolkit';

const initialValue = {
    items: [],
    totalPrice: 0,
    showModal: false,
    itemList: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialValue,
    reducers: {
        addItem: (state, action) => {

            const existingItemIndex = state.items.findIndex((item)=> item.id === action.payload.id);
            const existingItem = state.items[existingItemIndex];

            let updatedTotalPrice;
            let updatedItems;
            let updatedItem;

            if(existingItem){
                updatedItem = {
                    ...existingItem,
                    amount: existingItem.amount +1,
                }
                updatedTotalPrice = state.totalPrice + existingItem.price;
                updatedItems = [...state.items];
                updatedItems[existingItemIndex] = updatedItem;
            }else{
                updatedItems = [action.payload, ...state.items];
                updatedTotalPrice = state.totalPrice+(action.payload.price*action.payload.amount);
            }
            state.items = updatedItems;
            state.totalPrice = updatedTotalPrice;
        },

        removeItem: (state, action) => {
            const existingItemIndex = state.items.findIndex((item)=> item.id === action.payload);
            const existingItem = state.items[existingItemIndex];

            let updatedTotalPrice = state.totalPrice - existingItem.price;
            let updatedItems;
            console.log(existingItem.amount);
            if(existingItem.amount === 1){
                updatedItems = state.items.filter((item)=> item.id !== action.payload);
                console.log(updatedItems);
            }else{
               const updatedItem = {
                    ...existingItem,
                    amount: existingItem.amount -1,
                }
                updatedItems = [...state.items];
                updatedItems[existingItemIndex] = updatedItem;
            }
            state.items = updatedItems;
            state.totalPrice = updatedTotalPrice;
        },

        showCart: (state) => {
            state.showModal = true;
        },

        hideCart: (state) => {
            state.showModal = false;
        },
        addToList: (state, action) => {
            state.itemList.push(action.payload)
        }
    }
})

export const CartAction = cartSlice.actions;
export default cartSlice.reducer;
