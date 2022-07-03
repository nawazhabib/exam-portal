import Container from "../../components/container/Container";
import Sidebar from "../../components/sidebar/Sidebar";

const UserDashboard = () => {
    return (
        <Container className="py-0 ">
            <div className="flex  h-full">
                <div className="h-full">
                    <Sidebar />
                </div>

                <div>
                    <h1>All User Activity goes here</h1>
                </div>
            </div>
        </Container>
    );
};

export default UserDashboard;
