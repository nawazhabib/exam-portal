import { FiBook, FiHome } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { USER } from "../../routes/routes";
import QuizCategoryLinks from "./QuizCategoryLinks";
import SidebarLink from "./SidebarLink";
const UserSidebarLinks = () => {
    const { pathname } = useLocation();
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
                active={pathname === `/user/all`}
            />
            <QuizCategoryLinks />
        </>
    );
};

export default UserSidebarLinks;
