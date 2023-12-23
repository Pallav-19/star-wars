import React from 'react';
import '../../styles/Drawer.css';
import { currentResource, currentSchema, setDrawer } from '../../app/features/drawerSlice';
import { useSelector, useDispatch } from 'react-redux'
import { CloseSharp } from '@mui/icons-material';
const Drawer = ({ children }) => {
    const resource = useSelector(currentResource)
    const schema = useSelector(currentSchema)
    const dispatch = useDispatch()
    const onClose = () => {
        dispatch(setDrawer({ resource: '', schema: [] }))
    }
    console.log(schema);
    const drawerClass = resource ? 'drawer open' : 'drawer';
    return (
        <div className={drawerClass}>
            <div
                className='close-bar'
            >
                <h3 style={{ color: 'white' }}>Movie Details</h3>
                <CloseSharp
                    sx={{
                        color: 'white',
                        fontSize: '2rem',
                        cursor: 'pointer'
                    }}
                    onClick={() => {
                        onClose()
                    }}

                />
            </div>
            <div
                style={{
                    width: '100%',
                    height: '40%',
                }}
                className='single-detail'>
                <p style={{ color: 'white' }}>
                    Image
                </p>
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${resource?.image})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: 'white',
                        border: '1px solid white',
                        borderRadius: '0.3rem'
                    }}
                >
                </div>

            </div>
            {
                [resource]?.map((r) => (<>
                    {schema?.map((s) => (<>
                        <p
                            style={{ color: 'white' }}
                        >
                            <div className='single-detail'>
                                <p>
                                    {s.title}
                                </p>
                                <div className='single-detail-box'>
                                    {r[s.accessor]}
                                </div>
                            </div>

                        </p>
                    </>))}
                </>))
            }
            <div
                className='close-b'
                onClick={() => {
                    onClose()
                }}

            >
                Close
            </div>
        </div>
    );
};

export default Drawer;
