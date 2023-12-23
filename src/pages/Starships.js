import React from 'react'
import { useFetchStarshipsQuery } from '../app/api/starships/starshipsApiSlice'
import GridWrapper from '../components/miscellaneous/GridWrapper'
import SingleCard from '../components/miscellaneous/SingleCard'
import Spinner from '../components/miscellaneous/Spinner'
import { useSelector } from "react-redux"
import { currentViewMode } from '../app/features/viewModeSlice'
import Table from '../components/miscellaneous/Table'
import { starshipsColumn } from '../constants/columns/StarshipsColumn'

const Starships = () => {
    const { data, isLoading } = useFetchStarshipsQuery()
    const viewMode = useSelector(currentViewMode)

    if (isLoading) return <Spinner />   
     if (viewMode === "List") return <Table data={data?.results} columns={starshipsColumn} />


    return (
        <GridWrapper>
            {
                data?.results?.map((result, index) => <SingleCard key={index} index={index} title={result?.name} />)
            }

        </GridWrapper>
    )
}

export default Starships