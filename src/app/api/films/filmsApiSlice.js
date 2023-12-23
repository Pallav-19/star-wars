import { apiSlice } from "../apiSlice";

export const filmApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        fetchFilms: builder.query({
            query: () => "/films",
            providesTags: ['FILMS']
        }),
        fetchFilm: builder.query({
            query: (id) => "/films/" + id,
            providesTags: [{ type: 'FILMS', }]
        })
    })
})

export const { useFetchFilmQuery, useFetchFilmsQuery } = filmApiSlice
// {
//     "films": "https://swapi.dev/api/films/",
//         "people": "https://swapi.dev/api/people/",
//             "planets": "https://swapi.dev/api/planets/",
//                 "species": "https://swapi.dev/api/species/",
//                     "starships": "https://swapi.dev/api/starships/",
//                         "vehicles": "https://swapi.dev/api/vehicles/"
// }
