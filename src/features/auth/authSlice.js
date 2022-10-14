import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
    token: undefined,
    user: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token
        },
        userLoggedOut: (state, action) => {
            state.user = null;
            state.token = undefined
        }
    }

})

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;