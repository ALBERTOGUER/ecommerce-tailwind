import { Key } from "react"

export type Product = {
    id: Key,
    title: string,
    description: string,
    price: number,
    currency: string,
    image: string
    rating: number
}

