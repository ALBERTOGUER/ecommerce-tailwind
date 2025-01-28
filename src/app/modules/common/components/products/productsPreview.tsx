
import { Text } from "@medusajs/ui"
//import { listProducts } from "@lib/data/products"
//import { getProductPrice } from "@lib/util/get-product-price"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import { Product } from "../../types"
import Link from "next/link"

export default function ProductPreview({
    product,
    isFeatured,
}: {
    product: Product
    isFeatured?: boolean
}) {
    // const pricedProduct = await listProducts({
    //   regionId: region.id,
    //   queryParams: { id: [product.id!] },
    // }).then(({ response }) => response.products[0])

    // if (!pricedProduct) {
    //   return null
    // }



    return (
        <Link href={`/products/${product.id}`} className="group">
            <div data-testid="product-wrapper">
                <Thumbnail
                    images={product.image}
                    size="full"
                    isFeatured={isFeatured}
                />
                <div className="flex txt-compact-medium mt-4 justify-between">
                    <Text className="text-teal-900" data-testid="product-title">
                        {product.title}
                    </Text>
                    <div className="flex items-center gap-x-2">
                        <PreviewPrice price={product.price} />
                    </div>
                </div>
            </div>
        </Link>
    )
}
