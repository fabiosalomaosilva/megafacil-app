import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { logout } from "../../store/dashboardSlice";

export default function Resultados() {
    const isAuthenticate = useSelector((state: RootState) => state.dashboard.isAuthenticate)
    const user = useSelector((state: RootState) => state.dashboard.user)
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <div>
            <h1>Página de resultados</h1>
            <br />
            <br />
            <h1>{user.email}</h1>
            <button onClick={handleLogout}>Sair</button>
        </div>
    )
}

