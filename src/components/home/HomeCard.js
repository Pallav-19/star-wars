import React from 'react'
import homeImage from "../../assets/images/home.jpg"
import "../../styles/Home.css"
const HomeCard = () => {
    return (
        <div
            className='home-card-container'
        >
            <div
                className='home-card-image'
            >
                <img src={homeImage} alt='ima' />
            </div>
            <div
                className='description-box'
            >
                <h1
                    style={{ color: 'black' }}
                >
                    Welcome to Star Wars <br /> Dashboard
                </h1>
                <p
                    style={{
                        color: '#3B3F5C',
                        marginTop: '0.8rem'
                    }}
                >
                    Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.
                </p>
            </div>
        </div>
    )
}

export default HomeCard