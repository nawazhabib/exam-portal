import { useState } from "react";
import forget from "../../assets/images/reset.svg";
import PrimaryBtn from "../../components/button/PrimaryBtn";
import Container from "../../components/container/Container";
import Form from "../../components/form/Form";
import InputComponent from "../../components/input/Input";
import Message from "../../components/message/Message";
import { emailRegEx } from "../../constants/regExContast";
import {
    BASE_URL,
    ERR_MSG,
    FORGET_PASSWORD_ENDPOINT,
    SIGNUP,
    SIGNUP_LABEL,
} from "../../routes/routes";

const validate = (values) => {
    const errors = {};

    if (!values.email) {
        errors.email = "Email is required!";
    } else if (!emailRegEx.test(values.email.toLowerCase())) {
        errors.email = "Enter a valid email!";
    }

    return errors;
};

const ForgetPassword = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
    });
    const [formError, setFormError] = useState({
        email: "",
    });

    const handleChangeField = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
    };

    const handleForgetPassword = async () => {
        const getValidFormData = validate(formData);
        setFormError(getValidFormData);
        console.log(formData, "formData");
        if (Object.keys(getValidFormData).length === 0) {
            setLoading(true);
            setMessage("");
            setError(false);
            let formValues = new FormData();
            formValues.append("email", formData.email);
            try {
                const response = await fetch(
                    `${BASE_URL}${FORGET_PASSWORD_ENDPOINT}`,
                    {
                        method: "POST",
                        body: formValues,
                    }
                );
                console.log(response);
                const res = await response.text();
                setFormData({ ...formData, email: "" });

                setLoading(false);
                setMessage(res);
                setError(false);
            } catch (err) {
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
                    <div className="mb-9 lg:mb-0 w-full">
                        <img src={forget} alt="home_banner" />
                    </div>

                    <div>
                        <div className="flex justify-center w-full">
                            <div className="max-w-min mt-xl ">
                                <form action="">
                                    <Form
                                        title="Dont have account?"
                                        to={SIGNUP}
                                        label={SIGNUP_LABEL}
                                        head="Forget Password"
                                    >
                                        <InputComponent
                                            placeholder="email"
                                            label="Eamail"
                                            value={formData.email}
                                            error={formError.email}
                                            onChange={handleChangeField}
                                            name="email"
                                        />

                                        <PrimaryBtn
                                            onClick={handleForgetPassword}
                                            title="Send Reset Link"
                                            className=" w-full "
                                            loading={loading}
                                        />
                                        {message && (
                                            <Message error={error}>
                                                {message}
                                            </Message>
                                        )}
                                    </Form>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ForgetPassword;
