

import ProductPreview from "./productsPreview"
//import { Pagination } from "@modules/store/components/pagination"
import { SortOptions } from "../sort/index"
import { Product } from "../../types"
/* import { useEffect } from "react"*/
import { useDispatch } from "react-redux"

import { getProductsService } from "@/lib/services/products";
import { setProducts } from "@/lib/features/products/productsSlice"
import { useAppDispatch } from "@/lib/hooks"
import { useEffect } from "react";

const PRODUCT_LIMIT = 12

type PaginatedProductsParams = {
    limit: number
    collection_id?: string[]
    category_id?: string[]
    id?: string[]
    order?: string
}

export default function PaginatedProducts({
    sortBy,
    page,
    products
}: {
    sortBy?: SortOptions
    page: number
    products: Product[]
}) {



    const queryParams: PaginatedProductsParams = {
        limit: 12,
    }

    /* let {
        response: { products, count },
    } = await listProductsWithSort({
        page,
        queryParams,
        sortBy,
    }) */

    //const totalPages = Math.ceil(count / PRODUCT_LIMIT)

    useEffect(() => {
        console.log(products);
    }, [products])



    return (
        <>
            <ul
                className="grid grid-cols-2 w-full small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8"
                data-testid="products-list"
            >
                {products && products.map((p) => {
                    return (
                        <li key={p.id}>
                            <ProductPreview product={p} />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
