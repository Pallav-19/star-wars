import React from 'react'
import { useFetchPeopleQuery } from '../app/api/people/peopleApiSlice'
import SingleCard from '../components/miscellaneous/SingleCard'
import GridWrapper from '../components/miscellaneous/GridWrapper'
import Spinner from '../components/miscellaneous/Spinner'
import { currentViewMode } from '../app/features/viewModeSlice'
import { useSelector } from "react-redux"
import Table from '../components/miscellaneous/Table'
import { peopleColumn } from '../constants/columns/PeopleColumns'
const People = () => {
    const { data, isLoading } = useFetchPeopleQuery()
    const viewMode = useSelector(currentViewMode)
    if (isLoading) return <Spinner />
    if (viewMode === "List") return <Table data={data?.results} columns={peopleColumn} />

    return (
        <GridWrapper>
            {
                data?.results?.map((result, index) => <SingleCard key={index} index={index} title={result?.name} />)
            }

        </GridWrapper>
    )
}

export default People