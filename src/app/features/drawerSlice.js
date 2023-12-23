import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    resource: "",
    schema: []
}
const drawerSlice = createSlice({
    initialState,
    name: 'drawer',
    reducers: {
        setDrawer: (state, action) => {
            state.schema = action.payload.schema
            state.resource = action.payload.resource
        }
    }
})

export default drawerSlice.reducer
export const { setDrawer } = drawerSlice.actions
export const currentResource = (state) => state.drawer.resource
export const currentSchema = (state) => state.drawer.schema