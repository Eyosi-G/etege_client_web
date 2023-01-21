import { api } from "./api";

interface IOrderItem {
    productId: number,
    quantity: number
}
export interface IOrderDetail {
    productName: string;
    productImages: string;
    quantity: number;
    price: number;
    total: number;
    status: string;
}
export interface IOrderRequest {
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    shippingAddress: string;
    city: string,
    appartment?: string,
    items: IOrderItem[]
}
export interface IOrder {
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    shippingAddress: string;
    city: string;
    appartment?: string;
    orderDetails: IOrderDetail[]
}
const orderService = api.injectEndpoints({
    endpoints(build) {
        return {
            createOrder: build.mutation<void, IOrderRequest>({
                query: (data) => {
                    return {
                        url: "orders",
                        method: "POST",
                        body: data
                    }
                }
            }),
            getOrder: build.query<IOrder, string >({
                query: (slug)=>({
                    url: `orders/${slug}`
                })
            })
        }
    },
})

export const { useCreateOrderMutation, useGetOrderQuery } = orderService