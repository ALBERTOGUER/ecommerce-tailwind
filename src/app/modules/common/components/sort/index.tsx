"use client"

import { useEffect, useState } from "react"
import FilterRadioGroup from "../../../common/components/sort/FilterRadioGroup"


export type SortOptions = "price_asc" | "price_desc" | "created_at"

type SortProductsProps = {
    "data-testid"?: string,
    handleSort: (value: SortOptions) => void
}

const sortOptions = [
    {
        value: "price_asc",
        label: "Price: Low -> High",
    },
    {
        value: "price_desc",
        label: "Price: High -> Low",
    },
]


const SortProducts = ({
    "data-testid": dataTestId,
    handleSort
}: SortProductsProps) => {
    const [sortBy, setSortBy] = useState("created_at");

    const handleChange = (value: SortOptions) => {
        setSortBy(value)
        handleSort(value)
    }


    return (
        <FilterRadioGroup
            title="Sort by"
            items={sortOptions}
            value={sortBy}
            handleChange={handleChange}
            data-testid={dataTestId}
        />
    )
}

export default SortProducts
