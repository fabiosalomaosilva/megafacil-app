import { DezenaRepeticoes } from './../models/DezenaRepeticoes';
import { getResultados, getNumerosMaisRepetidos, getNumerosRepeticoes } from './../services/resultadoService';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Resultado } from '../models/Resultado'

interface ResultadosState {
  resultados: Resultado[],
  repeticoes: DezenaRepeticoes[]
}

const initialStateResultados: Resultado[] = [];

const local = JSON.parse(localStorage.getItem('megafacil:res') as string);
const initialState: Resultado[] = local !== null && local !== '' ? local : initialStateResultados;


const getResultadosService = async () => {
  const resultados = await getResultados(30);
  localStorage.setItem('megafacil:res', JSON.stringify(resultados));
}

const resultadosSlice = createSlice({
  name: 'resultados',
  initialState: {
    resultados: initialState,
    repeticoes: []
  } as ResultadosState,
  reducers: {
    getResultadosSorteio(state) {
      getResultadosService();
      state.repeticoes = getNumerosRepeticoes(state.resultados);

    },
  },
})

export const { getResultadosSorteio } = resultadosSlice.actions
export default resultadosSlice.reducer
