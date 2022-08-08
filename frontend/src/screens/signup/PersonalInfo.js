import React from "react";
import PrimaryBtn from "../../components/button/PrimaryBtn";
import InputComponent from "../../components/input/Input";

const PersonalInfo = ({ formData, onChange, formError, onClick }) => {
    return (
        <div>
            <InputComponent
                placeholder="First Name"
                label="Frist Name"
                value={formData.firstName}
                error={formError.firstName}
                onChange={onChange}
                name="firstName"
            />
            <InputComponent
                placeholder="Last Name"
                label="Last Name"
                value={formData.lastName}
                error={formError.lastName}
                onChange={onChange}
                name="lastName"
            />

            <InputComponent
                placeholder="Phone no."
                label="Enter phon no"
                value={formData.phone}
                error={formError.phone}
                onChange={onChange}
                name="phone"
            />
            <PrimaryBtn onClick={onClick} title="Next" className="  w-full" />
        </div>
    );
};

export default PersonalInfo;
