import { apiSlice } from "../apiSlice";

export const starshipApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        fetchStarships: builder.query({
            query: () => "/starships",
            providesTags: ['STARSHIPS']
        }),
        fetchStarship: builder.query({
            query: (id) => "/starships/" + id,
            providesTags: [{ type: 'STARSHIPS', }]
        })
    })
})

export const { useFetchStarshipQuery, useFetchStarshipsQuery } = starshipApiSlice

