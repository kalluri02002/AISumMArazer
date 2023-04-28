import { configureStore } from "@reduxjs/toolkit";
import { articalApi } from "./artical";
export const store=configureStore({
    reducer:{
        [articalApi.reducerPath]:articalApi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(articalApi.middleware)
})