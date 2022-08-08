import React, { useState } from "react";
import PrimaryBtn from "../../components/button/PrimaryBtn";
import Container from "../../components/container/Container";
import InputComponent from "../../components/input/Input";
import Message from "../../components/message/Message";
import { passRegEX, phoneRegEx } from "../../constants/regExContast";
import { useAuthContext } from "../../context/AuthContext";
import { UPDATE_USER } from "../../context/constants";
import request from "../../request/request";
import { USER } from "../../routes/routes";

const validate = (values) => {
    const errors = {};

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

    if (values.password && !passRegEX.test(values.password)) {
        errors.password = "Password should be min 6 characters!";
    }

    return errors;
};

const Profile = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const { state, dispatch } = useAuthContext();
    const { username, email, firstName, lastName, phone } = state.user;
    const [formData, setFormData] = useState({
        username: username,
        email: email,
        password: "",
        firstName: firstName,
        lastName: lastName,
        phone: phone,
    });
    const [formError, setFormError] = useState({
        username: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phone: "",
    });

    const handleChangeField = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
    };
    const handleUpdate = () => {
        const getValidData = validate(formData);
        setFormError(getValidData);
        if (Object.keys(getValidData).length === 0) {
            setError(false);
            setLoading(true);
            setMessage("");
            let body = {
                username: formData.username,
                email: formData.email,
                firstName: formData.firstName,
                lastName: formData.lastName,
                phone: formData.phone,
            };
            if (formData.password !== "") body.password = formData.password;

            request
                .authPut({ endpoint: `${USER}/${state.user.id}`, body })
                .then((res) => {
                    console.log(res, "res");
                    console.log(typeof res);
                    setError(false);
                    setLoading(false);
                    console.log(Object.keys(res));
                    if (
                        typeof res === "object" &&
                        Object.keys(res).length < 4
                    ) {
                        throw Object.values(res).toString();
                    } else {
                        setError(false);
                        setLoading(false);
                        setMessage("Profile update success!");
                        dispatch({ type: UPDATE_USER, payload: res });
                        setFormData({ ...formData, password: "" });
                    }
                })
                .catch((err) => {
                    setError(true);
                    setLoading(false);
                    setMessage(err);
                    console.log(err);
                });
        }
    };

    return (
        <Container>
            <div className="container mx-auto bg-white p-3 sm:p-10 rounded-md drop-shadow-lg ">
                <div className="grid gap-4 sm:grid-cols-2 ">
                    <InputComponent
                        placeholder="Username"
                        label="Username"
                        onChange={handleChangeField}
                        required
                        name="username"
                        value={formData.username}
                        error={formError.username}
                        className="w-full  text-gray-400"
                        readOnly
                        disabled
                    />

                    <InputComponent
                        placeholder="First Name"
                        label="Frist Name"
                        value={formData.firstName}
                        error={formError.firstName}
                        onChange={handleChangeField}
                        name="firstName"
                        className="w-full"
                    />
                    <InputComponent
                        placeholder="Last Name"
                        label="Last Name"
                        value={formData.lastName}
                        error={formError.lastName}
                        onChange={handleChangeField}
                        name="lastName"
                        className="w-full"
                    />
                    <InputComponent
                        placeholder="Enter email"
                        label="Email"
                        value={formData.email}
                        error={formError.email}
                        onChange={handleChangeField}
                        name="email"
                        className="w-full  text-gray-400"
                        readOnly
                        disabled
                    />
                    <InputComponent
                        placeholder="Phone no."
                        label="Enter phon no"
                        value={formData.phone}
                        error={formError.phone}
                        onChange={handleChangeField}
                        name="phone"
                        className="w-full"
                    />

                    <InputComponent
                        placeholder="Password"
                        label="Password"
                        value={formData.password}
                        error={formError.password}
                        onChange={handleChangeField}
                        name="password"
                        className="w-full"
                    />
                    <div className="flex items-center">
                        <PrimaryBtn
                            onClick={handleUpdate}
                            title="Update"
                            bg="bg-green-500"
                            loading={loading}
                            disabled={loading}
                            className="w-full "
                        />
                    </div>
                    {message && <Message error={error}>{message}</Message>}
                </div>
            </div>
        </Container>
    );
};

export default Profile;
