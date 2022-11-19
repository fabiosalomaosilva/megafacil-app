import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import Card from "../../components/Card";
import CircleNumber from "../../components/CircleNumber";
import TitlePage from "../../components/TitlePage";
import { RootState } from "../../store"
import { logout } from "../../store/dashboardSlice";
import { getResultadosSorteio } from "../../store/resultadosSlice";
import { TbRefresh } from 'react-icons/tb'

export default function Dashboard() {
  const user = useSelector((state: RootState) => state.dashboard.user)
  const resultados = useSelector((state: RootState) => state.resultados)
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  }

  useEffect(() => {
    const localData = localStorage.getItem('megafacil:res') as string;
    if (!localData) {
      dispatch(getResultadosSorteio());
    }
  }, []);

  return (
    <div className="w-full">
      <TitlePage>Dashboard</TitlePage>
      <div className="grid grid-cols-12 gap-4">
        <Card colSpan={3} color="white" title="Último resultado">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between mb-2">
              <h3 className="text-gray-500 text-sm text-semibold">Concurso: {resultados.resultados[0].numero_concurso}</h3>
              <button className="hover:bg-gray-200 p-2 rounded-full active:bg-gray-300 transform duration-150 ease-linear -mt-2"><TbRefresh className="text-teal-600 h-5 w-5" /></button>
            </div>
            <div className="flex flex-row justify-between">
              {
                resultados.resultados && resultados.resultados.length > 0 &&
                resultados.resultados[0].dezenas.map((dezena: string) => {
                  return (<CircleNumber key={dezena} number={dezena} />)
                })
              }
            </div>
          </div>
        </Card>
        <Card colSpan={3} color="white" title="Último resultado">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between mb-2">
              <h3 className="text-gray-500 text-sm text-semibold">Concurso:</h3>
              <button className="hover:bg-gray-200 p-2 rounded-full active:bg-gray-300 transform duration-150 ease-linear -mt-2"><TbRefresh className="text-teal-600 h-5 w-5" /></button>
            </div>
            <div className="flex flex-row justify-between">
              {
                resultados.repeticoes && resultados.repeticoes.length > 0 &&
                resultados.repeticoes.map((dezena) => {
                  return (<CircleNumber key={dezena.dezena} number={dezena.dezena.toString()} />)
                })
              }
            </div>
          </div>
        </Card>
        <Card colSpan={3} color="primary" title="Mais repetidos">
          <div className="flex flex-row justify-between">
            <CircleNumber color="white" number="03" />
            <CircleNumber color="white" number="13" />
            <CircleNumber color="white" number="23" />
            <CircleNumber color="white" number="33" />
            <CircleNumber color="white" number="43" />
            <CircleNumber color="white" number="53" />
          </div>
        </Card>
      </div>
      <br />
      <br />
      <h1>{user.email}</h1>
      <button onClick={handleLogout}>Sair</button>
    </div>
  )
}

