import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import resetImg from "../../assets/images/login.svg";
import PrimaryBtn from "../../components/button/PrimaryBtn";
import Container from "../../components/container/Container";
import Form from "../../components/form/Form";
import InputComponent from "../../components/input/Input";
import Message from "../../components/message/Message";
import { passRegEX } from "../../constants/regExContast";
import { useAuthContext } from "../../context/AuthContext";
import { SHOW_TOAST } from "../../context/constants";
import {
    BASE_URL,
    ERR_MSG,
    RESET_PASSWORD,
    SIGNUP,
    SIGNUP_LABEL,
} from "../../routes/routes";

const validate = (values) => {
    const errors = {};

    if (!values.password) {
        errors.password = "Password is required!";
    } else if (!passRegEX.test(values.password)) {
        errors.password = "Password should be min 6 char";
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = "Confirm password is required!";
    } else if (
        values.confirmPassword &&
        values.confirmPassword !== values.password
    ) {
        errors.confirmPassword = "Password doesn't matched!";
    }

    return errors;
};

const ResetPassword = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useAuthContext();
    const location = useLocation();
    const token = Object.fromEntries(new URLSearchParams(location.search))[
        "token"
    ];
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

    if (token && token === "") navigate("*");

    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });
    const [formError, setFormError] = useState({
        confirmPassword: "",
        password: "",
    });

    const handleChangeField = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
    };

    const handleResetPassword = async () => {
        const getValidFormData = validate(formData);
        setFormError(getValidFormData);
        console.log(formData, "formData");
        let formValues = new FormData();
        formValues.append("password", formData.password);
        if (Object.keys(getValidFormData).length === 0) {
            setLoading(true);
            setMessage("");
            setError(false);

            try {
                const response = await fetch(
                    `${BASE_URL}${RESET_PASSWORD}?token=${token}`,
                    {
                        method: "POST",
                        body: formValues,
                    }
                );
                console.log(response);
                const res = await response.text();
                console.log(res, "REs");
                if (res === "Invalid Token") {
                    setError(true);
                    setMessage("");
                    throw res;
                } else {
                    setMessage("Password has been updated");
                    setError(false);
                    dispatch({
                        type: SHOW_TOAST,
                        payload: { message: "Password updated. Please Login" },
                    });
                }
                setFormData({ ...formData, password: "", confirmPassword: "" });
                setLoading(false);
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
                    <div className="hidden  lg:block mb-9 lg:mb-0">
                        <img src={resetImg} alt="home_banner" />
                    </div>

                    <div>
                        <div className="flex justify-center">
                            <div className="max-w-min mt-xl ">
                                <Form
                                    title="Dont have account?"
                                    to={SIGNUP}
                                    label={SIGNUP_LABEL}
                                    head="Reset "
                                >
                                    <InputComponent
                                        placeholder="Password"
                                        label="Password"
                                        value={formData.password}
                                        error={formError.password}
                                        onChange={handleChangeField}
                                        name="password"
                                    />
                                    <InputComponent
                                        placeholder="Confirm Password"
                                        label="Confirm Password"
                                        value={formData.confirmPassword}
                                        error={formError.confirmPassword}
                                        onChange={handleChangeField}
                                        name="confirmPassword"
                                    />
                                    <PrimaryBtn
                                        onClick={handleResetPassword}
                                        title="update"
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

export default ResetPassword;
