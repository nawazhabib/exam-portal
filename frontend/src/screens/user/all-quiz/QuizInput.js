import React from "react";

const QuizInput = ({ id, onChnage, label, ...rest }) => {
    return (
        <label htmlFor={id} className="flex items-center mb-2 text-gray-700">
            <input
                onChange={onChnage}
                type="radio"
                className="m-0 p-0 mr-2 "
                id={id}
                {...rest}
            />{" "}
            {label}
        </label>
    );
};

export default QuizInput;
