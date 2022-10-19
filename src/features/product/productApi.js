import { apiSlice } from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `/product`
        }),

        // add a new product
        addProduct: builder.mutation({
            query: (body) => ({
                url: '/product',
                method: 'POST',
                body: body
            }),
            async ononQueryStarted(arg, { queryFulfilled, dispatch }) {
                // pasimistically cache update
                const result = await queryFulfilled;
                dispatch(apiSlice.util.updateQueryData('getAllProducts', undefined, (draft) => {
                    draft.push(result.product);
                }))
            }
        }),

        // get a single product by slug
        getSingleProduct: builder.query({
            query: (slug) => `/product/${slug}`
        }),

        // delete a product
        deleteProduct: builder.mutation({
            query: (slug) => ({
                url: `/product/${slug}`,
                method: 'DELETE',
            }),
            async onQueryStarted (arg, { queryFulfilled, dispatch }) {
                dispatch(apiSlice.util.updateQueryData('getAllProducts', undefined, (draft) => {
                    let filterd = draft.filter((product) => product.slug != arg);
                    return filterd;
                }))
            }
        }),

        // update product
        editProduct: builder.mutation({
            query: ({slug, body}) => ({
                url: `/product/${slug}`,
                method: 'PATCH',
                body
            }),

            async onQueryStarted (arg, {queryFulfilled, dispatch}) {
                const result = await queryFulfilled;
                const { product } = result.data;
                let { slug } = arg;
                dispatch(apiSlice.util.updateQueryData('getAllProducts', undefined, (draft) => {
                    console.log(product.image);
                    let cachedProduct = draft.find(p => p.slug == slug);
                    cachedProduct.availability = product.availability;
                    cachedProduct.brand = product.brand;
                    cachedProduct.category = product.category;
                    cachedProduct.image = product.image;
                    cachedProduct.description = product.description;
                    cachedProduct.name = product.name;
                    cachedProduct.price = product.price;
                    cachedProduct.shortDescription = product.shortDescription;
                    cachedProduct.sku = product.sku;
                    cachedProduct.slug = product.slug;
                    cachedProduct.status = product.status;
                }))
                dispatch(apiSlice.util.updateQueryData('getSingleProduct', slug, (draft) => {
                    console.log('Slug: ', slug);
                    draft.availability = product.availability;
                    draft.brand = product.brand;
                    draft.category = product.category;
                    draft.image = product.image;
                    draft.description = product.description;
                    draft.name = product.name;
                    draft.price = product.price;
                    draft.shortDescription = product.shortDescription;
                    draft.sku = product.sku;
                    draft.slug = product.slug;
                    draft.status = product.status;
                }))
            }
        })
    })
})

export const { useGetAllProductsQuery, useAddProductMutation, useGetSingleProductQuery, useDeleteProductMutation, useEditProductMutation } = productApi;