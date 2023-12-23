import React from 'react'
import "../../styles/Navigation.css"
import headerImage from "../../assets/images/header.png"
const AppBar = () => {
    return (
        <div className='appbar'>
            <img style={{ width: '5rem' }} src={headerImage} alt='header' />
            <p>Search</p>
        </div>
    )
}

export default AppBar