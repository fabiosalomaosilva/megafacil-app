import logo from '../../../assets/logo-hor.png';
export default function SuccessResendPassword() {
  return (
    <div className="w-full h-screen bg-gray-800 flex items-center justify-center">
      <p className="text-center mb-8">
        <img src={logo} width="250" height="80" />
      </p>
      <br />
      <h2 className="text-white text-2xl">A sua senha !!</h2>
      <h3 className="text-white text-xl">Agora você deve conferir a caixa de entrada do seu e-mail, confirmar o registro e Boa Sorte.</h3>
    </div>
  );
}
