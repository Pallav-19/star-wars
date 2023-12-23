import React from 'react'
import GridWrapper from '../components/miscellaneous/GridWrapper'
import SingleCard from '../components/miscellaneous/SingleCard'
import { useFetchVehiclesQuery } from '../app/api/vehicles/vehiclesApiSlice'
import Spinner from '../components/miscellaneous/Spinner'
import { useSelector } from "react-redux"
import { currentViewMode } from '../app/features/viewModeSlice'
import Table from '../components/miscellaneous/Table'
import { vehiclesColumn } from '../constants/columns/vehiclesColumns'

const Vehicles = () => {
    const { data, isLoading } = useFetchVehiclesQuery()
    const viewMode = useSelector(currentViewMode)
    if (isLoading) return <Spinner />
    if (viewMode === "List") return <Table data={data?.results} columns={vehiclesColumn} />

    return (
        <GridWrapper>
            {
                data?.results?.map((result, index) => <SingleCard key={index} index={index} title={result?.name} />)
            }

        </GridWrapper>
    )
}

export default Vehicles