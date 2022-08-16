import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dummyApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com/posts",
    }),
    endpoints: (builder) => ({
        getAllPosts: builder.query({
          query: () => `/`,
        }),
        getAPost: builder.query({
            query: (id) => `/${id}`,
        }),
        addPost: builder.mutation({
            query: (body)=>({
                url: `/add`,
                method: "POST",
                body
            })
        }),
        updatePost: builder.mutation({
            query: (id,body)=>({
                url: `/${id}`,
                method: "PUT",
                body
            })
        }),
        deletePost: builder.mutation({
            query: (id)=>({
                url: `/${id}`,
                method: "DELETE",
            })  
        })
      }),
})

export const { useGetAllPostsQuery, useGetAPostQuery, useAddPostMutation, useUpdatePostMutation,useDeletePostMutation } = dummyApi