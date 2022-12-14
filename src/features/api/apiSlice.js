import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
        prepareHeaders: (header, { getState, endpoint }) => {
            const token = getState()?.auth?.token;
            if (token) {
                header.set("Authorization", token);
            }
            return header;
        },
    }),
    tagTypes: ['Category', 'address', 'orders', 'UserOrder'],
    endpoints: (builder) => ({})
})