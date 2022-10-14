import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        singup: builder.mutation({
            query: (body) => ({
                url: "/auth/signup",
                method: 'POST',
                body
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    // update localstorage
                    localStorage.setItem('auth', JSON.stringify({
                        token: result.data.token,
                        user: result.data.user,
                    }))

                    // update the store
                    dispatch(userLoggedIn({
                        token: result.data.token,
                        user: result.data.user,
                    }))
                } catch (err) {
                    // do nothing.
                }
            }
        }),

        // login
        login: builder.mutation({
            query: (body) => ({
                url: "/auth/signin",
                method: 'POST',
                body
            }),
            async onQueryStarted (arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    // update localstorage
                    localStorage.setItem('auth', JSON.stringify({
                        token: result?.data?.token,
                        user: result?.data?.user
                    }))

                    // update the store
                    dispatch(userLoggedIn({
                        token: result?.data?.token,
                        user: result?.data?.user
                    }))


                } catch (err) {
                    // do nothing
                }
            }
        }),
        
    })
})


export const { useLoginMutation, useSingupMutation } = authApi;