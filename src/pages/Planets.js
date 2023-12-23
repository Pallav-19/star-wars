import React from 'react'
import SingleCard from '../components/miscellaneous/SingleCard'
import { useFetchPlanetsQuery } from '../app/api/planets/planetsApiSlice'
import GridWrapper from '../components/miscellaneous/GridWrapper'
import Spinner from '../components/miscellaneous/Spinner'
import { useSelector } from "react-redux"
import Table from '../components/miscellaneous/Table'
import { planetsColumn } from '../constants/columns/PlanetColumns'
import { currentViewMode } from '../app/features/viewModeSlice'

const Planets = () => {
    const { data, isLoading } = useFetchPlanetsQuery()
    const viewMode = useSelector(currentViewMode)
    if (isLoading) return <Spinner />
    if (viewMode === "List") return <Table data={data?.results} columns={planetsColumn} />

    return (
        <GridWrapper>
            {
                data?.results?.map((result, index) => <SingleCard key={index} index={index} title={result?.name} />)
            }

        </GridWrapper>
    )
}

export default Planets