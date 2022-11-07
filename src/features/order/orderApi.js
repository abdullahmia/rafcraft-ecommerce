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
        }),

        // update orders
        updateOrder: builder.mutation({
            query: ({body, id}) => ({
                url: `/order/order/${id}`,
                method: 'PATCH',
                body: body
            }),
            async onQueryStarted(arg, {dispatch, queryFulfilled}) {
                const { body, orderId, id } = arg;
                const { orderNote, orderStatus } = body;
                const patchResult = dispatch(apiSlice.util.updateQueryData('getSingleOrder', orderId, (draft) => {
                    draft.orderStatus = orderStatus;
                    draft.orderNote = orderNote;
                }));
                try {
                    await queryFulfilled;
                    dispatch(apiSlice.util.updateQueryData('getAllOrders', undefined, (draft) => {
                        let draftedOrder = draft.find((order) => order._id === id);
                        draftedOrder.orderStatus = orderStatus;   
                        draftedOrder.orderNote = orderNote;   
                    }))
                } catch {
                    patchResult.undo();
                }
            }
        })
    })
})


export const { useAddOrderMutation, useGetUserOrdersQuery, useGetSingleOrderQuery, useGetAllOrdersQuery, useUpdateOrderMutation } = orderApi;