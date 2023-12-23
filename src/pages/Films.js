/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useFetchFilmsQuery } from '../app/api/films/filmsApiSlice'
import SingleCard from '../components/miscellaneous/SingleCard';
import GridWrapper from '../components/miscellaneous/GridWrapper';
import Spinner from '../components/miscellaneous/Spinner';
import Table from '../components/miscellaneous/Table';
import { useSelector, useDispatch } from "react-redux"
import { filmColumn } from "../constants/columns/FilmColumns"
import { currentViewMode, setViewMode } from '../app/features/viewModeSlice';
const Films = () => {
    const { data, isLoading } = useFetchFilmsQuery()
    const viewMode = useSelector(currentViewMode)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setViewMode("Grid"))
    }, [])
    if (isLoading) return <Spinner />
    if (viewMode === "List") return <Table data={data?.results} columns={filmColumn} />

    return (
        <GridWrapper>
            {
                data?.results?.map((result, index) => <SingleCard key={index} index={index} title={result?.title} />)
            }

        </GridWrapper>

    )
}

export default Films