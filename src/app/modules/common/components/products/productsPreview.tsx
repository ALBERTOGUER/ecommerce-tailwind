import { Text } from "@medusajs/ui";
import Thumbnail from "../thumbnail";
import PreviewPrice from "./price";
import { Product } from "../../types";
import { useAppDispatch } from "@/lib/hooks";
import { setCurrentProduct } from "@/lib/features/products/productsSlice";
import { Key } from "react";

export default function ProductPreview({
  product,
  isFeatured,
}: {
  product: Product;
  isFeatured?: boolean;
}) {
  const dispatch = useAppDispatch();

  const handleDispatch = (id: Key) => {
    dispatch(setCurrentProduct(id));
  };

  return (
    <div onClick={() => handleDispatch(product.id)} className="group">
      <div data-testid="product-wrapper">
        <Thumbnail images={product.image} size="full" isFeatured={isFeatured} />
        <div className="flex txt-compact-medium mt-4 justify-between">
          <Text className="text-teal-900" data-testid="product-title">
            {product.title}
          </Text>
          <div className="flex items-center gap-x-2">
            <PreviewPrice price={product.price} />
          </div>
        </div>
      </div>
    </div>
  );
}
