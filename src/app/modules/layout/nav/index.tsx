"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setCurrentProduct } from "@/lib/features/products/productsSlice";
import { setIsOpen } from "@/lib/features/cart/cartSlice";

export default function Nav() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.products);

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto text-neutral-500 border-b duration-200 bg-white border-gray-300">
        <nav className="content-container  flex items-center justify-between w-full h-full font-sans">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">{/* <SideMenu regions={regions} /> */}</div>
          </div>

          <div className="flex items-center h-full">
            <button
              onClick={() => dispatch(setCurrentProduct(undefined))}
              className="font-bold text-lg hover:text-neutral-700 uppercase"
              data-testid="nav-store-link"
            >
              Ecommerce
            </button>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <button
              className="hover:text-neutral-700 flex gap-2"
              onClick={() => dispatch(setIsOpen(true))}
              data-testid="nav-cart-link"
            >
              Cart ({cart.length})
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}
