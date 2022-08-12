import React from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import PrimaryBtn from "../../components/button/PrimaryBtn";
import InputComponent from "../../components/input/Input";
const SignupInfo = ({
    formData,
    onChange,
    formError,
    onBack,
    onClick,
    loading,
}) => {
    return (
        <div>
            <div className="my-2">
                <PrimaryBtn
                    onClick={onBack}
                    bg="bg-gray-700"
                    className=" "
                    component={BsFillArrowLeftCircleFill}
                />
            </div>
            <InputComponent
                placeholder="Username"
                label="Username"
                onChange={onChange}
                required
                name="username"
                value={formData.username}
                error={formError.username}
            />

            <InputComponent
                placeholder="Enter email"
                label="Email"
                value={formData.email}
                error={formError.email}
                onChange={onChange}
                name="email"
            />

            <InputComponent
                placeholder="Password"
                label="Password"
                value={formData.password}
                error={formError.password}
                onChange={onChange}
                name="password"
                type="password"
            />
            <InputComponent
                placeholder="Confirm Password"
                label="Confirm Password"
                value={formData.confirmPassword}
                error={formError.confirmPassword}
                onChange={onChange}
                name="confirmPassword"
                type="password"
            />

            <PrimaryBtn
                onClick={onClick}
                title="Signup"
                className="  w-full"
                loading={loading}
            />
        </div>
    );
};

export default SignupInfo;
