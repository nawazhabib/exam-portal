import { Outlet } from "react-router-dom";
import Container from "../../components/container/Container";
import SideMenu from "../../components/side-drawer/SideMenu";
import AdminSideBarLinks from "../../components/sidebar/AdminSideBarLinks";
import Sidebar from "../../components/sidebar/Sidebar";

const AdminDashboard = () => {
    return (
        <Container className="pt-4 h-full">
            <div className=" sm:flex  min-h-90">
                <SideMenu component={AdminSideBarLinks} />

                <div className=" hidden  sm:flex  min-h-90 w-auto">
                    <Sidebar component={AdminSideBarLinks} />
                </div>

                <div className=" sm:ml-5 px-4 py-5 bg-gray-50 border-2 border-gray-200 w-full ">
                    <Outlet />
                </div>
            </div>
        </Container>
    );
};

export default AdminDashboard;
