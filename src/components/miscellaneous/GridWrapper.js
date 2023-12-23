import React from 'react'
import "../../styles/Navigation.css"
const GridWrapper = ({ children }) => {
    return (
        <div
            className='main-content-grid-wrapper'
        >{children}</div>
    )
}

export default GridWrapper