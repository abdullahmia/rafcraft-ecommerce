import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categores: []
}

export const productFilter = createSlice({
    name: "productFilter",
    initialState,
    reducers: {
        added: (state, action) => {
            state.categores.push(action.payload);
        },
        remove: (state, action) => {
            state.categores = state.categores.filter(cat => cat._id !== action.payload._id)
        },
        clearFilter: (state) => {
            state.categores = []
        }
    }
})

export default productFilter.reducer;
export const { added, remove, clearFilter } = productFilter.actions;