import React from 'react'
import "../../styles/Navigation.css"
import { navigationRoutes } from '../../constants/appConstants'
import NavItem from './NavItem'
const SideNavBar = () => {
    return (
        <div
            className='side-nav-bar'
        >
            {
                navigationRoutes.map((nav) => <NavItem title={nav.name} icon={nav.icon} key={nav.name} to={nav.to} />)
            }
        </div>
    )
}

export default SideNavBar