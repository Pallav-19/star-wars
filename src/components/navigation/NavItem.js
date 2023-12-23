import React from 'react'
import "../../styles/Navigation.css"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setTitle } from '../../app/features/titleSlice';
const NavItem = ({ title, to, icon }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <div
            style={{
                backgroundColor: location.pathname.includes(to) ? "#CB1A80" : ''
            }}
            onClick={(e) => {
                e.preventDefault()
                navigate(to)
                dispatch(setTitle(title))
            }}
            className='nav-item'><p> <i style={{ marginRight: '0.4rem' }}>{icon}</i> {title}</p> <KeyboardArrowRightIcon /></div>
    )
}

export default NavItem