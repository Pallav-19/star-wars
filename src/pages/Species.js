import React from 'react'
import GridWrapper from '../components/miscellaneous/GridWrapper'
import SingleCard from '../components/miscellaneous/SingleCard'
import { useFetchSpeciesQuery } from '../app/api/species/speciesApiSlice'
import Spinner from '../components/miscellaneous/Spinner'
import { useSelector } from "react-redux"
import { currentViewMode } from '../app/features/viewModeSlice'
import Table from '../components/miscellaneous/Table'
import { speciesColumn } from '../constants/columns/SpeciesColumns'

const Species = () => {
    const { data, isLoading } = useFetchSpeciesQuery()
    const viewMode = useSelector(currentViewMode)
    if (isLoading) return <Spinner />
    if (viewMode === "List") return <Table data={data?.results} columns={speciesColumn} />

    return (
        <GridWrapper>
            {
                data?.results?.map((result, index) => <SingleCard resource={result} schema={speciesColumn} key={index} index={index} title={result?.name} />)
            }

        </GridWrapper>
    )
}

export default Species