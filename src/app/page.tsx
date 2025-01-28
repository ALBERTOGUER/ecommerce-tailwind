
"use client"
import RefinementList from "./modules/common/components/sort/RefinementList";

import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/hooks";
import { setProducts } from "@/lib/features/products/productsSlice";
import { getProductsService } from "../lib/services/products";
import { Product } from "./modules/common/types";
import PaginatedProducts from "./modules/common/components/products";
import { useEffect, useState } from "react";
import { SortOptions } from "./modules/common/components/sort";




export default function Home() {

  const dispatch = useAppDispatch();
  const products: Product[] = useAppSelector((state) => state.products.products)
  const [productsDisplayed, setProductsDisplayed] = useState(products)

  const handleSort = (value: SortOptions) => {
    const sortedProducts = [...products].sort((a, b) => {
      return value == 'price_asc' ? a.price - b.price : b.price - a.price
    })
    setProductsDisplayed(sortedProducts)
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getProductsService();

        dispatch(setProducts(data));
      } catch (e) {

      }
    }
    getData()
  }, [])

  useEffect(() => {
    setProductsDisplayed(products)
  }, [products.length])

  return (

    <div className="flex flex-col small:flex-row small:items-start py-6 content-container">
      <RefinementList handleSort={handleSort} />
      <div className="w-full">
        <div className="mb-8 text-2xl-semi">
          <h1 data-testid="store-page-title" className="text-3xl">All products</h1>
        </div>
        <PaginatedProducts
          sortBy={"created_at"}
          page={12}
          products={productsDisplayed}
        />

      </div>
    </div>

  );
}
