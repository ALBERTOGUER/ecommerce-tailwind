import { Suspense } from "react"

import Link from "next/link"

//import CartButton from "@modules/layout/components/cart-button"
//import SideMenu from "../side-menu"

export default function Nav() {
    //const regions = await listRegions().then((regions: StoreRegion[]) => regions)

    return (
        <div className="sticky top-0 inset-x-0 z-50 group">
            <header className="relative h-16 mx-auto text-neutral-500 border-b duration-200 bg-white border-gray-300">
                <nav className="content-container  flex items-center justify-between w-full h-full font-sans">
                    <div className="flex-1 basis-0 h-full flex items-center">
                        <div className="h-full">
                            {/* <SideMenu regions={regions} /> */}
                        </div>
                    </div>

                    <div className="flex items-center h-full">
                        <Link
                            href="/"
                            className="font-bold text-lg hover:text-neutral-700 uppercase"
                            data-testid="nav-store-link"
                        >
                            Ecommerce
                        </Link>
                    </div>

                    <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">

                        <Link
                            className="hover:text-neutral-700 flex gap-2"
                            href="/cart"
                            data-testid="nav-cart-link"
                        >
                            Cart (0)
                        </Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}
