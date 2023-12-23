import { apiSlice } from "../apiSlice";

export const vehicleApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        fetchVehicles: builder.query({
            query: () => "/vehicles",
            providesTags: ['VEHICLE']
        }),
        fetchVehicle: builder.query({
            query: (id) => "/vehicles/" + id,
            providesTags: [{ type: 'VEHICLE', }]
        })
    })
})

export const { useFetchVehicleQuery, useFetchVehiclesQuery } = vehicleApiSlice

