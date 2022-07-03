import { FiBook, FiHome } from "react-icons/fi";
import { USER } from "../../routes";
import SidebarLink from "./SidebarLink";
const Sidebar = () => {
    return (
        <div className=" bg-white p-4 h-full w-full border-r-2 border-gray-300">
            <SidebarLink
                path={USER}
                name="Dashboard"
                icon={FiHome}
                active={true}
            />
            <SidebarLink
                path={USER}
                name="Quizes"
                active={true}
                icon={FiBook}
            />
        </div>
    );
};

export default Sidebar;
