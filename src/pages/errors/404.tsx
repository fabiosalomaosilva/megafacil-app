import logo from '../../assets/logo-hor.png';
export default function Erro404() {
    return (
        <div className="w-full h-screen bg-gray-800 flex items-center justify-center">
            <p className="text-center mb-8">
                <img src={logo} width="250" height="80" />
            </p>

            <h1 className="text-white text-2xl">404 | Página não encontrada</h1>
        </div>
    );
}