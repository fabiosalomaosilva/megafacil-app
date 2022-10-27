import { useSelector, useDispatch } from 'react-redux';
import logo from '../../assets/logo-hor.png';
import icone from '../../assets/logo.png';
import { RootState } from '../../store';
import { setToggleSideBar } from '../../store/dashboardSlice';
import { MdMenu } from "react-icons/md";

export interface HeaderProps {
    children?: React.ReactNode;
}

export default function Header(props: HeaderProps) {
    const dispatch = useDispatch();
    return (
        <div className="sticky z-10 top-0 h-16 border-b bg-white py-2 w-full">
            <div className="px-3 flex flex-row items-center md:justify-between space-x-4 2xl:container">
                <button className="p-2 rounded-lg h-12 w-12 hover:bg-slate-100 active:bg-slate-200 transition-all ease-in-out" onClick={() => dispatch(setToggleSideBar())}>
                    <MdMenu className="h-8 w-8" />
                </button>
                <img src={logo} width="130" className="md:hidden sm:hidden flex" />
                <img src={icone} width="40" className="rounded-t-full md:flex sm:flex hidden" />

                {props.children}
            </div>
        </div>
    );
}
