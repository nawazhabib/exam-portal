import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../../components/button/PrimaryBtn";
import Container from "../../components/container/Container";
import Form from "../../components/form/Form";
import InputComponent from "../../components/input/Input";
import { loginData } from "../../constants/constants";
import { useAuthContext } from "../../context/AuthContext";
import { LOGIN_LABEL, SIGNUP, SIGNUP_LABEL, USER } from "../../routes/routes";
const { img, link, btn, title, desc } = loginData;
const Login = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useAuthContext();

    const handleLogin = () => {
        // Handle login
        navigate(USER);
    };
    return (
        <>
            <Container className="grid place-items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2  md:gap-4  place-items-start lg:place-items-center">
                    <div className="mb-9 lg:mb-0">
                        <img src={img} alt="home_banner" />
                    </div>

                    <div>
                        <h1 className="text-6xl text-purple-50 font-extrabold mb-6 lg:mb-4">
                            {title}
                        </h1>
                        <p className="text-base text-gray-500">{desc}</p>
                        <div className="flex justify-center">
                            <div className="max-w-min mt-xl ">
                                <Form
                                    title="Dont have account?"
                                    to={SIGNUP}
                                    label={SIGNUP_LABEL}
                                    head={LOGIN_LABEL}
                                >
                                    <InputComponent
                                        placeholder="User Name"
                                        label={"Enter unique username"}
                                        error=""
                                        onChange={(e) => null}
                                    />
                                    <InputComponent
                                        placeholder="Password"
                                        label="Password"
                                        error=""
                                        onChange={(e) => null}
                                    />
                                    <PrimaryBtn
                                        onClick={handleLogin}
                                        title={btn}
                                        className=" w-full "
                                    />
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Login;
