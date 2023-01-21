import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../api/productService";

interface ICategoryState {
    categories: number[]
}



const initialState: ICategoryState = {
    categories: []
}


const categorySlice = createSlice({
    initialState,
    name: "category",
    reducers: {
        toggleCategory: (state, action: PayloadAction<number>) => {
            const categoryId = action.payload;
            const index = state.categories.findIndex((category) => category === categoryId)
            if (index === -1) {
                state.categories.push(categoryId)
            } else {
                state.categories.splice(index, 1)
            }
        }
    }
})

export const { toggleCategory } = categorySlice.actions
export default categorySlice.reducer;