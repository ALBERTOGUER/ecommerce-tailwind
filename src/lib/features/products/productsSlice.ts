import { Product } from '@/app/modules/common/types';
import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Key } from 'react';

export interface ProductsState {
    products: Product[];
    currentProduct: Key | undefined;
}

const initialState: ProductsState = {
    products: [],
    currentProduct: undefined,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload
        },
        setCurrentProduct: (state, action: PayloadAction<Key | undefined>) => {
            state.currentProduct = action.payload
        }

    },
})

// Action creators are generated for each case reducer function
export const { setProducts, setCurrentProduct } = productsSlice.actions

export default productsSlice.reducer