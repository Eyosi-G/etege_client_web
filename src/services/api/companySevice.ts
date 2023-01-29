import { api } from "./api";

const companyService = api.injectEndpoints({
    endpoints(build) {
        return {
            fetchCompanyInfo: build.query({
                query: () => ({
                    url: ""
                })
            })
        }
    },
})

export const { useFetchCompanyInfoQuery } = companyService;