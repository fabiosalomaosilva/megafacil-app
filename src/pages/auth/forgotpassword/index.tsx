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

export function ForgotPassword() {
  const user = useSelector((state: RootState) => state.dashboard.user)
  const [email, setEmail] = useState<string>('');
  const dispatch = useDispatch();
  let navigate = useNavigate();

  async function handleSubmit() {
    try {
      const { data } = await api.post('auth/forgotpassword', { email });
      if (data.success) {
        navigate('/auth/successresendpassword')
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="h-screen w-full flex justify-center items-center bg-bgLogin" >
      <div className="min-w-[20rem] w-[20rem] sm:w-[30rem] rounded-lg shadow-xl flex flex-row relative" >
        <div className="sm:w-[30rem] w-[20rem] bg-white p-10 rounded-lg sm:rounded-r-lg z-50 flex flex-col">
          <img src={logo} width="180" className="mb-6 flex self-center" />
          <div className="flex flex-row justify-between">
            <h3 className="text-gray-500 my-3">Esqueci a senha</h3>
          </div>

          <InputText
            label="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}

          />
          <Button type="button" onClick={handleSubmit} cssclass="my-4" disabled={email === ''}>LEMBRAR SENHA</Button>

          <Link to="/auth/login" className="text-teal-600 -mt-2 font-semibold">Retornar ao login</Link>
        </div>
      </div>
    </div>
  )

}
