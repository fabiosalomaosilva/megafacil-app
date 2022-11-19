import { DezenaRepeticoes } from './../models/DezenaRepeticoes';
import { api } from "../api/axios"
import { Resultado } from "../models/Resultado";

export const getResultados = async (quantidade: number) => {
  try {
    const response = await api.get<Resultado[]>(`/sorteios/${quantidade}`);
    return response.data;
  } catch (error) {
    console.log(error)
    return [];
  }
}

export const getNumerosRepeticoes = (resultados: Resultado[]): DezenaRepeticoes[] => {
  const repeticoes: DezenaRepeticoes[] = [];
  resultados.forEach((resultado: Resultado) => {
    resultado.dezenas.forEach(dezena => {
      const exists = repeticoes.find(item => item.dezena == parseInt(dezena));
      if (exists) {
        repeticoes.push({ dezena: parseInt(dezena), quatidade: exists.quatidade + 1 })
      } else {
        repeticoes.push({ dezena: parseInt(dezena), quatidade: 1 })
      }
    });
  });
  console.log(repeticoes)

  return repeticoes;
}


export const getNumerosMaisRepetidos = () => {

}
