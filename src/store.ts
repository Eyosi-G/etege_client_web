import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { api } from "./services/api/api"
import productReducer from "./services/slices/productSlice"
import cartReducer from "./services/slices/cartSlice"
import categorySlice from "./services/slices/categorySlice";


export const store = configureStore({
    devTools: true,
    reducer: {
        [api.reducerPath]: api.reducer,
        product: productReducer,
        cart: cartReducer,
        category: categorySlice

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(api.middleware)

});

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;