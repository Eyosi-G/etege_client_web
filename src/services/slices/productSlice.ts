import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../api/productService";

interface IProductState {
    product: IProduct | null
}

const initialState: IProductState = {
    product: null
}
const productSlice = createSlice({
    initialState,
    name: "product",
    reducers: {
        setProduct: (state, action: PayloadAction<IProduct | null>) => {
            state.product = action.payload;
        }
    }
})

export const { setProduct } = productSlice.actions;
export default productSlice.reducer