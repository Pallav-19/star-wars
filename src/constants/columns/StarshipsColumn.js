// "name": "CR90 corvette",
//     "model": "CR90 corvette",
//         "manufacturer": "Corellian Engineering Corporation",
//             "cost_in_credits": "3500000",
//                 "length": "150",
//                     "max_atmosphering_speed": "950",
//                         "crew": "30-165",
//                             "passengers": "600",
//                                 "cargo_capacity": "3000000",
//                                     "consumables": "1 year",
//                                         "hyperdrive_rating": "2.0",
//                                             "MGLT": "60",
//                                                 "starship_class": "corvette",

export const starshipsColumn = [
    {
        id: 'name',
        title: 'Name',
        accessor: 'name',
        view: true

    },
    {
        id: 'model',
        title: 'Model',
        accessor: 'model',
        view: true

    },
    {
        id: 'manufacturer',
        title: 'Manufacturer',
        accessor: 'manufacturer',
        view: true
    }

]