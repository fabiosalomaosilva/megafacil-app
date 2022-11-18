import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import { RootState } from "../../store";

export default function DashboardLayout() {
  const dashboard = useSelector((state: RootState) => state.dashboard)

  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <div className="flex flex-row h-full w-full">
        <div className="fixed h-full">
          <Sidebar />
        </div>
        <div className="md:ml-[220px] mt-[60px] bg-bgLogin w-full px-8 py-2">
          <Outlet />
        </div>

      </div>
    </div>
  )
}
