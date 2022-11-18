import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ChangePassword from './pages/auth/changepassword';
import ChangePasswordSuccess from './pages/auth/changepasswordsuccess';
import { ForgotPassword } from './pages/auth/forgotpassword';
import { Login } from './pages/auth/login';
import { Register } from './pages/auth/register';
import SuccessRegister from './pages/auth/successRegister';
import Dashboard from './pages/dashboard';
import Erro404 from './pages/errors/404';
import DashboardLayout from './pages/layouts/dashboardLayout';
import LoginSocialSuccess from './pages/loginSocialSuccess';
import ProtectedRoutes from './pages/protectedRoutes';
import Resultados from './pages/resultados';
import { RootState } from './store';
import { logout } from './store/dashboardSlice';

const AppRoutes = () => {
  const isAuthenticate = useSelector((state: RootState) => state.dashboard.isAuthenticate)
  const dispatch = useDispatch();

  useEffect(() => { }, [isAuthenticate]);


  return (
    <div className="w-full h-screen">
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/loginsocialsuccess' element={<LoginSocialSuccess />} />
        <Route path='/auth/register' element={<Register />} />
        <Route path='/auth/changepassword' element={<ChangePassword />} />
        <Route path='/auth/successregister' element={<SuccessRegister />} />
        <Route path='/auth/changepasswordsuccess' element={<ChangePasswordSuccess />} />
        <Route path='/auth/forgotpassword' element={<ForgotPassword />} />

        <Route path='/404' element={<Erro404 />} />

        <Route element={<ProtectedRoutes />}>
          <Route element={<DashboardLayout />}>
            <Route path='/resultados' element={<Resultados />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
