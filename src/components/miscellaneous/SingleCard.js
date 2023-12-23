import React from 'react'
import "../../styles/Miscellaneous.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { PICSUM_BASE_URL } from '../../constants/appConstants';
const SingleCard = ({ index, title }) => {
    return (
        <div
            className='single-card'
        >
            <div
                style={{
                    backgroundImage: `url(${PICSUM_BASE_URL + "/?random=" + index})`
                }}
                className='single-card-image'
            >
            </div>
            <div
                className='single-card-title'
            >
                <p>
                    {title}
                </p>
                <i>
                    <MoreVertIcon />
                </i>
            </div>
        </div>
    )
}

export default SingleCard