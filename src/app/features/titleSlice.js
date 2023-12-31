import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: ""
}
const titleSlice = createSlice({
    name: 'title',
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload
        }
    }
})

export default titleSlice.reducer
export const { setTitle } = titleSlice.actions
export const currentTitle = (state) => state.title.title