import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import titleSlice from "./features/titleSlice";
import viewModeSlice from "./features/viewModeSlice";
import drawerSlice from "./features/drawerSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        title: titleSlice,
        viewMode: viewModeSlice,
        drawer: drawerSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)

})