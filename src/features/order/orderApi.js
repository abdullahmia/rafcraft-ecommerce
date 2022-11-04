import { apiSlice } from "../api/apiSlice";

export const orderApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addOrder: builder.mutation({
            query: (body) => ({
                url: '/order',
                method: 'POST',
                body
            })
        }),

        getUserOrders: builder.query({
            query: (id) => `/order/${id}`
        })
    })
})


export const { useAddOrderMutation, useGetUserOrdersQuery } = orderApi;