import { IPagination } from "../common";
import { api } from "./api";

export interface ICategory {
    name: string;
    id: number;
}
export interface IFetchCategoryResponse {
    categories: ICategory[],
    total: number
}

const categoryService = api.injectEndpoints({
    endpoints(build) {
        return {
            fetchCategories: build.query<IFetchCategoryResponse, IPagination>({
                query: ({ limit, page }) => {
                    const queries: string[] = []
                    if (limit) {
                        queries.push(`limit=${limit}`)
                    }
                    if (page) {
                        queries.push(`page=${page}`)
                    }
                    return ({
                        url: `categories?${queries.join("&")}`,

                    })
                }
            })
        }
    },
})


export const { useFetchCategoriesQuery } = categoryService