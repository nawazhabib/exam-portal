import { FiBook, FiHome } from "react-icons/fi";
import { useLocation, useParams } from "react-router-dom";
import { USER } from "../../routes/routes";
import SidebarLink from "./SidebarLink";
const UserSidebarLinks = () => {
    const { pathname } = useLocation();
    let { title } = useParams();
    return (
        <>
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
        </>
    );
};

export default UserSidebarLinks;
