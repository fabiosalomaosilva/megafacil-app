import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { logout } from "../../store/dashboardSlice";

export default function Dashboard() {
    const isAuthenticate = useSelector((state: RootState) => state.dashboard.isAuthenticate)
    const user = useSelector((state: RootState) => state.dashboard.user)
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <div className="fixed left-1 sm:absolute sm:left-auto">
            <h1>Página de Dashboard</h1>
            <br />
            <br />
            <h1>{user.email}</h1>
            <button onClick={handleLogout}>Sair</button>
        </div>
    )
}

