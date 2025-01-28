import { Product } from '@/app/modules/common/types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
    total: number,
    products: Product[],
    isOpen: boolean
}

const initialState: CartState = {
    total: 0,
    products: [],
    isOpen: false,
}

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {

        setNewProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload)
        },

        setIsOpen: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload
        },
        
    },
})

// Action creators are generated for each case reducer function
export const { setNewProduct, setIsOpen } = paginationSlice.actions

export default paginationSlice.reducer