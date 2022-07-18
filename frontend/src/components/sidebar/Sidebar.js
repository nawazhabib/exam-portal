import { FiBook, FiHome } from "react-icons/fi";
import { useLocation, useParams } from "react-router-dom";
import { USER } from "../../routes";
import SidebarLink from "./SidebarLink";
const Sidebar = () => {
    const { pathname } = useLocation();
    let { title } = useParams();
    return (
        <div className=" bg-gray-50 pt-3 rounded-md px-4 h-full w-full border-r-2 border-r-gray-200">
            <SidebarLink
                path={USER}
                name="Dashboard"
                icon={FiHome}
                active={pathname === USER}
            />
            <SidebarLink
                path="/user/attempt"
                name="Attempt"
                active={pathname === "/user/attempt"}
                icon={FiBook}
            />
            <SidebarLink
                path="/user/all"
                name="All Quiz"
                icon={FiHome}
                active={pathname === `/user/${title}`}
            />
        </div>
    );
};

export default Sidebar;
