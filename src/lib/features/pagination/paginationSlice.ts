import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PaginationState {
    page: number,
    totalPages: number,
}

const initialState: PaginationState = {
    page: 1,
    totalPages: 0,
}

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {

        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setTotalPages: (state, action: PayloadAction<number>) => {
            state.totalPages = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setPage, setTotalPages } = paginationSlice.actions

export default paginationSlice.reducer