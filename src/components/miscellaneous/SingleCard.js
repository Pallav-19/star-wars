import React from 'react'
import "../../styles/Miscellaneous.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch } from "react-redux"
import { PICSUM_BASE_URL } from '../../constants/appConstants';
import { setDrawer } from '../../app/features/drawerSlice';
const SingleCard = ({ index, title, schema, resource }) => {
    const dispatch = useDispatch()
    const set = () => {
        console.log('df');
        dispatch(setDrawer({ resource: { ...resource, image: `${PICSUM_BASE_URL}/?random=${index}` }, schema }))
    }
    return (
        <div
            className='single-card'

        >
            <div
                onClick={set}
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