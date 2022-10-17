import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
    category: {},
    isImage: false,
}

export const categorySlice = createSlice({
    name: 'selectCategory',
    initialState,
    reducers: {
        addOnEdit: (state, action) => {
            state.category = action.payload;
            state.isImage = true
        },
        addImage: (state, action) => {
            state.category.image = action.payload
        },
        clearImage: (state) => {
            state.isImage = false
        },
        clearOnEdit: (state) => {
            state.category = {};
            state.isImage = false;
        }
    }
})

export const { addOnEdit, clearOnEdit, clearImage, addImage } = categorySlice.actions;

export default categorySlice.reducer;