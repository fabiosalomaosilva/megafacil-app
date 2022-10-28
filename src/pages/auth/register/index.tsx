import { useDispatch, useSelector } from "react-redux";
import { Link, redirect, useNavigate } from "react-router-dom";
import InputText from "../../../components/InputText";
import { RootState } from "../../../store";
import { login } from "../../../store/dashboardSlice";
import logo from '../../../assets/logo-hor.png';
import logoBranco from '../../../assets/logo-branco.png';
import Button from "../../../components/Button";
import GoogleButton from "../../../components/GoogleButton";
import FacebookButton from "../../../components/FacebookButton";
import { api } from "../../../api/axios";

export function Register() {
    const nome = useSelector((state: RootState) => state.dashboard.user)
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleLogin = () => {
        dispatch(login({ email: 'fabio@arquivarnet.com.br', nameUser: 'Fábio Salomão' }));
        navigate('/dashboard');
    }


    const redirectToGoogleSSO = async () => {
        let timer: NodeJS.Timeout | null = null;
        const googleLoginURL = "http://localhost:3300/auth/google";
        const newWindow = window.open(
            googleLoginURL,
            "_blank",
            "width=500,height=600"
        );

        if (newWindow) {
            timer = setInterval(() => {
                if (newWindow.location.href == 'http://localhost:5173/auth/loginsocialsuccess') {
                    console.log('Entrou aqui')
                    getUser();
                    newWindow.close();
                    if (timer) clearInterval(timer);
                }
            }, 500);

        };
    };
    const getUser = async () => {
        const response = await api.get('auth/success', { withCredentials: true });
        dispatch(login(response.data))
    };
    // useEffect(() => {
    //     getUser();
    // }, [])

    return (
        <div className="h-screen w-full flex justify-center items-center bg-bgLogin" >
            <div className="min-w-[20rem] w-[20rem] sm:w-[30rem] rounded-lg shadow-xl flex flex-row relative" >
                <div className="sm:w-[30rem] w-[20rem] bg-white p-10 rounded-lg sm:rounded-r-lg z-50 flex flex-col">
                    <img src={logo} width="180" className="mb-4 sm:hidden flex self-center" />
                    <h2 className="text-gray-500">Cadastre-se</h2>
                    <InputText label="Nome completo" />
                    <InputText label="E-mail" type="email" />
                    <InputText label="Senha" type="password" />
                    <InputText label="Confirmar a senha" type="password" />
                    <Button type="button" onClick={redirectToGoogleSSO} cssClass="my-4">SALVAR</Button>
                    <p className="text-center text-gray-500 mb-4">
                        <span className="tracking-[-5px] mx-2">----------------------</span>
                        ou use um serviço
                        <span className="tracking-[-5px] mx-2">----------------------</span></p>
                    <div className="flex justify-between">
                        <GoogleButton />
                        <FacebookButton />
                    </div>
                </div>
            </div>
        </div>
    )
} 