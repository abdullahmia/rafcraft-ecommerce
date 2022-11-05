import { apiSlice } from "../api/apiSlice";

export const orderApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addOrder: builder.mutation({
            query: (body) => ({
                url: '/order',
                method: 'POST',
                body
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    const {order} = result.data;
                    dispatch(apiSlice.util.updateQueryData('getUserOrders', arg._id, (draft) => {
                        draft.orders.push(order);
                    }))
                } catch (err) {
                    // do nothing
                }
            }
        }),
        getUserOrders: builder.query({
            query: (id) => `/order/${id}`,
        }),
        getSingleOrder: builder.query({
            query: (id) => `/order/order/${id}`
        }),
        getAllOrders: builder.query({
            query: () => `/order`
        })
    })
})


export const { useAddOrderMutation, useGetUserOrdersQuery, useGetSingleOrderQuery, useGetAllOrdersQuery } = orderApi;