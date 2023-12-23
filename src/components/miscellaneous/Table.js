import React from 'react'
import "../../styles/Table.css"
import { MoreVert } from '@mui/icons-material'
const Table = ({ columns, data }) => {
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
                            columns.map((c) => <td key={index + 11}>{d[c.accessor]}</td>)
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