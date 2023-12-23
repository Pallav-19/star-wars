import React from 'react'
import "../../styles/Navigation.css"
import AppBar from './AppBar'
import SideNav from './SideNav'
import { Outlet } from "react-router-dom"
const Navigation = () => {
    return (
        <div className='nav-container'>
            <AppBar />
            <SideNav>
                <Outlet />
            </SideNav>
        </div>
    )
}

export default Navigation