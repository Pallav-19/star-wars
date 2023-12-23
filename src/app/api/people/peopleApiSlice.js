import { apiSlice } from "../apiSlice";

export const peopleApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        fetchPeople: builder.query({
            query: () => "/people",
            providesTags: ['PEOPLE']
        }),
        fetchSinglePeople: builder.query({
            query: (id) => "/people/" + id,
            providesTags: [{ type: 'PEOPLE', }]
        })
    })
})

export const { useFetchSinglePeopleQuery, useFetchPeopleQuery } = peopleApiSlice

