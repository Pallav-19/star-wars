import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    resource: '',
    schema: ''

}
const drawerSlice = createSlice({
    initialState,
    name: 'drawer',
    reducers: {
        setDrawer: (state, payload) => { 
            
        }
    }
})