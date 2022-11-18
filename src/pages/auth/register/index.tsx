import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, redirect, useNavigate } from "react-router-dom";
import InputText from "../../../components/InputText";
import { RootState } from "../../../store";
import { login, setDataRegisterWithoutSave } from "../../../store/dashboardSlice";
import logo from '../../../assets/logo-hor.png';
import logoBranco from '../../../assets/logo-branco.png';
import Button from "../../../components/Button";
import GoogleButton from "../../../components/GoogleButton";
import FacebookButton from "../../../components/FacebookButton";
import { api } from "../../../api/axios";
import { RegisterUserModel } from "../../../models/RegisterUserModel";
import { UserModel } from "../../../models/UserModel";

export function Register() {
  const user = useSelector((state: RootState) => state.dashboard.user)
  const [userRegister, setUserRegister] = useState<RegisterUserModel>({
    email: '',
    userId: '',
    name: '',
    photoUrl: '',
    provider: 'EmailPassword',
    password: '',
    confirmPassword: '',
  });
  const dispatch = useDispatch();
  let navigate = useNavigate();

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
    const { data } = await api.get<UserModel>('auth/success', { withCredentials: true });
    const userRegisterData: RegisterUserModel = {
      email: data.email ?? '',
      userId: data.userId ?? '',
      name: data.name ?? '',
      photoUrl: data.photoUrl ?? '',
      provider: 'Google',
      password: '',
      confirmPassword: '',
    }
    setUserRegister(userRegisterData)
    dispatch(setDataRegisterWithoutSave(userRegister))
  };

  const setRegister = async () => {
    try {
      if (userRegister?.password === userRegister?.confirmPassword) {
        const response = await api.post('auth/register', userRegister);
        if (response.status === 200) {
          //dispatch(login(userLogin));
          navigate('/auth/successregister');
        }
      }
    } catch (error: any) {
      alert(error?.response?.data?.error)
    }
  }

  return (
    <div className="h-screen w-full flex justify-center items-center bg-bgLogin" >
      <div className="min-w-[20rem] w-[20rem] sm:w-[30rem] rounded-lg shadow-xl flex flex-row relative" >
        <div className="sm:w-[30rem] w-[20rem] bg-white p-10 rounded-lg sm:rounded-r-lg z-50 flex flex-col">
          <img src={logo} width="180" className="mb-4 sm:hidden flex self-center" />
          <div className="flex flex-row justify-between">
            <h2 className="text-gray-500">Cadastre-se</h2>
            {userRegister?.photoUrl !== '' ?
              (<img src={userRegister.photoUrl} width="45" height="45" className="rounded-full" referrerPolicy="no-referrer" />) : (<></>)
            }
          </div>

          <InputText
            label="Nome completo"
            value={userRegister?.name}
            onChange={(e) => setUserRegister({ ...userRegister, name: e.target.value })}
            disabled={userRegister?.provider !== "EmailPassword"}
          />
          <InputText
            label="E-mail"
            type="email"
            value={userRegister?.email}
            onChange={(e) => setUserRegister({ ...userRegister, email: e.target.value })}
            disabled={userRegister?.provider !== "EmailPassword"}
          />
          <InputText
            label="Senha"
            type="password"
            value={userRegister?.password}
            onChange={(e) => setUserRegister({ ...userRegister, password: e.target.value })} />

          <InputText
            label="Confirmar a senha"
            type="password"
            value={userRegister?.confirmPassword}
            onChange={(e) => setUserRegister({ ...userRegister, confirmPassword: e.target.value })} />

          <Button type="button" onClick={setRegister} cssclass="my-4">SALVAR</Button>

          <p className="text-center text-gray-500 mb-4">
            <span className="tracking-[-5px] mx-2">----------------------</span>
            ou use um serviço
            <span className="tracking-[-5px] mx-2">----------------------</span>
          </p>
          <div className="flex justify-between mb-4">
            <GoogleButton onClick={loginGoogle} />
            <FacebookButton />
          </div>
          <Link to="/auth/login" className="text-teal-600 mt-4 font-semibold">Retornar ao login</Link>
        </div>
      </div>
    </div>
  )

}
