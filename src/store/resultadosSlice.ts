import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ResultadosState {
    value: number
}

const initialState = { value: 0 } as ResultadosState

const resultadosSlice = createSlice({
    name: 'resultados',
    initialState,
    reducers: {
        increment(state) {
            state.value++
        },
        decrement(state) {
            state.value--
        },
        incrementByAmount(state, action: PayloadAction<number>) {
            state.value += action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount } = resultadosSlice.actions
export default resultadosSlice.reducer