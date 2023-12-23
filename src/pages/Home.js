import React from 'react'
import HomeCard from '../components/home/HomeCard'

const Home = () => {
    return (
        <div
            style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        > <HomeCard /> </div>
    )
}

export default Home