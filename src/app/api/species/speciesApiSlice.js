import { apiSlice } from "../apiSlice";

export const speciesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        fetchSpecies: builder.query({
            query: () => "/species",
            providesTags: ['SPECIES']
        }),
        fetchSingleSpecies: builder.query({
            query: (id) => "/species/" + id,
            providesTags: [{ type: 'SPECIES', }]
        })
    })
})

export const { useFetchSingleSpeciesQuery, useFetchSpeciesQuery } = speciesApiSlice

