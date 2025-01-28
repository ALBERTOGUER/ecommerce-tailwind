import Thumbnail from "../common/components/thumbnail";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { Product } from "../common/types";
import { Key } from "react";
import { setNewProduct } from "@/lib/features/cart/cartSlice";

export default function Details() {
  const dispatch = useAppDispatch();
  const products: Product[] = useAppSelector(
    (state) => state.products.products
  );
  const currentProductId: Key | undefined = useAppSelector(
    (state) => state.products.currentProduct
  );
  const currentProduct: Product[] = products.filter(
    (product) => product.id == currentProductId
  );

  return (
    <div className="content-container flex flex-col small:flex-row small:items-start py-6 relative">
      <div className="flex flex-col small:sticky w-full py-8 gap-y-6">
        <div id="product-info">
          <div className="flex flex-col gap-y-4 lg:max-w-[500px] mx-auto">
            <a
              className="text-sm text-gray-400 hover:"
              href="/us/collections/sale"
            >
              Sale
            </a>
            <h2 className="font-sans font-medium text-3xl leading-10 text-gray-600">
              {currentProduct[0].title}
            </h2>
            <p className="font-normal font-sans txt-medium text-gray-500">
              {currentProduct[0].description}
            </p>
            <button
              className="font-normal font-sans txt-medium text-gray-500"
              onClick={() => dispatch(setNewProduct(currentProduct[0]))}
            >
              Add to cart +
            </button>
          </div>
        </div>
      </div>
      <div className="block w-full relative">
        <div className="flex items-start relative">
          <div className="flex flex-col flex-1 small:mx-16 gap-y-4">
            <Thumbnail
              images={currentProduct[0].image}
              size="full"
              isFeatured={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
