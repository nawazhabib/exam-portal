import { useState } from "react";
import Container from "../../components/container/Container";
import Form from "../../components/form/Form";
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
import PersonalInfo from "./PersonalInfo";
import SignupInfo from "./SignupInfo";

const validatePersonal = (values) => {
    const errors = {};
    if (!values.phone) {
        errors.phone = "Phone No. is required!";
    } else if (!phoneRegEx.test(values.phone)) {
        errors.phone = "Enter a valid phone number!";
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
    return errors;
};

const validate = (values) => {
    const errors = {};
    if (!values.email) {
        errors.email = "Email is required!";
    } else if (!emailRegEx.test(values.email.toLowerCase())) {
        errors.email = "Enter a valid email!";
    }

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
    const { img, title, desc, btn } = signupData;
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [isVerify, setIsVerify] = useState("");

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
            setIsVerify(false);
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
                    setIsVerify(true);
                })
                .catch((err) => {
                    setError(true);
                    setLoading(false);
                    setMessage(typeof err === "string" ? err : ERR_MSG);
                    setIsVerify(false);
                });
        }
    };
    const [step, setStep] = useState(1);
    const handleValidatePersonalInfo = () => {
        const values = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.phone,
        };
        const getValidFormData = validatePersonal(values);
        setFormError(getValidFormData);
        if (Object.keys(getValidFormData).length === 0) {
            setStep(step + 1);
        }
    };

    return (
        <>
            <Container className="grid place-items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2  md:gap-4  place-items-start lg:place-items-center">
                    <div className="hidden lg:block  mb-9 lg:mb-0">
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
                                    {step === 1 ? (
                                        <PersonalInfo
                                            formData={formData}
                                            formError={formError}
                                            onChange={handleChangeField}
                                            onClick={handleValidatePersonalInfo}
                                        />
                                    ) : (
                                        <SignupInfo
                                            formData={formData}
                                            formError={formError}
                                            onChange={handleChangeField}
                                            onBack={() => setStep(step - 1)}
                                            onClick={handleSignin}
                                            loading={loading}
                                        />
                                    )}

                                    {error && (
                                        <Message error={error}>
                                            {message}
                                        </Message>
                                    )}
                                    {isVerify && (
                                        <Message>
                                            A code has been sent to your email.
                                            Please verify and login
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
