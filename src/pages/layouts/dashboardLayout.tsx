import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

export default function DashboardLayout() {
    return (
        <div className="flex flex-row h-screen w-full">
            <Sidebar />
            <div className="flex flex-col w-full">
                <Header />
                <div className="p-5">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}