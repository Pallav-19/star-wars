import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import titleSlice from "./features/titleSlice";
import viewModeSlice from "./features/viewModeSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        title: titleSlice,
        viewMode: viewModeSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)

})