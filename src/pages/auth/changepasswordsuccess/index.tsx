import logo from '../../../assets/logo-hor.png';

export default function ChangePasswordSuccess() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-bgLogin" >
      <div className="min-w-[20rem] w-[20rem] sm:w-[30rem] rounded-lg shadow-xl flex flex-row relative" >
        <div className="sm:w-[30rem] w-[20rem] bg-white p-10 rounded-lg sm:rounded-r-lg z-50 flex flex-col">
          <img src={logo} width="180" className="mb-4 sm:hidden flex self-center" />
          <div className="flex flex-row justify-between">
            <h1 className="text-white text-2xl">Senha alterada com sucesso!</h1>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
