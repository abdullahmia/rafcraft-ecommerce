import { apiSlice } from '../api/apiSlice';

export const addressApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAddress: builder.query({
            query: (id) => `/address/${id}`
        }),
        addAddress: builder.mutation({
            query: (body) => ({
                url: `/address`,
                method: 'POST',
                body,
            })
        }),
        updateAddress: builder.mutation({
            query: ({body, id}) => ({
                url: `/address/${id}`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: ['address']
        })
    })
})


export const { useGetAddressQuery, useAddAddressMutation, useUpdateAddressMutation } = addressApi;