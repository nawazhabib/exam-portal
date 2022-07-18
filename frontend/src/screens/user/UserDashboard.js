import { Outlet } from "react-router-dom";
import Container from "../../components/container/Container";
import Sidebar from "../../components/sidebar/Sidebar";

const UserDashboard = () => {
    return (
        <Container className="pt-4 h-full">
            <div className="  sm:flex  min-h-90">
                <div className=" hidden  sm:flex  min-h-90">
                    <Sidebar />
                </div>

                <div className=" ml-5 px-4 py-5 bg-gray-50 border-2 border-gray-200 w-full ">
                    <Outlet />
                </div>
            </div>
        </Container>
    );
};

export default UserDashboard;
