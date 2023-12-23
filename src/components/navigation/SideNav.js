import React, { useEffect } from 'react'
import "../../styles/Navigation.css"
import SideNavBar from './SideNavBar'
import { useSelector, useDispatch } from "react-redux"
import { currentTitle, setTitle } from '../../app/features/titleSlice'
import { useLocation } from 'react-router-dom'
import ViewToggler from '../miscellaneous/ViewToggler'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const SideNav = ({ children }) => {

    const title = useSelector(currentTitle)
    const location = useLocation()
    const dispatch = useDispatch()
    useEffect(() => {
        if (!title) dispatch(setTitle(capitalizeFirstLetter((location.pathname.split('/')[1]))))
    }, [])
    return (
        <div className='side-nav'>
            <SideNavBar />
            <div
                className='main-content'
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        padding: '0.5rem 2.5rem'
                    }}
                >
                    <p
                        style={{
                            fontSize: '1.5rem',
                            fontWeight: 500
                        }}
                    >{title}</p>
                    <ViewToggler />
                </div>
                {children}
            </div>
        </div>
    )
}

export default SideNav