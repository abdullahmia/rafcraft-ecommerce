import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => '/category',
            // providesTags: ['Category'],
        }),

        // add new category
        addCategory: builder.mutation({
            query: (body) => ({
                url: '/category',
                method: 'POST',
                body
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}) {
                try {

                    // category cash update pasimistically
                    const result = await queryFulfilled;
                    dispatch(apiSlice.util.updateQueryData("getAllCategories", undefined, (draft) => {
                        draft.push(result.data.category)
                    }))
                    
                } catch (err) {
                    // do nothing
                }
            }
        }),

        // delete a category
        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `/category/${id}`,
                method: "DELETE"
            }),
            // invalidatesTags: ["Category"]
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                dispatch(apiSlice.util.updateQueryData("getAllCategories", undefined, (draft) => {
                    let filterdData = draft.filter(el => el._id != arg);
                    return filterdData;
                }))
            }
        }),

        // update a Category
        updateCategory: builder.mutation({
            query: ({id, body}) => ({
                url:`/category/${id}`,
                method: 'PATCH',
                body: body
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                // optimistic cache update
                const result = await queryFulfilled;
                const { category} = result.data;
                dispatch(apiSlice.util.updateQueryData('getAllCategories', undefined, (draft) => {
                    const {id} = arg;
                    let draftCategory = draft.find((el) => el._id == id);
                    draftCategory.name =  category.name;
                    draftCategory.image = category.image;
                }))
            }
        })
    })
})

export const { useGetAllCategoriesQuery, useAddCategoryMutation, useDeleteCategoryMutation, useUpdateCategoryMutation } = categoryApi;