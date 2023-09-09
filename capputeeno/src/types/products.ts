export interface Products {
    name: string,
    price_in_cents: number,
    id: string,
    image_url: string,
    description?: string,
    category?: string
}

export interface ProductFetchResponse {
    data: {
        Product: Products
    }
}

export interface ProductInCart extends Products {
    quantity: number
}