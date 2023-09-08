import axios, { AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";

import { ProductFetchResponse } from "@/types/products";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (productId: string): AxiosPromise<ProductFetchResponse> => {
    return axios.post(API_URL, {
        query: `
        query {
            Product (id: "${productId}" ) {
                category
                description
                name
                price_in_cents
                image_url
            } 
        }`
    })
}

export function useProduct(id: string) {
    const {data} = useQuery({
        queryFn: () => fetcher(id) ,
        queryKey: ['products', id],
        enabled: !!id,
        staleTime: 1000 * 60 * 5
    })

    return {
        data: data?.data?.data?.Product
    }
}