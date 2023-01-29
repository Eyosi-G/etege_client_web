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

export interface IFetchCategoryRequest extends IPagination {
    name?: string;
}

const categoryService = api.injectEndpoints({
    endpoints(build) {
        return {
            fetchCategories: build.query<IFetchCategoryResponse, IFetchCategoryRequest>({
                query: ({ limit, page, name }) => {
                    console.log(`name -> ${name}`)
                    const queries: string[] = []
                    if (limit) {
                        queries.push(`limit=${limit}`)
                    }

                    if (page) {
                        queries.push(`page=${page}`)
                    }

                    if (name != undefined) {
                        queries.push(`name=${name}`)
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