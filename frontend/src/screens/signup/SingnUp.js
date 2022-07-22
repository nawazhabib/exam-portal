import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../../components/button/PrimaryBtn";
import Container from "../../components/container/Container";
import Form from "../../components/form/Form";
import InputComponent from "../../components/input/Input";
import Message from "../../components/message/Message";
import { signupData } from "../../constants/constants";
import {
    emailRegEx,
    passRegEX,
    phoneRegEx,
} from "../../constants/regExContast";
import request from "../../request/request";
import {
    ERR_MSG,
    LOGIN,
    LOGIN_LABEL,
    REGESTRATION_ENDPOINT,
    SIGNUP_LABEL,
} from "../../routes/routes";

const validate = (values) => {
    const errors = {};
    if (!values.email) {
        errors.email = "Email is required!";
    } else if (!emailRegEx.test(values.email.toLowerCase())) {
        errors.email = "Enter a valid email!";
    }
    if (!values.phone) {
        errors.phone = "Phone No. is required!";
    } else if (!phoneRegEx.test(values.phone)) {
        errors.phone = "Enter a valid phone number!";
    }
    if (!values.username) {
        errors.username = "Username name is required!";
    } else if (values.username.length < 4 || values.username.length > 16) {
        errors.username = "Username must be in 4-16 characters!";
    }
    if (!values.firstName) {
        errors.firstName = "First name is required!";
    } else if (values.firstName.length < 4 || values.firstName.length > 16) {
        errors.firstName = "First name must be in 4-16 characters!";
    }
    if (!values.lastName) {
        errors.lastName = "Last name is required!";
    } else if (values.lastName.length < 4 || values.lastName.length > 16) {
        errors.lastName = "Last name must be 4-16 characters!";
    }
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

const SignUp = () => {
    const navigate = useNavigate();
    const { img, title, desc, link, btn } = signupData;
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        phone: "",
    });
    const [formError, setFormError] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        phone: "",
    });

    const handleChangeField = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
    };

    const handleSignin = () => {
        const getValidFormData = validate(formData);
        setFormError(getValidFormData);
        if (Object.keys(getValidFormData).length === 0) {
            setLoading(true);
            setMessage("");
            setError(false);
            request
                .post({ endpoint: REGESTRATION_ENDPOINT, body: formData })
                .then((data) => {
                    setLoading(false);
                    setMessage("Registration Success!");
                    setError(false);
                    const temp = {
                        username: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                        firstName: "",
                        lastName: "",
                        phone: "",
                    };
                    setFormData(temp);
                    navigate(LOGIN);
                })
                .catch((err) => {
                    setError(true);
                    setLoading(false);
                    setMessage(typeof err === "string" ? err : ERR_MSG);
                });
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
                        <h1 className="text-2xl sm:text-3xl md:text-6xl text-purple-50 font-extrabold mb-6 lg:mb-4">
                            {title}
                        </h1>
                        <p className="text-base text-gray-500">{desc}</p>
                        <div className="flex justify-center">
                            <div className="max-w-min mt-xl ">
                                <Form
                                    title="Already have account?"
                                    to={LOGIN}
                                    label={LOGIN_LABEL}
                                    head={SIGNUP_LABEL}
                                >
                                    <InputComponent
                                        placeholder="Username"
                                        label="Username"
                                        onChange={handleChangeField}
                                        required
                                        name="username"
                                        value={formData.username}
                                        error={formError.username}
                                    />

                                    <InputComponent
                                        placeholder="First Name"
                                        label="Frist Name"
                                        value={formData.firstName}
                                        error={formError.firstName}
                                        onChange={handleChangeField}
                                        name="firstName"
                                    />
                                    <InputComponent
                                        placeholder="Last Name"
                                        label="Last Name"
                                        value={formData.lastName}
                                        error={formError.lastName}
                                        onChange={handleChangeField}
                                        name="lastName"
                                    />
                                    <InputComponent
                                        placeholder="Enter email"
                                        label="Email"
                                        value={formData.email}
                                        error={formError.email}
                                        onChange={handleChangeField}
                                        name="email"
                                    />
                                    <InputComponent
                                        placeholder="Phone no."
                                        label="Enter phon no"
                                        value={formData.phone}
                                        error={formError.phone}
                                        onChange={handleChangeField}
                                        name="phone"
                                    />

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
                                        onClick={handleSignin}
                                        title={btn}
                                        className="  w-full"
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

export default SignUp;
