"use client";
import RefinementList from "./modules/common/components/sort/RefinementList";

import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/hooks";
import { setProducts } from "@/lib/features/products/productsSlice";
import { getProductsService } from "../lib/services/products";
import { Product } from "./modules/common/types";
import PaginatedProducts from "./modules/common/components/products";
import { Key, useEffect, useState } from "react";
import { SortOptions } from "./modules/common/components/sort";
import { setTotalPages } from "@/lib/features/pagination/paginationSlice";
import Details from "./modules/details";
//import { Modal } from "react-pattern-components";
//import Cart from "./modules/cart/page";

export default function Home() {
  const dispatch = useAppDispatch();
  const [nameSearch, setNameSearch] = useState("");

  const products: Product[] = useAppSelector(
    (state) => state.products.products
  );
  const currentProduct: Key | undefined = useAppSelector(
    (state) => state.products.currentProduct
  );

  const page: number = useAppSelector((state) => state.pagination.page);
  const [productsDisplayed, setProductsDisplayed] = useState(products);
  const itemsPerPage = 4;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleSortPagination = (value: SortOptions) => {
    const sortedProducts = [...products].sort((a, b) => {
      return value == "price_asc" ? a.price - b.price : b.price - a.price;
    });
    dispatch(setProducts(sortedProducts));
    setProductsDisplayed(sortedProducts.slice(startIndex, endIndex));
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getProductsService();
        dispatch(setProducts(data));
      } catch (e) {}
    };
    getData();
  }, []);

  useEffect(() => {
    setProductsDisplayed((pre) => products.slice(startIndex, endIndex));
    dispatch(setTotalPages(Math.ceil(products.length / itemsPerPage)));
  }, [products.length]);

  useEffect(() => {
    setProductsDisplayed(products.slice(startIndex, endIndex));
  }, [page]);

  useEffect(() => {
    setProductsDisplayed((prev) => {
      return products.filter((prod) =>
        prod.title.toLocaleLowerCase().includes(nameSearch)
      );
    });
  }, [nameSearch]);

  return (
    <div className="flex flex-col small:flex-row small:items-start py-6 content-container">
      {!currentProduct ? (
        <>
          <RefinementList
            handleSort={handleSortPagination}
            setSearching={setNameSearch}
            search={nameSearch}
          />
          <div className="w-full">
            <div className="mb-8 text-2xl-semi">
              <h1 data-testid="store-page-title" className="text-3xl">
                All products
              </h1>
            </div>
            <PaginatedProducts
              sortBy={"created_at"}
              page={page}
              products={productsDisplayed}
            />
          </div>
        </>
      ) : (
        <Details />
      )}

      {/* <Modal isOpen={isOpen} tittle={"Payment"}>
        <Cart />
      </Modal> */}
    </div>
  );
}
