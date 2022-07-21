import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import { HOME, HOME_LABEL } from "../../routes/routes";

const NotFound = () => {
    return (
        <Container className="h-90">
            <div className="h-full grid place-items-center">
                <div className="text-center">
                    <h1 className="text-7xl font-extrabold text-red-400">
                        404
                    </h1>
                    <p className="text-gray-400 mt-4">Sorry! page not found</p>
                    <p>
                        Go to{" "}
                        <Link className="text-blue hover:underline" to={HOME}>
                            {HOME_LABEL}
                        </Link>
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default NotFound;
