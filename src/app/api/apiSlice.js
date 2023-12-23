import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'
const baseQuery = fetchBaseQuery({
    baseUrl: "https://swapi.dev/api",
})

export const apiSlice = createApi({
    baseQuery: baseQuery,
    endpoints: builder => ({}),
    tagTypes: ['FILMS', 'PEOPLE', 'VEHICLES', 'SPECIES', 'STARSHIPS', 'PLANETS']
})