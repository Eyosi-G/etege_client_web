import { IPagination } from "../common";
import { api } from "./api";
import { ICategory } from "./categoryService";

export interface IProduct {
    id: number;
    name: string;
    description: string;
    images: string[];
    slug: string;
    price: number;
    compareAtPrice?: number;
    categories: ICategory[]
    isNew: boolean;
    isSoldOut: boolean;
}

export interface IGetProductResponse {
    total: number;
    products: IProduct[]
}

export interface IGetProductRequest extends IPagination {
    categories?: number[];
    isNew?: boolean;
    name?: string;
}

const productService = api.injectEndpoints({
    endpoints(build) {
        return {
            // fetchNewArrivals: build.query<IGetProductResponse, void>({
            //     query: () => ({
            //         url: `products`
            //     })
            // }),
            // fetchRelatedProducts: build.query<IGetProductResponse, void>({
            //     query: () => ({
            //         url: `products`
            //     })
            // }),
            fetchProducts: build.query<IGetProductResponse, IGetProductRequest>({
                query: (data) => {
                    const queries: string[] = [];
                    if (data.limit !== undefined) {
                        queries.push(`limit=${data.limit}`)
                    }
                    if (data.page !== undefined) {
                        queries.push(`page=${data.page}`)
                    }

                    if (data.name) {
                        queries.push(`name=${data.name}`)
                    }

                    if (data.categories) {
                        data.categories.forEach(category => {
                            queries.push(`categories=${category}`)
                        })
                    }
                    if (data.isNew !== undefined) {
                        queries.push(`isNew=${data.isNew}`)
                    }
                    return {
                        url: `products?${queries.join("&")}`
                    }
                }
            }),
            getProduct: build.query<IProduct, string>({
                query: (id) => ({
                    url: `products/${id}`,
                }),

            }),
        }
    },
})

export const {
    // useFetchNewArrivalsQuery,
    useGetProductQuery,
    // useFetchRelatedProductsQuery,
    useFetchProductsQuery
} = productService