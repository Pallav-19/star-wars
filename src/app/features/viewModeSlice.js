import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    viewMode: 'List'

}
const viewModeSlice = createSlice({
    name: 'viewMode',
    initialState,
    reducers: {
        setViewMode: (state, action) => {
            state.viewMode = action.payload
        }
    }
})

export default viewModeSlice.reducer
export const { setViewMode } = viewModeSlice.actions
export const currentViewMode = (state) => state.viewMode.viewMode 