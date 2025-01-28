import { Product } from '@/app/modules/common/types';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ProductsState {
    products: Product[];
}

const initialState: ProductsState = {
    products: []
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { setProducts } = productsSlice.actions

export default productsSlice.reducer