import { useSelector } from 'react-redux';
import logo from '../../assets/logo-branco-hor.png';
import logoBranco from '../../assets/logo-branco.png';
import { RootState } from '../../store';


export interface SidebarLayoutProps {
  children?: React.ReactNode;
}

export default function Sidebar(props: SidebarLayoutProps) {
  const dashboard = useSelector((state: RootState) => state.dashboard)

  return (
    <div className={`top-0 right-0 h-full bg-primary flex flex-row items-left ease-in-out duration-300 ${dashboard.toggleSideBar
      ? "min-w-[250px] max-w-[250px] z-10"
      : "min-w-[1px] max-w-[1px] sm:min-w-[70px] sm:max-w-[70px] z-0"
      }`}
    >
      <div className="h-16 w-full bg-teal-600 flex justify-center items-center">
        {dashboard.toggleSideBar ?
          (<img src={logo} className="sm:flexhidden sm:object-contain sm:w-[145px] ease-in-out duration-300" />) :
          (<img src={logoBranco} className="sm:flex hidden sm:object-contain sm:w-[60px] sm:h-[60px] ease-in-out duration-300" />)
        }
      </div>
    </div>
  );
}
