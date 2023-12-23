// "name": "Human",
//     "classification": "mammal",
//         "designation": "sentient",
//             "average_height": "180",
//                 "skin_colors": "caucasian, black, asian, hispanic",
//                     "hair_colors": "blonde, brown, black, red",
//                         "eye_colors": "brown, blue, green, hazel, grey, amber",
//                             "average_lifespan": "120",
//                                 "homeworld": "https://swapi.dev/api/planets/9/",
//                                     "language": "Galactic Basic",
export const speciesColumn = [
    {
        id: 'name',
        title: 'Name',
        accessor: 'name',
        view: true

    },
    {
        id: 'classification',
        title: 'Classification',
        accessor: 'classification',
        view: true

    },
    {
        id: 'designation',
        title: 'Designation',
        accessor: 'designation',
        view: true
    }

]