import ProductPreview from "./productsPreview";
import { SortOptions } from "../sort/index";
import { Product } from "../../types";
import { Pagination } from "../pagination";
import { useAppSelector } from "@/lib/hooks";

type PaginatedProductsParams = {
  limit: number;
  collection_id?: string[];
  category_id?: string[];
  id?: string[];
  order?: string;
};

export default function PaginatedProducts({
  sortBy,
  page,
  products,
}: {
  sortBy?: SortOptions;
  page: number;
  products: Product[];
}) {
  const totalPages: number = useAppSelector(
    (state) => state.pagination.totalPages
  );

  return (
    <>
      <ul
        className="grid grid-cols-2 w-full small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8"
        data-testid="products-list"
      >
        {products &&
          products.map((p) => {
            return (
              <li key={p.id}>
                <ProductPreview product={p} />
              </li>
            );
          })}
      </ul>
      {totalPages && totalPages > 1 && (
        <Pagination
          data-testid="product-pagination"
          page={page}
          totalPages={totalPages}
        />
      )}
    </>
  );
}
