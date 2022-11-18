import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import InputText from "../../../components/InputText";
import { RootState } from "../../../store";
import { login } from "../../../store/dashboardSlice";
import logo from '../../../assets/logo-hor.png';
import logoBranco from '../../../assets/logo-branco.png';
import Button from "../../../components/Button";
import GoogleButton from "../../../components/GoogleButton";
import FacebookButton from "../../../components/FacebookButton";
import { useState } from "react";
import { toast } from 'react-toastify';
import { api } from "../../../api/axios";
import { UserModel } from "../../../models/UserModel";

interface LoginResponse {
  access_data?: string;
  email: string;
  name: string;
  photoUrl?: string
  role: string;
}
export function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const nome = useSelector((state: RootState) => state.dashboard.user)
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { data } = await api.post<LoginResponse>('auth/login', { email, password });
      if (data.access_data) {
        dispatch(login(data));
        navigate('/dashboard');
        return;
      }
      toast('Usuário ou senha errados!', { type: 'error' });
    }
    catch (error: any) {
      toast(error.response.data.message, { type: 'error' });
    }
  }

  const loginGoogle = async () => {
    let timer: NodeJS.Timeout | null = null;
    const googleLoginURL = "http://localhost:3300/auth/google";
    const loginGoogleModal = window.open(
      googleLoginURL,
      "_blank",
      "width=500,height=600"
    );

    if (loginGoogleModal) {
      timer = setInterval(() => {
        if (loginGoogleModal) {
          getUserGoogle();
          loginGoogleModal.close();
          if (timer) clearInterval(timer);
        }
      }, 500);
    };
  };

  const getUserGoogle = async () => {
    try {
      const { data } = await api.get<UserModel>('auth/success', { withCredentials: true });
      if (data.access_data) {
        dispatch(login(data));
        navigate('/dashboard');
        return;
      }
      toast('Usuário ou senha errados!', { type: 'error' });
    }
    catch (error: any) {
      console.log(error)
      toast(error.response.data.message, { type: 'error' });
    }
  };

  return (
    <div className="min-w-[20rem] h-screen w-full flex justify-center items-center bg-bgLogin" >
      <div className="min-w-[20rem] w-[20rem] sm:w-[50rem] rounded-lg shadow-xl flex flex-row relative" >
        <div className="sm:w-[20rem] sm:rounded-l-lg sm:relative hidden sm:flex sm:flex-col">

          <div className="w-[20rem] rounded-l-lg bg-loginSideColorLight h-[100px] absolute z-50"></div>
          <div className="w-[23rem] rounded-b-[80%] rounded-t-lg bg-loginSideColorLight h-[180px] rotate-6 absolute top-5 z-50"></div>
          <div className="w-full h-full rounded-l-lg bg-loginSideColor absolute z-49"></div>
          <div className="w-[20rem] h-full flex flex-col items-center left-0 top-0 p-10 justify-between" style={{ zIndex: 150 }}>
            <img src={logoBranco} className="w-[8rem] h-[8rem]" />
            <p className="text-white text-3xl font-semibold">Sua sorte com inteligência!</p>
            <p className="text-center text-white text-xl font-bold">Não possui acesso?
              <Link className="text-gray-600 text-lg" to="/auth/register">Cadastre-se aqui!</Link>
            </p>
          </div>
        </div>
        <div className="sm:w-[30rem] w-[20rem] bg-white p-10 rounded-lg sm:rounded-r-lg z-50 flex flex-col">
          <img src={logo} width="180" className="mb-4 sm:hidden flex self-center" />
          <h2 className="text-gray-500">Seja bem vindo</h2>
          <InputText label="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <InputText label="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Link className="self-end text-teal-600 -mt-2 font-semibold" to="/auth/forgotpassword">Esqueci a senha</Link>
          <Button type="button" onClick={handleLogin} cssclass="my-4">ENTRAR</Button>
          <p className="text-center text-gray-500 mb-4">
            <span className="tracking-[-5px] mx-2">----------------------</span>
            ou use um serviço
            <span className="tracking-[-5px] mx-2">----------------------</span></p>
          <div className="flex justify-between">
            <GoogleButton onClick={loginGoogle} />
            <FacebookButton />
          </div>
        </div>
      </div>
    </div>
  )
} 
