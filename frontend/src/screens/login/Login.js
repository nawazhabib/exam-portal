import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PrimaryBtn from "../../components/button/PrimaryBtn";
import Container from "../../components/container/Container";
import Form from "../../components/form/Form";
import InputComponent from "../../components/input/Input";
import Message from "../../components/message/Message";
import { loginData } from "../../constants/constants";
import { passRegEX } from "../../constants/regExContast";
import { useAuthContext } from "../../context/AuthContext";
import { UPDATE_USER } from "../../context/constants";
import auth from "../../request/auth";
import request from "../../request/request";
import {
    ERR_MSG,
    LOGIN_LABEL,
    REGESTRATION_ENDPOINT,
    SIGNUP,
    SIGNUP_LABEL,
    SUCCESS_MSG,
    TOKEN_ENDPOINT,
    USER,
} from "../../routes/routes";
const { img, link, btn, title, desc } = loginData;

const validate = (values) => {
    const errors = {};

    if (!values.username) {
        errors.username = "Username name is required!";
    } else if (values.username.length < 4 || values.username.length > 16) {
        errors.username = "Username must be in 4-16 characters!";
    }

    if (!values.password) {
        errors.password = "Password is required!";
    } else if (!passRegEX.test(values.password)) {
        errors.password = "Password should be min 6 char";
    }

    return errors;
};

const Login = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useAuthContext();
    const location = useLocation();
    const from = location?.state?.search?.pathname || USER;
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [formError, setFormError] = useState({
        username: "",
        password: "",
    });

    const handleChangeField = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = async () => {
        const getValidFormData = validate(formData);
        setFormError(getValidFormData);
        console.log(formData, "formData");
        if (Object.keys(getValidFormData).length === 0) {
            setLoading(true);
            setMessage("");
            setError(false);
            try {
                const response = await auth.login({
                    endpoint: TOKEN_ENDPOINT,
                    body: formData,
                });
                const endpoint = REGESTRATION_ENDPOINT + formData.username;
                const portfolioRes = await request.authGet({ endpoint });
                dispatch({ type: UPDATE_USER, payload: portfolioRes });
                setLoading(false);
                setMessage(SUCCESS_MSG);
                setError(false);
                navigate(from, { state: true });
            } catch (err) {
                console.log(err);
                setMessage(typeof err === "string" ? err : ERR_MSG);
                setError(true);
                setLoading(false);
            }
        }
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
                                        placeholder="Enter username"
                                        label={"Username"}
                                        error={formError.username}
                                        value={formData.username}
                                        name="username"
                                        onChange={handleChangeField}
                                    />
                                    <InputComponent
                                        placeholder="Password"
                                        label="Password"
                                        error={formError.password}
                                        value={formData.password}
                                        name="password"
                                        onChange={handleChangeField}
                                    />
                                    <PrimaryBtn
                                        onClick={handleLogin}
                                        title={btn}
                                        className=" w-full "
                                        loading={loading}
                                    />
                                    {message && (
                                        <Message error={error}>
                                            {message}
                                        </Message>
                                    )}
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
