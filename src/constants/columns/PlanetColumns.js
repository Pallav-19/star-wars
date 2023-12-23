// "name": "Tatooine",
//     "rotation_period": "23",
//         "orbital_period": "304",
//             "diameter": "10465",
//                 "climate": "arid",
//                     "gravity": "1 standard",
//                         "terrain": "desert",
//                             "surface_water": "1",
//                                 "population": "200000",
export const planetsColumn = [
    {
        id: 'name',
        title: 'Name',
        accessor: 'name',
        view: true

    },
    {
        id: 'rot',
        title: 'Rotation Period',
        accessor: 'rotation_period',
        view: true

    },
    {
        id: 'orbit',
        title: 'Orbital Period',
        accessor: 'orbital_period',
        view: true
    }

]