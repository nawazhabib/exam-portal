import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../../components/button/PrimaryBtn";
import Container from "../../components/container/Container";
import Form from "../../components/form/Form";
import InputComponent from "../../components/input/Input";
import { signupData } from "../../constants/constants";
import { LOGIN, LOGIN_LABEL, SIGNUP_LABEL } from "../../routes/routes";

const SignUp = () => {
    const navigate = useNavigate();
    const { img, title, desc, link, btn } = signupData;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

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
                                    title="Already have account?"
                                    to={LOGIN}
                                    label={LOGIN_LABEL}
                                    head={SIGNUP_LABEL}
                                >
                                    <InputComponent
                                        placeholder="Full Name"
                                        label="Full Name"
                                        error=""
                                        onChange={(e) => null}
                                    />
                                    <InputComponent
                                        placeholder="Enter unique username"
                                        label="User Name"
                                        error=""
                                        onChange={(e) => null}
                                    />
                                    <InputComponent
                                        placeholder="Password"
                                        label="Password"
                                        error=""
                                        onChange={(e) => null}
                                    />
                                    <InputComponent
                                        placeholder="Confirm Password"
                                        label="Confirm Password"
                                        error=""
                                        onChange={(e) => null}
                                    />

                                    <PrimaryBtn
                                        onClick={() => navigate(link)}
                                        title={btn}
                                        className="  w-full"
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

export default SignUp;
