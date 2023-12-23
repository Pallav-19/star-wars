import React from 'react'
import GridViewIcon from '@mui/icons-material/GridView';
import ReorderIcon from '@mui/icons-material/Reorder';
import { useSelector, useDispatch } from 'react-redux'
import { currentViewMode, setViewMode } from '../../app/features/viewModeSlice';
const ViewToggler = () => {
    const viewMode = useSelector(currentViewMode)
    const dispatch = useDispatch()
    return (
        <div
            className='view-toggler'
        >

            <div
                onClick={() => dispatch(setViewMode('Grid'))}
                style={{
                    color: viewMode === 'Grid' ? "black" : 'white',
                    backgroundColor: viewMode === 'Grid' ? "white" : ''
                }}
            >
                <GridViewIcon />
                {viewMode === 'Grid' && <p>Grid</p>}
            </div>
            <div
                onClick={() => dispatch(setViewMode('List'))}

                style={{
                    color: viewMode === 'List' ? "black" : 'white',
                    backgroundColor: viewMode === 'List' ? "white" : ''
                }}
            >
                <ReorderIcon />
                {viewMode === 'List' && <p>List</p>}
            </div>
        </div>
    )
}

export default ViewToggler