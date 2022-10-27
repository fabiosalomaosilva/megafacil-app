import { configureStore } from '@reduxjs/toolkit'
import resultadosReducer from './resultadosSlice'
import dashboardReducer from './dashboardSlice'

export const store = configureStore({
    reducer: {
        resultados: resultadosReducer,
        dashboard: dashboardReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch