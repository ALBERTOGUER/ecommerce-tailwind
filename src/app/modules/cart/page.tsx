import { useAppSelector } from "@/lib/hooks";

export default function Cart() {
  const cartProducts = useAppSelector((state) => state.cart.products);
  return (
    <>
      <div className="content-container flex flex-col small:flex-row small:items-start py-6 relative">
        <div className="flex flex-col small:sticky w-full py-8 gap-y-6">
          <div id="product-info">
            <div className="flex flex-col gap-y-4 lg:max-w-[500px] mx-auto">
              <a
                className="text-sm text-gray-400 hover:"
                href="/us/collections/sale"
              >
                Cart
              </a>
              {cartProducts.length &&
                cartProducts.map((currentProduct) => (
                  <>
                    <h2 className="font-sans font-medium text-3xl leading-10 text-gray-600">
                      {currentProduct.title}
                    </h2>
                    <p className="font-normal font-sans txt-medium text-gray-500">
                      {currentProduct.description}
                    </p>
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
