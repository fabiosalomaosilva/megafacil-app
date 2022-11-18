import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import { RootState } from "../../store";

export default function DashboardOldLayout() {
  const dashboard = useSelector((state: RootState) => state.dashboard)

  return (
    <div className="flex flex-col h-screen w-full relative">
      <Header />
      <div className="flex flex-row h-full w-full ">
        <div className={`top-16 right-0 left-0 bg-primary fixed flex flex-col items-left h-full ease-in-out duration-300 ${dashboard.toggleSideBar
          ? "min-w-[250px] max-w-[250px]"
          : "min-w-[1px] max-w-[1px] sm:min-w-[70px] sm:max-w-[70px]"
          }`}
        >
          <Sidebar />
        </div>
        <div className={`flex flex-col z-0 m-16 w-full  relative ease-in-out duration-300 ${dashboard.toggleSideBar ? 'left-48' : 'left-3'}`}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
