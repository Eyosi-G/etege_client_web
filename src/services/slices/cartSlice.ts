import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../api/productService";

interface ICartState {
    products: {
        [id: string]: {
            product: IProduct,
            total: number;
            quantity: number
        }
    },
}

const data = localStorage.getItem("cart");
const cartState: (ICartState | null) =
    data ? JSON.parse(data) as ICartState : null;

console.log(cartState)

interface IAddToCart {
    product: IProduct,
    quantity: number
}


const initialState: ICartState = cartState ? cartState : {
    products: {},
}


const cartSlice = createSlice({
    initialState,
    name: "cart",
    reducers: {
        addToCart: (state, action: PayloadAction<IAddToCart>) => {
            const { product, quantity } = action.payload
            if (state.products[product.id]) {
                state.products[product.id].quantity += quantity
                state.products[product.id].total = state.products[product.id].quantity * product.price
                state.products[product.id].total = +state.products[product.id].total.toFixed(2)
            } else {
                state.products[product.id] = {
                    product,
                    quantity,
                    total: product.price * quantity
                }
                state.products[product.id].total = +state.products[product.id].total.toFixed(2)

            }

            localStorage.setItem("cart", JSON.stringify(state))

        },
        incrementQty: (state, action: PayloadAction<number>) => {
            const productId = action.payload
            state.products[productId].quantity++
            state.products[productId].total = state.products[productId].quantity * state.products[productId].product.price
            state.products[productId].total = +state.products[productId].total.toFixed(2)

            localStorage.setItem("cart", JSON.stringify(state))

        },
        decrementQty: (state, action: PayloadAction<number>) => {
            const productId = action.payload
            if (state.products[productId].quantity > 1) {
                state.products[productId].quantity--
                state.products[productId].total = state.products[productId].quantity * state.products[productId].product.price
                state.products[productId].total = +state.products[productId].total.toFixed(2)
            }

            localStorage.setItem("cart", JSON.stringify(state))


        },
        removeFromCarts: (state, action: PayloadAction<number>) => {
            const productId = action.payload
            delete state.products[productId]
            localStorage.setItem("cart", JSON.stringify(state))

        }

    }
})

export const { addToCart, decrementQty, incrementQty, removeFromCarts } = cartSlice.actions
export default cartSlice.reducer;