import { apiSlice } from "../apiSlice";

export const planetApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        fetchPlanets: builder.query({
            query: () => "/planets",
            providesTags: ['PLANETS']
        }),
        fetchPlanet: builder.query({
            query: (id) => "/planets/" + id,
            providesTags: [{ type: 'PLANETS', }]
        })
    })
})

export const { useFetchPlanetQuery, useFetchPlanetsQuery } = planetApiSlice
