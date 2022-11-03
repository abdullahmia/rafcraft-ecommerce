import { createSlice } from '@reduxjs/toolkit';

// initialState
const initialState = {
    products: [],
    totalItems: 0,
    totalPrice: 0
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.products.find(item => item._id === action.payload._id);

            if (itemInCart) {
                itemInCart.cartQuantity++;
                state.totalItems++;
                state.totalPrice += action.payload.price;
            } else {
                state.products.push({...action.payload, cartQuantity: 1});
                state.totalItems++;
                state.totalPrice += action.payload.price;
            }
        },
        incrementQuantity: (state, action) => {
            let item = state.products.find((product) => product._id === action.payload._id);
            item.cartQuantity++;
            state.totalPrice += item.price;
            state.totalItems++;
        },
        decrementQuantity: (state, action) => {
            let item = state.products.find((product) => product._id === action.payload._id)
            if (item.cartQuantity === 1) {
                item.cartQuantity = 1;
            } else {
                item.cartQuantity--;
                state.totalPrice -= item.price;
                state.totalItems--;
            }
        },
        removeItem: (state, action) => {
            const removeItem = state.products.filter(product => product._id !== action.payload._id)
            const removedProduct = state.products.find(item => item._id === action.payload._id);

            let totalRemoveProductPrice = removedProduct.price * removedProduct.cartQuantity;
            state.products = removeItem;
            state.totalPrice = state.totalPrice - totalRemoveProductPrice;
            state.totalItems = state.totalItems - removedProduct.cartQuantity;
        }
    }
})

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;