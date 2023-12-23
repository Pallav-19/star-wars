import React from 'react'
import "../../styles/Table.css"
import { MoreVert } from '@mui/icons-material'
import { setDrawer } from '../../app/features/drawerSlice'
import { useDispatch } from "react-redux"
import { PICSUM_BASE_URL } from '../../constants/appConstants'
const Table = ({ columns, data }) => {
    const dispatch = useDispatch()
    return (
        <div
            className='table-wrapper'
        >

            <table

                className='table-component'
            >
                <thead>
                    <tr
                        style={{
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            borderRadius: '0.5rem'
                        }}
                    >

                        {columns.map((column) =>
                            <th key={column.title}>
                                {column?.title}
                            </th>)
                        }
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, index) => <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.5)' }} key={index}>
                        {
                            columns.map((c) => <td style={{ cursor: 'pointer' }} onClick={() => {
                                dispatch(setDrawer({ resource: { ...d, image: PICSUM_BASE_URL + "/?random=" + index }, schema: columns }))
                            }} key={index + 11}>{d[c.accessor]}</td>)
                        }
                        <td>
                            <MoreVert />
                        </td>
                    </tr>)}

                </tbody>
            </table>
        </div>
    )
}

export default Table