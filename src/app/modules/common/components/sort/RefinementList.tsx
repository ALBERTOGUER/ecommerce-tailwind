"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

import SortProducts, { SortOptions } from "./index"

type RefinementListProps = {
    search?: boolean
    'data-testid'?: string,
    handleSort: (value: SortOptions) => void
}

const RefinementList = ({ handleSort, 'data-testid': dataTestId }: RefinementListProps) => {


    return (
        <div className="flex small:flex-col gap-12 py-4 mb-8 small:px-0 pl-6 small-min-width">
            <SortProducts handleSort={handleSort} data-testid={dataTestId} />
        </div>
    )
}

export default RefinementList
