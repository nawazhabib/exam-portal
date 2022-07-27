import { Outlet } from "react-router-dom";
import Container from "../../components/container/Container";
import SideMenu from "../../components/side-drawer/SideMenu";
import Sidebar from "../../components/sidebar/Sidebar";
import UserSidebarLinks from "../../components/sidebar/UserSidebarLinks";

const UserDashboard = () => {
    return (
        <Container className="pt-4 h-full">
            <SideMenu component={UserSidebarLinks} />
            <div className="  sm:flex  min-h-90">
                <div className=" hidden  sm:flex  min-h-90">
                    <Sidebar component={UserSidebarLinks} />
                </div>

                <div className=" ml-0 sm:ml-5 px-4 py-5 bg-gray-50 border-2 border-gray-200 w-full ">
                    <Outlet />
                </div>
            </div>
        </Container>
    );
};

export default UserDashboard;
